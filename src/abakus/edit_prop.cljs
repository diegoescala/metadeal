(ns abakus.edit-prop
  (:require [abakus.rn :as rn]
            [abakus.styles :as styles]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as s]
            [abakus.analyzer :as analyzer]
            [abakus.ads :as ads]
            [abakus.number-utils :as num]
            [abakus.persistence :as persistence]))

(defn scrub
  [m]
  (let [empties (filter #(empty? (str (get m %))) (keys m))]
    (reduce #(dissoc %1 %2) m empties)))

; (def prop-info (r/atom {}))
(def computed (r/atom (analyzer/recompute (scrub @(rf/subscribe [:prop-info])))))

(defn recompute
  [prop]
  (do
    (println (prn-str prop))
    (reset! computed (analyzer/recompute (scrub prop)))
    (println (prn-str (vals @computed)))))

(defn input
  [max-length label param]
  (let [prop @(rf/subscribe [:prop-info])
        value (r/atom (str (or (param prop) "")))]
   (fn [max-length label param]
    [rn/view {:style styles/input-view-container}
     [rn/view {:style styles/label-container}
      [rn/text {:style styles/label}
       label]]
     [rn/view {:style styles/input-field-container}
      [rn/input {:style styles/input-field
                 :keyboard-type "numeric"
                 :max-length max-length
                 :placeholder (if (empty? @value) (str (Math/floor (get @computed param))) "")
                 :placeholder-text-color "#faa"
                 :on-change-text #(do
                                    (reset! value %)
                                    (let [prop-mod (assoc @(rf/subscribe [:prop-info]) param (if (not (empty? (str %))) (js/parseFloat %) ""))]
                                      (rf/dispatch [:set-prop-info prop-mod])
                                      (recompute prop-mod)))}
       @value]]])))

(defn save-modal
  [vis-atom]
  (let [prop-name (r/atom "")]
   (fn [vis-atom]
    [rn/view {:style styles/mcentered}
     [rn/modal {:visible @vis-atom :transparent true :animation-type :slide}

      [rn/view {:style styles/mcentered}
       [rn/view {:style styles/modal}
        [rn/text {:style {:color :black}} (str "Save This Property")]
        [rn/view {:style {:width 150 :flex-direction :column :margin 30}}
          [rn/input {:style styles/input-field :placeholder "Property Name"
                     :on-change-text #(reset! prop-name %)}]]
        [rn/view {:style {:flex-direction :row}}
         [rn/touchable-highlight {:style (assoc styles/explanation-button :background-color "#f82")
                                  :on-press #(reset! vis-atom false)}
           [rn/text {:style {:color "white" :font-size 15 :text-align "center" :margin-left 10 :margin-right 10}}
            "Cancel"]]
         [rn/touchable-highlight {:style (assoc styles/explanation-button :margin-left 20)
                                  :on-press #(do
                                               (reset! vis-atom false)
                                               (let [props (conj @(rf/subscribe [:properties]) (assoc @(rf/subscribe [:prop-info]) :name @prop-name))]
                                                (rf/dispatch [:set-properties props])
                                                (persistence/save-properties props)
                                                (rn/alert (str @prop-name " saved!"))))}

           [rn/text {:style {:color "white" :font-size 15 :text-align "center" :margin-left 10 :margin-right 10}}
            "Save"]]]]]]])))

(defn explanation-str
  [prop]
  (let [{:keys [total-cost down five-yr-profit time-horizon-years stock-mkt-growth-percent closing-costs rehab five-yr-apprec mortgage cash-flow-per-unit stock-market-ret]} prop]
    (str "With a down payment of " down
         ", closing costs of " closing-costs ", and rehab costs of " rehab
         ", you would be putting in " total-cost " in cash. "
         "With a projected cash flow/month of " cash-flow-per-unit ", "
         "and " (subs time-horizon-years 1) "-year appreciation of " five-yr-apprec ", you could expect to "
         (if (s/starts-with? five-yr-profit "-") "lose" "make") " about " (s/replace five-yr-profit #"\-" "") " over the next " (subs time-horizon-years 1) " years. If you put your " total-cost " into the stock market instead, "
         "you would make " stock-market-ret " over the next " (subs time-horizon-years 1) " years, assuming " (subs stock-mkt-growth-percent 1) "% annual growth.")))

(defn deal-justification
  [prop some-info-filled?]
  (let [m (:mkt-beat prop)
        good? (pos? m)
        style (cond (not some-info-filled?) styles/neutral
                    good? styles/good (not good?) styles/bad)]
    [rn/text {:style (merge styles/deal-justification-text style)}
     (if (not some-info-filled?)
       "Enter a purchase price below to get started."
       (if (pos? m)
         (str "Better than " (:time-horizon-years prop) "-yr stock market by " (num/localize m) ".")
         (str "Worse than " (:time-horizon-years prop) "-yr stock market by " (num/localize (Math/abs m)) ".")))]))

(defn good-bad-icon
  [style icon-name]
  [rn/view {:style {:flex 1}}
    [rn/ic {:name icon-name :style (merge style {:font-size 37})}]])

(defn good-deal-summary
  [prop some-info-filled?]
  [rn/view {:style styles/good-deal-container}
   (let [good? (pos? (:mkt-beat prop))
         content {:style (cond (not some-info-filled?) styles/good-deal-maybe-text
                               good? styles/good-deal-yes-text (not good?) styles/good-deal-no-text)
                  :icon (cond (not some-info-filled?) "md-information-circle-outline"
                              good? "md-checkmark" (not good?) "md-close")
                  :content (cond (not some-info-filled?) "Good or bad deal?"
                                 good? "Good Deal." (not good?) "Bad Deal.")}]
     [rn/view {:style {:flex-direction "row"}}
      [rn/view {:style {:flex-direction :row :flex 3}}
       ; [good-bad-icon (merge {:flex 1} (:style content)) (:icon content)]
       [rn/text {:style (merge {:flex 8} (get content :style))}
         (get content :content)]]])
   [deal-justification prop some-info-filled?]])

(defn summary-section
  [show-blank? title param prop & data-type]
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
           :currency (num/localize (get prop param))
           :percent (num/percentize (get prop param))))]]]))

(defn explanation
  [prop]
  (let [show? (r/atom false)]
   (fn [prop]
    [rn/view

     [rn/touchable-highlight
        {:style styles/explanation-button
         :on-press #(swap! show? not)}
                     ;rn/alert (explanation-str (localize-currency-vals prop)))}
       [rn/text {:style {:color "white" :font-size 15 :text-align "center"}}
        (str (if @show? "Hide" "Show") " Explanation")]]

     (if @show?
       [rn/view {:style styles/good-deal-explanation}
         [rn/text {:style styles/good-deal-explanation-text} (explanation-str (num/localize-currency-vals prop))]])])))

(defn summary-header
  [prop some-info-filled?]
  (let [vs-mkt (:mkt-beat prop)
        cash-in (:total-cost prop)
        cash-flow (:cash-flow-per-unit prop)]
    [rn/view {:style styles/screen-header}
     [rn/view {:style styles/container}
      [good-deal-summary prop some-info-filled?]
      ; [rn/spacer 1 10 10]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section (not some-info-filled?) "Cash Required" :total-cost prop]
       [summary-section (not some-info-filled?) "Cash Flow/Unit" :cash-flow-per-unit prop]]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section (not some-info-filled?) "CoCROI" :cocroi prop :percent]
       [summary-section (not some-info-filled?) "Cap. Rate" :cap-rate prop :percent]]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section (not some-info-filled?) "Monthly Exp." :monthly-exp prop]
       [summary-section (not some-info-filled?) "Profit/yr" :annual-profit prop]]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section (not some-info-filled?) "Appreciation" :five-yr-apprec prop]
       [summary-section (not some-info-filled?) "Net Future Gain" :five-yr-profit prop]]]
     [rn/view]]))

(defn no-info-summary
  []
  [rn/view {:style styles/screen-header}
   [rn/view {:style styles/good-deal-container}
    [rn/text {:style styles/good-deal-title}
     "Provide a purchase price to get started"]]])

(defn input-intro
  []
  [rn/view {:style (merge styles/input-section styles/info-section-header)}
   [rn/text {:style styles/section-title}
    "Answer some basic questions"]
   [rn/text {:style styles/section-subtitle}
    "All fields are optional. Defaults are in red."]])

(defn save-property-button
  []
  (let [save-modal-visible (r/atom false)]
    [rn/view {:style {:margin-left 10}}
     [rn/touchable-highlight
       {:style styles/explanation-button
        :on-press #(do
                    (reset! save-modal-visible true))}

       [rn/text {:style {:color "white" :font-size 15 :text-align "center"}}
        "Save Property"]]
     [save-modal save-modal-visible]]))

(defn basic-questions
  []
  [rn/safe-area-view {:style {:flex-direction "column"}}
   [rn/scroll-view {:style styles/container}
    [rn/view {:style {:align-items :center :margin-bottom 10 :justify-content :center :flex-direction "row" :flex 1}}
     [explanation @computed]]
    [ads/banner]
    [rn/view {:style {:align-items :center :margin-bottom 10 :justify-content :center :flex-direction "row" :flex 1}}
     [save-property-button]]
    ; [rn/touchable-highlight
    ;  {:style styles/explanation-button
    ;   :on-press #(.openURL rn/linking (str "http://metadealapp.com:8082/pdf-report?prop=" (js/encodeURI @computed)))}
    ;  [rn/text "View Report"]]
    [rn/view {:style styles/input-section}
     [rn/view {:style styles/questionnaire-container}
      [rn/view
       [input 8 "Purchase price" :purchase-price]
       [input 7 "Cash down" :down]
       [input 5 "Monthly HOA" :hoa]
       [input 4 "# units" :num-units]
       [input 5 "Rent/unit" :rent-per-unit]
       [input 3 "Vacancy (%)" :vacancy-percentage]
       [input 5 "Monthly maintenance" :monthly-maint]
       [input 6 "Annual insurance" :prop-insur]]
      [rn/view
       [input 7 "Annual management fee" :management-fee]
       [input 7 "Rehab cost" :rehab]
       [input 9 "Expected value at time horizon" :five-year-price]
       [input 2 "Time horizon (years)" :time-horizon-years]
       [input 2 "Stock market YoY return (%)" :stock-mkt-growth-percent]
       [input 7 "Loan P&I" :loan-principal-interest]
       [input 7 "Property Tax (%)" :prop-tax-percent]]
      [rn/view {:style {:min-height 630}}]]]]])

(defn no-value-provided?
  [value]
  (let [sval (str value)]
    (< (count sval) 4)))

(defn test-result
  []
  [rn/view
   [rn/text
    (let [test-prop {:rehab 3500, :monthly-maint 128, :five-year-price 191000, :loan-principal-interest "", :purchase-price 159868, :num-units 1, :rent-per-unit 1200, :management-fee 345, :hoa 145}
          correct-result '(-0.8926125980396069 175434 31973.600000000002 3500 -463.6804345714286 -0.14388484834245496 15567.061875830484 -3386.1860742857243 5 128 38670.96000000001 191000 5 -5564.165214857143 2.3 1301.9304345714286 7 3197.36 1603.6804345714286 746.3894345714285 159868 1 0.021220682062701727 555.541 1200 31132 345 -18953.24795011621 127894.4 2631.5099999999998 145 301.75 4152.773925714286)
          test-status
            (str "Test result: " (= (vals (analyzer/recompute (scrub test-prop)))
                                    correct-result))]
      (println test-status)
      "")]])

(defn edit-prop
  []
  ; (swap! prop-info merge prop @(rf/subscribe [:prop-info]))
  [rn/view {:style styles/app-screen}
   ; (if false;(no-value-provided? (:purchase-price @(rf/subscribe [:prop-info])))
     ; [no-info-summary]
   [test-result]
   [summary-header @computed (not (no-value-provided? (:purchase-price @(rf/subscribe [:prop-info]))))]
   [basic-questions]])
