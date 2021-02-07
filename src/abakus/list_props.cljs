(ns abakus.list-props
  (:require [re-frame.core :as rf]
            [abakus.rn :as rn]
            [abakus.edit-prop :as edit-prop]
            [abakus.styles :as styles]
            [abakus.number-utils :as num]))

(defn prop
  [p]
  [rn/view {:style styles/property}
   [rn/touchable-highlight {
                            :on-press #(do
                                         (rf/dispatch [:set-prop-info p])
                                         (edit-prop/recompute p)
                                         (rf/dispatch [:set-current-page [edit-prop/edit-prop]]))}
    [rn/view
     [rn/text {:style styles/property-name} "A Property"]
     [rn/text {:style {:color :white}}
      (if (some? (:purchase-price p))
          (num/localize (:purchase-price p))
          "")]]]])

(defn props-list
  []
  [rn/view {:style (merge {:flex 1} styles/app-screen)}
   [rn/view {:style styles/screen-header}
    [rn/view {:style styles/good-deal-container}
     [rn/text {:style styles/screen-title-text}
      "My Properties"]]]
   [rn/scroll-view
    (let [props @(rf/subscribe [:properties])]
      (if (empty? props)
        [rn/text "No properties"]
        (for [p (map-indexed vector props)]
          ^{:key (first p)} [prop (second p)])))]])
