(ns env.index
  (:require [env.dev :as dev]))

;; undo main.js goog preamble hack
(set! js/window.goog js/undefined)

(-> (js/require "../../../js/figwheel-bridge")
    (.withModules #js {"./assets/icons/loading.png" (js/require "../../../assets/icons/loading.png"), "react-native-svg" (js/require "react-native-svg"), "expo" (js/require "expo"), "react-native-chart-kit" (js/require "react-native-chart-kit"), "./assets/images/cljs.png" (js/require "../../../assets/images/cljs.png"), "./assets/icons/app.png" (js/require "../../../assets/icons/app.png"), "@react-native-async-storage/async-storage" (js/require "@react-native-async-storage/async-storage"), "expo-constants" (js/require "expo-constants"), "react-native" (js/require "react-native"), "./assets/images/logo.svg" (js/require "../../../assets/images/logo.svg"), "react" (js/require "react"), "expo-ads-admob" (js/require "expo-ads-admob"), "create-react-class" (js/require "create-react-class"), "expo-store-review" (js/require "expo-store-review"), "@expo/vector-icons" (js/require "@expo/vector-icons")}
)
    (.start "main" "expo" "192.168.1.15"))
