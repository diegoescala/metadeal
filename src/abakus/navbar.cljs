(ns abakus.navbar
  (:require [abakus.rn :as rn]
            [reagent.core :as r]
            [abakus.styles :as styles]))

(def pages (r/atom []))

(defn init
  [pages-info]
  (reset! pages pages-info))

(defn navbar
  []
  [rn/view {:style styles/navbar-container}
   [rn/text {:style styles/navbar-text} "This is a navbar"]])
