goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__15732 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__15732.cljs$core$IFn$_invoke$arity$1 ? fexpr__15732.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__15732.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15736){
var vec__15737 = p__15736;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15737,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__15740 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__15740)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__15740)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__15740)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__15740)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__15740)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__15740)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15740)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__15742){
var map__15745 = p__15742;
var map__15745__$1 = cljs.core.__destructure_map(map__15745);
var request = map__15745__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15745__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15745__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15745__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__15747 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__15747,default_headers);

cljs_http.core.apply_response_type_BANG_(G__15747,response_type);

G__15747.setTimeoutInterval(timeout);

G__15747.setWithCredentials(send_credentials);

return G__15747;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__15752){
var map__15755 = p__15752;
var map__15755__$1 = cljs.core.__destructure_map(map__15755);
var request = map__15755__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15755__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5045__auto__ = request_method;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__15764 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__15764) : cljs_http.core.error_kw.call(null,G__15764));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_15858 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__15767_15860 = xhr;
G__15767_15860.setProgressEventsEnabled(true);

G__15767_15860.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_15858,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__15767_15860.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_15858,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__13740__auto___15863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15778){
var state_val_15779 = (state_15778[(1)]);
if((state_val_15779 === (1))){
var state_15778__$1 = state_15778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15778__$1,(2),cancel);
} else {
if((state_val_15779 === (2))){
var inst_15769 = (state_15778[(2)]);
var inst_15770 = xhr.isComplete();
var inst_15771 = cljs.core.not(inst_15770);
var state_15778__$1 = (function (){var statearr_15782 = state_15778;
(statearr_15782[(7)] = inst_15769);

return statearr_15782;
})();
if(inst_15771){
var statearr_15784_15867 = state_15778__$1;
(statearr_15784_15867[(1)] = (3));

} else {
var statearr_15785_15869 = state_15778__$1;
(statearr_15785_15869[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (3))){
var inst_15773 = xhr.abort();
var state_15778__$1 = state_15778;
var statearr_15786_15871 = state_15778__$1;
(statearr_15786_15871[(2)] = inst_15773);

(statearr_15786_15871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (4))){
var state_15778__$1 = state_15778;
var statearr_15787_15873 = state_15778__$1;
(statearr_15787_15873[(2)] = null);

(statearr_15787_15873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15779 === (5))){
var inst_15776 = (state_15778[(2)]);
var state_15778__$1 = state_15778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15778__$1,inst_15776);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__13629__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13629__auto____0 = (function (){
var statearr_15788 = [null,null,null,null,null,null,null,null];
(statearr_15788[(0)] = cljs_http$core$xhr_$_state_machine__13629__auto__);

(statearr_15788[(1)] = (1));

return statearr_15788;
});
var cljs_http$core$xhr_$_state_machine__13629__auto____1 = (function (state_15778){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15778);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15789){var ex__13632__auto__ = e15789;
var statearr_15790_15876 = state_15778;
(statearr_15790_15876[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15778[(4)]))){
var statearr_15791_15877 = state_15778;
(statearr_15791_15877[(1)] = cljs.core.first((state_15778[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15879 = state_15778;
state_15778 = G__15879;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13629__auto__ = function(state_15778){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13629__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13629__auto____1.call(this,state_15778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13629__auto____0;
cljs_http$core$xhr_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13629__auto____1;
return cljs_http$core$xhr_$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15792 = f__13741__auto__();
(statearr_15792[(6)] = c__13740__auto___15863);

return statearr_15792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__15794){
var map__15797 = p__15794;
var map__15797__$1 = cljs.core.__destructure_map(map__15797);
var request = map__15797__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15797__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15797__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15797__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15797__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_15883 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_15883], null));

if(cljs.core.truth_(cancel)){
var c__13740__auto___15885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15812){
var state_val_15814 = (state_15812[(1)]);
if((state_val_15814 === (1))){
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15812__$1,(2),cancel);
} else {
if((state_val_15814 === (2))){
var inst_15808 = (state_15812[(2)]);
var inst_15810 = jsonp.cancel(req_15883);
var state_15812__$1 = (function (){var statearr_15817 = state_15812;
(statearr_15817[(7)] = inst_15808);

return statearr_15817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15812__$1,inst_15810);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__13629__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13629__auto____0 = (function (){
var statearr_15821 = [null,null,null,null,null,null,null,null];
(statearr_15821[(0)] = cljs_http$core$jsonp_$_state_machine__13629__auto__);

(statearr_15821[(1)] = (1));

return statearr_15821;
});
var cljs_http$core$jsonp_$_state_machine__13629__auto____1 = (function (state_15812){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15812);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15823){var ex__13632__auto__ = e15823;
var statearr_15824_15887 = state_15812;
(statearr_15824_15887[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15812[(4)]))){
var statearr_15825_15889 = state_15812;
(statearr_15825_15889[(1)] = cljs.core.first((state_15812[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15890 = state_15812;
state_15812 = G__15890;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13629__auto__ = function(state_15812){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13629__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13629__auto____1.call(this,state_15812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13629__auto____0;
cljs_http$core$jsonp_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13629__auto____1;
return cljs_http$core$jsonp_$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15829 = f__13741__auto__();
(statearr_15829[(6)] = c__13740__auto___15885);

return statearr_15829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__15833){
var map__15834 = p__15833;
var map__15834__$1 = cljs.core.__destructure_map(map__15834);
var request = map__15834__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
