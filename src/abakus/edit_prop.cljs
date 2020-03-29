(ns abakus.edit-prop
  (:require [abakus.rn :as rn]
            [abakus.styles :as styles]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [abakus.analyzer :as analyzer]))

(def prop-info (r/atom {}))
(def computed (r/atom {}))

(defn scrub
  [m]
  (let [empties (filter #(empty? (str (get m %))) (keys m))]
    (reduce #(dissoc %1 %2) m empties)))

(defn input
  [label param]
  [rn/view {:style styles/input-view-container}
   [rn/view {:style styles/label-container}
    [rn/text {:style styles/label}
     label]]
   [rn/view {:style styles/input-field-container}
    [rn/input {:style styles/input-field
               :keyboard-type "numeric"
               :placeholder (str (Math/floor (get @computed param)))
               :placeholder-text-color "#faa"
               ; :value (str (get @prop-info param))
               :on-change-text #(do
                                  (swap! prop-info assoc param (if (not (empty? (str %))) (js/parseFloat %) ""))
                                  (reset! computed (analyzer/recompute (scrub @prop-info))))}]]])

(defn localize
  [cur]
  (let [f (js/Intl.NumberFormat. "en-US" (clj->js {:style "currency" :currency "USD"}))]
    (-> f (.format cur))))
  ; (str "$" cur))

(defn localize-currency-vals
  [m]
  (let [localized (reduce (fn [a [k v]]
                            (assoc a k (localize v)))
                          {}
                          m)]
    localized))

(defn percentize
  [v]
  (str (Math/floor (* 100 (+ 0.005 v))) "%"))

(defn explanation-str
  [prop]
  (let [{:keys [total-cost down five-yr-profit closing-costs rehab five-yr-apprec mortgage cash-flow-per-unit stock-market-ret]} prop]
    (str "With a down payment of " down
         ", closing costs of " closing-costs ", and estimated rehab costs of " rehab
         ", you would be putting in " total-cost " in cash. "
         "Considering a projected cash flow/month of " cash-flow-per-unit ", "
         "and 5-year appreciation of " five-yr-apprec ", you could expect to make about "
         five-yr-profit " over the next 5 years. If you put your " total-cost " into the stock market instead, "
         "you would make " stock-market-ret " over the next 5 years.")))

(defn good-deal-summary
  [good?]
  [rn/view {:style styles/good-deal-container}
   [rn/text {:style styles/good-deal-title}
    "Good Deal?"]
   (if good?
     [rn/text {:style styles/good-deal-yes-text}
      "Yes"]
     [rn/text {:style styles/good-deal-no-text}
      "No"])])

(defn summary-section
  [title param prop & data-type]
  (let [value-type (or (first data-type) :currency)]
    [rn/view {:style (merge styles/summary-section-view {:flex 3})}
     [rn/text {:style styles/summary-title}
      title]
     [rn/text {:style styles/summary-details}
      (case value-type
        :currency (localize (get prop param))
        :percent (percentize (get prop param)))]]))

(defn explanation
  [prop]
  [rn/view
    [rn/touchable-highlight
       {:on-press #(rn/alert (explanation-str (localize-currency-vals prop)))}
      [rn/text "Explanation"]]])

(defn summary-header
  [prop]
  (let [vs-mkt (:mkt-beat prop)
        cash-in (:total-cost prop)
        cash-flow (:cash-flow-per-unit prop)
        good? (pos? vs-mkt)]
    [rn/view {:style styles/summary-header}
     [rn/view {:style styles/container}
      [good-deal-summary good?]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section "Cash Required" :total-cost prop]
       [summary-section "Cash Flow/Unit" :cash-flow-per-unit prop]
       [summary-section "vs. Stock Market" :mkt-beat prop]]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section "CoCROI" :cocroi prop :percent]
       [summary-section "Monthly Exp." :monthly-exp prop]
       [summary-section "Annual Profit" :annual-profit prop]]]]))
       ; [explanation prop]]))

(defn no-info-summary
  []
  [rn/view {:style styles/summary-header}
   [rn/view {:style styles/good-deal-container}
    [rn/text {:style styles/good-deal-title}
     "Provide a purchase price to get started"]]])

(defn basic-questions
  []
  [rn/safe-area-view {:style {:flex 3}}
   [rn/scroll-view {:style (merge {:flex 3} styles/container)}
    [rn/view {:style (merge styles/input-section styles/info-section-header)}
     [rn/text {:style styles/section-title}
      "Answer some basic questions"]
     [rn/text {:style styles/section-subtitle}
      "All fields are optional. Defaults are in red."]]
    [rn/view {:style styles/input-section}
     [input "Purchase price" :purchase-price]
     [input "Cash down" :down]
     [input "Monthly HOA" :hoa]
     [input "# units" :num-units]
     [input "Rent/unit" :rent-per-unit]
     [input "Monthly maintenance" :monthly-maint]
     [input "Annual management fee" :management-fee]
     [input "Rehab cost" :rehab]
     [input "Expected value in 5 yrs" :five-year-price]
     [input "Loan P&I" :loan-principal-interest]
     [input "Taxes & Insurance" :property-tax-and-insurance]
     [rn/view {:style {:min-height 220}}]]]])

(defn no-value-provided?
  [value]
  (let [sval (str value)]
    (< (count sval) 4)))

(defn edit-prop
  [prop]
  (swap! prop-info merge prop @prop-info)
  [rn/view {:style (merge styles/edit-screen {:flex-direction "column" :flex 1})}
   (if (no-value-provided? (:purchase-price @prop-info))
     [no-info-summary]
     [summary-header @computed])
   [basic-questions]])
