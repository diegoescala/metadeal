goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13810 = (function (f,blockable,meta13811){
this.f = f;
this.blockable = blockable;
this.meta13811 = meta13811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13812,meta13811__$1){
var self__ = this;
var _13812__$1 = this;
return (new cljs.core.async.t_cljs$core$async13810(self__.f,self__.blockable,meta13811__$1));
}));

(cljs.core.async.t_cljs$core$async13810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13812){
var self__ = this;
var _13812__$1 = this;
return self__.meta13811;
}));

(cljs.core.async.t_cljs$core$async13810.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13810.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13810.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13810.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13811","meta13811",1114664761,null)], null);
}));

(cljs.core.async.t_cljs$core$async13810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13810");

(cljs.core.async.t_cljs$core$async13810.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13810.
 */
cljs.core.async.__GT_t_cljs$core$async13810 = (function cljs$core$async$__GT_t_cljs$core$async13810(f,blockable,meta13811){
return (new cljs.core.async.t_cljs$core$async13810(f,blockable,meta13811));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13809 = arguments.length;
switch (G__13809) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13810(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13817 = arguments.length;
switch (G__13817) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13826 = arguments.length;
switch (G__13826) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13850 = arguments.length;
switch (G__13850) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_15730 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15730) : fn1.call(null,val_15730));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_15730) : fn1.call(null,val_15730));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13859 = arguments.length;
switch (G__13859) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___15733 = n;
var x_15734 = (0);
while(true){
if((x_15734 < n__5636__auto___15733)){
(a[x_15734] = x_15734);

var G__15735 = (x_15734 + (1));
x_15734 = G__15735;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13868 = (function (flag,meta13869){
this.flag = flag;
this.meta13869 = meta13869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13870,meta13869__$1){
var self__ = this;
var _13870__$1 = this;
return (new cljs.core.async.t_cljs$core$async13868(self__.flag,meta13869__$1));
}));

(cljs.core.async.t_cljs$core$async13868.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13870){
var self__ = this;
var _13870__$1 = this;
return self__.meta13869;
}));

(cljs.core.async.t_cljs$core$async13868.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13868.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13869","meta13869",-1173818835,null)], null);
}));

(cljs.core.async.t_cljs$core$async13868.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13868");

(cljs.core.async.t_cljs$core$async13868.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13868");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13868.
 */
cljs.core.async.__GT_t_cljs$core$async13868 = (function cljs$core$async$__GT_t_cljs$core$async13868(flag,meta13869){
return (new cljs.core.async.t_cljs$core$async13868(flag,meta13869));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13868(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13873 = (function (flag,cb,meta13874){
this.flag = flag;
this.cb = cb;
this.meta13874 = meta13874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13875,meta13874__$1){
var self__ = this;
var _13875__$1 = this;
return (new cljs.core.async.t_cljs$core$async13873(self__.flag,self__.cb,meta13874__$1));
}));

(cljs.core.async.t_cljs$core$async13873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13875){
var self__ = this;
var _13875__$1 = this;
return self__.meta13874;
}));

(cljs.core.async.t_cljs$core$async13873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13874","meta13874",-689985492,null)], null);
}));

(cljs.core.async.t_cljs$core$async13873.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13873");

(cljs.core.async.t_cljs$core$async13873.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13873");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13873.
 */
cljs.core.async.__GT_t_cljs$core$async13873 = (function cljs$core$async$__GT_t_cljs$core$async13873(flag,cb,meta13874){
return (new cljs.core.async.t_cljs$core$async13873(flag,cb,meta13874));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13873(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13879_SHARP_){
var G__13883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13879_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13883) : fret.call(null,G__13883));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13881_SHARP_){
var G__13888 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13881_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13888) : fret.call(null,G__13888));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15741 = (i + (1));
i = G__15741;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15743 = arguments.length;
var i__5770__auto___15744 = (0);
while(true){
if((i__5770__auto___15744 < len__5769__auto___15743)){
args__5775__auto__.push((arguments[i__5770__auto___15744]));

var G__15746 = (i__5770__auto___15744 + (1));
i__5770__auto___15744 = G__15746;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13893){
var map__13900 = p__13893;
var map__13900__$1 = cljs.core.__destructure_map(map__13900);
var opts = map__13900__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13891){
var G__13892 = cljs.core.first(seq13891);
var seq13891__$1 = cljs.core.next(seq13891);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13892,seq13891__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13903 = arguments.length;
switch (G__13903) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13740__auto___15749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_13936){
var state_val_13937 = (state_13936[(1)]);
if((state_val_13937 === (7))){
var inst_13932 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_13951_15750 = state_13936__$1;
(statearr_13951_15750[(2)] = inst_13932);

(statearr_13951_15750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (1))){
var state_13936__$1 = state_13936;
var statearr_13952_15751 = state_13936__$1;
(statearr_13952_15751[(2)] = null);

(statearr_13952_15751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (4))){
var inst_13907 = (state_13936[(7)]);
var inst_13907__$1 = (state_13936[(2)]);
var inst_13908 = (inst_13907__$1 == null);
var state_13936__$1 = (function (){var statearr_13953 = state_13936;
(statearr_13953[(7)] = inst_13907__$1);

return statearr_13953;
})();
if(cljs.core.truth_(inst_13908)){
var statearr_13954_15753 = state_13936__$1;
(statearr_13954_15753[(1)] = (5));

} else {
var statearr_13955_15754 = state_13936__$1;
(statearr_13955_15754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (13))){
var state_13936__$1 = state_13936;
var statearr_13956_15756 = state_13936__$1;
(statearr_13956_15756[(2)] = null);

(statearr_13956_15756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (6))){
var inst_13907 = (state_13936[(7)]);
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13936__$1,(11),to,inst_13907);
} else {
if((state_val_13937 === (3))){
var inst_13934 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13936__$1,inst_13934);
} else {
if((state_val_13937 === (12))){
var state_13936__$1 = state_13936;
var statearr_13958_15757 = state_13936__$1;
(statearr_13958_15757[(2)] = null);

(statearr_13958_15757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (2))){
var state_13936__$1 = state_13936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13936__$1,(4),from);
} else {
if((state_val_13937 === (11))){
var inst_13919 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
if(cljs.core.truth_(inst_13919)){
var statearr_13959_15758 = state_13936__$1;
(statearr_13959_15758[(1)] = (12));

} else {
var statearr_13960_15759 = state_13936__$1;
(statearr_13960_15759[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (9))){
var state_13936__$1 = state_13936;
var statearr_13961_15760 = state_13936__$1;
(statearr_13961_15760[(2)] = null);

(statearr_13961_15760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (5))){
var state_13936__$1 = state_13936;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13962_15761 = state_13936__$1;
(statearr_13962_15761[(1)] = (8));

} else {
var statearr_13965_15762 = state_13936__$1;
(statearr_13965_15762[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (14))){
var inst_13930 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_13966_15763 = state_13936__$1;
(statearr_13966_15763[(2)] = inst_13930);

(statearr_13966_15763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (10))){
var inst_13916 = (state_13936[(2)]);
var state_13936__$1 = state_13936;
var statearr_13967_15765 = state_13936__$1;
(statearr_13967_15765[(2)] = inst_13916);

(statearr_13967_15765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13937 === (8))){
var inst_13911 = cljs.core.async.close_BANG_(to);
var state_13936__$1 = state_13936;
var statearr_13968_15766 = state_13936__$1;
(statearr_13968_15766[(2)] = inst_13911);

(statearr_13968_15766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_13971 = [null,null,null,null,null,null,null,null];
(statearr_13971[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_13971[(1)] = (1));

return statearr_13971;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_13936){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_13936);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e13972){var ex__13632__auto__ = e13972;
var statearr_13973_15780 = state_13936;
(statearr_13973_15780[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_13936[(4)]))){
var statearr_13974_15781 = state_13936;
(statearr_13974_15781[(1)] = cljs.core.first((state_13936[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15783 = state_13936;
state_13936 = G__15783;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_13936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_13936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_13975 = f__13741__auto__();
(statearr_13975[(6)] = c__13740__auto___15749);

return statearr_13975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__13976){
var vec__13977 = p__13976;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13977,(1),null);
var job = vec__13977;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13740__auto___15793 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_13992){
var state_val_13993 = (state_13992[(1)]);
if((state_val_13993 === (1))){
var state_13992__$1 = state_13992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13992__$1,(2),res,v);
} else {
if((state_val_13993 === (2))){
var inst_13984 = (state_13992[(2)]);
var inst_13985 = cljs.core.async.close_BANG_(res);
var state_13992__$1 = (function (){var statearr_13995 = state_13992;
(statearr_13995[(7)] = inst_13984);

return statearr_13995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_13992__$1,inst_13985);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0 = (function (){
var statearr_13996 = [null,null,null,null,null,null,null,null];
(statearr_13996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__);

(statearr_13996[(1)] = (1));

return statearr_13996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1 = (function (state_13992){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_13992);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e13997){var ex__13632__auto__ = e13997;
var statearr_13998_15795 = state_13992;
(statearr_13998_15795[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_13992[(4)]))){
var statearr_13999_15796 = state_13992;
(statearr_13999_15796[(1)] = cljs.core.first((state_13992[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15798 = state_13992;
state_13992 = G__15798;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = function(state_13992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1.call(this,state_13992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14000 = f__13741__auto__();
(statearr_14000[(6)] = c__13740__auto___15793);

return statearr_14000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14001){
var vec__14002 = p__14001;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14002,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14002,(1),null);
var job = vec__14002;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___15799 = n;
var __15800 = (0);
while(true){
if((__15800 < n__5636__auto___15799)){
var G__14005_15801 = type;
var G__14005_15802__$1 = (((G__14005_15801 instanceof cljs.core.Keyword))?G__14005_15801.fqn:null);
switch (G__14005_15802__$1) {
case "compute":
var c__13740__auto___15804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15800,c__13740__auto___15804,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async){
return (function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = ((function (__15800,c__13740__auto___15804,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async){
return (function (state_14018){
var state_val_14019 = (state_14018[(1)]);
if((state_val_14019 === (1))){
var state_14018__$1 = state_14018;
var statearr_14020_15805 = state_14018__$1;
(statearr_14020_15805[(2)] = null);

(statearr_14020_15805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14019 === (2))){
var state_14018__$1 = state_14018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14018__$1,(4),jobs);
} else {
if((state_val_14019 === (3))){
var inst_14016 = (state_14018[(2)]);
var state_14018__$1 = state_14018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14018__$1,inst_14016);
} else {
if((state_val_14019 === (4))){
var inst_14008 = (state_14018[(2)]);
var inst_14009 = process__$1(inst_14008);
var state_14018__$1 = state_14018;
if(cljs.core.truth_(inst_14009)){
var statearr_14021_15806 = state_14018__$1;
(statearr_14021_15806[(1)] = (5));

} else {
var statearr_14022_15809 = state_14018__$1;
(statearr_14022_15809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14019 === (5))){
var state_14018__$1 = state_14018;
var statearr_14023_15813 = state_14018__$1;
(statearr_14023_15813[(2)] = null);

(statearr_14023_15813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14019 === (6))){
var state_14018__$1 = state_14018;
var statearr_14024_15815 = state_14018__$1;
(statearr_14024_15815[(2)] = null);

(statearr_14024_15815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14019 === (7))){
var inst_14014 = (state_14018[(2)]);
var state_14018__$1 = state_14018;
var statearr_14025_15816 = state_14018__$1;
(statearr_14025_15816[(2)] = inst_14014);

(statearr_14025_15816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15800,c__13740__auto___15804,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async))
;
return ((function (__15800,switch__13628__auto__,c__13740__auto___15804,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0 = (function (){
var statearr_14026 = [null,null,null,null,null,null,null];
(statearr_14026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__);

(statearr_14026[(1)] = (1));

return statearr_14026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1 = (function (state_14018){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14018);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14028){var ex__13632__auto__ = e14028;
var statearr_14030_15818 = state_14018;
(statearr_14030_15818[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14018[(4)]))){
var statearr_14031_15819 = state_14018;
(statearr_14031_15819[(1)] = cljs.core.first((state_14018[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15820 = state_14018;
state_14018 = G__15820;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = function(state_14018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1.call(this,state_14018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__;
})()
;})(__15800,switch__13628__auto__,c__13740__auto___15804,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async))
})();
var state__13742__auto__ = (function (){var statearr_14032 = f__13741__auto__();
(statearr_14032[(6)] = c__13740__auto___15804);

return statearr_14032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
});})(__15800,c__13740__auto___15804,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async))
);


break;
case "async":
var c__13740__auto___15822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15800,c__13740__auto___15822,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async){
return (function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = ((function (__15800,c__13740__auto___15822,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async){
return (function (state_14045){
var state_val_14046 = (state_14045[(1)]);
if((state_val_14046 === (1))){
var state_14045__$1 = state_14045;
var statearr_14047_15826 = state_14045__$1;
(statearr_14047_15826[(2)] = null);

(statearr_14047_15826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14046 === (2))){
var state_14045__$1 = state_14045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14045__$1,(4),jobs);
} else {
if((state_val_14046 === (3))){
var inst_14043 = (state_14045[(2)]);
var state_14045__$1 = state_14045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14045__$1,inst_14043);
} else {
if((state_val_14046 === (4))){
var inst_14035 = (state_14045[(2)]);
var inst_14036 = async(inst_14035);
var state_14045__$1 = state_14045;
if(cljs.core.truth_(inst_14036)){
var statearr_14048_15827 = state_14045__$1;
(statearr_14048_15827[(1)] = (5));

} else {
var statearr_14049_15828 = state_14045__$1;
(statearr_14049_15828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14046 === (5))){
var state_14045__$1 = state_14045;
var statearr_14050_15830 = state_14045__$1;
(statearr_14050_15830[(2)] = null);

(statearr_14050_15830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14046 === (6))){
var state_14045__$1 = state_14045;
var statearr_14051_15831 = state_14045__$1;
(statearr_14051_15831[(2)] = null);

(statearr_14051_15831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14046 === (7))){
var inst_14041 = (state_14045[(2)]);
var state_14045__$1 = state_14045;
var statearr_14052_15832 = state_14045__$1;
(statearr_14052_15832[(2)] = inst_14041);

(statearr_14052_15832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__15800,c__13740__auto___15822,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async))
;
return ((function (__15800,switch__13628__auto__,c__13740__auto___15822,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0 = (function (){
var statearr_14053 = [null,null,null,null,null,null,null];
(statearr_14053[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__);

(statearr_14053[(1)] = (1));

return statearr_14053;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1 = (function (state_14045){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14045);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14054){var ex__13632__auto__ = e14054;
var statearr_14055_15835 = state_14045;
(statearr_14055_15835[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14045[(4)]))){
var statearr_14056_15836 = state_14045;
(statearr_14056_15836[(1)] = cljs.core.first((state_14045[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15837 = state_14045;
state_14045 = G__15837;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = function(state_14045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1.call(this,state_14045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__;
})()
;})(__15800,switch__13628__auto__,c__13740__auto___15822,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async))
})();
var state__13742__auto__ = (function (){var statearr_14057 = f__13741__auto__();
(statearr_14057[(6)] = c__13740__auto___15822);

return statearr_14057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
});})(__15800,c__13740__auto___15822,G__14005_15801,G__14005_15802__$1,n__5636__auto___15799,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14005_15802__$1)].join('')));

}

var G__15838 = (__15800 + (1));
__15800 = G__15838;
continue;
} else {
}
break;
}

var c__13740__auto___15839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14079){
var state_val_14080 = (state_14079[(1)]);
if((state_val_14080 === (7))){
var inst_14075 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
var statearr_14083_15840 = state_14079__$1;
(statearr_14083_15840[(2)] = inst_14075);

(statearr_14083_15840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (1))){
var state_14079__$1 = state_14079;
var statearr_14085_15841 = state_14079__$1;
(statearr_14085_15841[(2)] = null);

(statearr_14085_15841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (4))){
var inst_14060 = (state_14079[(7)]);
var inst_14060__$1 = (state_14079[(2)]);
var inst_14061 = (inst_14060__$1 == null);
var state_14079__$1 = (function (){var statearr_14086 = state_14079;
(statearr_14086[(7)] = inst_14060__$1);

return statearr_14086;
})();
if(cljs.core.truth_(inst_14061)){
var statearr_14087_15842 = state_14079__$1;
(statearr_14087_15842[(1)] = (5));

} else {
var statearr_14088_15843 = state_14079__$1;
(statearr_14088_15843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (6))){
var inst_14065 = (state_14079[(8)]);
var inst_14060 = (state_14079[(7)]);
var inst_14065__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14066 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14067 = [inst_14060,inst_14065__$1];
var inst_14068 = (new cljs.core.PersistentVector(null,2,(5),inst_14066,inst_14067,null));
var state_14079__$1 = (function (){var statearr_14089 = state_14079;
(statearr_14089[(8)] = inst_14065__$1);

return statearr_14089;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14079__$1,(8),jobs,inst_14068);
} else {
if((state_val_14080 === (3))){
var inst_14077 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14079__$1,inst_14077);
} else {
if((state_val_14080 === (2))){
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14079__$1,(4),from);
} else {
if((state_val_14080 === (9))){
var inst_14072 = (state_14079[(2)]);
var state_14079__$1 = (function (){var statearr_14094 = state_14079;
(statearr_14094[(9)] = inst_14072);

return statearr_14094;
})();
var statearr_14095_15844 = state_14079__$1;
(statearr_14095_15844[(2)] = null);

(statearr_14095_15844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (5))){
var inst_14063 = cljs.core.async.close_BANG_(jobs);
var state_14079__$1 = state_14079;
var statearr_14096_15845 = state_14079__$1;
(statearr_14096_15845[(2)] = inst_14063);

(statearr_14096_15845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (8))){
var inst_14065 = (state_14079[(8)]);
var inst_14070 = (state_14079[(2)]);
var state_14079__$1 = (function (){var statearr_14097 = state_14079;
(statearr_14097[(10)] = inst_14070);

return statearr_14097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14079__$1,(9),results,inst_14065);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0 = (function (){
var statearr_14098 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__);

(statearr_14098[(1)] = (1));

return statearr_14098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1 = (function (state_14079){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14079);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14099){var ex__13632__auto__ = e14099;
var statearr_14100_15846 = state_14079;
(statearr_14100_15846[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14079[(4)]))){
var statearr_14101_15847 = state_14079;
(statearr_14101_15847[(1)] = cljs.core.first((state_14079[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15848 = state_14079;
state_14079 = G__15848;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = function(state_14079){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1.call(this,state_14079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14102 = f__13741__auto__();
(statearr_14102[(6)] = c__13740__auto___15839);

return statearr_14102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


var c__13740__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14141){
var state_val_14142 = (state_14141[(1)]);
if((state_val_14142 === (7))){
var inst_14137 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14143_15849 = state_14141__$1;
(statearr_14143_15849[(2)] = inst_14137);

(statearr_14143_15849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (20))){
var state_14141__$1 = state_14141;
var statearr_14144_15850 = state_14141__$1;
(statearr_14144_15850[(2)] = null);

(statearr_14144_15850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (1))){
var state_14141__$1 = state_14141;
var statearr_14145_15851 = state_14141__$1;
(statearr_14145_15851[(2)] = null);

(statearr_14145_15851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (4))){
var inst_14105 = (state_14141[(7)]);
var inst_14105__$1 = (state_14141[(2)]);
var inst_14106 = (inst_14105__$1 == null);
var state_14141__$1 = (function (){var statearr_14146 = state_14141;
(statearr_14146[(7)] = inst_14105__$1);

return statearr_14146;
})();
if(cljs.core.truth_(inst_14106)){
var statearr_14147_15852 = state_14141__$1;
(statearr_14147_15852[(1)] = (5));

} else {
var statearr_14148_15853 = state_14141__$1;
(statearr_14148_15853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (15))){
var inst_14118 = (state_14141[(8)]);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14141__$1,(18),to,inst_14118);
} else {
if((state_val_14142 === (21))){
var inst_14132 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14149_15854 = state_14141__$1;
(statearr_14149_15854[(2)] = inst_14132);

(statearr_14149_15854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (13))){
var inst_14134 = (state_14141[(2)]);
var state_14141__$1 = (function (){var statearr_14150 = state_14141;
(statearr_14150[(9)] = inst_14134);

return statearr_14150;
})();
var statearr_14151_15855 = state_14141__$1;
(statearr_14151_15855[(2)] = null);

(statearr_14151_15855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (6))){
var inst_14105 = (state_14141[(7)]);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14141__$1,(11),inst_14105);
} else {
if((state_val_14142 === (17))){
var inst_14127 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
if(cljs.core.truth_(inst_14127)){
var statearr_14152_15856 = state_14141__$1;
(statearr_14152_15856[(1)] = (19));

} else {
var statearr_14153_15857 = state_14141__$1;
(statearr_14153_15857[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (3))){
var inst_14139 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14141__$1,inst_14139);
} else {
if((state_val_14142 === (12))){
var inst_14115 = (state_14141[(10)]);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14141__$1,(14),inst_14115);
} else {
if((state_val_14142 === (2))){
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14141__$1,(4),results);
} else {
if((state_val_14142 === (19))){
var state_14141__$1 = state_14141;
var statearr_14154_15859 = state_14141__$1;
(statearr_14154_15859[(2)] = null);

(statearr_14154_15859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (11))){
var inst_14115 = (state_14141[(2)]);
var state_14141__$1 = (function (){var statearr_14155 = state_14141;
(statearr_14155[(10)] = inst_14115);

return statearr_14155;
})();
var statearr_14156_15861 = state_14141__$1;
(statearr_14156_15861[(2)] = null);

(statearr_14156_15861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (9))){
var state_14141__$1 = state_14141;
var statearr_14157_15862 = state_14141__$1;
(statearr_14157_15862[(2)] = null);

(statearr_14157_15862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (5))){
var state_14141__$1 = state_14141;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14158_15864 = state_14141__$1;
(statearr_14158_15864[(1)] = (8));

} else {
var statearr_14159_15865 = state_14141__$1;
(statearr_14159_15865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (14))){
var inst_14121 = (state_14141[(11)]);
var inst_14118 = (state_14141[(8)]);
var inst_14118__$1 = (state_14141[(2)]);
var inst_14120 = (inst_14118__$1 == null);
var inst_14121__$1 = cljs.core.not(inst_14120);
var state_14141__$1 = (function (){var statearr_14162 = state_14141;
(statearr_14162[(11)] = inst_14121__$1);

(statearr_14162[(8)] = inst_14118__$1);

return statearr_14162;
})();
if(inst_14121__$1){
var statearr_14163_15866 = state_14141__$1;
(statearr_14163_15866[(1)] = (15));

} else {
var statearr_14164_15868 = state_14141__$1;
(statearr_14164_15868[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (16))){
var inst_14121 = (state_14141[(11)]);
var state_14141__$1 = state_14141;
var statearr_14165_15870 = state_14141__$1;
(statearr_14165_15870[(2)] = inst_14121);

(statearr_14165_15870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (10))){
var inst_14112 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14166_15872 = state_14141__$1;
(statearr_14166_15872[(2)] = inst_14112);

(statearr_14166_15872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (18))){
var inst_14124 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14167_15874 = state_14141__$1;
(statearr_14167_15874[(2)] = inst_14124);

(statearr_14167_15874[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (8))){
var inst_14109 = cljs.core.async.close_BANG_(to);
var state_14141__$1 = state_14141;
var statearr_14168_15875 = state_14141__$1;
(statearr_14168_15875[(2)] = inst_14109);

(statearr_14168_15875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0 = (function (){
var statearr_14173 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14173[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__);

(statearr_14173[(1)] = (1));

return statearr_14173;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1 = (function (state_14141){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14141);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14175){var ex__13632__auto__ = e14175;
var statearr_14176_15878 = state_14141;
(statearr_14176_15878[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14141[(4)]))){
var statearr_14177_15880 = state_14141;
(statearr_14177_15880[(1)] = cljs.core.first((state_14141[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15881 = state_14141;
state_14141 = G__15881;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__ = function(state_14141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1.call(this,state_14141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13629__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14181 = f__13741__auto__();
(statearr_14181[(6)] = c__13740__auto__);

return statearr_14181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

return c__13740__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14183 = arguments.length;
switch (G__14183) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14190 = arguments.length;
switch (G__14190) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14197 = arguments.length;
switch (G__14197) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13740__auto___15888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14223){
var state_val_14224 = (state_14223[(1)]);
if((state_val_14224 === (7))){
var inst_14219 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
var statearr_14226_15891 = state_14223__$1;
(statearr_14226_15891[(2)] = inst_14219);

(statearr_14226_15891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (1))){
var state_14223__$1 = state_14223;
var statearr_14227_15892 = state_14223__$1;
(statearr_14227_15892[(2)] = null);

(statearr_14227_15892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (4))){
var inst_14200 = (state_14223[(7)]);
var inst_14200__$1 = (state_14223[(2)]);
var inst_14201 = (inst_14200__$1 == null);
var state_14223__$1 = (function (){var statearr_14229 = state_14223;
(statearr_14229[(7)] = inst_14200__$1);

return statearr_14229;
})();
if(cljs.core.truth_(inst_14201)){
var statearr_14231_15893 = state_14223__$1;
(statearr_14231_15893[(1)] = (5));

} else {
var statearr_14232_15894 = state_14223__$1;
(statearr_14232_15894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (13))){
var state_14223__$1 = state_14223;
var statearr_14236_15895 = state_14223__$1;
(statearr_14236_15895[(2)] = null);

(statearr_14236_15895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (6))){
var inst_14200 = (state_14223[(7)]);
var inst_14206 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14200) : p.call(null,inst_14200));
var state_14223__$1 = state_14223;
if(cljs.core.truth_(inst_14206)){
var statearr_14237_15896 = state_14223__$1;
(statearr_14237_15896[(1)] = (9));

} else {
var statearr_14238_15897 = state_14223__$1;
(statearr_14238_15897[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (3))){
var inst_14221 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14223__$1,inst_14221);
} else {
if((state_val_14224 === (12))){
var state_14223__$1 = state_14223;
var statearr_14239_15898 = state_14223__$1;
(statearr_14239_15898[(2)] = null);

(statearr_14239_15898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (2))){
var state_14223__$1 = state_14223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14223__$1,(4),ch);
} else {
if((state_val_14224 === (11))){
var inst_14200 = (state_14223[(7)]);
var inst_14210 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14223__$1,(8),inst_14210,inst_14200);
} else {
if((state_val_14224 === (9))){
var state_14223__$1 = state_14223;
var statearr_14242_15899 = state_14223__$1;
(statearr_14242_15899[(2)] = tc);

(statearr_14242_15899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (5))){
var inst_14203 = cljs.core.async.close_BANG_(tc);
var inst_14204 = cljs.core.async.close_BANG_(fc);
var state_14223__$1 = (function (){var statearr_14243 = state_14223;
(statearr_14243[(8)] = inst_14203);

return statearr_14243;
})();
var statearr_14244_15900 = state_14223__$1;
(statearr_14244_15900[(2)] = inst_14204);

(statearr_14244_15900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (14))){
var inst_14217 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
var statearr_14245_15901 = state_14223__$1;
(statearr_14245_15901[(2)] = inst_14217);

(statearr_14245_15901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (10))){
var state_14223__$1 = state_14223;
var statearr_14246_15902 = state_14223__$1;
(statearr_14246_15902[(2)] = fc);

(statearr_14246_15902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14224 === (8))){
var inst_14212 = (state_14223[(2)]);
var state_14223__$1 = state_14223;
if(cljs.core.truth_(inst_14212)){
var statearr_14247_15903 = state_14223__$1;
(statearr_14247_15903[(1)] = (12));

} else {
var statearr_14250_15904 = state_14223__$1;
(statearr_14250_15904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_14252 = [null,null,null,null,null,null,null,null,null];
(statearr_14252[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_14252[(1)] = (1));

return statearr_14252;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_14223){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14223);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14254){var ex__13632__auto__ = e14254;
var statearr_14255_15905 = state_14223;
(statearr_14255_15905[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14223[(4)]))){
var statearr_14256_15906 = state_14223;
(statearr_14256_15906[(1)] = cljs.core.first((state_14223[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15907 = state_14223;
state_14223 = G__15907;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_14223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_14223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14258 = f__13741__auto__();
(statearr_14258[(6)] = c__13740__auto___15888);

return statearr_14258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13740__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14295){
var state_val_14296 = (state_14295[(1)]);
if((state_val_14296 === (7))){
var inst_14291 = (state_14295[(2)]);
var state_14295__$1 = state_14295;
var statearr_14302_15908 = state_14295__$1;
(statearr_14302_15908[(2)] = inst_14291);

(statearr_14302_15908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14296 === (1))){
var inst_14270 = init;
var inst_14271 = inst_14270;
var state_14295__$1 = (function (){var statearr_14303 = state_14295;
(statearr_14303[(7)] = inst_14271);

return statearr_14303;
})();
var statearr_14304_15909 = state_14295__$1;
(statearr_14304_15909[(2)] = null);

(statearr_14304_15909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14296 === (4))){
var inst_14274 = (state_14295[(8)]);
var inst_14274__$1 = (state_14295[(2)]);
var inst_14275 = (inst_14274__$1 == null);
var state_14295__$1 = (function (){var statearr_14306 = state_14295;
(statearr_14306[(8)] = inst_14274__$1);

return statearr_14306;
})();
if(cljs.core.truth_(inst_14275)){
var statearr_14307_15910 = state_14295__$1;
(statearr_14307_15910[(1)] = (5));

} else {
var statearr_14308_15911 = state_14295__$1;
(statearr_14308_15911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14296 === (6))){
var inst_14282 = (state_14295[(9)]);
var inst_14271 = (state_14295[(7)]);
var inst_14274 = (state_14295[(8)]);
var inst_14282__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14271,inst_14274) : f.call(null,inst_14271,inst_14274));
var inst_14283 = cljs.core.reduced_QMARK_(inst_14282__$1);
var state_14295__$1 = (function (){var statearr_14309 = state_14295;
(statearr_14309[(9)] = inst_14282__$1);

return statearr_14309;
})();
if(inst_14283){
var statearr_14310_15912 = state_14295__$1;
(statearr_14310_15912[(1)] = (8));

} else {
var statearr_14311_15913 = state_14295__$1;
(statearr_14311_15913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14296 === (3))){
var inst_14293 = (state_14295[(2)]);
var state_14295__$1 = state_14295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14295__$1,inst_14293);
} else {
if((state_val_14296 === (2))){
var state_14295__$1 = state_14295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14295__$1,(4),ch);
} else {
if((state_val_14296 === (9))){
var inst_14282 = (state_14295[(9)]);
var inst_14271 = inst_14282;
var state_14295__$1 = (function (){var statearr_14314 = state_14295;
(statearr_14314[(7)] = inst_14271);

return statearr_14314;
})();
var statearr_14315_15916 = state_14295__$1;
(statearr_14315_15916[(2)] = null);

(statearr_14315_15916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14296 === (5))){
var inst_14271 = (state_14295[(7)]);
var state_14295__$1 = state_14295;
var statearr_14316_15917 = state_14295__$1;
(statearr_14316_15917[(2)] = inst_14271);

(statearr_14316_15917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14296 === (10))){
var inst_14289 = (state_14295[(2)]);
var state_14295__$1 = state_14295;
var statearr_14317_15918 = state_14295__$1;
(statearr_14317_15918[(2)] = inst_14289);

(statearr_14317_15918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14296 === (8))){
var inst_14282 = (state_14295[(9)]);
var inst_14285 = cljs.core.deref(inst_14282);
var state_14295__$1 = state_14295;
var statearr_14318_15922 = state_14295__$1;
(statearr_14318_15922[(2)] = inst_14285);

(statearr_14318_15922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13629__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13629__auto____0 = (function (){
var statearr_14319 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14319[(0)] = cljs$core$async$reduce_$_state_machine__13629__auto__);

(statearr_14319[(1)] = (1));

return statearr_14319;
});
var cljs$core$async$reduce_$_state_machine__13629__auto____1 = (function (state_14295){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14295);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14324){var ex__13632__auto__ = e14324;
var statearr_14325_15923 = state_14295;
(statearr_14325_15923[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14295[(4)]))){
var statearr_14326_15924 = state_14295;
(statearr_14326_15924[(1)] = cljs.core.first((state_14295[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15925 = state_14295;
state_14295 = G__15925;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13629__auto__ = function(state_14295){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13629__auto____1.call(this,state_14295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13629__auto____0;
cljs$core$async$reduce_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13629__auto____1;
return cljs$core$async$reduce_$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14327 = f__13741__auto__();
(statearr_14327[(6)] = c__13740__auto__);

return statearr_14327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

return c__13740__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13740__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14335){
var state_val_14336 = (state_14335[(1)]);
if((state_val_14336 === (1))){
var inst_14330 = cljs.core.async.reduce(f__$1,init,ch);
var state_14335__$1 = state_14335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14335__$1,(2),inst_14330);
} else {
if((state_val_14336 === (2))){
var inst_14332 = (state_14335[(2)]);
var inst_14333 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14332) : f__$1.call(null,inst_14332));
var state_14335__$1 = state_14335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14335__$1,inst_14333);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13629__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13629__auto____0 = (function (){
var statearr_14339 = [null,null,null,null,null,null,null];
(statearr_14339[(0)] = cljs$core$async$transduce_$_state_machine__13629__auto__);

(statearr_14339[(1)] = (1));

return statearr_14339;
});
var cljs$core$async$transduce_$_state_machine__13629__auto____1 = (function (state_14335){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14335);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14342){var ex__13632__auto__ = e14342;
var statearr_14343_15926 = state_14335;
(statearr_14343_15926[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14335[(4)]))){
var statearr_14344_15927 = state_14335;
(statearr_14344_15927[(1)] = cljs.core.first((state_14335[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15928 = state_14335;
state_14335 = G__15928;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13629__auto__ = function(state_14335){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13629__auto____1.call(this,state_14335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13629__auto____0;
cljs$core$async$transduce_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13629__auto____1;
return cljs$core$async$transduce_$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14347 = f__13741__auto__();
(statearr_14347[(6)] = c__13740__auto__);

return statearr_14347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

return c__13740__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14351 = arguments.length;
switch (G__14351) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13740__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14376){
var state_val_14377 = (state_14376[(1)]);
if((state_val_14377 === (7))){
var inst_14358 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14378_15931 = state_14376__$1;
(statearr_14378_15931[(2)] = inst_14358);

(statearr_14378_15931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (1))){
var inst_14352 = cljs.core.seq(coll);
var inst_14353 = inst_14352;
var state_14376__$1 = (function (){var statearr_14379 = state_14376;
(statearr_14379[(7)] = inst_14353);

return statearr_14379;
})();
var statearr_14380_15932 = state_14376__$1;
(statearr_14380_15932[(2)] = null);

(statearr_14380_15932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (4))){
var inst_14353 = (state_14376[(7)]);
var inst_14356 = cljs.core.first(inst_14353);
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14376__$1,(7),ch,inst_14356);
} else {
if((state_val_14377 === (13))){
var inst_14370 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14381_15933 = state_14376__$1;
(statearr_14381_15933[(2)] = inst_14370);

(statearr_14381_15933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (6))){
var inst_14361 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
if(cljs.core.truth_(inst_14361)){
var statearr_14382_15934 = state_14376__$1;
(statearr_14382_15934[(1)] = (8));

} else {
var statearr_14383_15935 = state_14376__$1;
(statearr_14383_15935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (3))){
var inst_14374 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14376__$1,inst_14374);
} else {
if((state_val_14377 === (12))){
var state_14376__$1 = state_14376;
var statearr_14387_15937 = state_14376__$1;
(statearr_14387_15937[(2)] = null);

(statearr_14387_15937[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (2))){
var inst_14353 = (state_14376[(7)]);
var state_14376__$1 = state_14376;
if(cljs.core.truth_(inst_14353)){
var statearr_14388_15941 = state_14376__$1;
(statearr_14388_15941[(1)] = (4));

} else {
var statearr_14389_15942 = state_14376__$1;
(statearr_14389_15942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (11))){
var inst_14367 = cljs.core.async.close_BANG_(ch);
var state_14376__$1 = state_14376;
var statearr_14390_15943 = state_14376__$1;
(statearr_14390_15943[(2)] = inst_14367);

(statearr_14390_15943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (9))){
var state_14376__$1 = state_14376;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14391_15944 = state_14376__$1;
(statearr_14391_15944[(1)] = (11));

} else {
var statearr_14392_15945 = state_14376__$1;
(statearr_14392_15945[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (5))){
var inst_14353 = (state_14376[(7)]);
var state_14376__$1 = state_14376;
var statearr_14393_15946 = state_14376__$1;
(statearr_14393_15946[(2)] = inst_14353);

(statearr_14393_15946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (10))){
var inst_14372 = (state_14376[(2)]);
var state_14376__$1 = state_14376;
var statearr_14395_15948 = state_14376__$1;
(statearr_14395_15948[(2)] = inst_14372);

(statearr_14395_15948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14377 === (8))){
var inst_14353 = (state_14376[(7)]);
var inst_14363 = cljs.core.next(inst_14353);
var inst_14353__$1 = inst_14363;
var state_14376__$1 = (function (){var statearr_14396 = state_14376;
(statearr_14396[(7)] = inst_14353__$1);

return statearr_14396;
})();
var statearr_14401_15949 = state_14376__$1;
(statearr_14401_15949[(2)] = null);

(statearr_14401_15949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_14408 = [null,null,null,null,null,null,null,null];
(statearr_14408[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_14408[(1)] = (1));

return statearr_14408;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_14376){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14376);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14411){var ex__13632__auto__ = e14411;
var statearr_14412_15950 = state_14376;
(statearr_14412_15950[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14376[(4)]))){
var statearr_14414_15951 = state_14376;
(statearr_14414_15951[(1)] = cljs.core.first((state_14376[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15952 = state_14376;
state_14376 = G__15952;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_14376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_14376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14415 = f__13741__auto__();
(statearr_14415[(6)] = c__13740__auto__);

return statearr_14415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

return c__13740__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14418 = arguments.length;
switch (G__14418) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_15954 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_15954(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_15955 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_15955(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_15958 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_15958(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_15959 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_15959(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14432 = (function (ch,cs,meta14433){
this.ch = ch;
this.cs = cs;
this.meta14433 = meta14433;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14434,meta14433__$1){
var self__ = this;
var _14434__$1 = this;
return (new cljs.core.async.t_cljs$core$async14432(self__.ch,self__.cs,meta14433__$1));
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14434){
var self__ = this;
var _14434__$1 = this;
return self__.meta14433;
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14432.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14433","meta14433",592303566,null)], null);
}));

(cljs.core.async.t_cljs$core$async14432.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14432.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14432");

(cljs.core.async.t_cljs$core$async14432.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14432");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14432.
 */
cljs.core.async.__GT_t_cljs$core$async14432 = (function cljs$core$async$__GT_t_cljs$core$async14432(ch,cs,meta14433){
return (new cljs.core.async.t_cljs$core$async14432(ch,cs,meta14433));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14432(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13740__auto___15966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14589){
var state_val_14590 = (state_14589[(1)]);
if((state_val_14590 === (7))){
var inst_14584 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14592_15967 = state_14589__$1;
(statearr_14592_15967[(2)] = inst_14584);

(statearr_14592_15967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (20))){
var inst_14485 = (state_14589[(7)]);
var inst_14498 = cljs.core.first(inst_14485);
var inst_14499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14498,(0),null);
var inst_14500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14498,(1),null);
var state_14589__$1 = (function (){var statearr_14593 = state_14589;
(statearr_14593[(8)] = inst_14499);

return statearr_14593;
})();
if(cljs.core.truth_(inst_14500)){
var statearr_14594_15969 = state_14589__$1;
(statearr_14594_15969[(1)] = (22));

} else {
var statearr_14596_15970 = state_14589__$1;
(statearr_14596_15970[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (27))){
var inst_14449 = (state_14589[(9)]);
var inst_14528 = (state_14589[(10)]);
var inst_14535 = (state_14589[(11)]);
var inst_14530 = (state_14589[(12)]);
var inst_14535__$1 = cljs.core._nth(inst_14528,inst_14530);
var inst_14536 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14535__$1,inst_14449,done);
var state_14589__$1 = (function (){var statearr_14598 = state_14589;
(statearr_14598[(11)] = inst_14535__$1);

return statearr_14598;
})();
if(cljs.core.truth_(inst_14536)){
var statearr_14600_15971 = state_14589__$1;
(statearr_14600_15971[(1)] = (30));

} else {
var statearr_14601_15972 = state_14589__$1;
(statearr_14601_15972[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (1))){
var state_14589__$1 = state_14589;
var statearr_14603_15973 = state_14589__$1;
(statearr_14603_15973[(2)] = null);

(statearr_14603_15973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (24))){
var inst_14485 = (state_14589[(7)]);
var inst_14505 = (state_14589[(2)]);
var inst_14506 = cljs.core.next(inst_14485);
var inst_14458 = inst_14506;
var inst_14459 = null;
var inst_14460 = (0);
var inst_14461 = (0);
var state_14589__$1 = (function (){var statearr_14604 = state_14589;
(statearr_14604[(13)] = inst_14461);

(statearr_14604[(14)] = inst_14505);

(statearr_14604[(15)] = inst_14459);

(statearr_14604[(16)] = inst_14460);

(statearr_14604[(17)] = inst_14458);

return statearr_14604;
})();
var statearr_14605_15976 = state_14589__$1;
(statearr_14605_15976[(2)] = null);

(statearr_14605_15976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (39))){
var state_14589__$1 = state_14589;
var statearr_14610_15977 = state_14589__$1;
(statearr_14610_15977[(2)] = null);

(statearr_14610_15977[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (4))){
var inst_14449 = (state_14589[(9)]);
var inst_14449__$1 = (state_14589[(2)]);
var inst_14450 = (inst_14449__$1 == null);
var state_14589__$1 = (function (){var statearr_14611 = state_14589;
(statearr_14611[(9)] = inst_14449__$1);

return statearr_14611;
})();
if(cljs.core.truth_(inst_14450)){
var statearr_14612_15978 = state_14589__$1;
(statearr_14612_15978[(1)] = (5));

} else {
var statearr_14613_15979 = state_14589__$1;
(statearr_14613_15979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (15))){
var inst_14461 = (state_14589[(13)]);
var inst_14459 = (state_14589[(15)]);
var inst_14460 = (state_14589[(16)]);
var inst_14458 = (state_14589[(17)]);
var inst_14481 = (state_14589[(2)]);
var inst_14482 = (inst_14461 + (1));
var tmp14607 = inst_14459;
var tmp14608 = inst_14460;
var tmp14609 = inst_14458;
var inst_14458__$1 = tmp14609;
var inst_14459__$1 = tmp14607;
var inst_14460__$1 = tmp14608;
var inst_14461__$1 = inst_14482;
var state_14589__$1 = (function (){var statearr_14614 = state_14589;
(statearr_14614[(13)] = inst_14461__$1);

(statearr_14614[(15)] = inst_14459__$1);

(statearr_14614[(16)] = inst_14460__$1);

(statearr_14614[(18)] = inst_14481);

(statearr_14614[(17)] = inst_14458__$1);

return statearr_14614;
})();
var statearr_14615_15980 = state_14589__$1;
(statearr_14615_15980[(2)] = null);

(statearr_14615_15980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (21))){
var inst_14509 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14621_15981 = state_14589__$1;
(statearr_14621_15981[(2)] = inst_14509);

(statearr_14621_15981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (31))){
var inst_14535 = (state_14589[(11)]);
var inst_14539 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14535);
var state_14589__$1 = state_14589;
var statearr_14624_15982 = state_14589__$1;
(statearr_14624_15982[(2)] = inst_14539);

(statearr_14624_15982[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (32))){
var inst_14529 = (state_14589[(19)]);
var inst_14528 = (state_14589[(10)]);
var inst_14527 = (state_14589[(20)]);
var inst_14530 = (state_14589[(12)]);
var inst_14541 = (state_14589[(2)]);
var inst_14542 = (inst_14530 + (1));
var tmp14616 = inst_14529;
var tmp14617 = inst_14528;
var tmp14618 = inst_14527;
var inst_14527__$1 = tmp14618;
var inst_14528__$1 = tmp14617;
var inst_14529__$1 = tmp14616;
var inst_14530__$1 = inst_14542;
var state_14589__$1 = (function (){var statearr_14625 = state_14589;
(statearr_14625[(19)] = inst_14529__$1);

(statearr_14625[(10)] = inst_14528__$1);

(statearr_14625[(20)] = inst_14527__$1);

(statearr_14625[(12)] = inst_14530__$1);

(statearr_14625[(21)] = inst_14541);

return statearr_14625;
})();
var statearr_14626_15983 = state_14589__$1;
(statearr_14626_15983[(2)] = null);

(statearr_14626_15983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (40))){
var inst_14557 = (state_14589[(22)]);
var inst_14561 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14557);
var state_14589__$1 = state_14589;
var statearr_14627_15984 = state_14589__$1;
(statearr_14627_15984[(2)] = inst_14561);

(statearr_14627_15984[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (33))){
var inst_14548 = (state_14589[(23)]);
var inst_14550 = cljs.core.chunked_seq_QMARK_(inst_14548);
var state_14589__$1 = state_14589;
if(inst_14550){
var statearr_14628_15985 = state_14589__$1;
(statearr_14628_15985[(1)] = (36));

} else {
var statearr_14629_15986 = state_14589__$1;
(statearr_14629_15986[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (13))){
var inst_14475 = (state_14589[(24)]);
var inst_14478 = cljs.core.async.close_BANG_(inst_14475);
var state_14589__$1 = state_14589;
var statearr_14630_15987 = state_14589__$1;
(statearr_14630_15987[(2)] = inst_14478);

(statearr_14630_15987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (22))){
var inst_14499 = (state_14589[(8)]);
var inst_14502 = cljs.core.async.close_BANG_(inst_14499);
var state_14589__$1 = state_14589;
var statearr_14631_15989 = state_14589__$1;
(statearr_14631_15989[(2)] = inst_14502);

(statearr_14631_15989[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (36))){
var inst_14548 = (state_14589[(23)]);
var inst_14552 = cljs.core.chunk_first(inst_14548);
var inst_14553 = cljs.core.chunk_rest(inst_14548);
var inst_14554 = cljs.core.count(inst_14552);
var inst_14527 = inst_14553;
var inst_14528 = inst_14552;
var inst_14529 = inst_14554;
var inst_14530 = (0);
var state_14589__$1 = (function (){var statearr_14632 = state_14589;
(statearr_14632[(19)] = inst_14529);

(statearr_14632[(10)] = inst_14528);

(statearr_14632[(20)] = inst_14527);

(statearr_14632[(12)] = inst_14530);

return statearr_14632;
})();
var statearr_14633_15993 = state_14589__$1;
(statearr_14633_15993[(2)] = null);

(statearr_14633_15993[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (41))){
var inst_14548 = (state_14589[(23)]);
var inst_14563 = (state_14589[(2)]);
var inst_14564 = cljs.core.next(inst_14548);
var inst_14527 = inst_14564;
var inst_14528 = null;
var inst_14529 = (0);
var inst_14530 = (0);
var state_14589__$1 = (function (){var statearr_14634 = state_14589;
(statearr_14634[(19)] = inst_14529);

(statearr_14634[(10)] = inst_14528);

(statearr_14634[(25)] = inst_14563);

(statearr_14634[(20)] = inst_14527);

(statearr_14634[(12)] = inst_14530);

return statearr_14634;
})();
var statearr_14635_15995 = state_14589__$1;
(statearr_14635_15995[(2)] = null);

(statearr_14635_15995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (43))){
var state_14589__$1 = state_14589;
var statearr_14636_15996 = state_14589__$1;
(statearr_14636_15996[(2)] = null);

(statearr_14636_15996[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (29))){
var inst_14572 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14637_15997 = state_14589__$1;
(statearr_14637_15997[(2)] = inst_14572);

(statearr_14637_15997[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (44))){
var inst_14581 = (state_14589[(2)]);
var state_14589__$1 = (function (){var statearr_14638 = state_14589;
(statearr_14638[(26)] = inst_14581);

return statearr_14638;
})();
var statearr_14639_15998 = state_14589__$1;
(statearr_14639_15998[(2)] = null);

(statearr_14639_15998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (6))){
var inst_14519 = (state_14589[(27)]);
var inst_14518 = cljs.core.deref(cs);
var inst_14519__$1 = cljs.core.keys(inst_14518);
var inst_14520 = cljs.core.count(inst_14519__$1);
var inst_14521 = cljs.core.reset_BANG_(dctr,inst_14520);
var inst_14526 = cljs.core.seq(inst_14519__$1);
var inst_14527 = inst_14526;
var inst_14528 = null;
var inst_14529 = (0);
var inst_14530 = (0);
var state_14589__$1 = (function (){var statearr_14640 = state_14589;
(statearr_14640[(19)] = inst_14529);

(statearr_14640[(10)] = inst_14528);

(statearr_14640[(27)] = inst_14519__$1);

(statearr_14640[(20)] = inst_14527);

(statearr_14640[(28)] = inst_14521);

(statearr_14640[(12)] = inst_14530);

return statearr_14640;
})();
var statearr_14641_16001 = state_14589__$1;
(statearr_14641_16001[(2)] = null);

(statearr_14641_16001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (28))){
var inst_14548 = (state_14589[(23)]);
var inst_14527 = (state_14589[(20)]);
var inst_14548__$1 = cljs.core.seq(inst_14527);
var state_14589__$1 = (function (){var statearr_14642 = state_14589;
(statearr_14642[(23)] = inst_14548__$1);

return statearr_14642;
})();
if(inst_14548__$1){
var statearr_14643_16002 = state_14589__$1;
(statearr_14643_16002[(1)] = (33));

} else {
var statearr_14644_16003 = state_14589__$1;
(statearr_14644_16003[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (25))){
var inst_14529 = (state_14589[(19)]);
var inst_14530 = (state_14589[(12)]);
var inst_14532 = (inst_14530 < inst_14529);
var inst_14533 = inst_14532;
var state_14589__$1 = state_14589;
if(cljs.core.truth_(inst_14533)){
var statearr_14645_16008 = state_14589__$1;
(statearr_14645_16008[(1)] = (27));

} else {
var statearr_14646_16009 = state_14589__$1;
(statearr_14646_16009[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (34))){
var state_14589__$1 = state_14589;
var statearr_14647_16010 = state_14589__$1;
(statearr_14647_16010[(2)] = null);

(statearr_14647_16010[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (17))){
var state_14589__$1 = state_14589;
var statearr_14648_16011 = state_14589__$1;
(statearr_14648_16011[(2)] = null);

(statearr_14648_16011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (3))){
var inst_14586 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14589__$1,inst_14586);
} else {
if((state_val_14590 === (12))){
var inst_14514 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14649_16013 = state_14589__$1;
(statearr_14649_16013[(2)] = inst_14514);

(statearr_14649_16013[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (2))){
var state_14589__$1 = state_14589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14589__$1,(4),ch);
} else {
if((state_val_14590 === (23))){
var state_14589__$1 = state_14589;
var statearr_14652_16014 = state_14589__$1;
(statearr_14652_16014[(2)] = null);

(statearr_14652_16014[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (35))){
var inst_14570 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14653_16015 = state_14589__$1;
(statearr_14653_16015[(2)] = inst_14570);

(statearr_14653_16015[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (19))){
var inst_14485 = (state_14589[(7)]);
var inst_14490 = cljs.core.chunk_first(inst_14485);
var inst_14491 = cljs.core.chunk_rest(inst_14485);
var inst_14492 = cljs.core.count(inst_14490);
var inst_14458 = inst_14491;
var inst_14459 = inst_14490;
var inst_14460 = inst_14492;
var inst_14461 = (0);
var state_14589__$1 = (function (){var statearr_14654 = state_14589;
(statearr_14654[(13)] = inst_14461);

(statearr_14654[(15)] = inst_14459);

(statearr_14654[(16)] = inst_14460);

(statearr_14654[(17)] = inst_14458);

return statearr_14654;
})();
var statearr_14655_16016 = state_14589__$1;
(statearr_14655_16016[(2)] = null);

(statearr_14655_16016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (11))){
var inst_14485 = (state_14589[(7)]);
var inst_14458 = (state_14589[(17)]);
var inst_14485__$1 = cljs.core.seq(inst_14458);
var state_14589__$1 = (function (){var statearr_14657 = state_14589;
(statearr_14657[(7)] = inst_14485__$1);

return statearr_14657;
})();
if(inst_14485__$1){
var statearr_14658_16017 = state_14589__$1;
(statearr_14658_16017[(1)] = (16));

} else {
var statearr_14659_16018 = state_14589__$1;
(statearr_14659_16018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (9))){
var inst_14516 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14660_16019 = state_14589__$1;
(statearr_14660_16019[(2)] = inst_14516);

(statearr_14660_16019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (5))){
var inst_14456 = cljs.core.deref(cs);
var inst_14457 = cljs.core.seq(inst_14456);
var inst_14458 = inst_14457;
var inst_14459 = null;
var inst_14460 = (0);
var inst_14461 = (0);
var state_14589__$1 = (function (){var statearr_14661 = state_14589;
(statearr_14661[(13)] = inst_14461);

(statearr_14661[(15)] = inst_14459);

(statearr_14661[(16)] = inst_14460);

(statearr_14661[(17)] = inst_14458);

return statearr_14661;
})();
var statearr_14664_16021 = state_14589__$1;
(statearr_14664_16021[(2)] = null);

(statearr_14664_16021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (14))){
var state_14589__$1 = state_14589;
var statearr_14667_16022 = state_14589__$1;
(statearr_14667_16022[(2)] = null);

(statearr_14667_16022[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (45))){
var inst_14578 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14669_16024 = state_14589__$1;
(statearr_14669_16024[(2)] = inst_14578);

(statearr_14669_16024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (26))){
var inst_14519 = (state_14589[(27)]);
var inst_14574 = (state_14589[(2)]);
var inst_14575 = cljs.core.seq(inst_14519);
var state_14589__$1 = (function (){var statearr_14670 = state_14589;
(statearr_14670[(29)] = inst_14574);

return statearr_14670;
})();
if(inst_14575){
var statearr_14671_16025 = state_14589__$1;
(statearr_14671_16025[(1)] = (42));

} else {
var statearr_14672_16027 = state_14589__$1;
(statearr_14672_16027[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (16))){
var inst_14485 = (state_14589[(7)]);
var inst_14487 = cljs.core.chunked_seq_QMARK_(inst_14485);
var state_14589__$1 = state_14589;
if(inst_14487){
var statearr_14674_16029 = state_14589__$1;
(statearr_14674_16029[(1)] = (19));

} else {
var statearr_14675_16030 = state_14589__$1;
(statearr_14675_16030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (38))){
var inst_14567 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14676_16031 = state_14589__$1;
(statearr_14676_16031[(2)] = inst_14567);

(statearr_14676_16031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (30))){
var state_14589__$1 = state_14589;
var statearr_14677_16033 = state_14589__$1;
(statearr_14677_16033[(2)] = null);

(statearr_14677_16033[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (10))){
var inst_14461 = (state_14589[(13)]);
var inst_14459 = (state_14589[(15)]);
var inst_14474 = cljs.core._nth(inst_14459,inst_14461);
var inst_14475 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14474,(0),null);
var inst_14476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14474,(1),null);
var state_14589__$1 = (function (){var statearr_14678 = state_14589;
(statearr_14678[(24)] = inst_14475);

return statearr_14678;
})();
if(cljs.core.truth_(inst_14476)){
var statearr_14679_16034 = state_14589__$1;
(statearr_14679_16034[(1)] = (13));

} else {
var statearr_14680_16035 = state_14589__$1;
(statearr_14680_16035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (18))){
var inst_14512 = (state_14589[(2)]);
var state_14589__$1 = state_14589;
var statearr_14681_16036 = state_14589__$1;
(statearr_14681_16036[(2)] = inst_14512);

(statearr_14681_16036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (42))){
var state_14589__$1 = state_14589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14589__$1,(45),dchan);
} else {
if((state_val_14590 === (37))){
var inst_14449 = (state_14589[(9)]);
var inst_14557 = (state_14589[(22)]);
var inst_14548 = (state_14589[(23)]);
var inst_14557__$1 = cljs.core.first(inst_14548);
var inst_14558 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14557__$1,inst_14449,done);
var state_14589__$1 = (function (){var statearr_14683 = state_14589;
(statearr_14683[(22)] = inst_14557__$1);

return statearr_14683;
})();
if(cljs.core.truth_(inst_14558)){
var statearr_14684_16037 = state_14589__$1;
(statearr_14684_16037[(1)] = (39));

} else {
var statearr_14685_16038 = state_14589__$1;
(statearr_14685_16038[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14590 === (8))){
var inst_14461 = (state_14589[(13)]);
var inst_14460 = (state_14589[(16)]);
var inst_14468 = (inst_14461 < inst_14460);
var inst_14469 = inst_14468;
var state_14589__$1 = state_14589;
if(cljs.core.truth_(inst_14469)){
var statearr_14686_16040 = state_14589__$1;
(statearr_14686_16040[(1)] = (10));

} else {
var statearr_14688_16041 = state_14589__$1;
(statearr_14688_16041[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13629__auto__ = null;
var cljs$core$async$mult_$_state_machine__13629__auto____0 = (function (){
var statearr_14690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14690[(0)] = cljs$core$async$mult_$_state_machine__13629__auto__);

(statearr_14690[(1)] = (1));

return statearr_14690;
});
var cljs$core$async$mult_$_state_machine__13629__auto____1 = (function (state_14589){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14589);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14691){var ex__13632__auto__ = e14691;
var statearr_14692_16043 = state_14589;
(statearr_14692_16043[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14589[(4)]))){
var statearr_14693_16044 = state_14589;
(statearr_14693_16044[(1)] = cljs.core.first((state_14589[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16045 = state_14589;
state_14589 = G__16045;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13629__auto__ = function(state_14589){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13629__auto____1.call(this,state_14589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13629__auto____0;
cljs$core$async$mult_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13629__auto____1;
return cljs$core$async$mult_$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14695 = f__13741__auto__();
(statearr_14695[(6)] = c__13740__auto___15966);

return statearr_14695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__14702 = arguments.length;
switch (G__14702) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_16050 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_16050(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_16052 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_16052(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_16054 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_16054(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_16056 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_16056(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_16058 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_16058(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16063 = arguments.length;
var i__5770__auto___16064 = (0);
while(true){
if((i__5770__auto___16064 < len__5769__auto___16063)){
args__5775__auto__.push((arguments[i__5770__auto___16064]));

var G__16066 = (i__5770__auto___16064 + (1));
i__5770__auto___16064 = G__16066;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14727){
var map__14728 = p__14727;
var map__14728__$1 = cljs.core.__destructure_map(map__14728);
var opts = map__14728__$1;
var statearr_14729_16069 = state;
(statearr_14729_16069[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_14730_16070 = state;
(statearr_14730_16070[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_14731_16071 = state;
(statearr_14731_16071[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14723){
var G__14724 = cljs.core.first(seq14723);
var seq14723__$1 = cljs.core.next(seq14723);
var G__14725 = cljs.core.first(seq14723__$1);
var seq14723__$2 = cljs.core.next(seq14723__$1);
var G__14726 = cljs.core.first(seq14723__$2);
var seq14723__$3 = cljs.core.next(seq14723__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14724,G__14725,G__14726,seq14723__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14751 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14752){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14752 = meta14752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14753,meta14752__$1){
var self__ = this;
var _14753__$1 = this;
return (new cljs.core.async.t_cljs$core$async14751(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14752__$1));
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14753){
var self__ = this;
var _14753__$1 = this;
return self__.meta14752;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14751.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async14751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14752","meta14752",-1259385417,null)], null);
}));

(cljs.core.async.t_cljs$core$async14751.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14751");

(cljs.core.async.t_cljs$core$async14751.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14751");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14751.
 */
cljs.core.async.__GT_t_cljs$core$async14751 = (function cljs$core$async$__GT_t_cljs$core$async14751(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14752){
return (new cljs.core.async.t_cljs$core$async14751(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14752));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async14751(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13740__auto___16086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_14841){
var state_val_14842 = (state_14841[(1)]);
if((state_val_14842 === (7))){
var inst_14796 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
if(cljs.core.truth_(inst_14796)){
var statearr_14845_16088 = state_14841__$1;
(statearr_14845_16088[(1)] = (8));

} else {
var statearr_14846_16089 = state_14841__$1;
(statearr_14846_16089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (20))){
var inst_14788 = (state_14841[(7)]);
var state_14841__$1 = state_14841;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14841__$1,(23),out,inst_14788);
} else {
if((state_val_14842 === (1))){
var inst_14770 = calc_state();
var inst_14771 = cljs.core.__destructure_map(inst_14770);
var inst_14772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14771,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14771,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14771,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14775 = inst_14770;
var state_14841__$1 = (function (){var statearr_14847 = state_14841;
(statearr_14847[(8)] = inst_14772);

(statearr_14847[(9)] = inst_14774);

(statearr_14847[(10)] = inst_14775);

(statearr_14847[(11)] = inst_14773);

return statearr_14847;
})();
var statearr_14848_16092 = state_14841__$1;
(statearr_14848_16092[(2)] = null);

(statearr_14848_16092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (24))){
var inst_14778 = (state_14841[(12)]);
var inst_14775 = inst_14778;
var state_14841__$1 = (function (){var statearr_14849 = state_14841;
(statearr_14849[(10)] = inst_14775);

return statearr_14849;
})();
var statearr_14850_16093 = state_14841__$1;
(statearr_14850_16093[(2)] = null);

(statearr_14850_16093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (4))){
var inst_14791 = (state_14841[(13)]);
var inst_14788 = (state_14841[(7)]);
var inst_14787 = (state_14841[(2)]);
var inst_14788__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14787,(0),null);
var inst_14789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14787,(1),null);
var inst_14791__$1 = (inst_14788__$1 == null);
var state_14841__$1 = (function (){var statearr_14851 = state_14841;
(statearr_14851[(14)] = inst_14789);

(statearr_14851[(13)] = inst_14791__$1);

(statearr_14851[(7)] = inst_14788__$1);

return statearr_14851;
})();
if(cljs.core.truth_(inst_14791__$1)){
var statearr_14852_16096 = state_14841__$1;
(statearr_14852_16096[(1)] = (5));

} else {
var statearr_14853_16098 = state_14841__$1;
(statearr_14853_16098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (15))){
var inst_14813 = (state_14841[(15)]);
var inst_14779 = (state_14841[(16)]);
var inst_14813__$1 = cljs.core.empty_QMARK_(inst_14779);
var state_14841__$1 = (function (){var statearr_14854 = state_14841;
(statearr_14854[(15)] = inst_14813__$1);

return statearr_14854;
})();
if(inst_14813__$1){
var statearr_14855_16099 = state_14841__$1;
(statearr_14855_16099[(1)] = (17));

} else {
var statearr_14856_16100 = state_14841__$1;
(statearr_14856_16100[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (21))){
var inst_14778 = (state_14841[(12)]);
var inst_14775 = inst_14778;
var state_14841__$1 = (function (){var statearr_14857 = state_14841;
(statearr_14857[(10)] = inst_14775);

return statearr_14857;
})();
var statearr_14858_16101 = state_14841__$1;
(statearr_14858_16101[(2)] = null);

(statearr_14858_16101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (13))){
var inst_14805 = (state_14841[(2)]);
var inst_14806 = calc_state();
var inst_14775 = inst_14806;
var state_14841__$1 = (function (){var statearr_14859 = state_14841;
(statearr_14859[(17)] = inst_14805);

(statearr_14859[(10)] = inst_14775);

return statearr_14859;
})();
var statearr_14860_16104 = state_14841__$1;
(statearr_14860_16104[(2)] = null);

(statearr_14860_16104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (22))){
var inst_14835 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
var statearr_14861_16105 = state_14841__$1;
(statearr_14861_16105[(2)] = inst_14835);

(statearr_14861_16105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (6))){
var inst_14789 = (state_14841[(14)]);
var inst_14794 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_14789,change);
var state_14841__$1 = state_14841;
var statearr_14865_16106 = state_14841__$1;
(statearr_14865_16106[(2)] = inst_14794);

(statearr_14865_16106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (25))){
var state_14841__$1 = state_14841;
var statearr_14866_16107 = state_14841__$1;
(statearr_14866_16107[(2)] = null);

(statearr_14866_16107[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (17))){
var inst_14781 = (state_14841[(18)]);
var inst_14789 = (state_14841[(14)]);
var inst_14817 = (inst_14781.cljs$core$IFn$_invoke$arity$1 ? inst_14781.cljs$core$IFn$_invoke$arity$1(inst_14789) : inst_14781.call(null,inst_14789));
var inst_14818 = cljs.core.not(inst_14817);
var state_14841__$1 = state_14841;
var statearr_14867_16109 = state_14841__$1;
(statearr_14867_16109[(2)] = inst_14818);

(statearr_14867_16109[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (3))){
var inst_14839 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14841__$1,inst_14839);
} else {
if((state_val_14842 === (12))){
var state_14841__$1 = state_14841;
var statearr_14868_16113 = state_14841__$1;
(statearr_14868_16113[(2)] = null);

(statearr_14868_16113[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (2))){
var inst_14775 = (state_14841[(10)]);
var inst_14778 = (state_14841[(12)]);
var inst_14778__$1 = cljs.core.__destructure_map(inst_14775);
var inst_14779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14778__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14778__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14778__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14841__$1 = (function (){var statearr_14869 = state_14841;
(statearr_14869[(18)] = inst_14781);

(statearr_14869[(16)] = inst_14779);

(statearr_14869[(12)] = inst_14778__$1);

return statearr_14869;
})();
return cljs.core.async.ioc_alts_BANG_(state_14841__$1,(4),inst_14782);
} else {
if((state_val_14842 === (23))){
var inst_14826 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
if(cljs.core.truth_(inst_14826)){
var statearr_14870_16115 = state_14841__$1;
(statearr_14870_16115[(1)] = (24));

} else {
var statearr_14871_16116 = state_14841__$1;
(statearr_14871_16116[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (19))){
var inst_14821 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
var statearr_14872_16117 = state_14841__$1;
(statearr_14872_16117[(2)] = inst_14821);

(statearr_14872_16117[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (11))){
var inst_14789 = (state_14841[(14)]);
var inst_14802 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_14789);
var state_14841__$1 = state_14841;
var statearr_14873_16118 = state_14841__$1;
(statearr_14873_16118[(2)] = inst_14802);

(statearr_14873_16118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (9))){
var inst_14779 = (state_14841[(16)]);
var inst_14789 = (state_14841[(14)]);
var inst_14810 = (state_14841[(19)]);
var inst_14810__$1 = (inst_14779.cljs$core$IFn$_invoke$arity$1 ? inst_14779.cljs$core$IFn$_invoke$arity$1(inst_14789) : inst_14779.call(null,inst_14789));
var state_14841__$1 = (function (){var statearr_14874 = state_14841;
(statearr_14874[(19)] = inst_14810__$1);

return statearr_14874;
})();
if(cljs.core.truth_(inst_14810__$1)){
var statearr_14875_16119 = state_14841__$1;
(statearr_14875_16119[(1)] = (14));

} else {
var statearr_14876_16120 = state_14841__$1;
(statearr_14876_16120[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (5))){
var inst_14791 = (state_14841[(13)]);
var state_14841__$1 = state_14841;
var statearr_14880_16121 = state_14841__$1;
(statearr_14880_16121[(2)] = inst_14791);

(statearr_14880_16121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (14))){
var inst_14810 = (state_14841[(19)]);
var state_14841__$1 = state_14841;
var statearr_14881_16122 = state_14841__$1;
(statearr_14881_16122[(2)] = inst_14810);

(statearr_14881_16122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (26))){
var inst_14831 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
var statearr_14882_16123 = state_14841__$1;
(statearr_14882_16123[(2)] = inst_14831);

(statearr_14882_16123[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (16))){
var inst_14823 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
if(cljs.core.truth_(inst_14823)){
var statearr_14883_16124 = state_14841__$1;
(statearr_14883_16124[(1)] = (20));

} else {
var statearr_14884_16125 = state_14841__$1;
(statearr_14884_16125[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (10))){
var inst_14837 = (state_14841[(2)]);
var state_14841__$1 = state_14841;
var statearr_14885_16126 = state_14841__$1;
(statearr_14885_16126[(2)] = inst_14837);

(statearr_14885_16126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (18))){
var inst_14813 = (state_14841[(15)]);
var state_14841__$1 = state_14841;
var statearr_14886_16127 = state_14841__$1;
(statearr_14886_16127[(2)] = inst_14813);

(statearr_14886_16127[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14842 === (8))){
var inst_14788 = (state_14841[(7)]);
var inst_14799 = (inst_14788 == null);
var state_14841__$1 = state_14841;
if(cljs.core.truth_(inst_14799)){
var statearr_14887_16128 = state_14841__$1;
(statearr_14887_16128[(1)] = (11));

} else {
var statearr_14888_16129 = state_14841__$1;
(statearr_14888_16129[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13629__auto__ = null;
var cljs$core$async$mix_$_state_machine__13629__auto____0 = (function (){
var statearr_14889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14889[(0)] = cljs$core$async$mix_$_state_machine__13629__auto__);

(statearr_14889[(1)] = (1));

return statearr_14889;
});
var cljs$core$async$mix_$_state_machine__13629__auto____1 = (function (state_14841){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_14841);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e14890){var ex__13632__auto__ = e14890;
var statearr_14891_16131 = state_14841;
(statearr_14891_16131[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_14841[(4)]))){
var statearr_14892_16132 = state_14841;
(statearr_14892_16132[(1)] = cljs.core.first((state_14841[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16133 = state_14841;
state_14841 = G__16133;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13629__auto__ = function(state_14841){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13629__auto____1.call(this,state_14841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13629__auto____0;
cljs$core$async$mix_$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13629__auto____1;
return cljs$core$async$mix_$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_14893 = f__13741__auto__();
(statearr_14893[(6)] = c__13740__auto___16086);

return statearr_14893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_16134 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_16134(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_16135 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_16135(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_16136 = (function() {
var G__16137 = null;
var G__16137__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__16137__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__16137 = function(p,v){
switch(arguments.length){
case 1:
return G__16137__1.call(this,p);
case 2:
return G__16137__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16137.cljs$core$IFn$_invoke$arity$1 = G__16137__1;
G__16137.cljs$core$IFn$_invoke$arity$2 = G__16137__2;
return G__16137;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__14917 = arguments.length;
switch (G__14917) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16136(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_16136(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14925 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14926){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14926 = meta14926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14927,meta14926__$1){
var self__ = this;
var _14927__$1 = this;
return (new cljs.core.async.t_cljs$core$async14925(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14926__$1));
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14927){
var self__ = this;
var _14927__$1 = this;
return self__.meta14926;
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async14925.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async14925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14926","meta14926",-1352036440,null)], null);
}));

(cljs.core.async.t_cljs$core$async14925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14925");

(cljs.core.async.t_cljs$core$async14925.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14925.
 */
cljs.core.async.__GT_t_cljs$core$async14925 = (function cljs$core$async$__GT_t_cljs$core$async14925(ch,topic_fn,buf_fn,mults,ensure_mult,meta14926){
return (new cljs.core.async.t_cljs$core$async14925(ch,topic_fn,buf_fn,mults,ensure_mult,meta14926));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__14922 = arguments.length;
switch (G__14922) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__14919_SHARP_){
if(cljs.core.truth_((p1__14919_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14919_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__14919_SHARP_.call(null,topic)))){
return p1__14919_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14919_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async14925(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13740__auto___16148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15002){
var state_val_15003 = (state_15002[(1)]);
if((state_val_15003 === (7))){
var inst_14998 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
var statearr_15004_16149 = state_15002__$1;
(statearr_15004_16149[(2)] = inst_14998);

(statearr_15004_16149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (20))){
var state_15002__$1 = state_15002;
var statearr_15005_16151 = state_15002__$1;
(statearr_15005_16151[(2)] = null);

(statearr_15005_16151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (1))){
var state_15002__$1 = state_15002;
var statearr_15006_16155 = state_15002__$1;
(statearr_15006_16155[(2)] = null);

(statearr_15006_16155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (24))){
var inst_14981 = (state_15002[(7)]);
var inst_14990 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_14981);
var state_15002__$1 = state_15002;
var statearr_15007_16156 = state_15002__$1;
(statearr_15007_16156[(2)] = inst_14990);

(statearr_15007_16156[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (4))){
var inst_14932 = (state_15002[(8)]);
var inst_14932__$1 = (state_15002[(2)]);
var inst_14933 = (inst_14932__$1 == null);
var state_15002__$1 = (function (){var statearr_15008 = state_15002;
(statearr_15008[(8)] = inst_14932__$1);

return statearr_15008;
})();
if(cljs.core.truth_(inst_14933)){
var statearr_15009_16157 = state_15002__$1;
(statearr_15009_16157[(1)] = (5));

} else {
var statearr_15014_16158 = state_15002__$1;
(statearr_15014_16158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (15))){
var inst_14975 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
var statearr_15020_16159 = state_15002__$1;
(statearr_15020_16159[(2)] = inst_14975);

(statearr_15020_16159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (21))){
var inst_14995 = (state_15002[(2)]);
var state_15002__$1 = (function (){var statearr_15024 = state_15002;
(statearr_15024[(9)] = inst_14995);

return statearr_15024;
})();
var statearr_15029_16162 = state_15002__$1;
(statearr_15029_16162[(2)] = null);

(statearr_15029_16162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (13))){
var inst_14956 = (state_15002[(10)]);
var inst_14958 = cljs.core.chunked_seq_QMARK_(inst_14956);
var state_15002__$1 = state_15002;
if(inst_14958){
var statearr_15039_16163 = state_15002__$1;
(statearr_15039_16163[(1)] = (16));

} else {
var statearr_15040_16164 = state_15002__$1;
(statearr_15040_16164[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (22))){
var inst_14987 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
if(cljs.core.truth_(inst_14987)){
var statearr_15041_16165 = state_15002__$1;
(statearr_15041_16165[(1)] = (23));

} else {
var statearr_15042_16166 = state_15002__$1;
(statearr_15042_16166[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (6))){
var inst_14983 = (state_15002[(11)]);
var inst_14932 = (state_15002[(8)]);
var inst_14981 = (state_15002[(7)]);
var inst_14981__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_14932) : topic_fn.call(null,inst_14932));
var inst_14982 = cljs.core.deref(mults);
var inst_14983__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_14982,inst_14981__$1);
var state_15002__$1 = (function (){var statearr_15046 = state_15002;
(statearr_15046[(11)] = inst_14983__$1);

(statearr_15046[(7)] = inst_14981__$1);

return statearr_15046;
})();
if(cljs.core.truth_(inst_14983__$1)){
var statearr_15047_16171 = state_15002__$1;
(statearr_15047_16171[(1)] = (19));

} else {
var statearr_15048_16172 = state_15002__$1;
(statearr_15048_16172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (25))){
var inst_14992 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
var statearr_15049_16173 = state_15002__$1;
(statearr_15049_16173[(2)] = inst_14992);

(statearr_15049_16173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (17))){
var inst_14956 = (state_15002[(10)]);
var inst_14965 = cljs.core.first(inst_14956);
var inst_14966 = cljs.core.async.muxch_STAR_(inst_14965);
var inst_14967 = cljs.core.async.close_BANG_(inst_14966);
var inst_14969 = cljs.core.next(inst_14956);
var inst_14942 = inst_14969;
var inst_14943 = null;
var inst_14944 = (0);
var inst_14945 = (0);
var state_15002__$1 = (function (){var statearr_15068 = state_15002;
(statearr_15068[(12)] = inst_14943);

(statearr_15068[(13)] = inst_14945);

(statearr_15068[(14)] = inst_14944);

(statearr_15068[(15)] = inst_14967);

(statearr_15068[(16)] = inst_14942);

return statearr_15068;
})();
var statearr_15070_16174 = state_15002__$1;
(statearr_15070_16174[(2)] = null);

(statearr_15070_16174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (3))){
var inst_15000 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15002__$1,inst_15000);
} else {
if((state_val_15003 === (12))){
var inst_14977 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
var statearr_15074_16177 = state_15002__$1;
(statearr_15074_16177[(2)] = inst_14977);

(statearr_15074_16177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (2))){
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15002__$1,(4),ch);
} else {
if((state_val_15003 === (23))){
var state_15002__$1 = state_15002;
var statearr_15075_16178 = state_15002__$1;
(statearr_15075_16178[(2)] = null);

(statearr_15075_16178[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (19))){
var inst_14983 = (state_15002[(11)]);
var inst_14932 = (state_15002[(8)]);
var inst_14985 = cljs.core.async.muxch_STAR_(inst_14983);
var state_15002__$1 = state_15002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15002__$1,(22),inst_14985,inst_14932);
} else {
if((state_val_15003 === (11))){
var inst_14942 = (state_15002[(16)]);
var inst_14956 = (state_15002[(10)]);
var inst_14956__$1 = cljs.core.seq(inst_14942);
var state_15002__$1 = (function (){var statearr_15080 = state_15002;
(statearr_15080[(10)] = inst_14956__$1);

return statearr_15080;
})();
if(inst_14956__$1){
var statearr_15081_16183 = state_15002__$1;
(statearr_15081_16183[(1)] = (13));

} else {
var statearr_15082_16184 = state_15002__$1;
(statearr_15082_16184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (9))){
var inst_14979 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
var statearr_15083_16185 = state_15002__$1;
(statearr_15083_16185[(2)] = inst_14979);

(statearr_15083_16185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (5))){
var inst_14939 = cljs.core.deref(mults);
var inst_14940 = cljs.core.vals(inst_14939);
var inst_14941 = cljs.core.seq(inst_14940);
var inst_14942 = inst_14941;
var inst_14943 = null;
var inst_14944 = (0);
var inst_14945 = (0);
var state_15002__$1 = (function (){var statearr_15086 = state_15002;
(statearr_15086[(12)] = inst_14943);

(statearr_15086[(13)] = inst_14945);

(statearr_15086[(14)] = inst_14944);

(statearr_15086[(16)] = inst_14942);

return statearr_15086;
})();
var statearr_15087_16186 = state_15002__$1;
(statearr_15087_16186[(2)] = null);

(statearr_15087_16186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (14))){
var state_15002__$1 = state_15002;
var statearr_15095_16188 = state_15002__$1;
(statearr_15095_16188[(2)] = null);

(statearr_15095_16188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (16))){
var inst_14956 = (state_15002[(10)]);
var inst_14960 = cljs.core.chunk_first(inst_14956);
var inst_14961 = cljs.core.chunk_rest(inst_14956);
var inst_14962 = cljs.core.count(inst_14960);
var inst_14942 = inst_14961;
var inst_14943 = inst_14960;
var inst_14944 = inst_14962;
var inst_14945 = (0);
var state_15002__$1 = (function (){var statearr_15096 = state_15002;
(statearr_15096[(12)] = inst_14943);

(statearr_15096[(13)] = inst_14945);

(statearr_15096[(14)] = inst_14944);

(statearr_15096[(16)] = inst_14942);

return statearr_15096;
})();
var statearr_15097_16190 = state_15002__$1;
(statearr_15097_16190[(2)] = null);

(statearr_15097_16190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (10))){
var inst_14943 = (state_15002[(12)]);
var inst_14945 = (state_15002[(13)]);
var inst_14944 = (state_15002[(14)]);
var inst_14942 = (state_15002[(16)]);
var inst_14950 = cljs.core._nth(inst_14943,inst_14945);
var inst_14951 = cljs.core.async.muxch_STAR_(inst_14950);
var inst_14952 = cljs.core.async.close_BANG_(inst_14951);
var inst_14953 = (inst_14945 + (1));
var tmp15088 = inst_14943;
var tmp15089 = inst_14944;
var tmp15090 = inst_14942;
var inst_14942__$1 = tmp15090;
var inst_14943__$1 = tmp15088;
var inst_14944__$1 = tmp15089;
var inst_14945__$1 = inst_14953;
var state_15002__$1 = (function (){var statearr_15098 = state_15002;
(statearr_15098[(12)] = inst_14943__$1);

(statearr_15098[(13)] = inst_14945__$1);

(statearr_15098[(14)] = inst_14944__$1);

(statearr_15098[(16)] = inst_14942__$1);

(statearr_15098[(17)] = inst_14952);

return statearr_15098;
})();
var statearr_15099_16195 = state_15002__$1;
(statearr_15099_16195[(2)] = null);

(statearr_15099_16195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (18))){
var inst_14972 = (state_15002[(2)]);
var state_15002__$1 = state_15002;
var statearr_15100_16196 = state_15002__$1;
(statearr_15100_16196[(2)] = inst_14972);

(statearr_15100_16196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15003 === (8))){
var inst_14945 = (state_15002[(13)]);
var inst_14944 = (state_15002[(14)]);
var inst_14947 = (inst_14945 < inst_14944);
var inst_14948 = inst_14947;
var state_15002__$1 = state_15002;
if(cljs.core.truth_(inst_14948)){
var statearr_15102_16197 = state_15002__$1;
(statearr_15102_16197[(1)] = (10));

} else {
var statearr_15104_16198 = state_15002__$1;
(statearr_15104_16198[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15105[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15105[(1)] = (1));

return statearr_15105;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15002){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15002);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15106){var ex__13632__auto__ = e15106;
var statearr_15107_16201 = state_15002;
(statearr_15107_16201[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15002[(4)]))){
var statearr_15108_16202 = state_15002;
(statearr_15108_16202[(1)] = cljs.core.first((state_15002[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16203 = state_15002;
state_15002 = G__16203;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15109 = f__13741__auto__();
(statearr_15109[(6)] = c__13740__auto___16148);

return statearr_15109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15112 = arguments.length;
switch (G__15112) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15114 = arguments.length;
switch (G__15114) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15116 = arguments.length;
switch (G__15116) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13740__auto___16217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15166){
var state_val_15167 = (state_15166[(1)]);
if((state_val_15167 === (7))){
var state_15166__$1 = state_15166;
var statearr_15169_16218 = state_15166__$1;
(statearr_15169_16218[(2)] = null);

(statearr_15169_16218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (1))){
var state_15166__$1 = state_15166;
var statearr_15170_16221 = state_15166__$1;
(statearr_15170_16221[(2)] = null);

(statearr_15170_16221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (4))){
var inst_15122 = (state_15166[(7)]);
var inst_15123 = (state_15166[(8)]);
var inst_15125 = (inst_15123 < inst_15122);
var state_15166__$1 = state_15166;
if(cljs.core.truth_(inst_15125)){
var statearr_15172_16222 = state_15166__$1;
(statearr_15172_16222[(1)] = (6));

} else {
var statearr_15173_16223 = state_15166__$1;
(statearr_15173_16223[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (15))){
var inst_15152 = (state_15166[(9)]);
var inst_15157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15152);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15166__$1,(17),out,inst_15157);
} else {
if((state_val_15167 === (13))){
var inst_15152 = (state_15166[(9)]);
var inst_15152__$1 = (state_15166[(2)]);
var inst_15153 = cljs.core.some(cljs.core.nil_QMARK_,inst_15152__$1);
var state_15166__$1 = (function (){var statearr_15174 = state_15166;
(statearr_15174[(9)] = inst_15152__$1);

return statearr_15174;
})();
if(cljs.core.truth_(inst_15153)){
var statearr_15176_16225 = state_15166__$1;
(statearr_15176_16225[(1)] = (14));

} else {
var statearr_15177_16229 = state_15166__$1;
(statearr_15177_16229[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (6))){
var state_15166__$1 = state_15166;
var statearr_15178_16230 = state_15166__$1;
(statearr_15178_16230[(2)] = null);

(statearr_15178_16230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (17))){
var inst_15159 = (state_15166[(2)]);
var state_15166__$1 = (function (){var statearr_15184 = state_15166;
(statearr_15184[(10)] = inst_15159);

return statearr_15184;
})();
var statearr_15185_16231 = state_15166__$1;
(statearr_15185_16231[(2)] = null);

(statearr_15185_16231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (3))){
var inst_15164 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15166__$1,inst_15164);
} else {
if((state_val_15167 === (12))){
var _ = (function (){var statearr_15186 = state_15166;
(statearr_15186[(4)] = cljs.core.rest((state_15166[(4)])));

return statearr_15186;
})();
var state_15166__$1 = state_15166;
var ex15180 = (state_15166__$1[(2)]);
var statearr_15187_16234 = state_15166__$1;
(statearr_15187_16234[(5)] = ex15180);


if((ex15180 instanceof Object)){
var statearr_15188_16235 = state_15166__$1;
(statearr_15188_16235[(1)] = (11));

(statearr_15188_16235[(5)] = null);

} else {
throw ex15180;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (2))){
var inst_15120 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15122 = cnt;
var inst_15123 = (0);
var state_15166__$1 = (function (){var statearr_15189 = state_15166;
(statearr_15189[(11)] = inst_15120);

(statearr_15189[(7)] = inst_15122);

(statearr_15189[(8)] = inst_15123);

return statearr_15189;
})();
var statearr_15190_16236 = state_15166__$1;
(statearr_15190_16236[(2)] = null);

(statearr_15190_16236[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (11))){
var inst_15131 = (state_15166[(2)]);
var inst_15132 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15166__$1 = (function (){var statearr_15191 = state_15166;
(statearr_15191[(12)] = inst_15131);

return statearr_15191;
})();
var statearr_15192_16238 = state_15166__$1;
(statearr_15192_16238[(2)] = inst_15132);

(statearr_15192_16238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (9))){
var inst_15123 = (state_15166[(8)]);
var _ = (function (){var statearr_15193 = state_15166;
(statearr_15193[(4)] = cljs.core.cons((12),(state_15166[(4)])));

return statearr_15193;
})();
var inst_15138 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15123) : chs__$1.call(null,inst_15123));
var inst_15139 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15123) : done.call(null,inst_15123));
var inst_15140 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15138,inst_15139);
var ___$1 = (function (){var statearr_15195 = state_15166;
(statearr_15195[(4)] = cljs.core.rest((state_15166[(4)])));

return statearr_15195;
})();
var state_15166__$1 = state_15166;
var statearr_15196_16242 = state_15166__$1;
(statearr_15196_16242[(2)] = inst_15140);

(statearr_15196_16242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (5))){
var inst_15150 = (state_15166[(2)]);
var state_15166__$1 = (function (){var statearr_15198 = state_15166;
(statearr_15198[(13)] = inst_15150);

return statearr_15198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15166__$1,(13),dchan);
} else {
if((state_val_15167 === (14))){
var inst_15155 = cljs.core.async.close_BANG_(out);
var state_15166__$1 = state_15166;
var statearr_15199_16243 = state_15166__$1;
(statearr_15199_16243[(2)] = inst_15155);

(statearr_15199_16243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (16))){
var inst_15162 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15200_16244 = state_15166__$1;
(statearr_15200_16244[(2)] = inst_15162);

(statearr_15200_16244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (10))){
var inst_15123 = (state_15166[(8)]);
var inst_15143 = (state_15166[(2)]);
var inst_15144 = (inst_15123 + (1));
var inst_15123__$1 = inst_15144;
var state_15166__$1 = (function (){var statearr_15201 = state_15166;
(statearr_15201[(14)] = inst_15143);

(statearr_15201[(8)] = inst_15123__$1);

return statearr_15201;
})();
var statearr_15202_16245 = state_15166__$1;
(statearr_15202_16245[(2)] = null);

(statearr_15202_16245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (8))){
var inst_15148 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15203_16246 = state_15166__$1;
(statearr_15203_16246[(2)] = inst_15148);

(statearr_15203_16246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15204[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15204[(1)] = (1));

return statearr_15204;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15166){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15166);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15205){var ex__13632__auto__ = e15205;
var statearr_15206_16247 = state_15166;
(statearr_15206_16247[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15166[(4)]))){
var statearr_15207_16248 = state_15166;
(statearr_15207_16248[(1)] = cljs.core.first((state_15166[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16249 = state_15166;
state_15166 = G__16249;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15208 = f__13741__auto__();
(statearr_15208[(6)] = c__13740__auto___16217);

return statearr_15208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15212 = arguments.length;
switch (G__15212) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13740__auto___16251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15247){
var state_val_15248 = (state_15247[(1)]);
if((state_val_15248 === (7))){
var inst_15224 = (state_15247[(7)]);
var inst_15223 = (state_15247[(8)]);
var inst_15223__$1 = (state_15247[(2)]);
var inst_15224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15223__$1,(0),null);
var inst_15225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15223__$1,(1),null);
var inst_15226 = (inst_15224__$1 == null);
var state_15247__$1 = (function (){var statearr_15253 = state_15247;
(statearr_15253[(7)] = inst_15224__$1);

(statearr_15253[(9)] = inst_15225);

(statearr_15253[(8)] = inst_15223__$1);

return statearr_15253;
})();
if(cljs.core.truth_(inst_15226)){
var statearr_15254_16252 = state_15247__$1;
(statearr_15254_16252[(1)] = (8));

} else {
var statearr_15255_16253 = state_15247__$1;
(statearr_15255_16253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (1))){
var inst_15213 = cljs.core.vec(chs);
var inst_15214 = inst_15213;
var state_15247__$1 = (function (){var statearr_15256 = state_15247;
(statearr_15256[(10)] = inst_15214);

return statearr_15256;
})();
var statearr_15257_16254 = state_15247__$1;
(statearr_15257_16254[(2)] = null);

(statearr_15257_16254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (4))){
var inst_15214 = (state_15247[(10)]);
var state_15247__$1 = state_15247;
return cljs.core.async.ioc_alts_BANG_(state_15247__$1,(7),inst_15214);
} else {
if((state_val_15248 === (6))){
var inst_15243 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15258_16255 = state_15247__$1;
(statearr_15258_16255[(2)] = inst_15243);

(statearr_15258_16255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (3))){
var inst_15245 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15247__$1,inst_15245);
} else {
if((state_val_15248 === (2))){
var inst_15214 = (state_15247[(10)]);
var inst_15216 = cljs.core.count(inst_15214);
var inst_15217 = (inst_15216 > (0));
var state_15247__$1 = state_15247;
if(cljs.core.truth_(inst_15217)){
var statearr_15260_16256 = state_15247__$1;
(statearr_15260_16256[(1)] = (4));

} else {
var statearr_15261_16257 = state_15247__$1;
(statearr_15261_16257[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (11))){
var inst_15214 = (state_15247[(10)]);
var inst_15236 = (state_15247[(2)]);
var tmp15259 = inst_15214;
var inst_15214__$1 = tmp15259;
var state_15247__$1 = (function (){var statearr_15264 = state_15247;
(statearr_15264[(11)] = inst_15236);

(statearr_15264[(10)] = inst_15214__$1);

return statearr_15264;
})();
var statearr_15265_16258 = state_15247__$1;
(statearr_15265_16258[(2)] = null);

(statearr_15265_16258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (9))){
var inst_15224 = (state_15247[(7)]);
var state_15247__$1 = state_15247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15247__$1,(11),out,inst_15224);
} else {
if((state_val_15248 === (5))){
var inst_15241 = cljs.core.async.close_BANG_(out);
var state_15247__$1 = state_15247;
var statearr_15266_16259 = state_15247__$1;
(statearr_15266_16259[(2)] = inst_15241);

(statearr_15266_16259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (10))){
var inst_15239 = (state_15247[(2)]);
var state_15247__$1 = state_15247;
var statearr_15267_16260 = state_15247__$1;
(statearr_15267_16260[(2)] = inst_15239);

(statearr_15267_16260[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15248 === (8))){
var inst_15224 = (state_15247[(7)]);
var inst_15225 = (state_15247[(9)]);
var inst_15214 = (state_15247[(10)]);
var inst_15223 = (state_15247[(8)]);
var inst_15231 = (function (){var cs = inst_15214;
var vec__15219 = inst_15223;
var v = inst_15224;
var c = inst_15225;
return (function (p1__15209_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15209_SHARP_);
});
})();
var inst_15232 = cljs.core.filterv(inst_15231,inst_15214);
var inst_15214__$1 = inst_15232;
var state_15247__$1 = (function (){var statearr_15268 = state_15247;
(statearr_15268[(10)] = inst_15214__$1);

return statearr_15268;
})();
var statearr_15269_16261 = state_15247__$1;
(statearr_15269_16261[(2)] = null);

(statearr_15269_16261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15270 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15270[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15270[(1)] = (1));

return statearr_15270;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15247){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15247);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15271){var ex__13632__auto__ = e15271;
var statearr_15272_16262 = state_15247;
(statearr_15272_16262[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15247[(4)]))){
var statearr_15273_16263 = state_15247;
(statearr_15273_16263[(1)] = cljs.core.first((state_15247[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16264 = state_15247;
state_15247 = G__16264;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15274 = f__13741__auto__();
(statearr_15274[(6)] = c__13740__auto___16251);

return statearr_15274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__15276 = arguments.length;
switch (G__15276) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13740__auto___16269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15305){
var state_val_15306 = (state_15305[(1)]);
if((state_val_15306 === (7))){
var inst_15285 = (state_15305[(7)]);
var inst_15285__$1 = (state_15305[(2)]);
var inst_15286 = (inst_15285__$1 == null);
var inst_15287 = cljs.core.not(inst_15286);
var state_15305__$1 = (function (){var statearr_15308 = state_15305;
(statearr_15308[(7)] = inst_15285__$1);

return statearr_15308;
})();
if(inst_15287){
var statearr_15309_16270 = state_15305__$1;
(statearr_15309_16270[(1)] = (8));

} else {
var statearr_15310_16271 = state_15305__$1;
(statearr_15310_16271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (1))){
var inst_15280 = (0);
var state_15305__$1 = (function (){var statearr_15311 = state_15305;
(statearr_15311[(8)] = inst_15280);

return statearr_15311;
})();
var statearr_15314_16274 = state_15305__$1;
(statearr_15314_16274[(2)] = null);

(statearr_15314_16274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (4))){
var state_15305__$1 = state_15305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15305__$1,(7),ch);
} else {
if((state_val_15306 === (6))){
var inst_15298 = (state_15305[(2)]);
var state_15305__$1 = state_15305;
var statearr_15315_16276 = state_15305__$1;
(statearr_15315_16276[(2)] = inst_15298);

(statearr_15315_16276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (3))){
var inst_15300 = (state_15305[(2)]);
var inst_15301 = cljs.core.async.close_BANG_(out);
var state_15305__$1 = (function (){var statearr_15316 = state_15305;
(statearr_15316[(9)] = inst_15300);

return statearr_15316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15305__$1,inst_15301);
} else {
if((state_val_15306 === (2))){
var inst_15280 = (state_15305[(8)]);
var inst_15282 = (inst_15280 < n);
var state_15305__$1 = state_15305;
if(cljs.core.truth_(inst_15282)){
var statearr_15317_16277 = state_15305__$1;
(statearr_15317_16277[(1)] = (4));

} else {
var statearr_15318_16278 = state_15305__$1;
(statearr_15318_16278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (11))){
var inst_15280 = (state_15305[(8)]);
var inst_15290 = (state_15305[(2)]);
var inst_15291 = (inst_15280 + (1));
var inst_15280__$1 = inst_15291;
var state_15305__$1 = (function (){var statearr_15319 = state_15305;
(statearr_15319[(10)] = inst_15290);

(statearr_15319[(8)] = inst_15280__$1);

return statearr_15319;
})();
var statearr_15320_16279 = state_15305__$1;
(statearr_15320_16279[(2)] = null);

(statearr_15320_16279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (9))){
var state_15305__$1 = state_15305;
var statearr_15321_16283 = state_15305__$1;
(statearr_15321_16283[(2)] = null);

(statearr_15321_16283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (5))){
var state_15305__$1 = state_15305;
var statearr_15322_16285 = state_15305__$1;
(statearr_15322_16285[(2)] = null);

(statearr_15322_16285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (10))){
var inst_15295 = (state_15305[(2)]);
var state_15305__$1 = state_15305;
var statearr_15323_16294 = state_15305__$1;
(statearr_15323_16294[(2)] = inst_15295);

(statearr_15323_16294[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15306 === (8))){
var inst_15285 = (state_15305[(7)]);
var state_15305__$1 = state_15305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15305__$1,(11),out,inst_15285);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15324[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15324[(1)] = (1));

return statearr_15324;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15305){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15305);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15325){var ex__13632__auto__ = e15325;
var statearr_15326_16316 = state_15305;
(statearr_15326_16316[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15305[(4)]))){
var statearr_15327_16317 = state_15305;
(statearr_15327_16317[(1)] = cljs.core.first((state_15305[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16318 = state_15305;
state_15305 = G__16318;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15328 = f__13741__auto__();
(statearr_15328[(6)] = c__13740__auto___16269);

return statearr_15328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15333 = (function (f,ch,meta15331,_,fn1,meta15334){
this.f = f;
this.ch = ch;
this.meta15331 = meta15331;
this._ = _;
this.fn1 = fn1;
this.meta15334 = meta15334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15335,meta15334__$1){
var self__ = this;
var _15335__$1 = this;
return (new cljs.core.async.t_cljs$core$async15333(self__.f,self__.ch,self__.meta15331,self__._,self__.fn1,meta15334__$1));
}));

(cljs.core.async.t_cljs$core$async15333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15335){
var self__ = this;
var _15335__$1 = this;
return self__.meta15334;
}));

(cljs.core.async.t_cljs$core$async15333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async15333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__15329_SHARP_){
var G__15336 = (((p1__15329_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__15329_SHARP_) : self__.f.call(null,p1__15329_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__15336) : f1.call(null,G__15336));
});
}));

(cljs.core.async.t_cljs$core$async15333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15331","meta15331",-458586899,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15330","cljs.core.async/t_cljs$core$async15330",854930720,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15334","meta15334",891083800,null)], null);
}));

(cljs.core.async.t_cljs$core$async15333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15333");

(cljs.core.async.t_cljs$core$async15333.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15333.
 */
cljs.core.async.__GT_t_cljs$core$async15333 = (function cljs$core$async$__GT_t_cljs$core$async15333(f,ch,meta15331,_,fn1,meta15334){
return (new cljs.core.async.t_cljs$core$async15333(f,ch,meta15331,_,fn1,meta15334));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15330 = (function (f,ch,meta15331){
this.f = f;
this.ch = ch;
this.meta15331 = meta15331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15332,meta15331__$1){
var self__ = this;
var _15332__$1 = this;
return (new cljs.core.async.t_cljs$core$async15330(self__.f,self__.ch,meta15331__$1));
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15332){
var self__ = this;
var _15332__$1 = this;
return self__.meta15331;
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async15333(self__.f,self__.ch,self__.meta15331,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__15337 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__15337) : self__.f.call(null,G__15337));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async15330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15331","meta15331",-458586899,null)], null);
}));

(cljs.core.async.t_cljs$core$async15330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15330");

(cljs.core.async.t_cljs$core$async15330.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15330.
 */
cljs.core.async.__GT_t_cljs$core$async15330 = (function cljs$core$async$__GT_t_cljs$core$async15330(f,ch,meta15331){
return (new cljs.core.async.t_cljs$core$async15330(f,ch,meta15331));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15338 = (function (f,ch,meta15339){
this.f = f;
this.ch = ch;
this.meta15339 = meta15339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15340,meta15339__$1){
var self__ = this;
var _15340__$1 = this;
return (new cljs.core.async.t_cljs$core$async15338(self__.f,self__.ch,meta15339__$1));
}));

(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15340){
var self__ = this;
var _15340__$1 = this;
return self__.meta15339;
}));

(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async15338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15339","meta15339",86819109,null)], null);
}));

(cljs.core.async.t_cljs$core$async15338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15338");

(cljs.core.async.t_cljs$core$async15338.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15338.
 */
cljs.core.async.__GT_t_cljs$core$async15338 = (function cljs$core$async$__GT_t_cljs$core$async15338(f,ch,meta15339){
return (new cljs.core.async.t_cljs$core$async15338(f,ch,meta15339));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async15338(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15354 = (function (p,ch,meta15355){
this.p = p;
this.ch = ch;
this.meta15355 = meta15355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15356,meta15355__$1){
var self__ = this;
var _15356__$1 = this;
return (new cljs.core.async.t_cljs$core$async15354(self__.p,self__.ch,meta15355__$1));
}));

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15356){
var self__ = this;
var _15356__$1 = this;
return self__.meta15355;
}));

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async15354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15355","meta15355",757115894,null)], null);
}));

(cljs.core.async.t_cljs$core$async15354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15354");

(cljs.core.async.t_cljs$core$async15354.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15354.
 */
cljs.core.async.__GT_t_cljs$core$async15354 = (function cljs$core$async$__GT_t_cljs$core$async15354(p,ch,meta15355){
return (new cljs.core.async.t_cljs$core$async15354(p,ch,meta15355));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async15354(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__15360 = arguments.length;
switch (G__15360) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13740__auto___16364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15382){
var state_val_15383 = (state_15382[(1)]);
if((state_val_15383 === (7))){
var inst_15378 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
var statearr_15384_16365 = state_15382__$1;
(statearr_15384_16365[(2)] = inst_15378);

(statearr_15384_16365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (1))){
var state_15382__$1 = state_15382;
var statearr_15385_16366 = state_15382__$1;
(statearr_15385_16366[(2)] = null);

(statearr_15385_16366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (4))){
var inst_15364 = (state_15382[(7)]);
var inst_15364__$1 = (state_15382[(2)]);
var inst_15365 = (inst_15364__$1 == null);
var state_15382__$1 = (function (){var statearr_15386 = state_15382;
(statearr_15386[(7)] = inst_15364__$1);

return statearr_15386;
})();
if(cljs.core.truth_(inst_15365)){
var statearr_15387_16369 = state_15382__$1;
(statearr_15387_16369[(1)] = (5));

} else {
var statearr_15388_16370 = state_15382__$1;
(statearr_15388_16370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (6))){
var inst_15364 = (state_15382[(7)]);
var inst_15369 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15364) : p.call(null,inst_15364));
var state_15382__$1 = state_15382;
if(cljs.core.truth_(inst_15369)){
var statearr_15389_16372 = state_15382__$1;
(statearr_15389_16372[(1)] = (8));

} else {
var statearr_15390_16374 = state_15382__$1;
(statearr_15390_16374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (3))){
var inst_15380 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15382__$1,inst_15380);
} else {
if((state_val_15383 === (2))){
var state_15382__$1 = state_15382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15382__$1,(4),ch);
} else {
if((state_val_15383 === (11))){
var inst_15372 = (state_15382[(2)]);
var state_15382__$1 = state_15382;
var statearr_15396_16375 = state_15382__$1;
(statearr_15396_16375[(2)] = inst_15372);

(statearr_15396_16375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (9))){
var state_15382__$1 = state_15382;
var statearr_15397_16376 = state_15382__$1;
(statearr_15397_16376[(2)] = null);

(statearr_15397_16376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (5))){
var inst_15367 = cljs.core.async.close_BANG_(out);
var state_15382__$1 = state_15382;
var statearr_15398_16381 = state_15382__$1;
(statearr_15398_16381[(2)] = inst_15367);

(statearr_15398_16381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (10))){
var inst_15375 = (state_15382[(2)]);
var state_15382__$1 = (function (){var statearr_15399 = state_15382;
(statearr_15399[(8)] = inst_15375);

return statearr_15399;
})();
var statearr_15400_16385 = state_15382__$1;
(statearr_15400_16385[(2)] = null);

(statearr_15400_16385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15383 === (8))){
var inst_15364 = (state_15382[(7)]);
var state_15382__$1 = state_15382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15382__$1,(11),out,inst_15364);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15401 = [null,null,null,null,null,null,null,null,null];
(statearr_15401[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15401[(1)] = (1));

return statearr_15401;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15382){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15382);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15402){var ex__13632__auto__ = e15402;
var statearr_15403_16390 = state_15382;
(statearr_15403_16390[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15382[(4)]))){
var statearr_15404_16392 = state_15382;
(statearr_15404_16392[(1)] = cljs.core.first((state_15382[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16393 = state_15382;
state_15382 = G__16393;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15405 = f__13741__auto__();
(statearr_15405[(6)] = c__13740__auto___16364);

return statearr_15405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__15407 = arguments.length;
switch (G__15407) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13740__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15469){
var state_val_15470 = (state_15469[(1)]);
if((state_val_15470 === (7))){
var inst_15465 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15471_16399 = state_15469__$1;
(statearr_15471_16399[(2)] = inst_15465);

(statearr_15471_16399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (20))){
var inst_15435 = (state_15469[(7)]);
var inst_15446 = (state_15469[(2)]);
var inst_15447 = cljs.core.next(inst_15435);
var inst_15421 = inst_15447;
var inst_15422 = null;
var inst_15423 = (0);
var inst_15424 = (0);
var state_15469__$1 = (function (){var statearr_15472 = state_15469;
(statearr_15472[(8)] = inst_15423);

(statearr_15472[(9)] = inst_15446);

(statearr_15472[(10)] = inst_15421);

(statearr_15472[(11)] = inst_15422);

(statearr_15472[(12)] = inst_15424);

return statearr_15472;
})();
var statearr_15473_16403 = state_15469__$1;
(statearr_15473_16403[(2)] = null);

(statearr_15473_16403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (1))){
var state_15469__$1 = state_15469;
var statearr_15474_16405 = state_15469__$1;
(statearr_15474_16405[(2)] = null);

(statearr_15474_16405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (4))){
var inst_15410 = (state_15469[(13)]);
var inst_15410__$1 = (state_15469[(2)]);
var inst_15411 = (inst_15410__$1 == null);
var state_15469__$1 = (function (){var statearr_15475 = state_15469;
(statearr_15475[(13)] = inst_15410__$1);

return statearr_15475;
})();
if(cljs.core.truth_(inst_15411)){
var statearr_15476_16406 = state_15469__$1;
(statearr_15476_16406[(1)] = (5));

} else {
var statearr_15477_16407 = state_15469__$1;
(statearr_15477_16407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (15))){
var state_15469__$1 = state_15469;
var statearr_15481_16408 = state_15469__$1;
(statearr_15481_16408[(2)] = null);

(statearr_15481_16408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (21))){
var state_15469__$1 = state_15469;
var statearr_15482_16411 = state_15469__$1;
(statearr_15482_16411[(2)] = null);

(statearr_15482_16411[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (13))){
var inst_15423 = (state_15469[(8)]);
var inst_15421 = (state_15469[(10)]);
var inst_15422 = (state_15469[(11)]);
var inst_15424 = (state_15469[(12)]);
var inst_15431 = (state_15469[(2)]);
var inst_15432 = (inst_15424 + (1));
var tmp15478 = inst_15423;
var tmp15479 = inst_15421;
var tmp15480 = inst_15422;
var inst_15421__$1 = tmp15479;
var inst_15422__$1 = tmp15480;
var inst_15423__$1 = tmp15478;
var inst_15424__$1 = inst_15432;
var state_15469__$1 = (function (){var statearr_15483 = state_15469;
(statearr_15483[(8)] = inst_15423__$1);

(statearr_15483[(14)] = inst_15431);

(statearr_15483[(10)] = inst_15421__$1);

(statearr_15483[(11)] = inst_15422__$1);

(statearr_15483[(12)] = inst_15424__$1);

return statearr_15483;
})();
var statearr_15484_16413 = state_15469__$1;
(statearr_15484_16413[(2)] = null);

(statearr_15484_16413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (22))){
var state_15469__$1 = state_15469;
var statearr_15485_16416 = state_15469__$1;
(statearr_15485_16416[(2)] = null);

(statearr_15485_16416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (6))){
var inst_15410 = (state_15469[(13)]);
var inst_15419 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15410) : f.call(null,inst_15410));
var inst_15420 = cljs.core.seq(inst_15419);
var inst_15421 = inst_15420;
var inst_15422 = null;
var inst_15423 = (0);
var inst_15424 = (0);
var state_15469__$1 = (function (){var statearr_15486 = state_15469;
(statearr_15486[(8)] = inst_15423);

(statearr_15486[(10)] = inst_15421);

(statearr_15486[(11)] = inst_15422);

(statearr_15486[(12)] = inst_15424);

return statearr_15486;
})();
var statearr_15487_16418 = state_15469__$1;
(statearr_15487_16418[(2)] = null);

(statearr_15487_16418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (17))){
var inst_15435 = (state_15469[(7)]);
var inst_15439 = cljs.core.chunk_first(inst_15435);
var inst_15440 = cljs.core.chunk_rest(inst_15435);
var inst_15441 = cljs.core.count(inst_15439);
var inst_15421 = inst_15440;
var inst_15422 = inst_15439;
var inst_15423 = inst_15441;
var inst_15424 = (0);
var state_15469__$1 = (function (){var statearr_15488 = state_15469;
(statearr_15488[(8)] = inst_15423);

(statearr_15488[(10)] = inst_15421);

(statearr_15488[(11)] = inst_15422);

(statearr_15488[(12)] = inst_15424);

return statearr_15488;
})();
var statearr_15489_16420 = state_15469__$1;
(statearr_15489_16420[(2)] = null);

(statearr_15489_16420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (3))){
var inst_15467 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15469__$1,inst_15467);
} else {
if((state_val_15470 === (12))){
var inst_15455 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15490_16425 = state_15469__$1;
(statearr_15490_16425[(2)] = inst_15455);

(statearr_15490_16425[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (2))){
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15469__$1,(4),in$);
} else {
if((state_val_15470 === (23))){
var inst_15463 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15491_16428 = state_15469__$1;
(statearr_15491_16428[(2)] = inst_15463);

(statearr_15491_16428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (19))){
var inst_15450 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15492_16429 = state_15469__$1;
(statearr_15492_16429[(2)] = inst_15450);

(statearr_15492_16429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (11))){
var inst_15421 = (state_15469[(10)]);
var inst_15435 = (state_15469[(7)]);
var inst_15435__$1 = cljs.core.seq(inst_15421);
var state_15469__$1 = (function (){var statearr_15493 = state_15469;
(statearr_15493[(7)] = inst_15435__$1);

return statearr_15493;
})();
if(inst_15435__$1){
var statearr_15494_16436 = state_15469__$1;
(statearr_15494_16436[(1)] = (14));

} else {
var statearr_15495_16437 = state_15469__$1;
(statearr_15495_16437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (9))){
var inst_15457 = (state_15469[(2)]);
var inst_15458 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_15469__$1 = (function (){var statearr_15496 = state_15469;
(statearr_15496[(15)] = inst_15457);

return statearr_15496;
})();
if(cljs.core.truth_(inst_15458)){
var statearr_15497_16441 = state_15469__$1;
(statearr_15497_16441[(1)] = (21));

} else {
var statearr_15498_16442 = state_15469__$1;
(statearr_15498_16442[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (5))){
var inst_15413 = cljs.core.async.close_BANG_(out);
var state_15469__$1 = state_15469;
var statearr_15499_16443 = state_15469__$1;
(statearr_15499_16443[(2)] = inst_15413);

(statearr_15499_16443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (14))){
var inst_15435 = (state_15469[(7)]);
var inst_15437 = cljs.core.chunked_seq_QMARK_(inst_15435);
var state_15469__$1 = state_15469;
if(inst_15437){
var statearr_15500_16444 = state_15469__$1;
(statearr_15500_16444[(1)] = (17));

} else {
var statearr_15501_16445 = state_15469__$1;
(statearr_15501_16445[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (16))){
var inst_15453 = (state_15469[(2)]);
var state_15469__$1 = state_15469;
var statearr_15502_16446 = state_15469__$1;
(statearr_15502_16446[(2)] = inst_15453);

(statearr_15502_16446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15470 === (10))){
var inst_15422 = (state_15469[(11)]);
var inst_15424 = (state_15469[(12)]);
var inst_15429 = cljs.core._nth(inst_15422,inst_15424);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15469__$1,(13),out,inst_15429);
} else {
if((state_val_15470 === (18))){
var inst_15435 = (state_15469[(7)]);
var inst_15444 = cljs.core.first(inst_15435);
var state_15469__$1 = state_15469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15469__$1,(20),out,inst_15444);
} else {
if((state_val_15470 === (8))){
var inst_15423 = (state_15469[(8)]);
var inst_15424 = (state_15469[(12)]);
var inst_15426 = (inst_15424 < inst_15423);
var inst_15427 = inst_15426;
var state_15469__$1 = state_15469;
if(cljs.core.truth_(inst_15427)){
var statearr_15503_16450 = state_15469__$1;
(statearr_15503_16450[(1)] = (10));

} else {
var statearr_15504_16451 = state_15469__$1;
(statearr_15504_16451[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13629__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13629__auto____0 = (function (){
var statearr_15505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15505[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13629__auto__);

(statearr_15505[(1)] = (1));

return statearr_15505;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13629__auto____1 = (function (state_15469){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15469);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15506){var ex__13632__auto__ = e15506;
var statearr_15507_16452 = state_15469;
(statearr_15507_16452[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15469[(4)]))){
var statearr_15508_16453 = state_15469;
(statearr_15508_16453[(1)] = cljs.core.first((state_15469[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16455 = state_15469;
state_15469 = G__16455;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13629__auto__ = function(state_15469){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13629__auto____1.call(this,state_15469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13629__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13629__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15509 = f__13741__auto__();
(statearr_15509[(6)] = c__13740__auto__);

return statearr_15509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));

return c__13740__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__15511 = arguments.length;
switch (G__15511) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__15513 = arguments.length;
switch (G__15513) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__15515 = arguments.length;
switch (G__15515) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13740__auto___16459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15539){
var state_val_15540 = (state_15539[(1)]);
if((state_val_15540 === (7))){
var inst_15534 = (state_15539[(2)]);
var state_15539__$1 = state_15539;
var statearr_15541_16460 = state_15539__$1;
(statearr_15541_16460[(2)] = inst_15534);

(statearr_15541_16460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (1))){
var inst_15516 = null;
var state_15539__$1 = (function (){var statearr_15542 = state_15539;
(statearr_15542[(7)] = inst_15516);

return statearr_15542;
})();
var statearr_15543_16461 = state_15539__$1;
(statearr_15543_16461[(2)] = null);

(statearr_15543_16461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (4))){
var inst_15519 = (state_15539[(8)]);
var inst_15519__$1 = (state_15539[(2)]);
var inst_15520 = (inst_15519__$1 == null);
var inst_15521 = cljs.core.not(inst_15520);
var state_15539__$1 = (function (){var statearr_15544 = state_15539;
(statearr_15544[(8)] = inst_15519__$1);

return statearr_15544;
})();
if(inst_15521){
var statearr_15545_16462 = state_15539__$1;
(statearr_15545_16462[(1)] = (5));

} else {
var statearr_15546_16463 = state_15539__$1;
(statearr_15546_16463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (6))){
var state_15539__$1 = state_15539;
var statearr_15547_16464 = state_15539__$1;
(statearr_15547_16464[(2)] = null);

(statearr_15547_16464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (3))){
var inst_15536 = (state_15539[(2)]);
var inst_15537 = cljs.core.async.close_BANG_(out);
var state_15539__$1 = (function (){var statearr_15548 = state_15539;
(statearr_15548[(9)] = inst_15536);

return statearr_15548;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15539__$1,inst_15537);
} else {
if((state_val_15540 === (2))){
var state_15539__$1 = state_15539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15539__$1,(4),ch);
} else {
if((state_val_15540 === (11))){
var inst_15519 = (state_15539[(8)]);
var inst_15528 = (state_15539[(2)]);
var inst_15516 = inst_15519;
var state_15539__$1 = (function (){var statearr_15549 = state_15539;
(statearr_15549[(10)] = inst_15528);

(statearr_15549[(7)] = inst_15516);

return statearr_15549;
})();
var statearr_15550_16465 = state_15539__$1;
(statearr_15550_16465[(2)] = null);

(statearr_15550_16465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (9))){
var inst_15519 = (state_15539[(8)]);
var state_15539__$1 = state_15539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15539__$1,(11),out,inst_15519);
} else {
if((state_val_15540 === (5))){
var inst_15519 = (state_15539[(8)]);
var inst_15516 = (state_15539[(7)]);
var inst_15523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15519,inst_15516);
var state_15539__$1 = state_15539;
if(inst_15523){
var statearr_15552_16466 = state_15539__$1;
(statearr_15552_16466[(1)] = (8));

} else {
var statearr_15553_16467 = state_15539__$1;
(statearr_15553_16467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (10))){
var inst_15531 = (state_15539[(2)]);
var state_15539__$1 = state_15539;
var statearr_15554_16468 = state_15539__$1;
(statearr_15554_16468[(2)] = inst_15531);

(statearr_15554_16468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15540 === (8))){
var inst_15516 = (state_15539[(7)]);
var tmp15551 = inst_15516;
var inst_15516__$1 = tmp15551;
var state_15539__$1 = (function (){var statearr_15555 = state_15539;
(statearr_15555[(7)] = inst_15516__$1);

return statearr_15555;
})();
var statearr_15556_16469 = state_15539__$1;
(statearr_15556_16469[(2)] = null);

(statearr_15556_16469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15557[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15557[(1)] = (1));

return statearr_15557;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15539){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15539);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15558){var ex__13632__auto__ = e15558;
var statearr_15559_16470 = state_15539;
(statearr_15559_16470[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15539[(4)]))){
var statearr_15560_16471 = state_15539;
(statearr_15560_16471[(1)] = cljs.core.first((state_15539[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16472 = state_15539;
state_15539 = G__16472;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15561 = f__13741__auto__();
(statearr_15561[(6)] = c__13740__auto___16459);

return statearr_15561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__15563 = arguments.length;
switch (G__15563) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13740__auto___16474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15601){
var state_val_15602 = (state_15601[(1)]);
if((state_val_15602 === (7))){
var inst_15597 = (state_15601[(2)]);
var state_15601__$1 = state_15601;
var statearr_15603_16475 = state_15601__$1;
(statearr_15603_16475[(2)] = inst_15597);

(statearr_15603_16475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (1))){
var inst_15564 = (new Array(n));
var inst_15565 = inst_15564;
var inst_15566 = (0);
var state_15601__$1 = (function (){var statearr_15604 = state_15601;
(statearr_15604[(7)] = inst_15565);

(statearr_15604[(8)] = inst_15566);

return statearr_15604;
})();
var statearr_15605_16476 = state_15601__$1;
(statearr_15605_16476[(2)] = null);

(statearr_15605_16476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (4))){
var inst_15569 = (state_15601[(9)]);
var inst_15569__$1 = (state_15601[(2)]);
var inst_15570 = (inst_15569__$1 == null);
var inst_15571 = cljs.core.not(inst_15570);
var state_15601__$1 = (function (){var statearr_15606 = state_15601;
(statearr_15606[(9)] = inst_15569__$1);

return statearr_15606;
})();
if(inst_15571){
var statearr_15607_16477 = state_15601__$1;
(statearr_15607_16477[(1)] = (5));

} else {
var statearr_15608_16478 = state_15601__$1;
(statearr_15608_16478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (15))){
var inst_15591 = (state_15601[(2)]);
var state_15601__$1 = state_15601;
var statearr_15609_16479 = state_15601__$1;
(statearr_15609_16479[(2)] = inst_15591);

(statearr_15609_16479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (13))){
var state_15601__$1 = state_15601;
var statearr_15610_16480 = state_15601__$1;
(statearr_15610_16480[(2)] = null);

(statearr_15610_16480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (6))){
var inst_15566 = (state_15601[(8)]);
var inst_15587 = (inst_15566 > (0));
var state_15601__$1 = state_15601;
if(cljs.core.truth_(inst_15587)){
var statearr_15611_16481 = state_15601__$1;
(statearr_15611_16481[(1)] = (12));

} else {
var statearr_15612_16482 = state_15601__$1;
(statearr_15612_16482[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (3))){
var inst_15599 = (state_15601[(2)]);
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15601__$1,inst_15599);
} else {
if((state_val_15602 === (12))){
var inst_15565 = (state_15601[(7)]);
var inst_15589 = cljs.core.vec(inst_15565);
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15601__$1,(15),out,inst_15589);
} else {
if((state_val_15602 === (2))){
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15601__$1,(4),ch);
} else {
if((state_val_15602 === (11))){
var inst_15581 = (state_15601[(2)]);
var inst_15582 = (new Array(n));
var inst_15565 = inst_15582;
var inst_15566 = (0);
var state_15601__$1 = (function (){var statearr_15613 = state_15601;
(statearr_15613[(7)] = inst_15565);

(statearr_15613[(10)] = inst_15581);

(statearr_15613[(8)] = inst_15566);

return statearr_15613;
})();
var statearr_15614_16483 = state_15601__$1;
(statearr_15614_16483[(2)] = null);

(statearr_15614_16483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (9))){
var inst_15565 = (state_15601[(7)]);
var inst_15579 = cljs.core.vec(inst_15565);
var state_15601__$1 = state_15601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15601__$1,(11),out,inst_15579);
} else {
if((state_val_15602 === (5))){
var inst_15569 = (state_15601[(9)]);
var inst_15565 = (state_15601[(7)]);
var inst_15574 = (state_15601[(11)]);
var inst_15566 = (state_15601[(8)]);
var inst_15573 = (inst_15565[inst_15566] = inst_15569);
var inst_15574__$1 = (inst_15566 + (1));
var inst_15575 = (inst_15574__$1 < n);
var state_15601__$1 = (function (){var statearr_15615 = state_15601;
(statearr_15615[(11)] = inst_15574__$1);

(statearr_15615[(12)] = inst_15573);

return statearr_15615;
})();
if(cljs.core.truth_(inst_15575)){
var statearr_15616_16484 = state_15601__$1;
(statearr_15616_16484[(1)] = (8));

} else {
var statearr_15617_16485 = state_15601__$1;
(statearr_15617_16485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (14))){
var inst_15594 = (state_15601[(2)]);
var inst_15595 = cljs.core.async.close_BANG_(out);
var state_15601__$1 = (function (){var statearr_15619 = state_15601;
(statearr_15619[(13)] = inst_15594);

return statearr_15619;
})();
var statearr_15620_16486 = state_15601__$1;
(statearr_15620_16486[(2)] = inst_15595);

(statearr_15620_16486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (10))){
var inst_15585 = (state_15601[(2)]);
var state_15601__$1 = state_15601;
var statearr_15621_16487 = state_15601__$1;
(statearr_15621_16487[(2)] = inst_15585);

(statearr_15621_16487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15602 === (8))){
var inst_15565 = (state_15601[(7)]);
var inst_15574 = (state_15601[(11)]);
var tmp15618 = inst_15565;
var inst_15565__$1 = tmp15618;
var inst_15566 = inst_15574;
var state_15601__$1 = (function (){var statearr_15622 = state_15601;
(statearr_15622[(7)] = inst_15565__$1);

(statearr_15622[(8)] = inst_15566);

return statearr_15622;
})();
var statearr_15623_16488 = state_15601__$1;
(statearr_15623_16488[(2)] = null);

(statearr_15623_16488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15624[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15624[(1)] = (1));

return statearr_15624;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15601){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15601);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15625){var ex__13632__auto__ = e15625;
var statearr_15626_16489 = state_15601;
(statearr_15626_16489[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15601[(4)]))){
var statearr_15627_16490 = state_15601;
(statearr_15627_16490[(1)] = cljs.core.first((state_15601[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16491 = state_15601;
state_15601 = G__16491;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15628 = f__13741__auto__();
(statearr_15628[(6)] = c__13740__auto___16474);

return statearr_15628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__15630 = arguments.length;
switch (G__15630) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13740__auto___16493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13741__auto__ = (function (){var switch__13628__auto__ = (function (state_15675){
var state_val_15676 = (state_15675[(1)]);
if((state_val_15676 === (7))){
var inst_15671 = (state_15675[(2)]);
var state_15675__$1 = state_15675;
var statearr_15677_16495 = state_15675__$1;
(statearr_15677_16495[(2)] = inst_15671);

(statearr_15677_16495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (1))){
var inst_15631 = [];
var inst_15632 = inst_15631;
var inst_15633 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15675__$1 = (function (){var statearr_15678 = state_15675;
(statearr_15678[(7)] = inst_15632);

(statearr_15678[(8)] = inst_15633);

return statearr_15678;
})();
var statearr_15679_16499 = state_15675__$1;
(statearr_15679_16499[(2)] = null);

(statearr_15679_16499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (4))){
var inst_15636 = (state_15675[(9)]);
var inst_15636__$1 = (state_15675[(2)]);
var inst_15637 = (inst_15636__$1 == null);
var inst_15638 = cljs.core.not(inst_15637);
var state_15675__$1 = (function (){var statearr_15680 = state_15675;
(statearr_15680[(9)] = inst_15636__$1);

return statearr_15680;
})();
if(inst_15638){
var statearr_15681_16501 = state_15675__$1;
(statearr_15681_16501[(1)] = (5));

} else {
var statearr_15682_16505 = state_15675__$1;
(statearr_15682_16505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (15))){
var inst_15632 = (state_15675[(7)]);
var inst_15663 = cljs.core.vec(inst_15632);
var state_15675__$1 = state_15675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15675__$1,(18),out,inst_15663);
} else {
if((state_val_15676 === (13))){
var inst_15658 = (state_15675[(2)]);
var state_15675__$1 = state_15675;
var statearr_15683_16506 = state_15675__$1;
(statearr_15683_16506[(2)] = inst_15658);

(statearr_15683_16506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (6))){
var inst_15632 = (state_15675[(7)]);
var inst_15660 = inst_15632.length;
var inst_15661 = (inst_15660 > (0));
var state_15675__$1 = state_15675;
if(cljs.core.truth_(inst_15661)){
var statearr_15684_16511 = state_15675__$1;
(statearr_15684_16511[(1)] = (15));

} else {
var statearr_15685_16512 = state_15675__$1;
(statearr_15685_16512[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (17))){
var inst_15668 = (state_15675[(2)]);
var inst_15669 = cljs.core.async.close_BANG_(out);
var state_15675__$1 = (function (){var statearr_15686 = state_15675;
(statearr_15686[(10)] = inst_15668);

return statearr_15686;
})();
var statearr_15687_16513 = state_15675__$1;
(statearr_15687_16513[(2)] = inst_15669);

(statearr_15687_16513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (3))){
var inst_15673 = (state_15675[(2)]);
var state_15675__$1 = state_15675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15675__$1,inst_15673);
} else {
if((state_val_15676 === (12))){
var inst_15632 = (state_15675[(7)]);
var inst_15651 = cljs.core.vec(inst_15632);
var state_15675__$1 = state_15675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15675__$1,(14),out,inst_15651);
} else {
if((state_val_15676 === (2))){
var state_15675__$1 = state_15675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15675__$1,(4),ch);
} else {
if((state_val_15676 === (11))){
var inst_15632 = (state_15675[(7)]);
var inst_15640 = (state_15675[(11)]);
var inst_15636 = (state_15675[(9)]);
var inst_15648 = inst_15632.push(inst_15636);
var tmp15688 = inst_15632;
var inst_15632__$1 = tmp15688;
var inst_15633 = inst_15640;
var state_15675__$1 = (function (){var statearr_15689 = state_15675;
(statearr_15689[(7)] = inst_15632__$1);

(statearr_15689[(8)] = inst_15633);

(statearr_15689[(12)] = inst_15648);

return statearr_15689;
})();
var statearr_15690_16519 = state_15675__$1;
(statearr_15690_16519[(2)] = null);

(statearr_15690_16519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (9))){
var inst_15633 = (state_15675[(8)]);
var inst_15644 = cljs.core.keyword_identical_QMARK_(inst_15633,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_15675__$1 = state_15675;
var statearr_15691_16523 = state_15675__$1;
(statearr_15691_16523[(2)] = inst_15644);

(statearr_15691_16523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (5))){
var inst_15640 = (state_15675[(11)]);
var inst_15633 = (state_15675[(8)]);
var inst_15641 = (state_15675[(13)]);
var inst_15636 = (state_15675[(9)]);
var inst_15640__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_15636) : f.call(null,inst_15636));
var inst_15641__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15640__$1,inst_15633);
var state_15675__$1 = (function (){var statearr_15692 = state_15675;
(statearr_15692[(11)] = inst_15640__$1);

(statearr_15692[(13)] = inst_15641__$1);

return statearr_15692;
})();
if(inst_15641__$1){
var statearr_15693_16528 = state_15675__$1;
(statearr_15693_16528[(1)] = (8));

} else {
var statearr_15694_16529 = state_15675__$1;
(statearr_15694_16529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (14))){
var inst_15640 = (state_15675[(11)]);
var inst_15636 = (state_15675[(9)]);
var inst_15653 = (state_15675[(2)]);
var inst_15654 = [];
var inst_15655 = inst_15654.push(inst_15636);
var inst_15632 = inst_15654;
var inst_15633 = inst_15640;
var state_15675__$1 = (function (){var statearr_15695 = state_15675;
(statearr_15695[(14)] = inst_15655);

(statearr_15695[(7)] = inst_15632);

(statearr_15695[(15)] = inst_15653);

(statearr_15695[(8)] = inst_15633);

return statearr_15695;
})();
var statearr_15696_16530 = state_15675__$1;
(statearr_15696_16530[(2)] = null);

(statearr_15696_16530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (16))){
var state_15675__$1 = state_15675;
var statearr_15697_16531 = state_15675__$1;
(statearr_15697_16531[(2)] = null);

(statearr_15697_16531[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (10))){
var inst_15646 = (state_15675[(2)]);
var state_15675__$1 = state_15675;
if(cljs.core.truth_(inst_15646)){
var statearr_15698_16532 = state_15675__$1;
(statearr_15698_16532[(1)] = (11));

} else {
var statearr_15699_16533 = state_15675__$1;
(statearr_15699_16533[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (18))){
var inst_15665 = (state_15675[(2)]);
var state_15675__$1 = state_15675;
var statearr_15700_16534 = state_15675__$1;
(statearr_15700_16534[(2)] = inst_15665);

(statearr_15700_16534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15676 === (8))){
var inst_15641 = (state_15675[(13)]);
var state_15675__$1 = state_15675;
var statearr_15701_16535 = state_15675__$1;
(statearr_15701_16535[(2)] = inst_15641);

(statearr_15701_16535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13629__auto__ = null;
var cljs$core$async$state_machine__13629__auto____0 = (function (){
var statearr_15702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15702[(0)] = cljs$core$async$state_machine__13629__auto__);

(statearr_15702[(1)] = (1));

return statearr_15702;
});
var cljs$core$async$state_machine__13629__auto____1 = (function (state_15675){
while(true){
var ret_value__13630__auto__ = (function (){try{while(true){
var result__13631__auto__ = switch__13628__auto__(state_15675);
if(cljs.core.keyword_identical_QMARK_(result__13631__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13631__auto__;
}
break;
}
}catch (e15703){var ex__13632__auto__ = e15703;
var statearr_15704_16536 = state_15675;
(statearr_15704_16536[(2)] = ex__13632__auto__);


if(cljs.core.seq((state_15675[(4)]))){
var statearr_15705_16537 = state_15675;
(statearr_15705_16537[(1)] = cljs.core.first((state_15675[(4)])));

} else {
throw ex__13632__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13630__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16538 = state_15675;
state_15675 = G__16538;
continue;
} else {
return ret_value__13630__auto__;
}
break;
}
});
cljs$core$async$state_machine__13629__auto__ = function(state_15675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13629__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13629__auto____1.call(this,state_15675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13629__auto____0;
cljs$core$async$state_machine__13629__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13629__auto____1;
return cljs$core$async$state_machine__13629__auto__;
})()
})();
var state__13742__auto__ = (function (){var statearr_15706 = f__13741__auto__();
(statearr_15706[(6)] = c__13740__auto___16493);

return statearr_15706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13742__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
