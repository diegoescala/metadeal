goog.provide('example.widgets');
example.widgets.button = (function example$widgets$button(p__17353,text){
var map__17357 = p__17353;
var map__17357__$1 = cljs.core.__destructure_map(map__17357);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17357__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17357__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17357__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.List.EMPTY;
}));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17357__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var disabled_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17357__$1,new cljs.core.Keyword(null,"disabled-style","disabled-style",-1938321590));
var disabled_text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17357__$1,new cljs.core.Keyword(null,"disabled-text-style","disabled-text-style",1412905220));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__17386 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"padding","padding",1660304693),(6),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(999),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null);
var G__17386__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17386,style], 0))
;
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17386__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#aaaaaa"], null),disabled_style], 0));
} else {
return G__17386__$1;
}
})(),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__17397 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(12),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(12),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null);
var G__17397__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17397,text_style], 0))
;
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__17397__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),disabled_text_style], 0));
} else {
return G__17397__$1;
}
})()], null),text], null)], null);
});

//# sourceMappingURL=example.widgets.js.map
