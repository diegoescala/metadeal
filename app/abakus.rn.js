goog.provide('abakus.rn');
abakus.rn.ReactNative = shadow.js.shim.module$react_native;
abakus.rn.svg = shadow.js.shim.module$react_native_svg;
abakus.rn.Charts = shadow.js.shim.module$react_native_chart_kit;
abakus.rn.line_chart = reagent.core.adapt_react_class(abakus.rn.Charts.LineChart);
abakus.rn.status_bar = abakus.rn.ReactNative.StatusBar;
abakus.rn.status_bar.setBarStyle("light-content",true);
abakus.rn.storage = require("@react-native-async-storage/async-storage").default;
abakus.rn.StoreReview = shadow.js.shim.module$expo_store_review;
abakus.rn.expo = shadow.js.shim.module$expo;
abakus.rn.AtExpo = shadow.js.shim.module$$expo$vector_icons;
abakus.rn.ionicons = abakus.rn.AtExpo.Ionicons;
abakus.rn.ic = reagent.core.adapt_react_class(abakus.rn.ionicons);
abakus.rn.Constants = shadow.js.shim.module$expo_constants;
abakus.rn.text = reagent.core.adapt_react_class(abakus.rn.ReactNative.Text);
abakus.rn.view = reagent.core.adapt_react_class(abakus.rn.ReactNative.View);
abakus.rn.safe_area_view = reagent.core.adapt_react_class(abakus.rn.ReactNative.SafeAreaView);
abakus.rn.scroll_view = reagent.core.adapt_react_class(abakus.rn.ReactNative.ScrollView);
abakus.rn.flat_list = reagent.core.adapt_react_class(abakus.rn.ReactNative.FlatList);
abakus.rn.input = reagent.core.adapt_react_class(abakus.rn.ReactNative.TextInput);
abakus.rn.image = reagent.core.adapt_react_class(abakus.rn.ReactNative.Image);
abakus.rn.touchable_highlight = reagent.core.adapt_react_class(abakus.rn.ReactNative.TouchableHighlight);
abakus.rn.Alert = abakus.rn.ReactNative.Alert;
abakus.rn.modal = reagent.core.adapt_react_class(abakus.rn.ReactNative.Modal);
abakus.rn.alert = (function abakus$rn$alert(title){
return abakus.rn.Alert.alert(title);
});
abakus.rn.request_review = (function abakus$rn$request_review(){
return abakus.rn.storage.getItem("review-requested").then((function (p1__13884_SHARP_){
if((!((!((p1__13884_SHARP_ == null)))))){
abakus.rn.StoreReview.requestReview();

return abakus.rn.storage.setItem("review-requested","true");
} else {
return null;
}
}));
});
abakus.rn.spacer = (function abakus$rn$spacer(thickness,margin_top,margin_bottom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"min-height","min-height",398480837),thickness,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),margin_bottom], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(1)], null)], null)," "], null)], null);
});
abakus.rn.init_tracking_transparency = (function abakus$rn$init_tracking_transparency(){
return shadow.js.shim.module$expo_tracking_transparency.getTrackingPermissionsAsync().then((function (p1__13885_SHARP_){
var permissions = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__13885_SHARP_);
var granted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(permissions,"granted");
var can_ask_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(permissions,"canAskAgain");
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-can-track","set-can-track",-1622191944),granted_QMARK_], null));

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(granted_QMARK_);
if(and__5043__auto__){
return can_ask_QMARK_;
} else {
return and__5043__auto__;
}
})())){
return shadow.js.shim.module$expo_tracking_transparency.requestTrackingPermissionsAsync();
} else {
return null;
}
}));
});

//# sourceMappingURL=abakus.rn.js.map
