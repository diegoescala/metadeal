goog.provide('abakus.number_utils');
abakus.number_utils.localize = (function abakus$number_utils$localize(cur){
var numstr = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21288_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__21288_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((3),(3),null,clojure.string.reverse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(Math.abs(cur))))));
return [(((cur < (0)))?"-":null),"$",clojure.string.reverse(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",numstr))].join('');
});
abakus.number_utils.localize_currency_vals = (function abakus$number_utils$localize_currency_vals(m){
var localized = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__21327){
var vec__21328 = p__21327;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21328,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,abakus.number_utils.localize(v));
}),cljs.core.PersistentArrayMap.EMPTY,m);
return localized;
});
abakus.number_utils.percentize = (function abakus$number_utils$percentize(v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.floor(((100) * (0.005 + v)))),"%"].join('');
});

//# sourceMappingURL=abakus.number_utils.js.map
