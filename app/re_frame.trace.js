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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16901){
var map__16902 = p__16901;
var map__16902__$1 = cljs.core.__destructure_map(map__16902);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16902__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__16907_16935 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__16908_16936 = null;
var count__16909_16937 = (0);
var i__16910_16938 = (0);
while(true){
if((i__16910_16938 < count__16909_16937)){
var vec__16922_16939 = chunk__16908_16936.cljs$core$IIndexed$_nth$arity$2(null,i__16910_16938);
var k_16940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16922_16939,(0),null);
var cb_16941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16922_16939,(1),null);
try{var G__16926_16942 = cljs.core.deref(re_frame.trace.traces);
(cb_16941.cljs$core$IFn$_invoke$arity$1 ? cb_16941.cljs$core$IFn$_invoke$arity$1(G__16926_16942) : cb_16941.call(null,G__16926_16942));
}catch (e16925){var e_16943 = e16925;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16940,"while storing",cljs.core.deref(re_frame.trace.traces),e_16943], 0));
}

var G__16944 = seq__16907_16935;
var G__16945 = chunk__16908_16936;
var G__16946 = count__16909_16937;
var G__16947 = (i__16910_16938 + (1));
seq__16907_16935 = G__16944;
chunk__16908_16936 = G__16945;
count__16909_16937 = G__16946;
i__16910_16938 = G__16947;
continue;
} else {
var temp__5804__auto___16948 = cljs.core.seq(seq__16907_16935);
if(temp__5804__auto___16948){
var seq__16907_16949__$1 = temp__5804__auto___16948;
if(cljs.core.chunked_seq_QMARK_(seq__16907_16949__$1)){
var c__5568__auto___16950 = cljs.core.chunk_first(seq__16907_16949__$1);
var G__16951 = cljs.core.chunk_rest(seq__16907_16949__$1);
var G__16952 = c__5568__auto___16950;
var G__16953 = cljs.core.count(c__5568__auto___16950);
var G__16954 = (0);
seq__16907_16935 = G__16951;
chunk__16908_16936 = G__16952;
count__16909_16937 = G__16953;
i__16910_16938 = G__16954;
continue;
} else {
var vec__16927_16955 = cljs.core.first(seq__16907_16949__$1);
var k_16956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16927_16955,(0),null);
var cb_16957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16927_16955,(1),null);
try{var G__16931_16958 = cljs.core.deref(re_frame.trace.traces);
(cb_16957.cljs$core$IFn$_invoke$arity$1 ? cb_16957.cljs$core$IFn$_invoke$arity$1(G__16931_16958) : cb_16957.call(null,G__16931_16958));
}catch (e16930){var e_16959 = e16930;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16956,"while storing",cljs.core.deref(re_frame.trace.traces),e_16959], 0));
}

var G__16960 = cljs.core.next(seq__16907_16949__$1);
var G__16961 = null;
var G__16962 = (0);
var G__16963 = (0);
seq__16907_16935 = G__16960;
chunk__16908_16936 = G__16961;
count__16909_16937 = G__16962;
i__16910_16938 = G__16963;
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
