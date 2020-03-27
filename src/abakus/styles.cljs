(ns abakus.styles
  (:require [abakus.rn :as rn]))

(def app-colors
  {:light-pink "#e780b8"
   :medium-purple "#bd6996"
   :dark-purple "#8c568d"
   :medium-gray "#a8a8a8"
   :light-gray "#eee"})

(def summary-header {:flex-direction "column" :flex 1 :background-color (:light-gray app-colors)})
(def summary-section-view {:margin-left 20 :margin-top 30 :flex-direction "column" :align-text "center"})
(def summary-title {:color (:dark-purple app-colors) :font-size 18})
(def container {:margin-left 30 :margin-right 30})
(def summary-details {:font-size 17})

(def good-deal-title {:color (:dark-purple app-colors) :font-size 25 :font-weight "bold" :text-align "center"})
(def good-deal-yes-text {:font-size 33 :color "green" :text-align "center"})
(def good-deal-no-text {:font-size 33 :color "red" :text-align "center"})

(def input-field {:background-color "#fff" :font-size 18 :border-bottom-width 0 :margin-bottom 0 :border-radius 10 :padding 5})
(def input-field-container {:bottom-border-width 1 :padding-top 15 :padding-bottom 0})
(def input-view-container {:padding 20})

(def input-section {:border-radius 20 :background-color (:light-gray app-colors)})

(def section-title {:font-weight "200" :font-size 25 :margin-bottom 10})
(def section-subtitle {:font-weight "300" :font-size 15 :font-style "italic" :margin-bottom 30})

(def label-container {:align-text "center"})
(def label {:font-weight "300" :font-size 23})
