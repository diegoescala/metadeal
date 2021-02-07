(ns abakus.number-utils
  (:require [clojure.string :as s]))

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
