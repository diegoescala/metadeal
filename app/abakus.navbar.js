goog.provide('abakus.navbar');
abakus.navbar.pages = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
abakus.navbar.init = (function abakus$navbar$init(pages_info){
return cljs.core.reset_BANG_(abakus.navbar.pages,pages_info);
});
abakus.navbar.page_option = (function abakus$navbar$page_option(page){
var current_page = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null)));
var selected = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(page),current_page);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abakus.styles.navbar_option,((selected)?abakus.styles.navbar_option_selected:cljs.core.PersistentArrayMap.EMPTY)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.touchable_highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
if((!(selected))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(page)], null));

return abakus.rn.request_review();
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.ic,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abakus.styles.navbar_text,((selected)?abakus.styles.navbar_option_selected:cljs.core.PersistentArrayMap.EMPTY)], 0))], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page)], null)], null)], null)], null);
});
abakus.navbar.navbar = (function abakus$navbar$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.navbar_container], null),(function (){var iter__5523__auto__ = (function abakus$navbar$navbar_$_iter__13886(s__13887){
return (new cljs.core.LazySeq(null,(function (){
var s__13887__$1 = s__13887;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13887__$1);
if(temp__5804__auto__){
var s__13887__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13887__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13887__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13889 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13888 = (0);
while(true){
if((i__13888 < size__5522__auto__)){
var page = cljs.core._nth(c__5521__auto__,i__13888);
cljs.core.chunk_append(b__13889,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.navbar.page_option,page], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)));

var G__13890 = (i__13888 + (1));
i__13888 = G__13890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13889),abakus$navbar$navbar_$_iter__13886(cljs.core.chunk_rest(s__13887__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13889),null);
}
} else {
var page = cljs.core.first(s__13887__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.navbar.page_option,page], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),abakus$navbar$navbar_$_iter__13886(cljs.core.rest(s__13887__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(abakus.navbar.pages));
})()], null);
});

//# sourceMappingURL=abakus.navbar.js.map
