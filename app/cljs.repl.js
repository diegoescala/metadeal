goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__13847){
var map__13848 = p__13847;
var map__13848__$1 = cljs.core.__destructure_map(map__13848);
var m = map__13848__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13848__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13875_14190 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13877_14191 = null;
var count__13878_14192 = (0);
var i__13879_14193 = (0);
while(true){
if((i__13879_14193 < count__13878_14192)){
var f_14194 = chunk__13877_14191.cljs$core$IIndexed$_nth$arity$2(null,i__13879_14193);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14194], 0));


var G__14195 = seq__13875_14190;
var G__14196 = chunk__13877_14191;
var G__14197 = count__13878_14192;
var G__14198 = (i__13879_14193 + (1));
seq__13875_14190 = G__14195;
chunk__13877_14191 = G__14196;
count__13878_14192 = G__14197;
i__13879_14193 = G__14198;
continue;
} else {
var temp__5804__auto___14201 = cljs.core.seq(seq__13875_14190);
if(temp__5804__auto___14201){
var seq__13875_14203__$1 = temp__5804__auto___14201;
if(cljs.core.chunked_seq_QMARK_(seq__13875_14203__$1)){
var c__5568__auto___14204 = cljs.core.chunk_first(seq__13875_14203__$1);
var G__14206 = cljs.core.chunk_rest(seq__13875_14203__$1);
var G__14207 = c__5568__auto___14204;
var G__14208 = cljs.core.count(c__5568__auto___14204);
var G__14209 = (0);
seq__13875_14190 = G__14206;
chunk__13877_14191 = G__14207;
count__13878_14192 = G__14208;
i__13879_14193 = G__14209;
continue;
} else {
var f_14212 = cljs.core.first(seq__13875_14203__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14212], 0));


var G__14216 = cljs.core.next(seq__13875_14203__$1);
var G__14217 = null;
var G__14218 = (0);
var G__14219 = (0);
seq__13875_14190 = G__14216;
chunk__13877_14191 = G__14217;
count__13878_14192 = G__14218;
i__13879_14193 = G__14219;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14222 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_14222], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_14222)))?cljs.core.second(arglists_14222):arglists_14222)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13899_14230 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13900_14231 = null;
var count__13901_14232 = (0);
var i__13902_14233 = (0);
while(true){
if((i__13902_14233 < count__13901_14232)){
var vec__13912_14236 = chunk__13900_14231.cljs$core$IIndexed$_nth$arity$2(null,i__13902_14233);
var name_14237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912_14236,(0),null);
var map__13915_14238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13912_14236,(1),null);
var map__13915_14239__$1 = cljs.core.__destructure_map(map__13915_14238);
var doc_14240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13915_14239__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13915_14239__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14237], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14241], 0));

if(cljs.core.truth_(doc_14240)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14240], 0));
} else {
}


var G__14249 = seq__13899_14230;
var G__14250 = chunk__13900_14231;
var G__14251 = count__13901_14232;
var G__14252 = (i__13902_14233 + (1));
seq__13899_14230 = G__14249;
chunk__13900_14231 = G__14250;
count__13901_14232 = G__14251;
i__13902_14233 = G__14252;
continue;
} else {
var temp__5804__auto___14253 = cljs.core.seq(seq__13899_14230);
if(temp__5804__auto___14253){
var seq__13899_14254__$1 = temp__5804__auto___14253;
if(cljs.core.chunked_seq_QMARK_(seq__13899_14254__$1)){
var c__5568__auto___14255 = cljs.core.chunk_first(seq__13899_14254__$1);
var G__14256 = cljs.core.chunk_rest(seq__13899_14254__$1);
var G__14257 = c__5568__auto___14255;
var G__14258 = cljs.core.count(c__5568__auto___14255);
var G__14259 = (0);
seq__13899_14230 = G__14256;
chunk__13900_14231 = G__14257;
count__13901_14232 = G__14258;
i__13902_14233 = G__14259;
continue;
} else {
var vec__13916_14260 = cljs.core.first(seq__13899_14254__$1);
var name_14261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916_14260,(0),null);
var map__13919_14262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13916_14260,(1),null);
var map__13919_14263__$1 = cljs.core.__destructure_map(map__13919_14262);
var doc_14264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13919_14263__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13919_14263__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14261], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14265], 0));

if(cljs.core.truth_(doc_14264)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14264], 0));
} else {
}


var G__14269 = cljs.core.next(seq__13899_14254__$1);
var G__14270 = null;
var G__14271 = (0);
var G__14272 = (0);
seq__13899_14230 = G__14269;
chunk__13900_14231 = G__14270;
count__13901_14232 = G__14271;
i__13902_14233 = G__14272;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__13922 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__13923 = null;
var count__13924 = (0);
var i__13925 = (0);
while(true){
if((i__13925 < count__13924)){
var role = chunk__13923.cljs$core$IIndexed$_nth$arity$2(null,i__13925);
var temp__5804__auto___14278__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14278__$1)){
var spec_14280 = temp__5804__auto___14278__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14280)], 0));
} else {
}


var G__14282 = seq__13922;
var G__14283 = chunk__13923;
var G__14284 = count__13924;
var G__14285 = (i__13925 + (1));
seq__13922 = G__14282;
chunk__13923 = G__14283;
count__13924 = G__14284;
i__13925 = G__14285;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__13922);
if(temp__5804__auto____$1){
var seq__13922__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__13922__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13922__$1);
var G__14286 = cljs.core.chunk_rest(seq__13922__$1);
var G__14287 = c__5568__auto__;
var G__14288 = cljs.core.count(c__5568__auto__);
var G__14289 = (0);
seq__13922 = G__14286;
chunk__13923 = G__14287;
count__13924 = G__14288;
i__13925 = G__14289;
continue;
} else {
var role = cljs.core.first(seq__13922__$1);
var temp__5804__auto___14290__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14290__$2)){
var spec_14292 = temp__5804__auto___14290__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14292)], 0));
} else {
}


var G__14293 = cljs.core.next(seq__13922__$1);
var G__14294 = null;
var G__14295 = (0);
var G__14296 = (0);
seq__13922 = G__14293;
chunk__13923 = G__14294;
count__13924 = G__14295;
i__13925 = G__14296;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__14306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__14307 = cljs.core.ex_cause(t);
via = G__14306;
t = G__14307;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__13987 = datafied_throwable;
var map__13987__$1 = cljs.core.__destructure_map(map__13987);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13987__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13987__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13987__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__13989 = cljs.core.last(via);
var map__13989__$1 = cljs.core.__destructure_map(map__13989);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13989__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13989__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13989__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__13990 = data;
var map__13990__$1 = cljs.core.__destructure_map(map__13990);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13990__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__13991 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__13991__$1 = cljs.core.__destructure_map(map__13991);
var top_data = map__13991__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13991__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14012 = phase;
var G__14012__$1 = (((G__14012 instanceof cljs.core.Keyword))?G__14012.fqn:null);
switch (G__14012__$1) {
case "read-source":
var map__14013 = data;
var map__14013__$1 = cljs.core.__destructure_map(map__14013);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14013__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14013__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14022 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__14022__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14022,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14022);
var G__14022__$2 = (cljs.core.truth_((function (){var fexpr__14034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14034.cljs$core$IFn$_invoke$arity$1 ? fexpr__14034.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14034.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14022__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14022__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14022__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14022__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14044 = top_data;
var G__14044__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14044,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14044);
var G__14044__$2 = (cljs.core.truth_((function (){var fexpr__14045 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14045.cljs$core$IFn$_invoke$arity$1 ? fexpr__14045.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14045.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14044__$1);
var G__14044__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14044__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14044__$2);
var G__14044__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14044__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14044__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14044__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14044__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14050 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14050,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14050,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14050,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14050,(3),null);
var G__14056 = top_data;
var G__14056__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14056,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14056);
var G__14056__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14056__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14056__$1);
var G__14056__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14056__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14056__$2);
var G__14056__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14056__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14056__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14056__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14056__$4;
}

break;
case "execution":
var vec__14072 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__13973_SHARP_){
var or__5045__auto__ = (p1__13973_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__14083 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14083.cljs$core$IFn$_invoke$arity$1 ? fexpr__14083.cljs$core$IFn$_invoke$arity$1(p1__13973_SHARP_) : fexpr__14083.call(null,p1__13973_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__14084 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14084__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14084,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14084);
var G__14084__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14084__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14084__$1);
var G__14084__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14084__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14084__$2);
var G__14084__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14084__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14084__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14084__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14084__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14012__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14105){
var map__14106 = p__14105;
var map__14106__$1 = cljs.core.__destructure_map(map__14106);
var triage_data = map__14106__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14106__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__14113 = phase;
var G__14113__$1 = (((G__14113 instanceof cljs.core.Keyword))?G__14113.fqn:null);
switch (G__14113__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__14114 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__14115 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14116 = loc;
var G__14117 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14122_14403 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14123_14404 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14124_14405 = true;
var _STAR_print_fn_STAR__temp_val__14125_14406 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14124_14405);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14125_14406);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14099_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14099_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14123_14404);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14122_14403);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14114,G__14115,G__14116,G__14117) : format.call(null,G__14114,G__14115,G__14116,G__14117));

break;
case "macroexpansion":
var G__14127 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__14128 = cause_type;
var G__14129 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14130 = loc;
var G__14131 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14127,G__14128,G__14129,G__14130,G__14131) : format.call(null,G__14127,G__14128,G__14129,G__14130,G__14131));

break;
case "compile-syntax-check":
var G__14133 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__14134 = cause_type;
var G__14135 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14136 = loc;
var G__14137 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14133,G__14134,G__14135,G__14136,G__14137) : format.call(null,G__14133,G__14134,G__14135,G__14136,G__14137));

break;
case "compilation":
var G__14139 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__14140 = cause_type;
var G__14141 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14142 = loc;
var G__14143 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14139,G__14140,G__14141,G__14142,G__14143) : format.call(null,G__14139,G__14140,G__14141,G__14142,G__14143));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__14144 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__14145 = symbol;
var G__14146 = loc;
var G__14147 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14149_14421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14150_14422 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14151_14423 = true;
var _STAR_print_fn_STAR__temp_val__14152_14424 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14151_14423);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14152_14424);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14103_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14103_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14150_14422);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14149_14421);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14144,G__14145,G__14146,G__14147) : format.call(null,G__14144,G__14145,G__14146,G__14147));
} else {
var G__14163 = "Execution error%s at %s(%s).\n%s\n";
var G__14164 = cause_type;
var G__14165 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14166 = loc;
var G__14167 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14163,G__14164,G__14165,G__14166,G__14167) : format.call(null,G__14163,G__14164,G__14165,G__14166,G__14167));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14113__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
