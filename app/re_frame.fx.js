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
var _STAR_current_trace_STAR__orig_val__18616 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18617 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18617);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___18760 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___18760)){
var new_db_18761 = temp__5804__auto___18760;
var fexpr__18623_18762 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__18623_18762.cljs$core$IFn$_invoke$arity$1 ? fexpr__18623_18762.cljs$core$IFn$_invoke$arity$1(new_db_18761) : fexpr__18623_18762.call(null,new_db_18761));
} else {
}

var seq__18624 = cljs.core.seq(effects_without_db);
var chunk__18625 = null;
var count__18626 = (0);
var i__18627 = (0);
while(true){
if((i__18627 < count__18626)){
var vec__18641 = chunk__18625.cljs$core$IIndexed$_nth$arity$2(null,i__18627);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18641,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18641,(1),null);
var temp__5802__auto___18763 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___18763)){
var effect_fn_18764 = temp__5802__auto___18763;
(effect_fn_18764.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18764.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18764.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18765 = seq__18624;
var G__18766 = chunk__18625;
var G__18767 = count__18626;
var G__18768 = (i__18627 + (1));
seq__18624 = G__18765;
chunk__18625 = G__18766;
count__18626 = G__18767;
i__18627 = G__18768;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18624);
if(temp__5804__auto__){
var seq__18624__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18624__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18624__$1);
var G__18769 = cljs.core.chunk_rest(seq__18624__$1);
var G__18770 = c__5568__auto__;
var G__18771 = cljs.core.count(c__5568__auto__);
var G__18772 = (0);
seq__18624 = G__18769;
chunk__18625 = G__18770;
count__18626 = G__18771;
i__18627 = G__18772;
continue;
} else {
var vec__18644 = cljs.core.first(seq__18624__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18644,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18644,(1),null);
var temp__5802__auto___18774 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___18774)){
var effect_fn_18775 = temp__5802__auto___18774;
(effect_fn_18775.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18775.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18775.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18777 = cljs.core.next(seq__18624__$1);
var G__18778 = null;
var G__18779 = (0);
var G__18780 = (0);
seq__18624 = G__18777;
chunk__18625 = G__18778;
count__18626 = G__18779;
i__18627 = G__18780;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16325__auto___18781 = re_frame.interop.now();
var duration__16326__auto___18782 = (end__16325__auto___18781 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16326__auto___18782,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16325__auto___18781);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18616);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___18783 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___18783)){
var new_db_18784 = temp__5804__auto___18783;
var fexpr__18647_18785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__18647_18785.cljs$core$IFn$_invoke$arity$1 ? fexpr__18647_18785.cljs$core$IFn$_invoke$arity$1(new_db_18784) : fexpr__18647_18785.call(null,new_db_18784));
} else {
}

var seq__18648 = cljs.core.seq(effects_without_db);
var chunk__18649 = null;
var count__18650 = (0);
var i__18651 = (0);
while(true){
if((i__18651 < count__18650)){
var vec__18660 = chunk__18649.cljs$core$IIndexed$_nth$arity$2(null,i__18651);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18660,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18660,(1),null);
var temp__5802__auto___18786 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___18786)){
var effect_fn_18787 = temp__5802__auto___18786;
(effect_fn_18787.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18787.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18787.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18788 = seq__18648;
var G__18789 = chunk__18649;
var G__18790 = count__18650;
var G__18791 = (i__18651 + (1));
seq__18648 = G__18788;
chunk__18649 = G__18789;
count__18650 = G__18790;
i__18651 = G__18791;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18648);
if(temp__5804__auto__){
var seq__18648__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18648__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18648__$1);
var G__18792 = cljs.core.chunk_rest(seq__18648__$1);
var G__18793 = c__5568__auto__;
var G__18794 = cljs.core.count(c__5568__auto__);
var G__18795 = (0);
seq__18648 = G__18792;
chunk__18649 = G__18793;
count__18650 = G__18794;
i__18651 = G__18795;
continue;
} else {
var vec__18663 = cljs.core.first(seq__18648__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18663,(1),null);
var temp__5802__auto___18796 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___18796)){
var effect_fn_18797 = temp__5802__auto___18796;
(effect_fn_18797.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18797.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18797.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18800 = cljs.core.next(seq__18648__$1);
var G__18801 = null;
var G__18802 = (0);
var G__18803 = (0);
seq__18648 = G__18800;
chunk__18649 = G__18801;
count__18650 = G__18802;
i__18651 = G__18803;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__18666){
var map__18667 = p__18666;
var map__18667__$1 = cljs.core.__destructure_map(map__18667);
var effect = map__18667__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__18670 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__18671 = null;
var count__18672 = (0);
var i__18673 = (0);
while(true){
if((i__18673 < count__18672)){
var effect = chunk__18671.cljs$core$IIndexed$_nth$arity$2(null,i__18673);
re_frame.fx.dispatch_later(effect);


var G__18808 = seq__18670;
var G__18809 = chunk__18671;
var G__18810 = count__18672;
var G__18811 = (i__18673 + (1));
seq__18670 = G__18808;
chunk__18671 = G__18809;
count__18672 = G__18810;
i__18673 = G__18811;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18670);
if(temp__5804__auto__){
var seq__18670__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18670__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18670__$1);
var G__18812 = cljs.core.chunk_rest(seq__18670__$1);
var G__18813 = c__5568__auto__;
var G__18814 = cljs.core.count(c__5568__auto__);
var G__18815 = (0);
seq__18670 = G__18812;
chunk__18671 = G__18813;
count__18672 = G__18814;
i__18673 = G__18815;
continue;
} else {
var effect = cljs.core.first(seq__18670__$1);
re_frame.fx.dispatch_later(effect);


var G__18816 = cljs.core.next(seq__18670__$1);
var G__18817 = null;
var G__18818 = (0);
var G__18819 = (0);
seq__18670 = G__18816;
chunk__18671 = G__18817;
count__18672 = G__18818;
i__18673 = G__18819;
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
var seq__18680 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__18681 = null;
var count__18682 = (0);
var i__18683 = (0);
while(true){
if((i__18683 < count__18682)){
var vec__18699 = chunk__18681.cljs$core$IIndexed$_nth$arity$2(null,i__18683);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18699,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18699,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___18820 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___18820)){
var effect_fn_18821 = temp__5802__auto___18820;
(effect_fn_18821.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18821.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18821.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__18822 = seq__18680;
var G__18823 = chunk__18681;
var G__18824 = count__18682;
var G__18825 = (i__18683 + (1));
seq__18680 = G__18822;
chunk__18681 = G__18823;
count__18682 = G__18824;
i__18683 = G__18825;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18680);
if(temp__5804__auto__){
var seq__18680__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18680__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18680__$1);
var G__18826 = cljs.core.chunk_rest(seq__18680__$1);
var G__18827 = c__5568__auto__;
var G__18828 = cljs.core.count(c__5568__auto__);
var G__18829 = (0);
seq__18680 = G__18826;
chunk__18681 = G__18827;
count__18682 = G__18828;
i__18683 = G__18829;
continue;
} else {
var vec__18703 = cljs.core.first(seq__18680__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18703,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___18832 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___18832)){
var effect_fn_18833 = temp__5802__auto___18832;
(effect_fn_18833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__18834 = cljs.core.next(seq__18680__$1);
var G__18835 = null;
var G__18836 = (0);
var G__18837 = (0);
seq__18680 = G__18834;
chunk__18681 = G__18835;
count__18682 = G__18836;
i__18683 = G__18837;
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
var seq__18732 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__18733 = null;
var count__18734 = (0);
var i__18735 = (0);
while(true){
if((i__18735 < count__18734)){
var event = chunk__18733.cljs$core$IIndexed$_nth$arity$2(null,i__18735);
re_frame.router.dispatch(event);


var G__18838 = seq__18732;
var G__18839 = chunk__18733;
var G__18840 = count__18734;
var G__18841 = (i__18735 + (1));
seq__18732 = G__18838;
chunk__18733 = G__18839;
count__18734 = G__18840;
i__18735 = G__18841;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18732);
if(temp__5804__auto__){
var seq__18732__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18732__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18732__$1);
var G__18842 = cljs.core.chunk_rest(seq__18732__$1);
var G__18843 = c__5568__auto__;
var G__18844 = cljs.core.count(c__5568__auto__);
var G__18845 = (0);
seq__18732 = G__18842;
chunk__18733 = G__18843;
count__18734 = G__18844;
i__18735 = G__18845;
continue;
} else {
var event = cljs.core.first(seq__18732__$1);
re_frame.router.dispatch(event);


var G__18846 = cljs.core.next(seq__18732__$1);
var G__18847 = null;
var G__18848 = (0);
var G__18849 = (0);
seq__18732 = G__18846;
chunk__18733 = G__18847;
count__18734 = G__18848;
i__18735 = G__18849;
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
var seq__18738 = cljs.core.seq(value);
var chunk__18739 = null;
var count__18740 = (0);
var i__18741 = (0);
while(true){
if((i__18741 < count__18740)){
var event = chunk__18739.cljs$core$IIndexed$_nth$arity$2(null,i__18741);
clear_event(event);


var G__18850 = seq__18738;
var G__18851 = chunk__18739;
var G__18852 = count__18740;
var G__18853 = (i__18741 + (1));
seq__18738 = G__18850;
chunk__18739 = G__18851;
count__18740 = G__18852;
i__18741 = G__18853;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18738);
if(temp__5804__auto__){
var seq__18738__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18738__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18738__$1);
var G__18854 = cljs.core.chunk_rest(seq__18738__$1);
var G__18855 = c__5568__auto__;
var G__18856 = cljs.core.count(c__5568__auto__);
var G__18857 = (0);
seq__18738 = G__18854;
chunk__18739 = G__18855;
count__18740 = G__18856;
i__18741 = G__18857;
continue;
} else {
var event = cljs.core.first(seq__18738__$1);
clear_event(event);


var G__18858 = cljs.core.next(seq__18738__$1);
var G__18859 = null;
var G__18860 = (0);
var G__18861 = (0);
seq__18738 = G__18858;
chunk__18739 = G__18859;
count__18740 = G__18860;
i__18741 = G__18861;
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
