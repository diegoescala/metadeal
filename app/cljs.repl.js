goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14492){
var map__14493 = p__14492;
var map__14493__$1 = cljs.core.__destructure_map(map__14493);
var m = map__14493__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14493__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14493__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__14500_14816 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14501_14817 = null;
var count__14502_14818 = (0);
var i__14503_14819 = (0);
while(true){
if((i__14503_14819 < count__14502_14818)){
var f_14820 = chunk__14501_14817.cljs$core$IIndexed$_nth$arity$2(null,i__14503_14819);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14820], 0));


var G__14822 = seq__14500_14816;
var G__14823 = chunk__14501_14817;
var G__14824 = count__14502_14818;
var G__14825 = (i__14503_14819 + (1));
seq__14500_14816 = G__14822;
chunk__14501_14817 = G__14823;
count__14502_14818 = G__14824;
i__14503_14819 = G__14825;
continue;
} else {
var temp__5804__auto___14830 = cljs.core.seq(seq__14500_14816);
if(temp__5804__auto___14830){
var seq__14500_14831__$1 = temp__5804__auto___14830;
if(cljs.core.chunked_seq_QMARK_(seq__14500_14831__$1)){
var c__5568__auto___14833 = cljs.core.chunk_first(seq__14500_14831__$1);
var G__14834 = cljs.core.chunk_rest(seq__14500_14831__$1);
var G__14835 = c__5568__auto___14833;
var G__14836 = cljs.core.count(c__5568__auto___14833);
var G__14837 = (0);
seq__14500_14816 = G__14834;
chunk__14501_14817 = G__14835;
count__14502_14818 = G__14836;
i__14503_14819 = G__14837;
continue;
} else {
var f_14838 = cljs.core.first(seq__14500_14831__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_14838], 0));


var G__14839 = cljs.core.next(seq__14500_14831__$1);
var G__14840 = null;
var G__14841 = (0);
var G__14842 = (0);
seq__14500_14816 = G__14839;
chunk__14501_14817 = G__14840;
count__14502_14818 = G__14841;
i__14503_14819 = G__14842;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14843 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_14843], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_14843)))?cljs.core.second(arglists_14843):arglists_14843)], 0));
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
var seq__14531_14848 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14532_14849 = null;
var count__14533_14850 = (0);
var i__14534_14851 = (0);
while(true){
if((i__14534_14851 < count__14533_14850)){
var vec__14543_14852 = chunk__14532_14849.cljs$core$IIndexed$_nth$arity$2(null,i__14534_14851);
var name_14853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14543_14852,(0),null);
var map__14546_14854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14543_14852,(1),null);
var map__14546_14855__$1 = cljs.core.__destructure_map(map__14546_14854);
var doc_14856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14546_14855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14546_14855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14853], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14857], 0));

if(cljs.core.truth_(doc_14856)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14856], 0));
} else {
}


var G__14861 = seq__14531_14848;
var G__14862 = chunk__14532_14849;
var G__14863 = count__14533_14850;
var G__14864 = (i__14534_14851 + (1));
seq__14531_14848 = G__14861;
chunk__14532_14849 = G__14862;
count__14533_14850 = G__14863;
i__14534_14851 = G__14864;
continue;
} else {
var temp__5804__auto___14865 = cljs.core.seq(seq__14531_14848);
if(temp__5804__auto___14865){
var seq__14531_14866__$1 = temp__5804__auto___14865;
if(cljs.core.chunked_seq_QMARK_(seq__14531_14866__$1)){
var c__5568__auto___14867 = cljs.core.chunk_first(seq__14531_14866__$1);
var G__14868 = cljs.core.chunk_rest(seq__14531_14866__$1);
var G__14869 = c__5568__auto___14867;
var G__14870 = cljs.core.count(c__5568__auto___14867);
var G__14871 = (0);
seq__14531_14848 = G__14868;
chunk__14532_14849 = G__14869;
count__14533_14850 = G__14870;
i__14534_14851 = G__14871;
continue;
} else {
var vec__14551_14872 = cljs.core.first(seq__14531_14866__$1);
var name_14873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551_14872,(0),null);
var map__14554_14874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14551_14872,(1),null);
var map__14554_14875__$1 = cljs.core.__destructure_map(map__14554_14874);
var doc_14876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14554_14875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14554_14875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_14873], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_14877], 0));

if(cljs.core.truth_(doc_14876)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_14876], 0));
} else {
}


var G__14878 = cljs.core.next(seq__14531_14866__$1);
var G__14879 = null;
var G__14880 = (0);
var G__14881 = (0);
seq__14531_14848 = G__14878;
chunk__14532_14849 = G__14879;
count__14533_14850 = G__14880;
i__14534_14851 = G__14881;
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

var seq__14560 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14561 = null;
var count__14562 = (0);
var i__14563 = (0);
while(true){
if((i__14563 < count__14562)){
var role = chunk__14561.cljs$core$IIndexed$_nth$arity$2(null,i__14563);
var temp__5804__auto___14975__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14975__$1)){
var spec_14976 = temp__5804__auto___14975__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14976)], 0));
} else {
}


var G__14977 = seq__14560;
var G__14978 = chunk__14561;
var G__14979 = count__14562;
var G__14980 = (i__14563 + (1));
seq__14560 = G__14977;
chunk__14561 = G__14978;
count__14562 = G__14979;
i__14563 = G__14980;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__14560);
if(temp__5804__auto____$1){
var seq__14560__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__14560__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14560__$1);
var G__14982 = cljs.core.chunk_rest(seq__14560__$1);
var G__14983 = c__5568__auto__;
var G__14984 = cljs.core.count(c__5568__auto__);
var G__14985 = (0);
seq__14560 = G__14982;
chunk__14561 = G__14983;
count__14562 = G__14984;
i__14563 = G__14985;
continue;
} else {
var role = cljs.core.first(seq__14560__$1);
var temp__5804__auto___14986__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___14986__$2)){
var spec_14987 = temp__5804__auto___14986__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_14987)], 0));
} else {
}


var G__14989 = cljs.core.next(seq__14560__$1);
var G__14990 = null;
var G__14991 = (0);
var G__14992 = (0);
seq__14560 = G__14989;
chunk__14561 = G__14990;
count__14562 = G__14991;
i__14563 = G__14992;
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
var G__14996 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__14997 = cljs.core.ex_cause(t);
via = G__14996;
t = G__14997;
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
var map__14696 = datafied_throwable;
var map__14696__$1 = cljs.core.__destructure_map(map__14696);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14696__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14696__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14696__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__14697 = cljs.core.last(via);
var map__14697__$1 = cljs.core.__destructure_map(map__14697);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14697__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14697__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14697__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__14698 = data;
var map__14698__$1 = cljs.core.__destructure_map(map__14698);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14698__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__14699 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__14699__$1 = cljs.core.__destructure_map(map__14699);
var top_data = map__14699__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14699__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14702 = phase;
var G__14702__$1 = (((G__14702 instanceof cljs.core.Keyword))?G__14702.fqn:null);
switch (G__14702__$1) {
case "read-source":
var map__14708 = data;
var map__14708__$1 = cljs.core.__destructure_map(map__14708);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14708__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14708__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__14709 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__14709__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14709,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14709);
var G__14709__$2 = (cljs.core.truth_((function (){var fexpr__14710 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14710.cljs$core$IFn$_invoke$arity$1 ? fexpr__14710.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14710.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14709__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14709__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14709__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14709__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__14712 = top_data;
var G__14712__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14712,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__14712);
var G__14712__$2 = (cljs.core.truth_((function (){var fexpr__14713 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14713.cljs$core$IFn$_invoke$arity$1 ? fexpr__14713.cljs$core$IFn$_invoke$arity$1(source) : fexpr__14713.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__14712__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__14712__$1);
var G__14712__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14712__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14712__$2);
var G__14712__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14712__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14712__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14712__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14712__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__14714 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14714,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14714,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14714,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14714,(3),null);
var G__14719 = top_data;
var G__14719__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14719,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__14719);
var G__14719__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14719__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__14719__$1);
var G__14719__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14719__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__14719__$2);
var G__14719__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14719__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__14719__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14719__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__14719__$4;
}

break;
case "execution":
var vec__14724 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__14690_SHARP_){
var or__5045__auto__ = (p1__14690_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__14728 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__14728.cljs$core$IFn$_invoke$arity$1 ? fexpr__14728.cljs$core$IFn$_invoke$arity$1(p1__14690_SHARP_) : fexpr__14728.call(null,p1__14690_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__14729 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__14729__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14729,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__14729);
var G__14729__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14729__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__14729__$1);
var G__14729__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14729__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__14729__$2);
var G__14729__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14729__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__14729__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14729__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__14729__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14702__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__14741){
var map__14743 = p__14741;
var map__14743__$1 = cljs.core.__destructure_map(map__14743);
var triage_data = map__14743__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14743__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__14748 = phase;
var G__14748__$1 = (((G__14748 instanceof cljs.core.Keyword))?G__14748.fqn:null);
switch (G__14748__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__14750 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__14751 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14752 = loc;
var G__14753 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14755_15027 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14756_15028 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14757_15029 = true;
var _STAR_print_fn_STAR__temp_val__14758_15030 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14757_15029);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14758_15030);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14739_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14739_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14756_15028);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14755_15027);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14750,G__14751,G__14752,G__14753) : format.call(null,G__14750,G__14751,G__14752,G__14753));

break;
case "macroexpansion":
var G__14768 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__14769 = cause_type;
var G__14770 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14771 = loc;
var G__14772 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14768,G__14769,G__14770,G__14771,G__14772) : format.call(null,G__14768,G__14769,G__14770,G__14771,G__14772));

break;
case "compile-syntax-check":
var G__14773 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__14774 = cause_type;
var G__14775 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14776 = loc;
var G__14777 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14773,G__14774,G__14775,G__14776,G__14777) : format.call(null,G__14773,G__14774,G__14775,G__14776,G__14777));

break;
case "compilation":
var G__14778 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__14779 = cause_type;
var G__14780 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14781 = loc;
var G__14782 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14778,G__14779,G__14780,G__14781,G__14782) : format.call(null,G__14778,G__14779,G__14780,G__14781,G__14782));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__14783 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__14784 = symbol;
var G__14785 = loc;
var G__14786 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__14787_15045 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__14788_15046 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__14789_15047 = true;
var _STAR_print_fn_STAR__temp_val__14790_15048 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__14789_15047);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__14790_15048);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14740_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__14740_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__14788_15046);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__14787_15045);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__14783,G__14784,G__14785,G__14786) : format.call(null,G__14783,G__14784,G__14785,G__14786));
} else {
var G__14795 = "Execution error%s at %s(%s).\n%s\n";
var G__14796 = cause_type;
var G__14797 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__14798 = loc;
var G__14799 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__14795,G__14796,G__14797,G__14798,G__14799) : format.call(null,G__14795,G__14796,G__14797,G__14798,G__14799));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14748__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
