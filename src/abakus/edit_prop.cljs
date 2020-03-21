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
  [rn/view
   [rn/text label]
   [rn/input {:on-change-text #(do
                                 (swap! prop-info assoc param (if (not (empty? (str %))) (js/parseFloat %) ""))
                                 (reset! computed (analyzer/recompute (scrub @prop-info))))}]])


(defn edit-prop
  [prop]
  (swap! prop-info merge prop @prop-info)
  (do
    [rn/view
     [input "Expected value in 5 yrs" :five-year-price]
     [input "Purchase price" :purchase-price]
     [input "Cash down" :down]
     [input "Monthly HOA" :hoa]
     [input "# units" :num-units]
     [input "Rent/unit" :rent-per-unit]
     [input "Rehab cost" :rehab]
     [rn/text
      (prn-str (scrub @prop-info))
      (prn-str (select-keys @computed [:mkt-beat :mortgage :cash-flow-per-unit]))]]))
