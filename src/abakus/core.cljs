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
              [abakus.list-props :as props]))

   ; [reports/report]
   ; [edit-prop/edit-prop {}])

(defn app-root []
  (do
    (.setItem rn/storage "testkey" "keytest")
    (-> (.getItem rn/storage "props") (.then #(println (str "Val: " %))))

    [rn/view {:style styles/app-main}
     [rn/view {:style {:flex 5}}
      ; [nav/navbar]
      @(subscribe [:current-page])]
     [rn/view ;{:style {:flex 1}}
       [nav/navbar]]]))

(defn load-props
  []
  (-> (.getItem rn/storage "props") (.then #(dispatch [:set-properties (cljs.reader/read-string %)]))))

(defn init []
 (do
  (load-props)
  (dispatch-sync [:initialize-db])
  (nav/init [{:name "Calculate" :page [edit-prop/edit-prop {}]}
             ; {:name "Report" :page [reports/report]}
             {:name "Properties" :page [props/props-list]}])
  (dispatch [:set-current-page [edit-prop/edit-prop {}]])
  (ocall rn/expo "registerRootComponent" (r/reactify-component app-root))))
