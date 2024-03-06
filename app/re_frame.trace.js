goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16397){
var map__16402 = p__16397;
var map__16402__$1 = cljs.core.__destructure_map(map__16402);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16402__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16402__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16402__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16402__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__16417_16484 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__16418_16485 = null;
var count__16419_16486 = (0);
var i__16420_16487 = (0);
while(true){
if((i__16420_16487 < count__16419_16486)){
var vec__16443_16489 = chunk__16418_16485.cljs$core$IIndexed$_nth$arity$2(null,i__16420_16487);
var k_16490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16443_16489,(0),null);
var cb_16491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16443_16489,(1),null);
try{var G__16449_16494 = cljs.core.deref(re_frame.trace.traces);
(cb_16491.cljs$core$IFn$_invoke$arity$1 ? cb_16491.cljs$core$IFn$_invoke$arity$1(G__16449_16494) : cb_16491.call(null,G__16449_16494));
}catch (e16447){var e_16496 = e16447;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16490,"while storing",cljs.core.deref(re_frame.trace.traces),e_16496], 0));
}

var G__16498 = seq__16417_16484;
var G__16499 = chunk__16418_16485;
var G__16500 = count__16419_16486;
var G__16501 = (i__16420_16487 + (1));
seq__16417_16484 = G__16498;
chunk__16418_16485 = G__16499;
count__16419_16486 = G__16500;
i__16420_16487 = G__16501;
continue;
} else {
var temp__5804__auto___16502 = cljs.core.seq(seq__16417_16484);
if(temp__5804__auto___16502){
var seq__16417_16504__$1 = temp__5804__auto___16502;
if(cljs.core.chunked_seq_QMARK_(seq__16417_16504__$1)){
var c__5568__auto___16505 = cljs.core.chunk_first(seq__16417_16504__$1);
var G__16507 = cljs.core.chunk_rest(seq__16417_16504__$1);
var G__16508 = c__5568__auto___16505;
var G__16509 = cljs.core.count(c__5568__auto___16505);
var G__16510 = (0);
seq__16417_16484 = G__16507;
chunk__16418_16485 = G__16508;
count__16419_16486 = G__16509;
i__16420_16487 = G__16510;
continue;
} else {
var vec__16452_16512 = cljs.core.first(seq__16417_16504__$1);
var k_16513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16452_16512,(0),null);
var cb_16514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16452_16512,(1),null);
try{var G__16459_16516 = cljs.core.deref(re_frame.trace.traces);
(cb_16514.cljs$core$IFn$_invoke$arity$1 ? cb_16514.cljs$core$IFn$_invoke$arity$1(G__16459_16516) : cb_16514.call(null,G__16459_16516));
}catch (e16456){var e_16518 = e16456;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16513,"while storing",cljs.core.deref(re_frame.trace.traces),e_16518], 0));
}

var G__16521 = cljs.core.next(seq__16417_16504__$1);
var G__16522 = null;
var G__16523 = (0);
var G__16524 = (0);
seq__16417_16484 = G__16521;
chunk__16418_16485 = G__16522;
count__16419_16486 = G__16523;
i__16420_16487 = G__16524;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
