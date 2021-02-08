(ns abakus.list-props
  (:require [re-frame.core :as rf]
            [abakus.rn :as rn]
            [reagent.core :as r]
            [abakus.edit-prop :as edit-prop]
            [abakus.styles :as styles]
            [abakus.number-utils :as num]
            [abakus.ads :as ads]
            [abakus.persistence :as persistence]))

(def state (r/atom {:vis false}))

(defn delete-property-at-index
  [idx all-props]
  (let [new-props (-> (reduce merge (map-indexed hash-map all-props))
                      (dissoc idx)
                      vals)]
   (rf/dispatch [:set-properties new-props])
   (persistence/save-properties new-props)))

(defn delete-modal
  []
  (let [index (:index @state)
        props (:props @state)]
    [rn/view {:style styles/mcentered}
     [rn/modal {:visible (:vis @state) :transparent true :animation-type :slide}
      [rn/view {:style styles/mcentered}
       [rn/view {:style styles/modal}
        [rn/text {:style {:color :black :font-size 25 :margin-bottom 30}} (str "Delete this Property?")]
        [rn/view {:style {:flex-direction :row}}
         [rn/touchable-highlight {:style (assoc styles/explanation-button :background-color "#383")
                                  :on-press #(swap! state assoc :vis false)}
           [rn/text {:style {:color "white" :font-size 15 :text-align "center" :margin-left 10 :margin-right 10}}
            "No"]]
         [rn/touchable-highlight {:style (assoc styles/explanation-button :margin-left 20 :background-color "#f42")
                                  :on-press #(do
                                               (swap! state assoc :vis false)
                                               (delete-property-at-index index props))}

           [rn/text {:style {:color "white" :font-size 15 :text-align "center" :margin-left 10 :margin-right 10}}
            "Yes"]]]]]]]))


(defn prop
  [p idx all-props]
  [rn/view {:style styles/property}
   [rn/touchable-highlight {:style {:flex 5}
                            :on-press #(do
                                         (rf/dispatch [:set-prop-info p])
                                         (edit-prop/recompute p)
                                         (rf/dispatch [:set-current-page [edit-prop/edit-prop]]))}
    [rn/view
     (let [name (or (:name p) "A Property")]
       [rn/text {:style styles/property-name} name])
     [rn/text {:style {:color :white}}
      (if (some? (:purchase-price p))
          (num/localize (:purchase-price p))
          "")]]]
   [rn/view {:style {:flex 1}}
    [rn/touchable-highlight
      {:on-press #(do
                    (swap! state assoc :vis true :index idx :props all-props))}
      [rn/ic {:name "md-trash" :style {:color :white :font-size 32}}]]]])

(defn props-list
  []
  [rn/view {:style (merge {:flex 1} styles/app-screen)}
   [rn/view {:style (merge styles/container {:flex-direction :column :flex 1})}
    [rn/view {:style styles/screen-header}
     [rn/view {:style styles/good-deal-container}
      [rn/text {:style styles/screen-title-text}
       "My Properties"]]
     [rn/view
      [ads/banner]
      [delete-modal]]]
    [rn/scroll-view {:style {:flex 1}}
     (let [props @(rf/subscribe [:properties])]
       (if (empty? props)
         [rn/view {:style styles/good-deal-container}
          [rn/text {:style styles/screen-title-text}
           "No properties saved yet"]]
         (for [p (map-indexed vector props)]
           ^{:key (first p)} [prop (second p) (first p) props])))]]])
