(ns abakus.styles
  (:require [abakus.rn :as rn]))

(def app-colors
  {:super-light-pink "#f2dfeb"
   :light-pink "#e0cfda"
   :light-purple "#e7daef"
   :medium-purple "#460e45"
   :dark-purple "#2f043e"
   :light-green "#a2de6d"
   :medium-green "#147832"
   :lellow "#c7d052"
   :light-red "#ca7b91"
   :medium-red "#d60c5f"
   :batman "#2f2f2f"
   :dark-gray "#4f4f4f"
   :medium-gray "#a8a8a8"
   :light-gray "#eee"
   :neutral-gray "#bdbcb8"
   :gray-gray "#390240"
   :teal "#053c5b"
   :white "#fff"
   :black "#111"})

(def navbar-container {:min-height 60 :padding-top 20 :background-color (:dark-purple app-colors) :flex-direction :row :align-items :center})
(def navbar-option {:flex 1 :border-right-width 1 :border-right-color (:white app-colors)})
(def navbar-text {:color (:white app-colors) :text-align :center :font-weight :400})

(def app-main {:flex-direction "column" :flex 1})

(def centered {:align-items :center :margin :auto :margin-bottom 10})

(def good {:color (:medium-green app-colors)})
(def bad {:color (:medium-red app-colors)})
(def neutral {:color (:dark-gray app-colors)})

(def container {:margin-left 15 :margin-right 15})
(def summary-section-view {:margin-top 0 :flex-direction "row" :text-align "center" :padding 8 :margin-right 9 :border-radius 5 :background-color (:medium-purple app-colors)})
(def summary-title {:color (:white app-colors) :font-size 11 :font-weight "400" :text-align :left})
(def summary-details {:font-size 12 :font-weight "600" :color (:white app-colors) :text-align :right})

(def analysis-info-bar {:margin-top 0 :margin-bottom 6 :flex-direction "row" :align-text "center" :background-color (:dark-purple app-colors)})

(def good-deal-container {:margin-bottom 10 :border-radius 20 :padding 20 :background-color (:white app-colors)})
(def good-deal-title {:color (:black app-colors) :font-size 25 :font-weight "800" :text-align "left" :margin-bottom 10})
(def good-deal-result {:font-size 25 :font-weight "400" :text-align "left" :margin-bottom 7})
(def good-deal-yes-text (merge good-deal-result good {:font-weight :600}))
(def good-deal-no-text (merge good-deal-result bad {:font-weight :600}))
(def good-deal-maybe-text (merge good-deal-result neutral {:font-weight :600}))
(def deal-justification-text {:text-align "left" :font-size 15 :font-weight :600})

(def app-screen {:background-color (:dark-purple app-colors)})
(def screen-header {:flex-direction "column" :background-color (:dark-purple app-colors) :margin-top 40})
(def screen-title-text (merge good-deal-result neutral {:font-weight :600}))

(def explanation-button {:background-color (:teal app-colors) :padding 5 :border-radius 5})
(def good-deal-explanation {:color (:light-gray app-colors)
                            :margin-left 0 :margin-right 0 :margin-top 10
                            :padding 20
                            :background-color (:medium-purple app-colors)
                            :border-radius 15
                            ; :border-left-width 1 :border-right-width 1
                            :border-left-color (:medium-gray app-colors)})

(def good-deal-explanation-text {:color (:white app-colors) :font-size 13 :text-align :justify :line-height 18.0})

(def questionnaire-container {:flex-direction "row" :flex 1})

(def label-container {:align-text "center"})
(def label {:font-weight "500" :font-size 12})
(def input-field {:background-color (:white app-colors) :font-size 13 :border-bottom-width 1 :border-color (:medium-gray app-colors) :margin-bottom 0 :border-radius 5 :padding 3})
(def input-field-container {:bottom-border-width 1 :padding-top 5 :padding-bottom 0})
(def input-view-container {:padding-left 15 :padding-right 15 :margin-top 15 :margin-bottom 10})

(def input-section {:border-radius 20 :background-color (:white app-colors) :padding-top 20 :min-height 1750})

(def info-section-header {:margin-bottom 5 :padding-left 20 :padding-right 20 :margin-top 10})

(def section-title {:font-weight "200" :font-size 25 :margin-bottom 10})
(def section-subtitle {:font-weight "300" :font-size 15 :font-style "italic" :margin-bottom 30})

(def property {:flex-direction "row" :text-align "center" :padding 8 :margin-right 9 :margin-top 20 :border-radius 5 :background-color (:medium-purple app-colors)})
(def property-name {:font-size 22 :color :white :font-weight "600"})
