goog.provide('example.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return example.db.app_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-counter","inc-counter",2085478987),(function (db,p__17524){
var vec__17526 = p__17524;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17526,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17526,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"counter","counter",804008177),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("navigation","set-root-state","navigation/set-root-state",812659384),(function (db,p__17530){
var vec__17531 = p__17530;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17531,(0),null);
var navigation_root_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17531,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation","navigation",369417),new cljs.core.Keyword(null,"root-state","root-state",1050879363)], null),navigation_root_state);
}));

//# sourceMappingURL=example.events.js.map
