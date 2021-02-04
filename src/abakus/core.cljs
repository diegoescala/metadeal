(ns abakus.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [oops.core :refer [ocall]]
              [abakus.rn :as rn]
              [abakus.handlers]
              [abakus.subs]
              [abakus.edit-prop :as edit-prop]
              [abakus.styles :as styles]
              [abakus.reports :as reports]
              [abakus.navbar :as nav]))

   ; [reports/report]
   ; [edit-prop/edit-prop {}])

(defn app-root []
  (do
    (.setItem rn/storage "testkey" "keytest")
    (-> (.getItem rn/storage "testkey") (.then #(println (str "Val: " %))))

    [rn/view {:style styles/app-main}
     ; [nav/navbar]
     @(subscribe [:current-page])]))

(defn init []
  (dispatch-sync [:initialize-db])
  (nav/init [{:name "Calculate" :page [edit-prop/edit-prop {}]}
             {:name "Report" :page [reports/report]}])
  (dispatch [:set-current-page [edit-prop/edit-prop {:purchase-price 6969}]])
  (ocall rn/expo "registerRootComponent" (r/reactify-component app-root)))
