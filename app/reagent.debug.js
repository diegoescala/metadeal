goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__12334__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12334 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12338__i = 0, G__12338__a = new Array(arguments.length -  0);
while (G__12338__i < G__12338__a.length) {G__12338__a[G__12338__i] = arguments[G__12338__i + 0]; ++G__12338__i;}
  args = new cljs.core.IndexedSeq(G__12338__a,0,null);
} 
return G__12334__delegate.call(this,args);};
G__12334.cljs$lang$maxFixedArity = 0;
G__12334.cljs$lang$applyTo = (function (arglist__12339){
var args = cljs.core.seq(arglist__12339);
return G__12334__delegate(args);
});
G__12334.cljs$core$IFn$_invoke$arity$variadic = G__12334__delegate;
return G__12334;
})()
);

(o.error = (function() { 
var G__12340__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12341__i = 0, G__12341__a = new Array(arguments.length -  0);
while (G__12341__i < G__12341__a.length) {G__12341__a[G__12341__i] = arguments[G__12341__i + 0]; ++G__12341__i;}
  args = new cljs.core.IndexedSeq(G__12341__a,0,null);
} 
return G__12340__delegate.call(this,args);};
G__12340.cljs$lang$maxFixedArity = 0;
G__12340.cljs$lang$applyTo = (function (arglist__12342){
var args = cljs.core.seq(arglist__12342);
return G__12340__delegate(args);
});
G__12340.cljs$core$IFn$_invoke$arity$variadic = G__12340__delegate;
return G__12340;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
