(ns abakus.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [oops.core :refer [ocall]]
              [abakus.rn :as rn]
              [abakus.handlers]
              [abakus.subs]
              [abakus.edit-prop :as edit-prop]))


(defn app-root []
  (let [greeting (subscribe [:get-greeting])]
    (fn []
      [rn/view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
       [edit-prop/edit-prop {:hoa 20}]
       [rn/image {:source (js/require "./assets/images/cljs.png")
                  :style {:width 200
                          :height 200}}]
       [rn/text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
       [rn/ic {:name "ios-arrow-down" :size 60 :color "green"}]
       [rn/touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                                :on-press #(rn/alert "HELLO!")}
        [rn/text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press me"]]])))

(defn init []
  (dispatch-sync [:initialize-db])
  (ocall rn/expo "registerRootComponent" (r/reactify-component app-root)))
