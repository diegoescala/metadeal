(ns abakus.reports
  (:require [abakus.analyzer :as anal]
            [abakus.rn :as rn]
            [abakus.ads :as ads]
            [abakus.styles :as styles]))

(def base-prop {:purchase-price 140000 :hoa 271 :rehab 2000})

(def cfs [1200 1400 1600 1800 2000 2200])

(def evals (reduce #(conj %1 (anal/recompute (assoc base-prop :rent-per-unit %2))) [] cfs))

(def line (clj->js {:labels (map str cfs)
                    :datasets [{:data (map :cash-flow-per-unit evals)
                                :strokeWidth 2}]}))

(defn report
  []
  [rn/view {:style (merge {:flex 1} styles/app-screen)}
   [rn/view {:style (merge styles/container {:flex-direction :column :flex 1})}
    [rn/view {:style styles/screen-header}
     [rn/view {:style styles/good-deal-container}
      [rn/text {:style styles/screen-title-text}
       "My Properties"]]
     [rn/scroll-view
      [ads/banner]
      [rn/text "Cash flow per unit"]
      [rn/line-chart {:data line :width 300 :height 300
                      :chartConfig {:color (fn [o] "rgba(255,255,255,1)")
                                    :backgroundColor (:dark-purple styles/app-colors)
                                    :backgroundGradientFrom (:dark-purple styles/app-colors)
                                    :backgroundGradientTo (:dark-purple styles/app-colors)
                                    :decimalPlaces 0}}]
      [ads/banner]
      [rn/text "Cash flow per unit"]
      [rn/line-chart {:data line :width 300 :height 300
                      :chartConfig {:color (fn [o] "rgba(255,255,255,1)")
                                    :backgroundColor (:dark-purple styles/app-colors)
                                    :backgroundGradientFrom (:dark-purple styles/app-colors)
                                    :backgroundGradientTo (:dark-purple styles/app-colors)
                                    :decimalPlaces 0}}]]]]])
