goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__11432){
var map__11433 = p__11432;
var map__11433__$1 = cljs.core.__destructure_map(map__11433);
var runtime = map__11433__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11433__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_11533 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_11533)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__11434 = runtime;
var G__11435 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_11533);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__11434,G__11435) : shadow.remote.runtime.shared.process.call(null,G__11434,G__11435));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__11436,res){
var map__11437 = p__11436;
var map__11437__$1 = cljs.core.__destructure_map(map__11437);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11437__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11437__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__11438 = res;
var G__11438__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11438,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__11438);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11438__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__11438__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__11440 = arguments.length;
switch (G__11440) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11441,msg,handlers,timeout_after_ms){
var map__11442 = p__11441;
var map__11442__$1 = cljs.core.__destructure_map(map__11442);
var runtime = map__11442__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11442__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___11540 = arguments.length;
var i__5770__auto___11541 = (0);
while(true){
if((i__5770__auto___11541 < len__5769__auto___11540)){
args__5775__auto__.push((arguments[i__5770__auto___11541]));

var G__11542 = (i__5770__auto___11541 + (1));
i__5770__auto___11541 = G__11542;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11450,ev,args){
var map__11451 = p__11450;
var map__11451__$1 = cljs.core.__destructure_map(map__11451);
var runtime = map__11451__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11451__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11453 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11456 = null;
var count__11457 = (0);
var i__11458 = (0);
while(true){
if((i__11458 < count__11457)){
var ext = chunk__11456.cljs$core$IIndexed$_nth$arity$2(null,i__11458);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11555 = seq__11453;
var G__11556 = chunk__11456;
var G__11557 = count__11457;
var G__11558 = (i__11458 + (1));
seq__11453 = G__11555;
chunk__11456 = G__11556;
count__11457 = G__11557;
i__11458 = G__11558;
continue;
} else {
var G__11559 = seq__11453;
var G__11560 = chunk__11456;
var G__11561 = count__11457;
var G__11562 = (i__11458 + (1));
seq__11453 = G__11559;
chunk__11456 = G__11560;
count__11457 = G__11561;
i__11458 = G__11562;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11453);
if(temp__5804__auto__){
var seq__11453__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11453__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11453__$1);
var G__11563 = cljs.core.chunk_rest(seq__11453__$1);
var G__11564 = c__5568__auto__;
var G__11565 = cljs.core.count(c__5568__auto__);
var G__11566 = (0);
seq__11453 = G__11563;
chunk__11456 = G__11564;
count__11457 = G__11565;
i__11458 = G__11566;
continue;
} else {
var ext = cljs.core.first(seq__11453__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__11567 = cljs.core.next(seq__11453__$1);
var G__11568 = null;
var G__11569 = (0);
var G__11570 = (0);
seq__11453 = G__11567;
chunk__11456 = G__11568;
count__11457 = G__11569;
i__11458 = G__11570;
continue;
} else {
var G__11573 = cljs.core.next(seq__11453__$1);
var G__11574 = null;
var G__11575 = (0);
var G__11576 = (0);
seq__11453 = G__11573;
chunk__11456 = G__11574;
count__11457 = G__11575;
i__11458 = G__11576;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11445){
var G__11446 = cljs.core.first(seq11445);
var seq11445__$1 = cljs.core.next(seq11445);
var G__11447 = cljs.core.first(seq11445__$1);
var seq11445__$2 = cljs.core.next(seq11445__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11446,G__11447,seq11445__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11467,p__11468){
var map__11469 = p__11467;
var map__11469__$1 = cljs.core.__destructure_map(map__11469);
var runtime = map__11469__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11469__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11470 = p__11468;
var map__11470__$1 = cljs.core.__destructure_map(map__11470);
var msg = map__11470__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__11472 = cljs.core.deref(state_ref);
var map__11472__$1 = cljs.core.__destructure_map(map__11472);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11472__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11472__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11473,msg){
var map__11475 = p__11473;
var map__11475__$1 = cljs.core.__destructure_map(map__11475);
var runtime = map__11475__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11477,key,p__11478){
var map__11479 = p__11477;
var map__11479__$1 = cljs.core.__destructure_map(map__11479);
var state = map__11479__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11479__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11480 = p__11478;
var map__11480__$1 = cljs.core.__destructure_map(map__11480);
var spec = map__11480__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11480__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11482,key,spec){
var map__11484 = p__11482;
var map__11484__$1 = cljs.core.__destructure_map(map__11484);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11484__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11488_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11488_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11489_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11489_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11490_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11490_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11492_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11492_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11493_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11493_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11499,key){
var map__11501 = p__11499;
var map__11501__$1 = cljs.core.__destructure_map(map__11501);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11501__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11504,msg){
var map__11505 = p__11504;
var map__11505__$1 = cljs.core.__destructure_map(map__11505);
var runtime = map__11505__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11505__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11510,p__11511){
var map__11512 = p__11510;
var map__11512__$1 = cljs.core.__destructure_map(map__11512);
var runtime = map__11512__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11512__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11513 = p__11511;
var map__11513__$1 = cljs.core.__destructure_map(map__11513);
var msg = map__11513__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11513__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11513__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__11514 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11516 = null;
var count__11517 = (0);
var i__11518 = (0);
while(true){
if((i__11518 < count__11517)){
var map__11524 = chunk__11516.cljs$core$IIndexed$_nth$arity$2(null,i__11518);
var map__11524__$1 = cljs.core.__destructure_map(map__11524);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11524__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11730 = seq__11514;
var G__11731 = chunk__11516;
var G__11732 = count__11517;
var G__11733 = (i__11518 + (1));
seq__11514 = G__11730;
chunk__11516 = G__11731;
count__11517 = G__11732;
i__11518 = G__11733;
continue;
} else {
var G__11737 = seq__11514;
var G__11738 = chunk__11516;
var G__11739 = count__11517;
var G__11740 = (i__11518 + (1));
seq__11514 = G__11737;
chunk__11516 = G__11738;
count__11517 = G__11739;
i__11518 = G__11740;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11514);
if(temp__5804__auto__){
var seq__11514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11514__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__11514__$1);
var G__11742 = cljs.core.chunk_rest(seq__11514__$1);
var G__11743 = c__5568__auto__;
var G__11744 = cljs.core.count(c__5568__auto__);
var G__11745 = (0);
seq__11514 = G__11742;
chunk__11516 = G__11743;
count__11517 = G__11744;
i__11518 = G__11745;
continue;
} else {
var map__11527 = cljs.core.first(seq__11514__$1);
var map__11527__$1 = cljs.core.__destructure_map(map__11527);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11527__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__11746 = cljs.core.next(seq__11514__$1);
var G__11747 = null;
var G__11748 = (0);
var G__11749 = (0);
seq__11514 = G__11746;
chunk__11516 = G__11747;
count__11517 = G__11748;
i__11518 = G__11749;
continue;
} else {
var G__11752 = cljs.core.next(seq__11514__$1);
var G__11753 = null;
var G__11754 = (0);
var G__11755 = (0);
seq__11514 = G__11752;
chunk__11516 = G__11753;
count__11517 = G__11754;
i__11518 = G__11755;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
