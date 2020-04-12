(ns abakus.targeter
  (:require [abakus.analyzer :as analyzer]))

(defn compute-target
  [prop variable target-metric target-value tolerance]
  (loop [test-value 50000000
         lo 0
         hi 100000000
         tries-left 3]
    (let [adjusted-prop (assoc prop variable test-value)
          computed-prop (analyzer/recompute adjusted-prop)
          metric-value (get computed-prop target-metric)]
      (println (prn-str [test-value metric-value target-value lo hi]))
      (if (> tolerance (Math/abs (- metric-value target-value)))
        test-value
        (let [new-lo (if (> metric-value target-value) lo test-value)
              new-hi (if (> metric-value target-value) test-value hi)]
          (recur (* 0.5 (+ new-lo new-hi)) new-lo new-hi (dec tries-left)))))))

(def prop {:purchase-price 140000 :hoa 271})

(compute-target prop :rent-per-unit :cash-flow-per-unit 100 5)
