(ns abakus.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [oops.core :refer [ocall]]
              [abakus.rn :as rn]
              [abakus.handlers]
              [abakus.subs]
              [abakus.edit-prop :as edit-prop]

              [abakus.analyzer :as anal]))


(def base-prop {:purchase-price 140000 :hoa 271 :rehab 2000})

(def cfs [1200 1400 1600 1800 2000 2200])

(def evals (reduce #(conj %1 (anal/recompute (assoc base-prop :rent-per-unit %2))) [] cfs))

(def line (clj->js {:labels (map str cfs)
                    :datasets [{:data (map :cash-flow-per-unit evals)
                                :strokeWidth 2}]}))

(def show-chart (r/atom true))

(defn app-root []
  (js/console.log line)
  (if @show-chart
    [rn/view {:flex 3 :style {:margin-top 50}}
     [rn/text "Cash flow per unit"]
     [rn/line-chart {:data line :width 300 :height 300
                     :chartConfig {:color (fn [o] "rgba(255,255,255,1)")
                                   :backgroundColor "#e26a00"
                                   :backgroundGradientFrom "#fb8c00"
                                   :backgroundGradientTo "#ffa726"
                                   :decimalPlaces 0}}]]
    [edit-prop/edit-prop {}]))

(defn init []
  (dispatch-sync [:initialize-db])
  (ocall rn/expo "registerRootComponent" (r/reactify-component app-root)))
