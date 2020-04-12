(ns abakus.targeter
  (:require [abakus.analyzer :as analyzer]))

(defn compute-target
  [prop variable target-metric target-value tolerance]
  (loop [lo 0
         hi 100000000]
    (let [test-value (* 0.5 (+ lo hi))
          adjusted-prop (assoc prop variable test-value)
          computed-prop (analyzer/recompute adjusted-prop)
          metric-value (get computed-prop target-metric)]
      ; (println (prn-str [test-value metric-value target-value lo hi]))
      (if (> tolerance (Math/abs (- metric-value target-value)))
        test-value
        (let [new-lo (if (> metric-value target-value) lo test-value)
              new-hi (if (> metric-value target-value) test-value hi)]
          (recur new-lo new-hi))))))

(def prop {:purchase-price 140000 :hoa 271 :num-units 2})

(compute-target prop :rent-per-unit :cash-flow-per-unit 100 5)
