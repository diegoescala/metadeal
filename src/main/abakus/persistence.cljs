(ns abakus.persistence
  (:require [re-frame.core :as rf]
            [abakus.rn :as rn]))

(defn save-properties
  [props]
  (.setItem rn/storage "props" (prn-str props)))
