(ns abakus.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [oops.core :refer [ocall]]
              [abakus.rn :as rn]
              [abakus.handlers]
              [abakus.subs]
              [abakus.edit-prop :as edit-prop]))


(def line (clj->js {:labels ["January" "February" "March"]
                    :datasets [{:data [20 45 28]
                                :strokeWidth 2}]}))

(def show-chart (r/atom false))

(defn app-root []
  (js/console.log line)
  (if @show-chart
    [rn/view {:flex 3}
     [rn/line-chart {:data line :width 300 :height 300
                     :chartConfig {:color (fn [o] "#99999999")}}]]
    [edit-prop/edit-prop {}]))

(defn init []
  (dispatch-sync [:initialize-db])
  (ocall rn/expo "registerRootComponent" (r/reactify-component app-root)))
