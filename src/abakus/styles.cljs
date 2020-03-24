(ns abakus.styles
  (:require [abakus.rn :as rn]))

(def summary-section-view {:margin-left 20 :margin-top 30 :flex-direction "column" :align-text "center"})
(def summary-title {:color "#fff" :font-size 18})
(def container {:margin-left 30 :margin-right 30})
(def summary-details {:font-size 17})

(def input-field {:background-color "#fff" :font-size 18 :border-bottom-width 0 :margin-bottom 10 :border-radius 10 :padding 5})
(def input-field-container {:bottom-border-width 1 :padding-top 15 :padding-bottom 0})
(def input-view-container {:padding 20})

(def input-section {:border-radius 20 :background-color "#eee"})

(def section-title {:font-weight "200" :font-size 25 :margin-bottom 10})
(def section-subtitle {:font-weight "300" :font-size 15 :font-style "italic" :margin-bottom 30})

(def label-container {:align-text "center"})
(def label {:font-weight "300" :font-size 23})
