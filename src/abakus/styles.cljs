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
   :batman "#2f2f2f"
   :dark-gray "#4f4f4f"
   :medium-gray "#a8a8a8"
   :light-gray "#eee"
   :white "#fff"
   :black "#111"})

(def container {:margin-left 15 :margin-right 15})
(def summary-header {:flex-direction "column" :background-color "#2f043e"})
(def summary-section-view {:margin-top 0 :flex-direction "row" :text-align "center" :padding 8 :border-bottom-width 1 :border-bottom-color (:medium-gray app-colors)})
(def summary-title {:color (:dark-gray app-colors) :font-size 12 :font-weight "400" :text-align :left})
(def summary-details {:font-size 12 :font-weight "600" :color (:batman app-colors) :text-align :right})

(def edit-screen {:background-color (:light-gray app-colors)})

(def analysis-info-bar {:margin-top 0 :margin-bottom 6 :flex-direction "row" :align-text "center" :background-color (:light-gray app-colors)})

(def good-deal-container {:margin-top 40 :margin-bottom 10 :background-color (:light-gray app-colors)})
(def good-deal-title {:color (:black app-colors) :font-size 25 :font-weight "400" :text-align "center"})
(def good-deal-result {:font-size 25 :font-weight "400" :text-align "center"})
(def good-deal-yes-text (merge good-deal-result {:color (:medium-green app-colors)}))
(def good-deal-no-text (merge good-deal-result {:color (:medium-red app-colors)}))
(def deal-justification-text {:text-align "center" :color (:dark-gray app-colors)})
(def good-deal-explanation {:color (:dark-gray app-colors) :font-size 12 :text-align :justify
                            :margin-left 30 :margin-right 30
                            :padding 20
                            :border-left-width 1 :border-right-width 1
                            :border-left-color (:medium-gray app-colors)})

(def input-field {:background-color (:light-gray app-colors) :font-size 16 :border-width 1 :border-color (:medium-gray app-colors) :margin-bottom 0 :border-radius 5 :padding 5})
(def input-field-container {:bottom-border-width 1 :padding-top 5 :padding-bottom 0})
(def input-view-container {:padding-left 15 :padding-right 15 :margin-top 15})

(def input-section {:border-radius 0 :background-color (:light-gray app-colors)})

(def info-section-header {:margin-bottom 5 :padding-left 20 :padding-right 20 :margin-top 10})

(def section-title {:font-weight "200" :font-size 25 :margin-bottom 10})
(def section-subtitle {:font-weight "300" :font-size 15 :font-style "italic" :margin-bottom 30})

(def label-container {:align-text "center"})
(def label {:font-weight "400" :font-size 15})
