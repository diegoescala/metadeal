(ns abakus.core
    (:require [reagent.core :as r :refer [atom]]
              [re-frame.core :refer [subscribe dispatch dispatch-sync]]
              [oops.core :refer [ocall]]
              [abakus.rn :as rn]
              [abakus.handlers]
              [abakus.subs]
              [abakus.edit-prop :as edit-prop]))


(defn app-root []
  [edit-prop/edit-prop {:hoa 20}])

(defn init []
  (dispatch-sync [:initialize-db])
  (ocall rn/expo "registerRootComponent" (r/reactify-component app-root)))
