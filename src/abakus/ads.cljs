(ns abakus.ads
  (:require [abakus.rn :as rn]
            [abakus.styles :as styles]))

(def test-id "ca-app-pub-3940256099942544/2934735716")
(def production-id "ca-app-pub-7070415808259435/9426769000")

(def constants (clojure.walk/keywordize-keys (js->clj rn/Constants)))
(def is-device? (-> constants :default :isDevice))
;(println (-> constants :default :isDevice))
(def plat-info (-> constants :default :platform))
(def platform (if (contains? (into #{} (keys plat-info))
                             :android)
                  :android
                  :ios))

(def ad-unit-id (if (and (= platform :ios)
                         is-device?)
                    production-id test-id))

(println (str "Platform: " platform ", Ad ID: " ad-unit-id))
(js/console.log "Storage: " storage)

(defn banner
  []
  [rn/view {:style styles/centered}
;   (when (not= platform :android)
     ; [rn/text {:style styles/summary-title} (str "Ad space for ") ad-unit-id]
     [rn/admob-banner {:bannerSize :banner :adUnitID ad-unit-id
                       :servePersonalizedAds true
                       :onDidFailToReceiveAdWithError #(println "Ad recv error")}]])
