(ns abakus.rn
  (:require [reagent.core :as r :refer [atom]]))

(def ReactNative (js/require "react-native"))
(def svg (js/require "react-native-svg"))
(def Charts (js/require "react-native-chart-kit"))

(def line-chart (r/adapt-react-class (.-LineChart Charts)))

(def status-bar (.-StatusBar ReactNative))
(.setBarStyle status-bar "light-content" true)

(def storage (.-AsyncStorage ReactNative))

(def expo (js/require "expo"))
(def AtExpo (js/require "@expo/vector-icons"))
(def ionicons (.-Ionicons AtExpo))
(def ic (r/adapt-react-class ionicons))

;; ADS
(def AdMob (js/require "expo-ads-admob"))
(def Constants  (js/require "expo-constants"))
(def admob-banner (r/adapt-react-class (.-AdMobBanner AdMob)))

(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def safe-area-view (r/adapt-react-class (.-SafeAreaView ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))

(def flat-list (r/adapt-react-class (.-FlatList ReactNative)))
(def input (r/adapt-react-class (.-TextInput ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def Alert (.-Alert ReactNative))

(defn alert [title]
  (.alert Alert title))

(defn spacer
  [thickness margin-top margin-bottom]
  [view {:style {:background-color "#fff" :min-height thickness :margin-top margin-top :margin-bottom margin-bottom}}
   [text {:style {:font-size 1}} " "]])
