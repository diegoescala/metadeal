(ns abakus.analyzer)

(def mortgage-multiplier (/ 653.63 112000))
(def taxes-insur-multiplier (/ 522.0 135000))

(def params
  {:five-year-price             (fn [p] (* 1.2 (:purchase-price p)))
   :purchase-price              (fn [p] 0.0)
   :hoa                         (fn [p] 0)
   :rehab                       (fn [p] (* 5.0 (:closing-costs p)))
   :monthly-maint               (fn [p] (/ (:five-year-price p) 2000.0))
   :num-units                   (fn [p] 1)
   :rent-per-unit               (fn [p] 800)
   :five-yr-profit              (fn [p] (+ (- (:five-yr-value p) (:total-cost p)) (:five-yr-apprec p)))
   :five-yr-apprec              (fn [p] (- (:five-year-price p) (:purchase-price p)))
   :total-cost                  (fn [p] (+ (:down p) (:rehab p) (:closing-costs p)))
   :mkt-beat                    (fn [p] (- (:five-yr-profit p) (:stock-market-ret p)))
   :loan-amt                    (fn [p] (- (:purchase-price p) (:down p)))
   :loan-principal-interest     (fn [p] (* (:loan-amt p) mortgage-multiplier))
   :property-tax-and-insurance  (fn [p] (* (:five-year-price p) taxes-insur-multiplier))
   :mortgage                    (fn [p] (+ (:loan-principal-interest p) (:property-tax-and-insurance p)))
   :down                        (fn [p] (* 0.2 (:purchase-price p)))
   :closing-costs               (fn [p] (* 0.02 (:purchase-price p)))
   :monthly-exp                 (fn [p] (+ (:mortgage p) (:hoa p) (:monthly-maint p)))
   :cash-flow-per-unit          (fn [p] (/ (- (* (:rent-per-unit p) (:num-units p))
                                              (:monthly-exp p))
                                           (:num-units p)))
   :annual-profit               (fn [p] (* (:cash-flow-per-unit p) (:num-units p) 12.0))
   :first-yr-profit             (fn [p] (- (:annual-profit p) (:total-cost p)))
   :cocroi                      (fn [p] (/ (:annual-profit p) (:total-cost p)))
   :five-yr-value               (fn [p] (+ (* (:annual-profit p) 5.0) (:down p)))
   :five-yr-return              (fn [p] (- (/ (:five-yr-value p) (:total-cost p)) 1.0))
   :stock-market-ret            (fn [p] (- (* (:total-cost p) (Math/pow 1.07 5.0)) (:total-cost p)))})

(defn compute
  [param property]
  (if (some? (get property param))
      property
      (assoc property param ((get params param) property))))

(def test-prop
  {:five-year-price 600000
   :num-units 9
   :hoa 0
   :rent-per-unit 800})

(defn recompute
  [prop]
  (->> prop
    (compute :purchase-price)
    (compute :five-year-price)
    (compute :hoa)
    (compute :num-units)
    (compute :rent-per-unit)
    (compute :five-yr-apprec)
    (compute :monthly-maint)
    (compute :down)
    (compute :loan-amt)
    (compute :loan-principal-interest)
    (compute :property-tax-and-insurance)
    (compute :mortgage)
    (compute :closing-costs)
    (compute :monthly-exp)
    (compute :cash-flow-per-unit)
    (compute :rehab)
    (compute :total-cost)
    (compute :annual-profit)
    (compute :cocroi)
    (compute :five-yr-value)
    (compute :five-yr-profit)
    (compute :five-yr-return)
    (compute :stock-market-ret)
    (compute :mkt-beat)))


(let [result (recompute test-prop)]
  (:mkt-beat result))
