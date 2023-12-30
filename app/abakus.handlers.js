goog.provide('abakus.handlers');
/**
 * Throw an exception if db doesn't have a valid spec.
 */
abakus.handlers.check_and_throw = (function abakus$handlers$check_and_throw(spec,db){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,db)){
return null;
} else {
var explain_data = cljs.spec.alpha.explain_data(spec,db);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Spec check failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(explain_data)].join(''),explain_data);
}
});
abakus.handlers.validate_spec = (cljs.core.truth_(goog.DEBUG)?re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"validate-spec","validate-spec",-202873800),new cljs.core.Keyword(null,"after","after",594996914),(function (context){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
abakus.handlers.check_and_throw(new cljs.core.Keyword("abakus.db","app-db","abakus.db/app-db",1849565553),db);

return context;
})], 0)):re_frame.core.__GT_interceptor);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.handlers.validate_spec], null),(function (_,___$1){
return abakus.db.app_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-greeting","set-greeting",-653540063),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.handlers.validate_spec], null),(function (db,p__16494){
var vec__16496 = p__16494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16496,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16496,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"greeting","greeting",462222107),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__16500){
var vec__16502 = p__16500;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16502,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16502,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-prop-info","set-prop-info",1228639413),(function (db,p__16507){
var vec__16508 = p__16507;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16508,(1),null);
abakus.comms.update_prop(prop);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"prop-info","prop-info",-1596130956),prop);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-properties","set-properties",253591533),(function (db,p__16514){
var vec__16515 = p__16514;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16515,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16515,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"properties","properties",685819552),props);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-uid","set-uid",1006200985),(function (db,p__16518){
var vec__16520 = p__16518;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(0),null);
var uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16520,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-can-track","set-can-track",-1622191944),(function (db,p__16524){
var vec__16525 = p__16524;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16525,(0),null);
var can_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16525,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"can-track","can-track",1973498886),can_QMARK_);
}));

//# sourceMappingURL=abakus.handlers.js.map
