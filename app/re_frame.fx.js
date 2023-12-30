goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__17255 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__17256 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__17256);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17354 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17354)){
var new_db_17355 = temp__5804__auto___17354;
var fexpr__17258_17356 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__17258_17356.cljs$core$IFn$_invoke$arity$1 ? fexpr__17258_17356.cljs$core$IFn$_invoke$arity$1(new_db_17355) : fexpr__17258_17356.call(null,new_db_17355));
} else {
}

var seq__17259 = cljs.core.seq(effects_without_db);
var chunk__17260 = null;
var count__17261 = (0);
var i__17262 = (0);
while(true){
if((i__17262 < count__17261)){
var vec__17272 = chunk__17260.cljs$core$IIndexed$_nth$arity$2(null,i__17262);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17272,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17272,(1),null);
var temp__5802__auto___17358 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17358)){
var effect_fn_17359 = temp__5802__auto___17358;
(effect_fn_17359.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17359.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17359.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17360 = seq__17259;
var G__17361 = chunk__17260;
var G__17362 = count__17261;
var G__17363 = (i__17262 + (1));
seq__17259 = G__17360;
chunk__17260 = G__17361;
count__17261 = G__17362;
i__17262 = G__17363;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17259);
if(temp__5804__auto__){
var seq__17259__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17259__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17259__$1);
var G__17364 = cljs.core.chunk_rest(seq__17259__$1);
var G__17365 = c__5568__auto__;
var G__17366 = cljs.core.count(c__5568__auto__);
var G__17367 = (0);
seq__17259 = G__17364;
chunk__17260 = G__17365;
count__17261 = G__17366;
i__17262 = G__17367;
continue;
} else {
var vec__17287 = cljs.core.first(seq__17259__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17287,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17287,(1),null);
var temp__5802__auto___17368 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17368)){
var effect_fn_17369 = temp__5802__auto___17368;
(effect_fn_17369.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17369.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17369.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17370 = cljs.core.next(seq__17259__$1);
var G__17371 = null;
var G__17372 = (0);
var G__17373 = (0);
seq__17259 = G__17370;
chunk__17260 = G__17371;
count__17261 = G__17372;
i__17262 = G__17373;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16877__auto___17374 = re_frame.interop.now();
var duration__16878__auto___17375 = (end__16877__auto___17374 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16878__auto___17375,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16877__auto___17374);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__17255);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___17377 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___17377)){
var new_db_17378 = temp__5804__auto___17377;
var fexpr__17290_17379 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__17290_17379.cljs$core$IFn$_invoke$arity$1 ? fexpr__17290_17379.cljs$core$IFn$_invoke$arity$1(new_db_17378) : fexpr__17290_17379.call(null,new_db_17378));
} else {
}

var seq__17291 = cljs.core.seq(effects_without_db);
var chunk__17292 = null;
var count__17293 = (0);
var i__17294 = (0);
while(true){
if((i__17294 < count__17293)){
var vec__17301 = chunk__17292.cljs$core$IIndexed$_nth$arity$2(null,i__17294);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17301,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17301,(1),null);
var temp__5802__auto___17380 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17380)){
var effect_fn_17381 = temp__5802__auto___17380;
(effect_fn_17381.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17381.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17381.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17382 = seq__17291;
var G__17383 = chunk__17292;
var G__17384 = count__17293;
var G__17385 = (i__17294 + (1));
seq__17291 = G__17382;
chunk__17292 = G__17383;
count__17293 = G__17384;
i__17294 = G__17385;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17291);
if(temp__5804__auto__){
var seq__17291__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17291__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17291__$1);
var G__17387 = cljs.core.chunk_rest(seq__17291__$1);
var G__17388 = c__5568__auto__;
var G__17389 = cljs.core.count(c__5568__auto__);
var G__17390 = (0);
seq__17291 = G__17387;
chunk__17292 = G__17388;
count__17293 = G__17389;
i__17294 = G__17390;
continue;
} else {
var vec__17304 = cljs.core.first(seq__17291__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17304,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17304,(1),null);
var temp__5802__auto___17391 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17391)){
var effect_fn_17392 = temp__5802__auto___17391;
(effect_fn_17392.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17392.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17392.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__17393 = cljs.core.next(seq__17291__$1);
var G__17394 = null;
var G__17395 = (0);
var G__17396 = (0);
seq__17291 = G__17393;
chunk__17292 = G__17394;
count__17293 = G__17395;
i__17294 = G__17396;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__17307){
var map__17308 = p__17307;
var map__17308__$1 = cljs.core.__destructure_map(map__17308);
var effect = map__17308__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17308__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17308__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__17312 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17313 = null;
var count__17314 = (0);
var i__17315 = (0);
while(true){
if((i__17315 < count__17314)){
var effect = chunk__17313.cljs$core$IIndexed$_nth$arity$2(null,i__17315);
re_frame.fx.dispatch_later(effect);


var G__17398 = seq__17312;
var G__17399 = chunk__17313;
var G__17400 = count__17314;
var G__17401 = (i__17315 + (1));
seq__17312 = G__17398;
chunk__17313 = G__17399;
count__17314 = G__17400;
i__17315 = G__17401;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17312);
if(temp__5804__auto__){
var seq__17312__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17312__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17312__$1);
var G__17402 = cljs.core.chunk_rest(seq__17312__$1);
var G__17403 = c__5568__auto__;
var G__17404 = cljs.core.count(c__5568__auto__);
var G__17405 = (0);
seq__17312 = G__17402;
chunk__17313 = G__17403;
count__17314 = G__17404;
i__17315 = G__17405;
continue;
} else {
var effect = cljs.core.first(seq__17312__$1);
re_frame.fx.dispatch_later(effect);


var G__17406 = cljs.core.next(seq__17312__$1);
var G__17407 = null;
var G__17408 = (0);
var G__17409 = (0);
seq__17312 = G__17406;
chunk__17313 = G__17407;
count__17314 = G__17408;
i__17315 = G__17409;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__17319 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__17320 = null;
var count__17321 = (0);
var i__17322 = (0);
while(true){
if((i__17322 < count__17321)){
var vec__17331 = chunk__17320.cljs$core$IIndexed$_nth$arity$2(null,i__17322);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17331,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17331,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17410 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17410)){
var effect_fn_17411 = temp__5802__auto___17410;
(effect_fn_17411.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17411.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17411.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17412 = seq__17319;
var G__17413 = chunk__17320;
var G__17414 = count__17321;
var G__17415 = (i__17322 + (1));
seq__17319 = G__17412;
chunk__17320 = G__17413;
count__17321 = G__17414;
i__17322 = G__17415;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17319);
if(temp__5804__auto__){
var seq__17319__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17319__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17319__$1);
var G__17416 = cljs.core.chunk_rest(seq__17319__$1);
var G__17417 = c__5568__auto__;
var G__17418 = cljs.core.count(c__5568__auto__);
var G__17419 = (0);
seq__17319 = G__17416;
chunk__17320 = G__17417;
count__17321 = G__17418;
i__17322 = G__17419;
continue;
} else {
var vec__17336 = cljs.core.first(seq__17319__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17336,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17336,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___17420 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___17420)){
var effect_fn_17421 = temp__5802__auto___17420;
(effect_fn_17421.cljs$core$IFn$_invoke$arity$1 ? effect_fn_17421.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_17421.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__17422 = cljs.core.next(seq__17319__$1);
var G__17423 = null;
var G__17424 = (0);
var G__17425 = (0);
seq__17319 = G__17422;
chunk__17320 = G__17423;
count__17321 = G__17424;
i__17322 = G__17425;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__17339 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__17340 = null;
var count__17341 = (0);
var i__17342 = (0);
while(true){
if((i__17342 < count__17341)){
var event = chunk__17340.cljs$core$IIndexed$_nth$arity$2(null,i__17342);
re_frame.router.dispatch(event);


var G__17426 = seq__17339;
var G__17427 = chunk__17340;
var G__17428 = count__17341;
var G__17429 = (i__17342 + (1));
seq__17339 = G__17426;
chunk__17340 = G__17427;
count__17341 = G__17428;
i__17342 = G__17429;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17339);
if(temp__5804__auto__){
var seq__17339__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17339__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17339__$1);
var G__17430 = cljs.core.chunk_rest(seq__17339__$1);
var G__17431 = c__5568__auto__;
var G__17432 = cljs.core.count(c__5568__auto__);
var G__17433 = (0);
seq__17339 = G__17430;
chunk__17340 = G__17431;
count__17341 = G__17432;
i__17342 = G__17433;
continue;
} else {
var event = cljs.core.first(seq__17339__$1);
re_frame.router.dispatch(event);


var G__17434 = cljs.core.next(seq__17339__$1);
var G__17435 = null;
var G__17436 = (0);
var G__17437 = (0);
seq__17339 = G__17434;
chunk__17340 = G__17435;
count__17341 = G__17436;
i__17342 = G__17437;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__17345 = cljs.core.seq(value);
var chunk__17346 = null;
var count__17347 = (0);
var i__17348 = (0);
while(true){
if((i__17348 < count__17347)){
var event = chunk__17346.cljs$core$IIndexed$_nth$arity$2(null,i__17348);
clear_event(event);


var G__17438 = seq__17345;
var G__17439 = chunk__17346;
var G__17440 = count__17347;
var G__17441 = (i__17348 + (1));
seq__17345 = G__17438;
chunk__17346 = G__17439;
count__17347 = G__17440;
i__17348 = G__17441;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17345);
if(temp__5804__auto__){
var seq__17345__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17345__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17345__$1);
var G__17442 = cljs.core.chunk_rest(seq__17345__$1);
var G__17443 = c__5568__auto__;
var G__17444 = cljs.core.count(c__5568__auto__);
var G__17445 = (0);
seq__17345 = G__17442;
chunk__17346 = G__17443;
count__17347 = G__17444;
i__17348 = G__17445;
continue;
} else {
var event = cljs.core.first(seq__17345__$1);
clear_event(event);


var G__17446 = cljs.core.next(seq__17345__$1);
var G__17447 = null;
var G__17448 = (0);
var G__17449 = (0);
seq__17345 = G__17446;
chunk__17346 = G__17447;
count__17347 = G__17448;
i__17348 = G__17449;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
