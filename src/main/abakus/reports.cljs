(ns abakus.reports
  (:require [re-frame.core :as rf]
            [abakus.analyzer :as anal]
            [abakus.rn :as rn]
            [abakus.ads :as ads]
            [abakus.styles :as styles]
            [abakus.number-utils :as utils]))

(defn number-string? [s]
  (do
    (let [result
          (boolean
            (and (string? s) (re-matches #"^[+-]?\d.*" s)))]
      ; (println (str "Is " s " a number? " result))
      result)))

(defn scrub
  [m]
  (let [empties (filter #(or (not (number-string? (str (get m %))))
                             (empty? (str (get m %))))
                        (keys m))]
    (reduce #(dissoc %1 %2) m empties)))

(defn recompute
  [prop]
  (anal/recompute (scrub prop)))

(defn average
  [& nums]
  (let [c (count nums)
        sum (reduce + nums)]
    (/ sum (float c))))

(defn compute-break-even
  [prop independent-var dependent-var]
  (loop [
         left  -500000000.0
         mid 0
         right  500000000.0
         steps 0]
    (let [results (map #(dependent-var (recompute (assoc prop independent-var %))) [left mid right])]
      ; (println (prn-str [left mid right results]))
      (if (or (< 30 steps) (> 0.01 (Math/abs (second results))))
        mid
        (if (or (<= (nth results 0) 0 (nth results 1))
                (<= (nth results 1) 0 (nth results 0)))
          (recur left (average left mid) mid (inc steps))
          (recur mid (average mid right) right (inc steps)))))))

(defn chart
  [independent-var dependent-var title & opts]
  (let [options (into #{} opts)
        prop (assoc @(rf/subscribe [:prop-info])
                    independent-var
                    (independent-var (recompute @(rf/subscribe [:prop-info]))))
        steps 5
        span 1.0
        current-val (if (contains? options :show-break-even)
                        (compute-break-even prop independent-var dependent-var)
                        (independent-var prop))
        points (map #(* (+ 1.0 (- (/ (float %) (float (dec steps)))
                                  (* 0.5 span)))
                        current-val)
                    (range steps))
        values (reduce #(conj %1 (recompute (assoc prop independent-var %2))) [] points)
        labels (map #(utils/localize (int %)) points)
        data (clj->js {:labels labels
                       :datasets [{:data (cond->> (map dependent-var values)
                                            (contains? options :percent) (map #(* 100.0 %)))
                                   :strokeWidth 2}]})]
    (println points)
    (println labels)
    (println "Options: " (prn-str options))
    (println "Opts: " (prn-str opts))
    (println "Data: " (prn-str data))
    [rn/view
     [rn/text {:style styles/chart-title} title]
     [rn/line-chart {:style {}
                     :data data :width 350 :height 300
                     :chartConfig {:color (fn [o] "rgba(255,255,255,1)")
                                   :backgroundColor (:dark-purple styles/app-colors)
                                   :backgroundGradientFrom (:dark-purple styles/app-colors)
                                   :backgroundGradientTo (:dark-purple styles/app-colors)
                                   :propsForLabels {:fontSize 9}
                                   :decimalPlaces 2}}]]))

(defn summary-section
  [show-blank? title value & data-type]
  (let [value-type (or (first data-type) :currency)]
    [rn/view {:style (merge styles/summary-section-view {:flex 2})}
     [rn/view {:style {:flex 5}}
      [rn/text {:style styles/summary-title}
       title]]
     [rn/view {:style {:flex 5}}
      [rn/text {:style styles/summary-details}
       (if show-blank?
         "---"
         (case value-type
           :currency (utils/localize value)
           :percent (utils/percentize value)))]]]))


(defn break-even-summary
  [prop]
  [rn/view
   [rn/text {:style styles/chart-title} "Break-even Analysis"]
   [rn/view {:style styles/analysis-info-bar}
    [summary-section false "Min. rent to cash flow" (compute-break-even prop :rent-per-unit :cash-flow-per-unit)]]
   [rn/view {:style styles/analysis-info-bar}
    [summary-section false (str "Max purchase price to cash flow") ; (" (utils/localize (:rent-per-unit prop)) " rent)")
                           (compute-break-even prop :purchase-price :cash-flow-per-unit)]]])

(defn report
  []
  [rn/view {:style (merge {:flex 1} styles/app-screen)}
   [rn/view {:style (merge styles/container {:flex-direction :column :flex 1})}
    [rn/view {:style styles/screen-header}
     [rn/view {:style styles/good-deal-container}
      [rn/text {:style styles/screen-title-text}
       "Profitability Charts"]]]
    [rn/safe-area-view {:style {:flex-direction "column"}}
     [rn/scroll-view
      [ads/banner]
      [break-even-summary @(rf/subscribe [:prop-info])]
      [ads/banner]
      [chart :rent-per-unit :cash-flow-per-unit "Cash flow by rent" :show-break-even]
      [ads/banner]
      [chart :purchase-price :cash-flow-per-unit "Cash flow by purchase price" :show-break-even]
      [ads/banner]
      [chart :purchase-price :cocroi "Cash-on-cash ROI by purchase price" :percent]
      [ads/banner]
      [chart :purchase-price :five-yr-profit "Net future gain by purchase price" false]
      [rn/view {:style {:min-height 630}}]]]]])
