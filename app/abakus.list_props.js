goog.provide('abakus.list_props');
abakus.list_props.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vis","vis",1600557322),false], null));
abakus.list_props.delete_property_at_index = (function abakus$list_props$delete_property_at_index(idx,all_props){
var new_props = cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,all_props)),idx));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-properties","set-properties",253591533),new_props], null));

return abakus.persistence.save_properties(new_props);
});
abakus.list_props.delete_modal = (function abakus$list_props$delete_modal(){
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(abakus.list_props.state));
var props = new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(abakus.list_props.state));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.mcentered], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visible","visible",-1024216805),new cljs.core.Keyword(null,"vis","vis",1600557322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(abakus.list_props.state)),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true,new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230),new cljs.core.Keyword(null,"slide","slide",142491892)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.mcentered], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.modal], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(30)], null)], null),"Delete this Property?"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(abakus.styles.explanation_button,new cljs.core.Keyword(null,"background-color","background-color",570434026),"#383"),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(abakus.list_props.state,cljs.core.assoc,new cljs.core.Keyword(null,"vis","vis",1600557322),false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null),"No"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(abakus.styles.explanation_button,new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(20),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f42"], 0)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(abakus.list_props.state,cljs.core.assoc,new cljs.core.Keyword(null,"vis","vis",1600557322),false);

return abakus.list_props.delete_property_at_index(index,props);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(10)], null)], null),"Yes"], null)], null)], null)], null)], null)], null)], null);
});
abakus.list_props.prop = (function abakus$list_props$prop(p,idx,all_props){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.property], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.touchable_highlight,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(5)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-prop-info","set-prop-info",1228639413),p], null));

abakus.edit_prop.recompute(p);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.edit_prop.edit_prop], null)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,(function (){var name = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "A Property";
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.property_name], null),name], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),(((!((new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p) == null))))?abakus.number_utils.localize(new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p)):"")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.touchable_highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(abakus.list_props.state,cljs.core.assoc,new cljs.core.Keyword(null,"vis","vis",1600557322),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"index","index",-1531685915),idx,new cljs.core.Keyword(null,"props","props",453281727),all_props], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.ic,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"md-trash",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(32)], null)], null)], null)], null)], null)], null);
});
abakus.list_props.props_list = (function abakus$list_props$props_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),abakus.styles.app_screen], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abakus.styles.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.screen_header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.good_deal_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.screen_title_text], null),"My Properties"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.ads.banner], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.list_props.delete_modal], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.scroll_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(function (){var props = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552)], null)));
if(cljs.core.empty_QMARK_(props)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.good_deal_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.screen_title_text], null),"No properties saved yet"], null)], null);
} else {
var iter__5523__auto__ = (function abakus$list_props$props_list_$_iter__13536(s__13537){
return (new cljs.core.LazySeq(null,(function (){
var s__13537__$1 = s__13537;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13537__$1);
if(temp__5804__auto__){
var s__13537__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13537__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13537__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13539 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13538 = (0);
while(true){
if((i__13538 < size__5522__auto__)){
var p = cljs.core._nth(c__5521__auto__,i__13538);
cljs.core.chunk_append(b__13539,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.list_props.prop,cljs.core.second(p),cljs.core.first(p),props], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(p)], null)));

var G__13540 = (i__13538 + (1));
i__13538 = G__13540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13539),abakus$list_props$props_list_$_iter__13536(cljs.core.chunk_rest(s__13537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13539),null);
}
} else {
var p = cljs.core.first(s__13537__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.list_props.prop,cljs.core.second(p),cljs.core.first(p),props], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.first(p)], null)),abakus$list_props$props_list_$_iter__13536(cljs.core.rest(s__13537__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,props));
}
})()], null)], null)], null);
});

//# sourceMappingURL=abakus.list_props.js.map
