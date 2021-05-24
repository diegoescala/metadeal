(ns app.index
  (:require
   ; ["@react-navigation/native" :as navi]
   ; ["@react-navigation/stack" :as rn-stack]
   ; ["expo" :as ex]
   ; ["expo-constants" :as expo-constants]
   ; ["react" :as react]
   ; ["react-native" :as rna]
   ; ["react-native-paper" :as paper]
   ; ["tailwind-rn" :default tailwind-rn]

   [applied-science.js-interop :as j]
   [reagent.core :as r]
   [re-frame.core :refer [dispatch-sync]]
   [re-frame.core :refer [subscribe dispatch dispatch-sync]]
   [shadow.expo :as expo]

   [app.fx]
   [app.handlers]
   [app.subscriptions]
   [app.helpers :refer [<sub >evt]]

   [abakus.rn :as rn]
   [abakus.handlers]
   [abakus.subs]
   [abakus.edit-prop :as edit-prop]
   [abakus.styles :as styles]
   [abakus.reports :as reports]
   [abakus.navbar :as nav]
   [abakus.list-props :as props]
   [cljs.reader :refer [read-string]]
   [abakus.comms :as comms]))

(defn tw [style-str]
  ;; https://github.com/vadimdemedes/tailwind-rn#supported-utilities
  (-> style-str
      tailwind-rn
      (js->clj :keywordize-keys true)))

;; must use defonce and must refresh full app so metro can fill these in
;; at live-reload time `require` does not exist and will cause errors
;; must use path relative to :output-dir
(defonce splash-img (js/require "../assets/shadow-cljs.png"))

; (defn screen-main [props]
;   (r/as-element
;     (let [version         (<sub [:version])
;           theme-selection (<sub [:theme])
;           theme           (-> props (j/get :theme))
;           expo-version    (-> expo-constants
;                               (j/get :default)
;                               (j/get :manifest)
;                               (j/get :sdkVersion))]
;
;       [:> rna/SafeAreaView {:style (tw "flex flex-1")}
;        [:> rna/StatusBar {:visibility "hidden"}]
;        [:> paper/Surface {:style (tw "flex flex-1 justify-center")}
;         [:> rn/View
;          [:> paper/Card
;           [:> paper/Card.Cover {:source splash-img}]
;           [:> paper/Card.Title {:title    "My old expo cljs app!"
;                                 :subtitle (str "Version: " version)}]
;           [:> paper/Card.Content
;            [:> paper/Paragraph (str "Using Expo SDK: " expo-version)]
;            [:> rn/View {:style (tw "flex flex-row justify-between")}
;             [:> paper/Text
;              {:style {:color (-> theme
;                                  (j/get :colors)
;                                  (j/get :accent))}}
;              "Dark mode"]
;             [:> paper/Switch {:value           (= theme-selection :dark)
;                               :on-value-change #(>evt [:set-theme (if (= theme-selection :dark)
;                                                                     :light
;                                                                     :dark)])}]]]]]]])))

; (def stack (rn-stack/createStackNavigator))

; (defn navigator [] (-> stack (j/get :Navigator)))

; (defn screen [props] [:> (-> stack (j/get :Screen)) props])

(defn root []
  (do
    (.setItem rn/storage "testkey" "keytest")
    ; (-> (.getItem rn/storage "props") (.then #(println (str "Val: " %))))
    [rn/view {:style styles/app-main}
     [rn/view {:style {:flex 5}}
      ; [nav/navbar]
      @(subscribe [:current-page])]
     [rn/view ;{:style {:flex 1}}
       [nav/navbar]]]))


; (defn root2 []
;   (let [theme           (<sub [:theme])
;         !route-name-ref (clojure.core/atom {})
;         !navigation-ref (clojure.core/atom {})]
;
;     [:> paper/Provider
;      {:theme (case theme
;                :light paper/DefaultTheme
;                :dark  paper/DarkTheme
;                paper/DarkTheme)}
;
;      [:> navi/NavigationContainer
;       {:ref             (fn [el] (reset! !navigation-ref el))
;        :on-ready        (fn []
;                           (swap! !route-name-ref merge {:current (-> @!navigation-ref
;                                                                      (j/call :getCurrentRoute)
;                                                                      (j/get :name))}))
;        :on-state-change (fn []
;                           (let [prev-route-name    (-> @!route-name-ref :current)
;                                 current-route-name (-> @!navigation-ref
;                                                        (j/call :getCurrentRoute)
;                                                        (j/get :name))]
;                             (when (not= prev-route-name current-route-name)
;                               ;; This is where you can do side effecty things like analytics
;                               (>evt [:some-fx-example (str "New screen encountered " current-route-name)]))
;                             (swap! !route-name-ref merge {:current current-route-name})))}
;
;       [:> (navigator) {:header-mode "none"}
;        (screen {:name      "Screen1"
;                 :component (paper/withTheme screen-main)})]]]))

(defn start
  {:dev/after-load true}
  []
  (expo/render-root (r/as-element [root])))

; (def version (-> expo-constants
;                  (j/get :default)
;                  (j/get :manifest)
;                  (j/get :version)))

(defn init []
  ; (dispatch-sync [:initialize-db])
  ; (dispatch-sync [:set-version version])
  (start))
