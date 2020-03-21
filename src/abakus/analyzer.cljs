(ns abakus.analyzer)

(def mortgage-multiplier (/ 653.63 112000))
(def taxes-insur-multiplier (/ 522.0 135000))

(def params
  {:five-year-price (fn [p])
   :purchase-price  (fn [p] (* 0.80 (:five-year-price p)))
   :hoa             (fn [p] (let [v 100] v))
   :rehab           (fn [p] (* 5.0 (:closing-costs p)))
   :monthly-maint   (fn [p] (/ (:five-year-price p) 2000.0))
   :num-units       (fn [p] ())
   :rent-per-unit   (fn [p] ())
   :five-yr-profit  (fn [p] (+ (- (:five-year-value p) (:total-cost p)) (:five-year-apprec p)))
   :total-cost      (fn [p] (+ (:down p) (:rehab p) (:closing-costs p)))
   :mkt-beat        (fn [p] ())
   :loan-amt        (fn [p] (* 0.8 (:purchase-price p)))
   :loan-principal-interest    (fn [p] (* (:loan-amt p) mortgage-multiplier))
   :property-tax-and-insurance (fn [p] (* (:five-year-price p) taxes-insur-multiplier))
   :mortgage        (fn [p] ())
   :down            (fn [p] ())
   :closing-costs   (fn [p] ())
   :monthly-exp     (fn [p] ())
   :cash-flow-per-unit (fn [p] ())
   :annual-profit   (fn [p] ())
   :first-yr-profit (fn [p] ())
   :cocroi          (fn [p] ())
   :five-yr-value   (fn [p] ())
   :five-yr-return  (fn [p] ())
   :stock-market-ret (fn [p] ())})

(defn compute
  [property param]
  (if (some? (get property param))
      property
      (assoc property param ((get params param) property))))

(def test-prop
  {:five-year-price 600000
   :num-units 9
   :rent-per-unit 800})

(compute test-prop :monthly-exp)
