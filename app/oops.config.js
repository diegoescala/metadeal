goog.provide('oops.config');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

(oops.config._STAR_runtime_config_STAR_ = new_config);

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17970 = arguments.length;
var i__5770__auto___17971 = (0);
while(true){
if((i__5770__auto___17971 < len__5769__auto___17970)){
args__5775__auto__.push((arguments[i__5770__auto___17971]));

var G__17972 = (i__5770__auto___17971 + (1));
i__5770__auto___17971 = G__17972;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
}));

(oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq17861){
var G__17862 = cljs.core.first(seq17861);
var seq17861__$1 = cljs.core.next(seq17861);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17862,seq17861__$1);
}));

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17973 = arguments.length;
var i__5770__auto___17974 = (0);
while(true){
if((i__5770__auto___17974 < len__5769__auto___17973)){
args__5775__auto__.push((arguments[i__5770__auto___17974]));

var G__17975 = (i__5770__auto___17974 + (1));
i__5770__auto___17974 = G__17975;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__17881){
var vec__17882 = p__17881;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17882,(0),null);
var G__17885 = (function (){var or__5045__auto__ = config;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__17885) : key.call(null,G__17885));
}));

(oops.config.get_config_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.get_config_key.cljs$lang$applyTo = (function (seq17871){
var G__17872 = cljs.core.first(seq17871);
var seq17871__$1 = cljs.core.next(seq17871);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17872,seq17871__$1);
}));

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17980 = arguments.length;
var i__5770__auto___17981 = (0);
while(true){
if((i__5770__auto___17981 < len__5769__auto___17980)){
args__5775__auto__.push((arguments[i__5770__auto___17981]));

var G__17982 = (i__5770__auto___17981 + (1));
i__5770__auto___17981 = G__17982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__17895){
var vec__17897 = p__17895;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__5045__auto__ = config;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
}));

(oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq17886){
var G__17887 = cljs.core.first(seq17886);
var seq17886__$1 = cljs.core.next(seq17886);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17887,seq17886__$1);
}));

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17986 = arguments.length;
var i__5770__auto___17987 = (0);
while(true){
if((i__5770__auto___17987 < len__5769__auto___17986)){
args__5775__auto__.push((arguments[i__5770__auto___17987]));

var G__17988 = (i__5770__auto___17987 + (1));
i__5770__auto___17987 = G__17988;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__17911){
var vec__17912 = p__17911;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17912,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq17906){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17906));
}));

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17989 = arguments.length;
var i__5770__auto___17990 = (0);
while(true){
if((i__5770__auto___17990 < len__5769__auto___17989)){
args__5775__auto__.push((arguments[i__5770__auto___17990]));

var G__17991 = (i__5770__auto___17990 + (1));
i__5770__auto___17990 = G__17991;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__17921){
var vec__17923 = p__17921;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17923,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq17915){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17915));
}));

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17992 = arguments.length;
var i__5770__auto___17993 = (0);
while(true){
if((i__5770__auto___17993 < len__5769__auto___17992)){
args__5775__auto__.push((arguments[i__5770__auto___17993]));

var G__17994 = (i__5770__auto___17993 + (1));
i__5770__auto___17993 = G__17994;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__17929){
var vec__17930 = p__17929;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17930,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq17928){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17928));
}));

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17995 = arguments.length;
var i__5770__auto___17996 = (0);
while(true){
if((i__5770__auto___17996 < len__5769__auto___17995)){
args__5775__auto__.push((arguments[i__5770__auto___17996]));

var G__17997 = (i__5770__auto___17996 + (1));
i__5770__auto___17996 = G__17997;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__17942){
var vec__17944 = p__17942;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17944,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
}));

(oops.config.get_child_factory.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.get_child_factory.cljs$lang$applyTo = (function (seq17935){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17935));
}));

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17998 = arguments.length;
var i__5770__auto___17999 = (0);
while(true){
if((i__5770__auto___17999 < len__5769__auto___17998)){
args__5775__auto__.push((arguments[i__5770__auto___17999]));

var G__18000 = (i__5770__auto___17999 + (1));
i__5770__auto___17999 = G__18000;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17955){
var vec__17956 = p__17955;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17956,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq17951){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17951));
}));

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18001 = arguments.length;
var i__5770__auto___18002 = (0);
while(true){
if((i__5770__auto___18002 < len__5769__auto___18001)){
args__5775__auto__.push((arguments[i__5770__auto___18002]));

var G__18003 = (i__5770__auto___18002 + (1));
i__5770__auto___18002 = G__18003;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17962){
var vec__17963 = p__17962;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17963,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
}));

(oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq17961){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17961));
}));


//# sourceMappingURL=oops.config.js.map
