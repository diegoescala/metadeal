goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__15330,p__15331){
var map__15334 = p__15330;
var map__15334__$1 = cljs.core.__destructure_map(map__15334);
var svc = map__15334__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15334__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15334__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15334__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__15335 = p__15331;
var map__15335__$1 = cljs.core.__destructure_map(map__15335);
var msg = map__15335__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15335__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15335__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15335__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15335__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__15342,p__15343){
var map__15346 = p__15342;
var map__15346__$1 = cljs.core.__destructure_map(map__15346);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15346__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__15347 = p__15343;
var map__15347__$1 = cljs.core.__destructure_map(map__15347);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15347__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__15349,p__15350){
var map__15351 = p__15349;
var map__15351__$1 = cljs.core.__destructure_map(map__15351);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15351__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15351__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__15352 = p__15350;
var map__15352__$1 = cljs.core.__destructure_map(map__15352);
var msg = map__15352__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15352__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__15355,tid){
var map__15357 = p__15355;
var map__15357__$1 = cljs.core.__destructure_map(map__15357);
var svc = map__15357__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15357__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__15371 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__15372 = null;
var count__15374 = (0);
var i__15375 = (0);
while(true){
if((i__15375 < count__15374)){
var vec__15391 = chunk__15372.cljs$core$IIndexed$_nth$arity$2(null,i__15375);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15391,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15391,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__15436 = seq__15371;
var G__15437 = chunk__15372;
var G__15438 = count__15374;
var G__15439 = (i__15375 + (1));
seq__15371 = G__15436;
chunk__15372 = G__15437;
count__15374 = G__15438;
i__15375 = G__15439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15371);
if(temp__5804__auto__){
var seq__15371__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15371__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15371__$1);
var G__15440 = cljs.core.chunk_rest(seq__15371__$1);
var G__15441 = c__5568__auto__;
var G__15442 = cljs.core.count(c__5568__auto__);
var G__15443 = (0);
seq__15371 = G__15440;
chunk__15372 = G__15441;
count__15374 = G__15442;
i__15375 = G__15443;
continue;
} else {
var vec__15397 = cljs.core.first(seq__15371__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__15449 = cljs.core.next(seq__15371__$1);
var G__15450 = null;
var G__15451 = (0);
var G__15452 = (0);
seq__15371 = G__15449;
chunk__15372 = G__15450;
count__15374 = G__15451;
i__15375 = G__15452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__15362_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__15362_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__15363_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__15363_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__15364_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__15364_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__15365_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__15365_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__15408){
var map__15410 = p__15408;
var map__15410__$1 = cljs.core.__destructure_map(map__15410);
var svc = map__15410__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15410__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15410__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
