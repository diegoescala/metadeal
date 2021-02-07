(ns abakus.list-props
  (:require [re-frame.core :as rf]
            [abakus.rn :as rn]
            [abakus.edit-prop :as edit-prop]
            [abakus.styles :as styles]))

(defn prop
  [p]
  [rn/view {:style styles/property}
   [rn/touchable-highlight {
                            :on-press #(do
                                         (rf/dispatch [:set-prop-info p])
                                         (edit-prop/recompute p)
                                         (rf/dispatch [:set-current-page [edit-prop/edit-prop]]))}
    [rn/text {:style {:color :white}}
     (prn-str p)]]])

(defn props-list
  []
  [rn/view {:style styles/app-screen}
   [rn/view {:style styles/screen-header}
    [rn/view {:style styles/container}
     [rn/text "hi"]]]
   (let [props @(rf/subscribe [:properties])]
     (if (empty? props)
       [rn/text "No properties"]
       (for [p (map-indexed vector props)]
         ^{:key (first p)} [prop (second p)])))])
