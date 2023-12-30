goog.provide('abakus.ads');
abakus.ads.test_id = "ca-app-pub-3940256099942544/2934735716";
abakus.ads.production_id = "ca-app-pub-7070415808259435/9426769000";
abakus.ads.constants = clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(abakus.rn.Constants));
abakus.ads.is_device_QMARK_ = new cljs.core.Keyword(null,"isDevice","isDevice",-771942273).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(abakus.ads.constants));
abakus.ads.plat_info = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(abakus.ads.constants));
abakus.ads.platform = ((cljs.core.contains_QMARK_(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(abakus.ads.plat_info)),new cljs.core.Keyword(null,"android","android",-2084094573)))?new cljs.core.Keyword(null,"android","android",-2084094573):new cljs.core.Keyword(null,"ios","ios",-778010715));
abakus.ads.ad_unit_id = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(abakus.ads.platform,new cljs.core.Keyword(null,"ios","ios",-778010715));
if(and__5043__auto__){
return abakus.ads.is_device_QMARK_;
} else {
return and__5043__auto__;
}
})())?abakus.ads.production_id:abakus.ads.test_id);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Platform: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(abakus.ads.platform),", Ad ID: ",abakus.ads.ad_unit_id].join('')], 0));
abakus.ads.banner = (function abakus$ads$banner(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.centered], null)], null);
});

//# sourceMappingURL=abakus.ads.js.map
