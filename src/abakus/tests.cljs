(ns abakus.tests
  (:require [abakus.analyzer :as analyzer]))

(defn compare-with-tolerance
  [val1 val2 tolerance]
  (> tolerance (Math/abs (- val2 val1))))

(defn compare-param
  [param data1 data2 diff tolerance]
  (compare-with-tolerance diff (Math/abs (- (get data2 param) (get data1 param)))
                          tolerance))

(defn test-analyzer-basic
  []
  (let [prop1 {:hoa 50 :rent-per-unit 50 :management-fee 0 :vacancy-percentage 0}
        comp50 (analyzer/recompute prop1)
        prop2 {:hoa 100 :rent-per-unit 100 :management-fee 0 :vacancy-percentage 0}
        comp100 (analyzer/recompute prop2)
        vacancy100 (analyzer/recompute {:vacancy-percentage 100})]
    (and (compare-param :monthly-exp comp50 comp100 50 1)
         (compare-param :cash-flow-per-unit comp50 comp100 0 1)
         (compare-with-tolerance (:monthly-exp vacancy100) (* -1.0 (:cash-flow-per-unit vacancy100))
                                 1))))                                   
(test-analyzer-basic)
