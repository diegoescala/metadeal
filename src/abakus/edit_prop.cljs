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
  [rn/view {:style {:font-size 18}}
   [rn/view {:style {:align-text "center"}}
    [rn/text {:style {:font-weight "bold" :font-size 18}}
     label]]
   [rn/view {:style {:bottom-border-width 1}}
    [rn/input {:style {:background-color "#fff" :font-size 18 :border-bottom-width 1 :margin-bottom 10}
               :keyboard-type "numeric"
               :placeholder (str (Math/floor (get @computed param)))
               :placeholder-text-color "#faa"
               :value (str (get @prop-info param))
               :on-change-text #(do
                                  (swap! prop-info assoc param (if (not (empty? (str %))) (js/parseFloat %) ""))
                                  (reset! computed (analyzer/recompute (scrub @prop-info))))}]]])

(defn localize
  [cur]
  ; (let [f (js/Intl.NumberFormat. "en-US" (clj->js {:style "currency" :currency "USD"}))]
    ; (-> f (.format cur))])
  (str "$" cur))

(defn localize-currency-vals
  [m]
  (let [localized (reduce (fn [a [k v]]
                            (assoc a k (localize v)))
                          {}
                          m)]
    (println (prn-str localized))
    localized))

(defn explanation
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
  [rn/view {:style {:margin-left 20 :margin-top 30 :flex-direction "column"}}
   [rn/text {:style {:color "#fff" :font-size 25 :font-weight "bold" :text-align "center"}}
    "Good Deal?"]
   (if good?
     [rn/text {:style {:font-size 33 :color "green" :text-align "center"}}
      "Yes"]
     [rn/text {:style {:font-size 33 :color "red" :text-align "center"}}
      "No"])])

(defn summary-section
  [title param prop]
  [rn/view {:style styles/summary-section-view}
   [rn/text {:style styles/summary-title}
    title]
   [rn/text {:style styles/summary-details}
    (localize value)]])

(defn summary-header
  [prop]
  (let [vs-mkt (:mkt-beat prop)
        cash-in (:total-cost prop)
        cash-flow (:cash-flow-per-unit prop)
        good? (pos? vs-mkt)]
    [rn/view {:style {:flex-direction "column" :background-color "#96ccb8"}}
     [good-deal-summary good?]
     [rn/view {:style {:margin-top 0 :flex-direction "row" :align-text "center"}}
      [summary-section "Cash Required" :total-cost prop]
      [summary-section "Cash Flow/Unit" :cash-flow-per-unit prop]
      [summary-section "vs. Stock Market" :total-cost prop]
      [summary-section "Cash In" :total-cost prop]]
     [rn/view
       [rn/touchable-highlight
          {:on-press #(rn/alert (explanation (localize-currency-vals prop)))}
         [rn/text "Explanation"]]]]))


(defn basic-questions
  []
  [rn/view
   [rn/text {:style {:font-weight "bold"}}
    "Answer some basic questions"]
   [input "Purchase price" :purchase-price]
   [input "Cash down" :down]
   [input "Monthly HOA" :hoa]
   [input "# units" :num-units]
   [input "Rent/unit" :rent-per-unit]
   [input "Rehab cost" :rehab]
   [input "Expected value in 5 yrs" :five-year-price]
   [input "Loan P&I" :loan-principal-interest]
   [input "Taxes & Insurance" :property-tax-and-insurance]])

(defn edit-prop
  [prop]
  (swap! prop-info merge prop @prop-info)
  [rn/view
   [summary-header @computed]
   [basic-questions]])
