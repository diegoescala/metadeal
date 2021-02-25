(ns abakus.comms
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cognitect.transit :as transit]
            [cljs.core.async :refer [<!]]
            [alandipert.storage-atom :refer [local-storage]]
            [re-frame.core :as rf]
            [cljs.reader :as reader]
            [clojure.string :as s]
            [abakus.types :as types]))

; (def url "http://localhost:8080/")
; (def url "https://api.imprezzy.co/")
(def url "http://api.metadealapp.com:8082/")

(defn read-json [data]
  (let [r (transit/reader :json)]
    (transit/read r data)))

(defn write-json [data]
  (let [w (transit/writer :json)]
    (transit/write w data)))

(defn jsonify-map [data-map]
  (->> data-map
       (clj->js)
       (.stringify js/JSON)))

(defn query-api-endpoint
  [method endpoint params handler]
  (go
    (let [full-params (merge {:uid @(rf/subscribe [:uid])} params)]
    ; (let [full-params (merge {} params)]
      (println (str "Making call: " (prn-str [method (str url endpoint) full-params])))
      (let [response (<! (method (str url endpoint) {:form-params full-params}))]
        (println (str "Network response: " (prn-str response)))
        (when (= 401 (:status response))
          (rf/dispatch [:set-logged-in false]))

        (handler response)))))

(defn handle-authentication
  [response]
  (let [login-result
        (case (get response :status)
          200 true
          401 false
          false)]

    (when (= login-result true)
       (let [response-body (read-json (get response :body))
             user (types/->User
                    (get response-body "firstname")
                    (get response-body "lastname")
                    (get response-body "usertype")
                    (get (read-json (:body response)) "token"))]
         (rf/dispatch [:set-user user])))

    (rf/dispatch [:set-logged-in login-result])

    (if (= login-result false)
     (do
      (rf/dispatch [:set-login-errors ["Invalid username or password"]])))))
      ; (rf/dispatch [:set-user types/invalid-user])))))

(defn attempt-login!
  [email password & custom-handler]
  (query-api-endpoint http/post "authenticate"
    {:basic-auth {:username email :password password} :with-credentials? true}
    #(do
      (handle-authentication %)
      (when (not (empty? custom-handler))
        ((first custom-handler))))))

(defn blob
  "Build the file-contents into a Blob and return it
  Optionally set the content-type via a string"
  ([file-parts]
   (js/Blob. (clj->js file-parts) (js-obj "type" "application/octet-stream")))
  ([file-parts content-type-str]
   (js/Blob. (clj->js file-parts) (js-obj "type" content-type-str))))

(defn pre-authenticate!
  []
  (query-api-endpoint http/post "cookieauthenticate" {:with-credentials? true} handle-authentication))

(defn upload-file
  [client file-data handler]
  (query-api-endpoint http/post "file" {:multipart-params {"file" (blob [file-data]) "client" client}}
                      handler))

(defn get-new-uid
  [callback]
  (query-api-endpoint http/get "uid" {}
    #(let [uid (get (->> % :body js/JSON.parse js->clj)
                    "uid")]
       (callback uid))))

(defn update-prop
  [prop]
  (query-api-endpoint http/post "propupdate" {:prop (prn-str prop)} #()))

(defn init
  []
  (rf/reg-cofx
   :authenticate
   (fn [cofx event]
    (let [creds (-> cofx :event second)]
      (attempt-login! (:email creds) (:password creds)))))

  (rf/reg-cofx
   :generate-svg
   (fn [cofx event]
     (query-api-endpoint http/get "svg" {} #(js/console.log (prn-str %)))))

  (rf/reg-cofx
   :upload-file
   (fn [cofx event]
     (let [file-info (-> cofx :event second)]
      (upload-file (:client file-info) (:file file-info) (:handler file-info))))))
