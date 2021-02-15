(ns abakus.reports
  (:require [re-frame.core :as rf]
            [abakus.analyzer :as anal]
            [abakus.rn :as rn]
            [abakus.ads :as ads]
            [abakus.styles :as styles]))

(def base-prop {:purchase-price 140000 :hoa 271 :rehab 2000})

(def cfs [1200 1400 1600 1800 2000 2200])

(def evals (reduce #(conj %1 (anal/recompute (assoc base-prop :rent-per-unit %2))) [] cfs))

(def line (clj->js {:labels (map str cfs)
                    :datasets [{:data (map :cash-flow-per-unit evals)
                                :strokeWidth 2}]}))

(defn chart
  [independent-var dependent-var title]
  (let [prop (assoc @(rf/subscribe [:prop-info])
                    independent-var
                    (independent-var (anal/recompute @(rf/subscribe [:prop-info]))))
        steps 4
        span 1.0
        ; points (map #(* (+ 1. (- (/ (float %) (float (dec steps)))
        ;                          (* 0.5 span)))
        ;                 (independent-var prop))
        ;             (range steps))
        points (map #(* (+ 1.0 (- (/ (float %) (float (dec steps)))
                                  (* 0.5 span)))
                        (independent-var prop))
                    (range steps))
        values (reduce #(conj %1 (anal/recompute (assoc prop independent-var %2))) [] points)
        labels (map #(str (int %)) points)
        data (clj->js {:labels labels
                       :datasets [{:data (map dependent-var values)
                                   :strokeWidth 2}]})]
    (println points)
    (println labels)
    [rn/view
     [rn/text {:style styles/chart-title} title]
     [rn/line-chart {:data data :width 300 :height 300
                     :chartConfig {:color (fn [o] "rgba(255,255,255,1)")
                                   :backgroundColor (:dark-purple styles/app-colors)
                                   :backgroundGradientFrom (:dark-purple styles/app-colors)
                                   :backgroundGradientTo (:dark-purple styles/app-colors)
                                   :decimalPlaces 0}}]]))

(defn report
  []
  [rn/view {:style (merge {:flex 1} styles/app-screen)}
   [rn/view {:style (merge styles/container {:flex-direction :column :flex 1})}
    [rn/view {:style styles/screen-header}
     [rn/view {:style styles/good-deal-container}
      [rn/text {:style styles/screen-title-text}
       "My Properties"]]
     [rn/safe-area-view {:style {:flex-direction "column"}}
      [rn/scroll-view {:style styles/container}
       [ads/banner]
       [chart :rent-per-unit :cash-flow-per-unit "Cash flow by rent"]
       [ads/banner]
       [chart :purchase-price :cash-flow-per-unit "Cash flow by purchase price"]
       [rn/view {:style {:min-height 630}}]]]]]])
