goog.provide('abakus.comms');
abakus.comms.url = "http://api.metadealapp.com:8082/";
abakus.comms.read_json = (function abakus$comms$read_json(data){
var r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.read(r,data);
});
abakus.comms.write_json = (function abakus$comms$write_json(data){
var w = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
return cognitect.transit.write(w,data);
});
abakus.comms.jsonify_map = (function abakus$comms$jsonify_map(data_map){
return JSON.stringify(cljs.core.clj__GT_js(data_map));
});
abakus.comms.query_api_endpoint = (function abakus$comms$query_api_endpoint(method,endpoint,params,handler){
var c__20875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_23379){
var state_val_23381 = (state_23379[(1)]);
if((state_val_23381 === (1))){
var inst_23346 = [new cljs.core.Keyword(null,"uid","uid",-1447769400)];
var inst_23348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23349 = [new cljs.core.Keyword(null,"uid","uid",-1447769400)];
var inst_23350 = (new cljs.core.PersistentVector(null,1,(5),inst_23348,inst_23349,null));
var inst_23351 = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(inst_23350);
var inst_23352 = cljs.core.deref(inst_23351);
var inst_23353 = [inst_23352];
var inst_23354 = cljs.core.PersistentHashMap.fromArrays(inst_23346,inst_23353);
var inst_23355 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_23354,params], 0));
var inst_23356 = [abakus.comms.url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(endpoint)].join('');
var inst_23357 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_23358 = [inst_23355];
var inst_23359 = cljs.core.PersistentHashMap.fromArrays(inst_23357,inst_23358);
var inst_23360 = (method.cljs$core$IFn$_invoke$arity$2 ? method.cljs$core$IFn$_invoke$arity$2(inst_23356,inst_23359) : method.call(null,inst_23356,inst_23359));
var state_23379__$1 = state_23379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23379__$1,(2),inst_23360);
} else {
if((state_val_23381 === (2))){
var inst_23362 = (state_23379[(7)]);
var inst_23362__$1 = (state_23379[(2)]);
var inst_23364 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_23362__$1);
var inst_23365 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((401),inst_23364);
var state_23379__$1 = (function (){var statearr_23390 = state_23379;
(statearr_23390[(7)] = inst_23362__$1);

return statearr_23390;
})();
if(inst_23365){
var statearr_23392_23428 = state_23379__$1;
(statearr_23392_23428[(1)] = (3));

} else {
var statearr_23394_23429 = state_23379__$1;
(statearr_23394_23429[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (3))){
var inst_23369 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23370 = [new cljs.core.Keyword(null,"set-logged-in","set-logged-in",-1688489248),false];
var inst_23372 = (new cljs.core.PersistentVector(null,2,(5),inst_23369,inst_23370,null));
var inst_23373 = re_frame.core.dispatch(inst_23372);
var state_23379__$1 = state_23379;
var statearr_23395_23430 = state_23379__$1;
(statearr_23395_23430[(2)] = inst_23373);

(statearr_23395_23430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (4))){
var state_23379__$1 = state_23379;
var statearr_23396_23431 = state_23379__$1;
(statearr_23396_23431[(2)] = null);

(statearr_23396_23431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23381 === (5))){
var inst_23362 = (state_23379[(7)]);
var inst_23376 = (state_23379[(2)]);
var inst_23377 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_23362) : handler.call(null,inst_23362));
var state_23379__$1 = (function (){var statearr_23399 = state_23379;
(statearr_23399[(8)] = inst_23376);

return statearr_23399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23379__$1,inst_23377);
} else {
return null;
}
}
}
}
}
});
return (function() {
var abakus$comms$query_api_endpoint_$_state_machine__20744__auto__ = null;
var abakus$comms$query_api_endpoint_$_state_machine__20744__auto____0 = (function (){
var statearr_23401 = [null,null,null,null,null,null,null,null,null];
(statearr_23401[(0)] = abakus$comms$query_api_endpoint_$_state_machine__20744__auto__);

(statearr_23401[(1)] = (1));

return statearr_23401;
});
var abakus$comms$query_api_endpoint_$_state_machine__20744__auto____1 = (function (state_23379){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_23379);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e23403){var ex__20747__auto__ = e23403;
var statearr_23404_23432 = state_23379;
(statearr_23404_23432[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_23379[(4)]))){
var statearr_23406_23433 = state_23379;
(statearr_23406_23433[(1)] = cljs.core.first((state_23379[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23434 = state_23379;
state_23379 = G__23434;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
abakus$comms$query_api_endpoint_$_state_machine__20744__auto__ = function(state_23379){
switch(arguments.length){
case 0:
return abakus$comms$query_api_endpoint_$_state_machine__20744__auto____0.call(this);
case 1:
return abakus$comms$query_api_endpoint_$_state_machine__20744__auto____1.call(this,state_23379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
abakus$comms$query_api_endpoint_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = abakus$comms$query_api_endpoint_$_state_machine__20744__auto____0;
abakus$comms$query_api_endpoint_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = abakus$comms$query_api_endpoint_$_state_machine__20744__auto____1;
return abakus$comms$query_api_endpoint_$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_23410 = f__20876__auto__();
(statearr_23410[(6)] = c__20875__auto__);

return statearr_23410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));

return c__20875__auto__;
});
abakus.comms.handle_authentication = (function abakus$comms$handle_authentication(response){
var login_result = (function (){var G__23413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"status","status",-1997798413));
switch (G__23413) {
case (200):
return true;

break;
case (401):
return false;

break;
default:
return false;

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(login_result,true)){
var response_body_23436 = abakus.comms.read_json(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.Keyword(null,"body","body",-2049205669)));
var user_23437 = abakus.types.__GT_User(cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_body_23436,"firstname"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_body_23436,"lastname"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(response_body_23436,"usertype"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(abakus.comms.read_json(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response)),"token"));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-user","set-user",444398487),user_23437], null));
} else {
}

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-logged-in","set-logged-in",-1688489248),login_result], null));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(login_result,false)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-login-errors","set-login-errors",568395191),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Invalid username or password"], null)], null));
} else {
return null;
}
});
abakus.comms.attempt_login_BANG_ = (function abakus$comms$attempt_login_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23438 = arguments.length;
var i__5770__auto___23439 = (0);
while(true){
if((i__5770__auto___23439 < len__5769__auto___23438)){
args__5775__auto__.push((arguments[i__5770__auto___23439]));

var G__23440 = (i__5770__auto___23439 + (1));
i__5770__auto___23439 = G__23440;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return abakus.comms.attempt_login_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(abakus.comms.attempt_login_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (email,password,custom_handler){
return abakus.comms.query_api_endpoint(cljs_http.client.post,"authenticate",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),email,new cljs.core.Keyword(null,"password","password",417022471),password], null),new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),true], null),(function (p1__23415_SHARP_){
abakus.comms.handle_authentication(p1__23415_SHARP_);

if((!(cljs.core.empty_QMARK_(custom_handler)))){
var fexpr__23419 = cljs.core.first(custom_handler);
return (fexpr__23419.cljs$core$IFn$_invoke$arity$0 ? fexpr__23419.cljs$core$IFn$_invoke$arity$0() : fexpr__23419.call(null));
} else {
return null;
}
}));
}));

(abakus.comms.attempt_login_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(abakus.comms.attempt_login_BANG_.cljs$lang$applyTo = (function (seq23416){
var G__23417 = cljs.core.first(seq23416);
var seq23416__$1 = cljs.core.next(seq23416);
var G__23418 = cljs.core.first(seq23416__$1);
var seq23416__$2 = cljs.core.next(seq23416__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23417,G__23418,seq23416__$2);
}));

/**
 * Build the file-contents into a Blob and return it
 *   Optionally set the content-type via a string
 */
abakus.comms.blob = (function abakus$comms$blob(var_args){
var G__23421 = arguments.length;
switch (G__23421) {
case 1:
return abakus.comms.blob.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return abakus.comms.blob.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(abakus.comms.blob.cljs$core$IFn$_invoke$arity$1 = (function (file_parts){
return (new Blob(cljs.core.clj__GT_js(file_parts),(function (){var obj23423 = ({"type":"application/octet-stream"});
return obj23423;
})()));
}));

(abakus.comms.blob.cljs$core$IFn$_invoke$arity$2 = (function (file_parts,content_type_str){
return (new Blob(cljs.core.clj__GT_js(file_parts),(function (){var obj23425 = ({"type":content_type_str});
return obj23425;
})()));
}));

(abakus.comms.blob.cljs$lang$maxFixedArity = 2);

abakus.comms.pre_authenticate_BANG_ = (function abakus$comms$pre_authenticate_BANG_(){
return abakus.comms.query_api_endpoint(cljs_http.client.post,"cookieauthenticate",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),true], null),abakus.comms.handle_authentication);
});
abakus.comms.upload_file = (function abakus$comms$upload_file(client,file_data,handler){
return abakus.comms.query_api_endpoint(cljs_http.client.post,"file",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707),new cljs.core.PersistentArrayMap(null, 2, ["file",abakus.comms.blob.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_data], null)),"client",client], null)], null),handler);
});
abakus.comms.get_new_uid = (function abakus$comms$get_new_uid(callback){
return abakus.comms.query_api_endpoint(cljs_http.client.get,"uid",cljs.core.PersistentArrayMap.EMPTY,(function (p1__23426_SHARP_){
var uid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__23426_SHARP_))),"uid");
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(uid) : callback.call(null,uid));
}));
});
abakus.comms.update_prop = (function abakus$comms$update_prop(prop){
var can_track = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"can-track","can-track",1973498886)], null)));
if(cljs.core.truth_(can_track)){
return abakus.comms.query_api_endpoint(cljs_http.client.post,"propupdate",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prop","prop",-515168332),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prop], 0))], null),(function (){
return cljs.core.List.EMPTY;
}));
} else {
return null;
}
});
abakus.comms.init = (function abakus$comms$init(){
re_frame.core.reg_cofx(new cljs.core.Keyword(null,"authenticate","authenticate",743951231),(function (cofx,event){
var creds = cljs.core.second(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cofx));
return abakus.comms.attempt_login_BANG_(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(creds),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(creds));
}));

re_frame.core.reg_cofx(new cljs.core.Keyword(null,"generate-svg","generate-svg",-1703084731),(function (cofx,event){
return abakus.comms.query_api_endpoint(cljs_http.client.get,"svg",cljs.core.PersistentArrayMap.EMPTY,(function (p1__23427_SHARP_){
return console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__23427_SHARP_], 0)));
}));
}));

return re_frame.core.reg_cofx(new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),(function (cofx,event){
var file_info = cljs.core.second(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cofx));
return abakus.comms.upload_file(new cljs.core.Keyword(null,"client","client",-1323448117).cljs$core$IFn$_invoke$arity$1(file_info),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(file_info),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(file_info));
}));
});

//# sourceMappingURL=abakus.comms.js.map
