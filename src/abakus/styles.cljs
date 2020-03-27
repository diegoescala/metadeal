(ns abakus.styles
  (:require [abakus.rn :as rn]))

(def app-colors
  {:light-pink "#e780b8"
   :light-purple "#e7daef"
   :medium-purple "#bd6996"
   :dark-purple "#8c568d"
   :light-green "#d4ecd3"
   :medium-green "#63bc61"
   :medium-red "#f23016"
   :medium-gray "#a8a8a8"
   :light-gray "#eee"
   :white "#fff"
   :black "#111"})

(def container {:margin-left 15 :margin-right 15})
(def summary-header {:flex-direction "column" :flex 1})
(def summary-section-view {:margin-top 0 :flex-direction "column" :text-align "center"})
(def summary-title {:color (:white app-colors) :font-size 16 :min-height 40 :font-weight "600" :text-align "center"})
(def summary-details {:font-size 16 :color (:white app-colors) :text-align :center})

(def edit-screen {:background-color (:light-gray app-colors)})

(def analysis-info-bar {:margin-top 0 :flex-direction "row" :align-text "center" :background-color (:medium-green app-colors)})

(def good-deal-container {:margin-top 40 :margin-bottom 10 :background-color (:white app-colors)})
(def good-deal-title {:color (:black app-colors) :font-size 25 :font-weight "200" :text-align "center"})
(def good-deal-result {:font-size 37 :text-align "center" :font-weight "800"})
(def good-deal-yes-text (merge good-deal-result {:color (:medium-green app-colors)}))
(def good-deal-no-text (merge good-deal-result {:color (:medium-red app-colors)}))
(def good-deal-explanation {:color ""})

(def input-field {:background-color (:light-gray app-colors) :font-size 18 :border-bottom-width 0 :margin-bottom 0 :border-radius 10 :padding 5})
(def input-field-container {:bottom-border-width 1 :padding-top 10 :padding-bottom 0})
(def input-view-container {:padding-left 20 :padding-right 20 :margin-top 15})

(def input-section {:border-radius 0 :background-color (:white app-colors)})

(def info-section-header {:margin-bottom 5 :padding-left 20 :padding-right 20 :margin-top 10})

(def section-title {:font-weight "200" :font-size 25 :margin-bottom 10})
(def section-subtitle {:font-weight "300" :font-size 15 :font-style "italic" :margin-bottom 30})

(def label-container {:align-text "center"})
(def label {:font-weight "200" :font-size 19})
