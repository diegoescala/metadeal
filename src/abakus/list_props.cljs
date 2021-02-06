(ns abakus.list-props
  (:require [re-frame.core :as rf]
            [abakus.rn :as rn]
            [abakus.edit-prop :as edit-prop]))

(defn prop
  [p]
  [rn/view {:style {:margin-top 20}}
   [rn/touchable-highlight {:style {:background-color :red :padding 20 :border-radius 10}
                            :on-press #(do
                                         (rf/dispatch [:set-prop-info p])
                                         (edit-prop/recompute p)
                                         (rf/dispatch [:set-current-page [edit-prop/edit-prop]]))}
    [rn/text {:style {:color :white}}
     (prn-str p)]]])

(defn props-list
  []
  [rn/view {:style {:margin-top 50}}
   (let [props @(rf/subscribe [:properties])]
     (if (empty? props)
       [rn/text "No properties"]
       (for [p (map-indexed vector props)]
         ^{:key (first p)} [prop (second p)])))])
