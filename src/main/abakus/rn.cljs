(ns abakus.rn
  (:require [reagent.core :as r :refer [atom]]
            ; ["@react-navigation/native" :as navi]
            ; ["@react-navigation/stack" :as rn-stack]
            ["expo" :as ex]
            ["expo-constants" :as expo-constants]
            ["react" :as react]
            ["react-native" :as rna]
            ["react-native-paper" :as paper]
            ["react-native-svg" :as rnsvg]
            ["react-native-chart-kit" :as rncharts]
            ["expo-store-review" :as expostore]
            ["@expo/vector-icons" :as expoicons]
            ;["expo-ads-admob" :as expoadmob]
            ;; ["react-native-google-mobile-ads" :as googads]
            ["expo-constants" :as expoconstants]
            ["expo-tracking-transparency" :as tracking]
            [re-frame.core :as rf]))

(def ReactNative rna)
(def svg rnsvg)
(def Charts rncharts)

(def line-chart (r/adapt-react-class (.-LineChart Charts)))

(def status-bar (.-StatusBar ReactNative))
(.setBarStyle status-bar "light-content" true)

(def storage (.-default (js/require "@react-native-async-storage/async-storage")))

(def StoreReview expostore)

(def expo ex)
(def AtExpo expoicons)
(def ionicons (.-Ionicons AtExpo))
(def ic (r/adapt-react-class ionicons))

;; ADS
;(def AdMob expoadmob)
(def Constants expoconstants)
;(def admob-banner (r/adapt-react-class (.-AdMobBanner AdMob)))
;; (def banner-ad (r/adapt-react-class (.-BannerAd googads)))
;; (def banner-ad-size (.-BannerAdSize googads))
;; (def ad-test-ids (.-TestIds googads))



(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def safe-area-view (r/adapt-react-class (.-SafeAreaView ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))

(def flat-list (r/adapt-react-class (.-FlatList ReactNative)))
(def input (r/adapt-react-class (.-TextInput ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))

(def Alert (.-Alert ReactNative))
(def modal (r/adapt-react-class (.-Modal ReactNative)))

(defn alert [title]
  (.alert Alert title))

(defn request-review
  []
  (-> (.getItem storage "review-requested") (.then #(if (not (some? %))
                                                        (do
                                                          (.requestReview StoreReview)
                                                          (.setItem storage "review-requested" "true"))))))

(defn spacer
  [thickness margin-top margin-bottom]
  [view {:style {:background-color "#fff" :min-height thickness :margin-top margin-top :margin-bottom margin-bottom}}
   [text {:style {:font-size 1}} " "]])

(defn init-tracking-transparency
  []
  (-> (tracking/getTrackingPermissionsAsync)
      (.then #(let [permissions (js->clj %)
                    granted? (get permissions "granted")
                    can-ask? (get permissions "canAskAgain")]
                ; (js/console.log "Status: " %)
                ; (println (prn-str permissions))
                (rf/dispatch [:set-can-track granted?])
                (when (and (not granted?) can-ask?)
                  (tracking/requestTrackingPermissionsAsync))))))
