(ns abakus.edit-prop
  (:require [abakus.rn :as rn]
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
    [rn/input {:style {:background-color "#ccc" :font-size 18}
               :keyboard-type "numeric"
               :on-change-text #(do
                                  (swap! prop-info assoc param (if (not (empty? (str %))) (js/parseFloat %) ""))
                                  (reset! computed (analyzer/recompute (scrub @prop-info))))}]]])


(defn summary-header
  []
  (let [vs-mkt (:mkt-beat @computed)
        cash-in (:total-cost @computed)
        good? (pos? vs-mkt)]
    [rn/view {:style {:margin-top 0 :background-color "#96ccb8"  :flex-direction "row" :align-text "center"}}
     [rn/view {:style {:margin-left 20 :margin-top 30 :flex-direction "column" :align-text "center"}}
      [rn/text {:style {:color "#fff" :font-size 20}}
       "Good Deal?"]
      [rn/text {:style {:font-size 25}}
       (if good? "Yes" "No")]]
     [rn/view {:style {:margin-left 20 :margin-top 30 :flex-direction "column" :align-text "center"}}
      [rn/text {:style {:color "#fff" :font-size 20}}
       "Cash In"]
      [rn/text {:style {:font-size 25}}
       (Math/floor cash-in)]]
     [rn/view {:style {:margin-left 20 :margin-top 30 :flex-direction "column" :align-text "center"}}
      [rn/text {:style {:color "#fff" :font-size 20}}
       "Return vs Stock Market"]
      [rn/text {:style {:font-size 25}}
       (Math/floor vs-mkt)]]]))


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
   [input "Expected value in 5 yrs" :five-year-price]])

(defn edit-prop
  [prop]
  (swap! prop-info merge prop @prop-info)
  [rn/view
   [summary-header]
   [basic-questions]])
