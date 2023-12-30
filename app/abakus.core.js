goog.provide('abakus.core');
abakus.core.app_root = (function abakus$core$app_root(){
abakus.rn.storage.setItem("tesenoienoetkey","keytest");

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.app_main], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(5)], null)], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.navbar.navbar], null)], null)], null);
});
abakus.core.load_props = (function abakus$core$load_props(){
return abakus.rn.storage.getItem("props").then((function (p1__13952_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-properties","set-properties",253591533),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return (!((new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p) == null)));
}),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(p1__13952_SHARP_))], null));
}));
});
abakus.core.set_app_uid = (function abakus$core$set_app_uid(uid){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-uid","set-uid",1006200985),uid], null));
});
abakus.core.load_or_acquire_uid = (function abakus$core$load_or_acquire_uid(){
return abakus.rn.storage.getItem("uid").then((function (p1__13954_SHARP_){
if((!((p1__13954_SHARP_ == null)))){
return abakus.core.set_app_uid(p1__13954_SHARP_);
} else {
return abakus.comms.get_new_uid((function (uid){
abakus.rn.storage.setItem("uid",uid);

return abakus.core.set_app_uid(uid);
}));
}
}));
});
abakus.core.init = (function abakus$core$init(){
abakus.core.load_props();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

abakus.navbar.init(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Calculate",new cljs.core.Keyword(null,"icon","icon",1679606541),"md-calculator",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.edit_prop.edit_prop,cljs.core.PersistentArrayMap.EMPTY], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Properties",new cljs.core.Keyword(null,"icon","icon",1679606541),"md-home",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.list_props.props_list], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Reports",new cljs.core.Keyword(null,"icon","icon",1679606541),"md-analytics",new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.report], null)], null)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.edit_prop.edit_prop,cljs.core.PersistentArrayMap.EMPTY], null)], null));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hai"], 0));

return expo.root.render_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.core.app_root], null)));
});

//# sourceMappingURL=abakus.core.js.map
