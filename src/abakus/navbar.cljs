(ns abakus.navbar
  (:require [abakus.rn :as rn]
            [reagent.core :as r]
            [re-frame.core :as rf]
            [abakus.styles :as styles]))

(def pages (r/atom []))

(defn init
  [pages-info]
  (reset! pages pages-info))

(defn- page-option
  [page]
  [rn/view {:style styles/navbar-option}
   [rn/touchable-highlight {:on-press #(rf/dispatch [:set-current-page (:page page)])}
    [rn/text {:style styles/navbar-text} (:name page)]]])

(defn navbar
  []
  [rn/view {:style styles/navbar-container}
   (for [page @pages]
     ^{:key page} [page-option page])])
