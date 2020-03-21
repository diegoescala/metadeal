(ns abakus.analyzer)

(def params
  {:five-year-price #()
   :purchase-price  #(* 0.75 (:five-year-price %))
   :hoa             #(let [v 100] v)
   :rehab           #()
   :montly-maint    #()
   :num-units       #()
   :rent-per-unit   #()
   :five-yr-apprec  #()
   :five-yr-profit  #()
   :total-cost      #()
   :mkt-beat        #()
   :loan-amt        #()
   :loan-principal-interest    #()
   :property-tax-and-insurance #()
   :mortgage        #()
   :down            #()
   :closing-costs   #()
   :monthly-exp     #()
   :cash-flow-per-unit #()
   :annual-profit   #()
   :first-yr-profit #()
   :cocroi          #()
   :five-yr-value   #()
   :five-yr-return  #()
   :stock-market-ret #()})

(defn compute
  [property param]
  ((get params param) property))

(compute {:five-year-price 100000} :purchase-price)
