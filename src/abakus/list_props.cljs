(ns abakus.list-props
  (:require [re-frame.core :as rf]
            [abakus.rn :as rn]))

(defn prop
  [p]
  [rn/view
   [rn/text
    (:name prop)]])

(defn props-list
  []
  (let [props @(rf/subscribe [:properties])]
    (if (empty? props)
      [rn/text "No properties"]
      (for [p props]
        ^{:key (:name p)} [prop p]))))
