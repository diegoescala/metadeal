(ns abakus.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [oops.core :refer [ocall]]
              ; [clojure.tools.reader.edn :as edn]
              [abakus.rn :as rn]
              [abakus.handlers]
              [abakus.subs]
              [abakus.edit-prop :as edit-prop]
              [abakus.styles :as styles]
              [abakus.reports :as reports]
              [abakus.navbar :as nav]
              [abakus.list-props :as props]
              [cljs.reader :refer [read-string]]
              [abakus.comms :as comms]))

   ; [reports/report]
   ; [edit-prop/edit-prop {}])

(defn app-root []
  (do
    (.setItem rn/storage "testkey" "keytest")
    ; (-> (.getItem rn/storage "props") (.then #(println (str "Val: " %))))
    [rn/view {:style styles/app-main}
     [rn/view {:style {:flex 5}}
      ; [nav/navbar]
      @(subscribe [:current-page])]
     [rn/view ;{:style {:flex 1}}
       [nav/navbar]]]))

(defn load-props
  []
  (-> (.getItem rn/storage "props") (.then #(dispatch [:set-properties (filter (fn [p] (some? (:purchase-price p)))
                                                                               (read-string %))]))))

(defn set-app-uid
  [uid]
  (do
    ; (println (str "Setting app UID to " uid))
    (dispatch [:set-uid uid])))

(defn load-or-acquire-uid
  []
  (-> (.getItem rn/storage "uid") (.then #(if (some? %)
                                              (set-app-uid %)
                                              (comms/get-new-uid (fn [uid]
                                                                  (do
                                                                   ; (println "No UID found. Acquiring...")
                                                                   (.setItem rn/storage "uid" uid)
                                                                   (set-app-uid uid))))))))

(defn init []
 (do
  (load-props)
  (dispatch-sync [:initialize-db])
  (nav/init [{:name "Calculate" :icon "md-calculator" :page [edit-prop/edit-prop {}]}
             ; {:name "Report" :page [reports/report]}
             {:name "Properties" :icon "md-home" :page [props/props-list]}
             {:name "Reports" :icon "md-analytics" :page [reports/report]}])
  (dispatch [:set-current-page [edit-prop/edit-prop {}]])
  ; (load-or-acquire-uid)
  (println "Hai")
  (ocall rn/expo "registerRootComponent" (r/reactify-component app-root))))
