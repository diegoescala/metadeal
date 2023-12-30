goog.provide('abakus.number_utils');
abakus.number_utils.localize = (function abakus$number_utils$localize(cur){
var numstr = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14081_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__14081_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),null,clojure.string.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(Math.abs(cur))))));
return [(((cur < (0)))?"-":null),"$",clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",numstr))].join('');
});
abakus.number_utils.localize_currency_vals = (function abakus$number_utils$localize_currency_vals(m){
var localized = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__14090){
var vec__14091 = p__14090;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,abakus.number_utils.localize(v));
}),cljs.core.PersistentArrayMap.EMPTY,m);
return localized;
});
abakus.number_utils.percentize = (function abakus$number_utils$percentize(v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((100) * (0.005 + v)))),"%"].join('');
});

//# sourceMappingURL=abakus.number_utils.js.map
