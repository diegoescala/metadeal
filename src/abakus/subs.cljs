(ns abakus.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :get-greeting
 (fn [db _]
   (:greeting db)))

(reg-sub :current-page (fn [db _] (:current-page db)))
(reg-sub :prop-info (fn [db _] (:prop-info db)))
(reg-sub :properties (fn [db _] (:properties db)))
(reg-sub :uid       (fn [db _] (:uid db)))
(reg-sub :can-track (fn [db _] (:can-track db)))
