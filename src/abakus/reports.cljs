(ns abakus.reports
  (:require [abakus.analyzer :as anal]
            [abakus.rn :as rn]))


(def base-prop {:purchase-price 140000 :hoa 271 :rehab 2000})

(def cfs [1200 1400 1600 1800 2000 2200])

(def evals (reduce #(conj %1 (anal/recompute (assoc base-prop :rent-per-unit %2))) [] cfs))

(def line (clj->js {:labels (map str cfs)
                    :datasets [{:data (map :cash-flow-per-unit evals)
                                :strokeWidth 2}]}))

(defn report
  []
  [rn/view {:flex 3 :style {:margin-top 50}}
   [rn/text "Cash flow per unit"]
   [rn/line-chart {:data line :width 300 :height 300
                   :chartConfig {:color (fn [o] "rgba(255,255,255,1)")
                                 :backgroundColor "#e26a00"
                                 :backgroundGradientFrom "#fb8c00"
                                 :backgroundGradientTo "#ffa726"
                                 :decimalPlaces 0}}]])
