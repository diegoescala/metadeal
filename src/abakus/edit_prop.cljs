(ns abakus.edit-prop
  (:require [abakus.rn :as rn]
            [abakus.styles :as styles]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as s]
            [abakus.analyzer :as analyzer]))

(defn scrub
  [m]
  (let [empties (filter #(empty? (str (get m %))) (keys m))]
    (reduce #(dissoc %1 %2) m empties)))

(def prop-info (r/atom {}))
(def computed (r/atom (analyzer/recompute (scrub @prop-info))))

(defn input
  [max-length label param]
  [rn/view {:style styles/input-view-container}
   [rn/view {:style styles/label-container}
    [rn/text {:style styles/label}
     label]]
   [rn/view {:style styles/input-field-container}
    [rn/input {:style styles/input-field
               :keyboard-type "numeric"
               :max-length max-length
               ; :value (str (Math/floor (get @computed param)))
               :placeholder (str (Math/floor (get @computed param)))
               :placeholder-text-color "#faa"
               ; :value (str (get @prop-info param))
               :on-change-text #(do
                                  (swap! prop-info assoc param (if (not (empty? (str %))) (js/parseFloat %) ""))
                                  (reset! computed (analyzer/recompute (scrub @prop-info))))}]]])

(defn localize
  [cur]
  ; (let [f (js/Intl.NumberFormat. "en-US" (clj->js {:style "currency" :currency "USD" :maximum-fraction-digits 0}))]
  ;   (-> f (.format cur)
  ;       (s/split #"\.")
  ;       first)))
  (let [numstr (map #(apply str %) (partition 3 3 nil (s/reverse (str (Math/floor (Math/abs cur))))))]
    (str (when (neg? cur) "-") "$" (s/reverse (s/join "," numstr)))))

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
  (let [{:keys [total-cost down five-yr-profit time-horizon-years stock-mkt-growth-percent closing-costs rehab five-yr-apprec mortgage cash-flow-per-unit stock-market-ret]} prop]
    (str "With a down payment of " down
         ", closing costs of " closing-costs ", and estimated rehab costs of " rehab
         ", you would be putting in " total-cost " in cash. "
         "Considering a projected cash flow/month of " cash-flow-per-unit ", "
         "and " (subs time-horizon-years 1) "-year appreciation of " five-yr-apprec ", you could expect to "
         (if (s/starts-with? five-yr-profit "-") "lose" "make") " about " (s/replace five-yr-profit #"\-" "") " over the next " (subs time-horizon-years 1) " years. If you put your " total-cost " into the stock market instead, "
         "you would make " stock-market-ret " over the next " (subs time-horizon-years 1) " years, assuming " (subs stock-mkt-growth-percent 1) "% annual growth.")))

(defn good-deal-summary
  [good?]
  [rn/view {:style styles/good-deal-container}
   (let [content {:style (if good? styles/good-deal-yes-text styles/good-deal-no-text)
                  :word (if good? "Good" "Bad")}]
     [rn/text {:style (get content :style)}
      (str (get content :word) " Deal")])])

(defn deal-justification
  [prop]
  (let [m (:mkt-beat prop)]
    [rn/text {:style styles/deal-justification-text}
     (if (pos? m)
       (str "Better than " (:time-horizon-years prop) "-yr stock market by " (localize m))
       (str "Worse than " (:time-horizon-years prop) "-yr stock market by " (localize (Math/abs m))))]))

(defn summary-section
  [title param prop & data-type]
  (let [value-type (or (first data-type) :currency)]
    [rn/view {:style (merge styles/summary-section-view {:flex 2})}
     [rn/view {:style {:flex 6}}
      [rn/text {:style styles/summary-title}
       title]]
     [rn/view {:style {:flex 4}}
      [rn/text {:style styles/summary-details}
       (case value-type
         :currency (localize (get prop param))
         :percent (percentize (get prop param)))]]]))

(defn explanation
  [prop]
  (let [show? (r/atom true)]
   (fn [prop]
    [rn/view {:style {:align-items "center" :margin-bottom 10}}

     ; [rn/touchable-highlight
     ;    {:style {:background-color "#bd6996" :width 160 :padding 10 :border-radius 10}
     ;     :on-press #(swap! show? not)}
     ;                 ;rn/alert (explanation-str (localize-currency-vals prop)))}
     ;   [rn/text {:style {:color "white" :font-size 23 :text-align "center"}}
     ;    (str (if @show? "Hide" "Show") " Explanation")]]

     (if @show?
       [rn/text {:style styles/good-deal-explanation} (explanation-str (localize-currency-vals prop))])])))

(defn summary-header
  [prop]
  (let [vs-mkt (:mkt-beat prop)
        cash-in (:total-cost prop)
        cash-flow (:cash-flow-per-unit prop)
        good? (pos? vs-mkt)]
    [rn/view {:style styles/summary-header}
     [rn/view {:style styles/container}
      [good-deal-summary good?]
      [deal-justification prop]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section "Cash Required" :total-cost prop]
       [summary-section "Cash Flow/Unit" :cash-flow-per-unit prop]]
      [rn/view {:style styles/analysis-info-bar}
       [summary-section "CoCROI" :cocroi prop :percent]
       [summary-section "Monthly Exp." :monthly-exp prop]]]
     [rn/view
      [explanation prop]]]))

(defn no-info-summary
  []
  [rn/view {:style styles/summary-header}
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

(defn basic-questions
  []
  [rn/safe-area-view {:style {:flex 3}}
   [rn/scroll-view {:style (merge {:flex 3} styles/container)}
    ; [input-intro]
    [rn/view {:style styles/input-section}
     [input 8 "Purchase price" :purchase-price]
     [input 7 "Cash down" :down]
     [input 5 "Monthly HOA" :hoa]
     [input 4 "# units" :num-units]
     [input 5 "Rent/unit" :rent-per-unit]
     [input 3 "Vacancy (%)" :vacancy-percentage]
     [input 5 "Monthly maintenance" :monthly-maint]
     [input 7 "Annual management fee" :management-fee]
     [input 7 "Rehab cost" :rehab]
     [input 9 "Expected value at time horizon" :five-year-price]
     [input 2 "Time horizon (years)" :time-horizon-years]
     [input 2 "Stock market expected YoY return (%)" :stock-mkt-growth-percent]
     [input 7 "Loan P&I" :loan-principal-interest]
     [input 7 "Taxes & Insurance" :property-tax-and-insurance]
     [rn/view {:style {:min-height 330}}]]]])

(defn no-value-provided?
  [value]
  (let [sval (str value)]
    (< (count sval) 4)))

(defn edit-prop
  [prop]
  (swap! prop-info merge prop @prop-info)
  [rn/view {:style (merge styles/edit-screen {:flex-direction "column" :flex 1})}
   (if false;(no-value-provided? (:purchase-price @prop-info))
     [no-info-summary]
     [summary-header @computed])
   [basic-questions]])
