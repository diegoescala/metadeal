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
var G__12437__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12439__i = 0, G__12439__a = new Array(arguments.length -  0);
while (G__12439__i < G__12439__a.length) {G__12439__a[G__12439__i] = arguments[G__12439__i + 0]; ++G__12439__i;}
  args = new cljs.core.IndexedSeq(G__12439__a,0,null);
} 
return G__12437__delegate.call(this,args);};
G__12437.cljs$lang$maxFixedArity = 0;
G__12437.cljs$lang$applyTo = (function (arglist__12440){
var args = cljs.core.seq(arglist__12440);
return G__12437__delegate(args);
});
G__12437.cljs$core$IFn$_invoke$arity$variadic = G__12437__delegate;
return G__12437;
})()
);

(o.error = (function() { 
var G__12441__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12442__i = 0, G__12442__a = new Array(arguments.length -  0);
while (G__12442__i < G__12442__a.length) {G__12442__a[G__12442__i] = arguments[G__12442__i + 0]; ++G__12442__i;}
  args = new cljs.core.IndexedSeq(G__12442__a,0,null);
} 
return G__12441__delegate.call(this,args);};
G__12441.cljs$lang$maxFixedArity = 0;
G__12441.cljs$lang$applyTo = (function (arglist__12443){
var args = cljs.core.seq(arglist__12443);
return G__12441__delegate(args);
});
G__12441.cljs$core$IFn$_invoke$arity$variadic = G__12441__delegate;
return G__12441;
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
