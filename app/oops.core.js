goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__18611 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__18611)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__18611)){
var G__18613 = (console["error"]);
var G__18614 = msg;
var G__18615 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__18612 = oops.state.get_console_reporter();
return (fexpr__18612.cljs$core$IFn$_invoke$arity$3 ? fexpr__18612.cljs$core$IFn$_invoke$arity$3(G__18613,G__18614,G__18615) : fexpr__18612.call(null,G__18613,G__18614,G__18615));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__18611)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18611)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__18618 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__18618)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__18618)){
var G__18620 = (console["warn"]);
var G__18621 = msg;
var G__18622 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__18619 = oops.state.get_console_reporter();
return (fexpr__18619.cljs$core$IFn$_invoke$arity$3 ? fexpr__18619.cljs$core$IFn$_invoke$arity$3(G__18620,G__18621,G__18622) : fexpr__18619.call(null,G__18620,G__18621,G__18622));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__18618)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18618)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18798 = arguments.length;
var i__5770__auto___18799 = (0);
while(true){
if((i__5770__auto___18799 < len__5769__auto___18798)){
args__5775__auto__.push((arguments[i__5770__auto___18799]));

var G__18804 = (i__5770__auto___18799 + (1));
i__5770__auto___18799 = G__18804;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__18633){
var vec__18634 = p__18633;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18634,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__18640_18806 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__18640_18806)){
oops.core.report_warning_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__18640_18806)){
oops.core.report_error_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__18640_18806)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__18640_18806)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18640_18806)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq18628){
var G__18629 = cljs.core.first(seq18628);
var seq18628__$1 = cljs.core.next(seq18628);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18629,seq18628__$1);
}));

oops.core.gobj_get = (function oops$core$gobj_get(obj,key){
return oops.core.goog$module$goog$object.get(obj,key);
});
oops.core.gobj_set = (function oops$core$gobj_set(obj,key,val){
return oops.core.goog$module$goog$object.set(obj,key,val);
});
oops.core.gobj_containsKey = (function oops$core$gobj_containsKey(obj,key){
return oops.core.goog$module$goog$object.containsKey(obj,key);
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((cljs.core.boolean_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((typeof obj === 'number')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((typeof obj === 'string')?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__5043__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(oops.core.gobj_containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0)):true):true);
if(cljs.core.truth_(and__5043__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5806__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5806__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
} else {
return true;

}
}
} else {
var descriptor_18652 = temp__5806__auto__;
var temp__5806__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_18652);
if((temp__5806__auto____$1 == null)){
return true;
} else {
var reason_18653 = temp__5806__auto____$1;
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_18653,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
}
}
} else {
return true;
}
} else {
return and__5043__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(typeof fn === 'function'){
return true;
} else {
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_18669 = oops.config.get_child_factory();
var child_factory_18669__$1 = (function (){var G__18674 = child_factory_18669;
var G__18674__$1 = (((G__18674 instanceof cljs.core.Keyword))?G__18674.fqn:null);
switch (G__18674__$1) {
case "js-obj":
return (function (){
return ({});
});

break;
case "js-array":
return (function (){
return [];
});

break;
default:
return child_factory_18669;

}
})();

var child_obj_18668 = (child_factory_18669__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_18669__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_18669__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_18668);
} else {
}

return child_obj_18668;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_18677 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_18677);

return selector_path_18677;
} else {
var selector_path_18678 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_18678);

return selector_path_18678;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5808__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5808__auto__ == null)){
return null;
} else {
var issue_18679 = temp__5808__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_18679);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically(obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_18698 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_18698,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_18691 = (function (){var path_18690 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_18690,(0));

return path_18690;
})();
var len_18692 = path_18691.length;
var i_18693 = (0);
var obj_18694 = obj;
while(true){
if((i_18693 < len_18692)){
var mode_18695 = (path_18691[i_18693]);
var key_18696 = (path_18691[(i_18693 + (1))]);
var next_obj_18697 = oops.core.get_key_dynamically(obj_18694,key_18696,mode_18695);
var G__18702 = mode_18695;
switch (G__18702) {
case (0):
var G__18865 = (i_18693 + (2));
var G__18866 = next_obj_18697;
i_18693 = G__18865;
obj_18694 = G__18866;
continue;

break;
case (1):
if((!((next_obj_18697 == null)))){
var G__18867 = (i_18693 + (2));
var G__18868 = next_obj_18697;
i_18693 = G__18867;
obj_18694 = G__18868;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_18697 == null)))){
var G__18869 = (i_18693 + (2));
var G__18870 = next_obj_18697;
i_18693 = G__18869;
obj_18694 = G__18870;
continue;
} else {
var G__18871 = (i_18693 + (2));
var G__18872 = oops.core.punch_key_dynamically_BANG_(obj_18694,key_18696);
i_18693 = G__18871;
obj_18694 = G__18872;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18702)].join('')));

}
} else {
return obj_18694;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_18731 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_18731,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_18707 = (function (){var path_18706 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_18706,(0));

return path_18706;
})();
var len_18708 = path_18707.length;
if((len_18708 < (4))){
return [obj,(function (){var path_18710 = path_18707;
var len_18711 = path_18710.length;
var i_18712 = (0);
var obj_18713 = obj;
while(true){
if((i_18712 < len_18711)){
var mode_18714 = (path_18710[i_18712]);
var key_18715 = (path_18710[(i_18712 + (1))]);
var next_obj_18716 = oops.core.get_key_dynamically(obj_18713,key_18715,mode_18714);
var G__18736 = mode_18714;
switch (G__18736) {
case (0):
var G__18874 = (i_18712 + (2));
var G__18875 = next_obj_18716;
i_18712 = G__18874;
obj_18713 = G__18875;
continue;

break;
case (1):
if((!((next_obj_18716 == null)))){
var G__18876 = (i_18712 + (2));
var G__18877 = next_obj_18716;
i_18712 = G__18876;
obj_18713 = G__18877;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_18716 == null)))){
var G__18878 = (i_18712 + (2));
var G__18879 = next_obj_18716;
i_18712 = G__18878;
obj_18713 = G__18879;
continue;
} else {
var G__18880 = (i_18712 + (2));
var G__18881 = oops.core.punch_key_dynamically_BANG_(obj_18713,key_18715);
i_18712 = G__18880;
obj_18713 = G__18881;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18736)].join('')));

}
} else {
return obj_18713;
}
break;
}
})()];
} else {
var target_obj_18709 = (function (){var path_18717 = path_18707.slice((0),(len_18708 - (2)));
var len_18718 = path_18717.length;
var i_18719 = (0);
var obj_18720 = obj;
while(true){
if((i_18719 < len_18718)){
var mode_18721 = (path_18717[i_18719]);
var key_18722 = (path_18717[(i_18719 + (1))]);
var next_obj_18723 = oops.core.get_key_dynamically(obj_18720,key_18722,mode_18721);
var G__18737 = mode_18721;
switch (G__18737) {
case (0):
var G__18883 = (i_18719 + (2));
var G__18884 = next_obj_18723;
i_18719 = G__18883;
obj_18720 = G__18884;
continue;

break;
case (1):
if((!((next_obj_18723 == null)))){
var G__18886 = (i_18719 + (2));
var G__18887 = next_obj_18723;
i_18719 = G__18886;
obj_18720 = G__18887;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_18723 == null)))){
var G__18888 = (i_18719 + (2));
var G__18889 = next_obj_18723;
i_18719 = G__18888;
obj_18720 = G__18889;
continue;
} else {
var G__18890 = (i_18719 + (2));
var G__18891 = oops.core.punch_key_dynamically_BANG_(obj_18720,key_18722);
i_18719 = G__18890;
obj_18720 = G__18891;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18737)].join('')));

}
} else {
return obj_18720;
}
break;
}
})();
return [target_obj_18709,(function (){var path_18724 = [(path_18707[(len_18708 - (2))]),(path_18707[(len_18708 - (1))])];
var len_18725 = path_18724.length;
var i_18726 = (0);
var obj_18727 = target_obj_18709;
while(true){
if((i_18726 < len_18725)){
var mode_18728 = (path_18724[i_18726]);
var key_18729 = (path_18724[(i_18726 + (1))]);
var next_obj_18730 = oops.core.get_key_dynamically(obj_18727,key_18729,mode_18728);
var G__18742 = mode_18728;
switch (G__18742) {
case (0):
var G__18894 = (i_18726 + (2));
var G__18895 = next_obj_18730;
i_18726 = G__18894;
obj_18727 = G__18895;
continue;

break;
case (1):
if((!((next_obj_18730 == null)))){
var G__18896 = (i_18726 + (2));
var G__18897 = next_obj_18730;
i_18726 = G__18896;
obj_18727 = G__18897;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_18730 == null)))){
var G__18898 = (i_18726 + (2));
var G__18899 = next_obj_18730;
i_18726 = G__18898;
obj_18727 = G__18899;
continue;
} else {
var G__18900 = (i_18726 + (2));
var G__18901 = oops.core.punch_key_dynamically_BANG_(obj_18727,key_18729);
i_18726 = G__18900;
obj_18727 = G__18901;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18742)].join('')));

}
} else {
return obj_18727;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_18757 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_18757,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_18744 = (function (){var path_18743 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_18743,(1));

return path_18743;
})();
var len_18747 = path_18744.length;
var parent_obj_path_18748 = path_18744.slice((0),(len_18747 - (2)));
var key_18745 = (path_18744[(len_18747 - (1))]);
var mode_18746 = (path_18744[(len_18747 - (2))]);
var parent_obj_18749 = (function (){var path_18750 = parent_obj_path_18748;
var len_18751 = path_18750.length;
var i_18752 = (0);
var obj_18753 = obj;
while(true){
if((i_18752 < len_18751)){
var mode_18754 = (path_18750[i_18752]);
var key_18755 = (path_18750[(i_18752 + (1))]);
var next_obj_18756 = oops.core.get_key_dynamically(obj_18753,key_18755,mode_18754);
var G__18759 = mode_18754;
switch (G__18759) {
case (0):
var G__18905 = (i_18752 + (2));
var G__18906 = next_obj_18756;
i_18752 = G__18905;
obj_18753 = G__18906;
continue;

break;
case (1):
if((!((next_obj_18756 == null)))){
var G__18907 = (i_18752 + (2));
var G__18908 = next_obj_18756;
i_18752 = G__18907;
obj_18753 = G__18908;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_18756 == null)))){
var G__18909 = (i_18752 + (2));
var G__18910 = next_obj_18756;
i_18752 = G__18909;
obj_18753 = G__18910;
continue;
} else {
var G__18911 = (i_18752 + (2));
var G__18912 = oops.core.punch_key_dynamically_BANG_(obj_18753,key_18755);
i_18752 = G__18911;
obj_18753 = G__18912;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18759)].join('')));

}
} else {
return obj_18753;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_18749,key_18745,val,mode_18746);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
