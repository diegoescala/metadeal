goog.provide('oops.core');
goog.scope(function(){
  oops.core.goog$module$goog$object = goog.module.get('goog.object');
});
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__11942 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__11942)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__11942)){
var G__11944 = (console["error"]);
var G__11945 = msg;
var G__11946 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__11943 = oops.state.get_console_reporter();
return (fexpr__11943.cljs$core$IFn$_invoke$arity$3 ? fexpr__11943.cljs$core$IFn$_invoke$arity$3(G__11944,G__11945,G__11946) : fexpr__11943.call(null,G__11944,G__11945,G__11946));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__11942)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11942)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__11947 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"throw","throw",-1044625833),G__11947)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"console","console",1228072057),G__11947)){
var G__11949 = (console["warn"]);
var G__11950 = msg;
var G__11951 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__11948 = oops.state.get_console_reporter();
return (fexpr__11948.cljs$core$IFn$_invoke$arity$3 ? fexpr__11948.cljs$core$IFn$_invoke$arity$3(G__11949,G__11950,G__11951) : fexpr__11948.call(null,G__11949,G__11950,G__11951));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__11947)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11947)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__5775__auto__ = [];
var len__5769__auto___12047 = arguments.length;
var i__5770__auto___12048 = (0);
while(true){
if((i__5770__auto___12048 < len__5769__auto___12047)){
args__5775__auto__.push((arguments[i__5770__auto___12048]));

var G__12049 = (i__5770__auto___12048 + (1));
i__5770__auto___12048 = G__12049;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__11954){
var vec__11955 = p__11954;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11955,(0),null);

if(cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),msg_id)){
} else {
var G__11958_12050 = oops.config.get_config_key(msg_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"warn","warn",-436710552),G__11958_12050)){
oops.core.report_warning_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),G__11958_12050)){
oops.core.report_error_dynamically(oops.messages.runtime_message.cljs$core$IFn$_invoke$arity$2(msg_id,info),info);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__11958_12050)){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__11958_12050)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11958_12050)].join('')));

}
}
}
}
}

return null;
}));

(oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq11952){
var G__11953 = cljs.core.first(seq11952);
var seq11952__$1 = cljs.core.next(seq11952);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11953,seq11952__$1);
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
var descriptor_11961 = temp__5806__auto__;
var temp__5806__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_11961);
if((temp__5806__auto____$1 == null)){
return true;
} else {
var reason_11962 = temp__5806__auto____$1;
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str(),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_(obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_11962,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object()], null)], 0));
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
var child_factory_11966 = oops.config.get_child_factory();
var child_factory_11966__$1 = (function (){var G__11967 = child_factory_11966;
var G__11967__$1 = (((G__11967 instanceof cljs.core.Keyword))?G__11967.fqn:null);
switch (G__11967__$1) {
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
return child_factory_11966;

}
})();

var child_obj_11965 = (child_factory_11966__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_11966__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_11966__$1.call(null,obj,key));
if(oops.core.validate_object_access_dynamically(obj,(2),key,false,true,true)){
(obj[key] = child_obj_11965);
} else {
}

return child_obj_11965;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_11973 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_11973);

return selector_path_11973;
} else {
var selector_path_11974 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_11974);

return selector_path_11974;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5808__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5808__auto__ == null)){
return null;
} else {
var issue_11980 = temp__5808__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_11980);
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_11993 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_11993,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_11986 = (function (){var path_11985 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_11985,(0));

return path_11985;
})();
var len_11987 = path_11986.length;
var i_11988 = (0);
var obj_11989 = obj;
while(true){
if((i_11988 < len_11987)){
var mode_11990 = (path_11986[i_11988]);
var key_11991 = (path_11986[(i_11988 + (1))]);
var next_obj_11992 = oops.core.get_key_dynamically(obj_11989,key_11991,mode_11990);
var G__11994 = mode_11990;
switch (G__11994) {
case (0):
var G__12055 = (i_11988 + (2));
var G__12056 = next_obj_11992;
i_11988 = G__12055;
obj_11989 = G__12056;
continue;

break;
case (1):
if((!((next_obj_11992 == null)))){
var G__12057 = (i_11988 + (2));
var G__12058 = next_obj_11992;
i_11988 = G__12057;
obj_11989 = G__12058;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_11992 == null)))){
var G__12060 = (i_11988 + (2));
var G__12061 = next_obj_11992;
i_11988 = G__12060;
obj_11989 = G__12061;
continue;
} else {
var G__12062 = (i_11988 + (2));
var G__12063 = oops.core.punch_key_dynamically_BANG_(obj_11989,key_11991);
i_11988 = G__12062;
obj_11989 = G__12063;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11994)].join('')));

}
} else {
return obj_11989;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_12021 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12021,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_11997 = (function (){var path_11996 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_11996,(0));

return path_11996;
})();
var len_11998 = path_11997.length;
if((len_11998 < (4))){
return [obj,(function (){var path_12000 = path_11997;
var len_12001 = path_12000.length;
var i_12002 = (0);
var obj_12003 = obj;
while(true){
if((i_12002 < len_12001)){
var mode_12004 = (path_12000[i_12002]);
var key_12005 = (path_12000[(i_12002 + (1))]);
var next_obj_12006 = oops.core.get_key_dynamically(obj_12003,key_12005,mode_12004);
var G__12024 = mode_12004;
switch (G__12024) {
case (0):
var G__12066 = (i_12002 + (2));
var G__12067 = next_obj_12006;
i_12002 = G__12066;
obj_12003 = G__12067;
continue;

break;
case (1):
if((!((next_obj_12006 == null)))){
var G__12068 = (i_12002 + (2));
var G__12069 = next_obj_12006;
i_12002 = G__12068;
obj_12003 = G__12069;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12006 == null)))){
var G__12071 = (i_12002 + (2));
var G__12072 = next_obj_12006;
i_12002 = G__12071;
obj_12003 = G__12072;
continue;
} else {
var G__12073 = (i_12002 + (2));
var G__12074 = oops.core.punch_key_dynamically_BANG_(obj_12003,key_12005);
i_12002 = G__12073;
obj_12003 = G__12074;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12024)].join('')));

}
} else {
return obj_12003;
}
break;
}
})()];
} else {
var target_obj_11999 = (function (){var path_12007 = path_11997.slice((0),(len_11998 - (2)));
var len_12008 = path_12007.length;
var i_12009 = (0);
var obj_12010 = obj;
while(true){
if((i_12009 < len_12008)){
var mode_12011 = (path_12007[i_12009]);
var key_12012 = (path_12007[(i_12009 + (1))]);
var next_obj_12013 = oops.core.get_key_dynamically(obj_12010,key_12012,mode_12011);
var G__12025 = mode_12011;
switch (G__12025) {
case (0):
var G__12077 = (i_12009 + (2));
var G__12078 = next_obj_12013;
i_12009 = G__12077;
obj_12010 = G__12078;
continue;

break;
case (1):
if((!((next_obj_12013 == null)))){
var G__12079 = (i_12009 + (2));
var G__12080 = next_obj_12013;
i_12009 = G__12079;
obj_12010 = G__12080;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12013 == null)))){
var G__12081 = (i_12009 + (2));
var G__12082 = next_obj_12013;
i_12009 = G__12081;
obj_12010 = G__12082;
continue;
} else {
var G__12083 = (i_12009 + (2));
var G__12084 = oops.core.punch_key_dynamically_BANG_(obj_12010,key_12012);
i_12009 = G__12083;
obj_12010 = G__12084;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12025)].join('')));

}
} else {
return obj_12010;
}
break;
}
})();
return [target_obj_11999,(function (){var path_12014 = [(path_11997[(len_11998 - (2))]),(path_11997[(len_11998 - (1))])];
var len_12015 = path_12014.length;
var i_12016 = (0);
var obj_12017 = target_obj_11999;
while(true){
if((i_12016 < len_12015)){
var mode_12018 = (path_12014[i_12016]);
var key_12019 = (path_12014[(i_12016 + (1))]);
var next_obj_12020 = oops.core.get_key_dynamically(obj_12017,key_12019,mode_12018);
var G__12028 = mode_12018;
switch (G__12028) {
case (0):
var G__12087 = (i_12016 + (2));
var G__12088 = next_obj_12020;
i_12016 = G__12087;
obj_12017 = G__12088;
continue;

break;
case (1):
if((!((next_obj_12020 == null)))){
var G__12089 = (i_12016 + (2));
var G__12090 = next_obj_12020;
i_12016 = G__12089;
obj_12017 = G__12090;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12020 == null)))){
var G__12091 = (i_12016 + (2));
var G__12092 = next_obj_12020;
i_12016 = G__12091;
obj_12017 = G__12092;
continue;
} else {
var G__12093 = (i_12016 + (2));
var G__12094 = oops.core.punch_key_dynamically_BANG_(obj_12017,key_12019);
i_12016 = G__12093;
obj_12017 = G__12094;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12028)].join('')));

}
} else {
return obj_12017;
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
if(cljs.core.truth_((((!(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector))))?(function (){var explanation_12045 = cljs.spec.alpha.explain_data(new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12045,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null)], 0));
})():true))){
var path_12031 = (function (){var path_12030 = oops.core.build_path_dynamically(selector);
oops.core.check_path_dynamically(path_12030,(1));

return path_12030;
})();
var len_12034 = path_12031.length;
var parent_obj_path_12035 = path_12031.slice((0),(len_12034 - (2)));
var key_12032 = (path_12031[(len_12034 - (1))]);
var mode_12033 = (path_12031[(len_12034 - (2))]);
var parent_obj_12036 = (function (){var path_12037 = parent_obj_path_12035;
var len_12038 = path_12037.length;
var i_12039 = (0);
var obj_12040 = obj;
while(true){
if((i_12039 < len_12038)){
var mode_12041 = (path_12037[i_12039]);
var key_12042 = (path_12037[(i_12039 + (1))]);
var next_obj_12043 = oops.core.get_key_dynamically(obj_12040,key_12042,mode_12041);
var G__12046 = mode_12041;
switch (G__12046) {
case (0):
var G__12097 = (i_12039 + (2));
var G__12098 = next_obj_12043;
i_12039 = G__12097;
obj_12040 = G__12098;
continue;

break;
case (1):
if((!((next_obj_12043 == null)))){
var G__12099 = (i_12039 + (2));
var G__12100 = next_obj_12043;
i_12039 = G__12099;
obj_12040 = G__12100;
continue;
} else {
return null;
}

break;
case (2):
if((!((next_obj_12043 == null)))){
var G__12101 = (i_12039 + (2));
var G__12102 = next_obj_12043;
i_12039 = G__12101;
obj_12040 = G__12102;
continue;
} else {
var G__12103 = (i_12039 + (2));
var G__12104 = oops.core.punch_key_dynamically_BANG_(obj_12040,key_12042);
i_12039 = G__12103;
obj_12040 = G__12104;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12046)].join('')));

}
} else {
return obj_12040;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_12036,key_12032,val,mode_12033);
} else {
return null;
}
});

//# sourceMappingURL=oops.core.js.map
