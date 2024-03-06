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
cljs.core.async.t_cljs$core$async20946 = (function (f,blockable,meta20947){
this.f = f;
this.blockable = blockable;
this.meta20947 = meta20947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20948,meta20947__$1){
var self__ = this;
var _20948__$1 = this;
return (new cljs.core.async.t_cljs$core$async20946(self__.f,self__.blockable,meta20947__$1));
}));

(cljs.core.async.t_cljs$core$async20946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20948){
var self__ = this;
var _20948__$1 = this;
return self__.meta20947;
}));

(cljs.core.async.t_cljs$core$async20946.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20946.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20946.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async20946.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async20946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20947","meta20947",-206053425,null)], null);
}));

(cljs.core.async.t_cljs$core$async20946.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20946");

(cljs.core.async.t_cljs$core$async20946.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20946");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20946.
 */
cljs.core.async.__GT_t_cljs$core$async20946 = (function cljs$core$async$__GT_t_cljs$core$async20946(f,blockable,meta20947){
return (new cljs.core.async.t_cljs$core$async20946(f,blockable,meta20947));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__20943 = arguments.length;
switch (G__20943) {
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
return (new cljs.core.async.t_cljs$core$async20946(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__20958 = arguments.length;
switch (G__20958) {
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
var G__20968 = arguments.length;
switch (G__20968) {
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
var G__20970 = arguments.length;
switch (G__20970) {
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
var val_22653 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22653) : fn1.call(null,val_22653));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22653) : fn1.call(null,val_22653));
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
var G__20973 = arguments.length;
switch (G__20973) {
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
var n__5636__auto___22659 = n;
var x_22660 = (0);
while(true){
if((x_22660 < n__5636__auto___22659)){
(a[x_22660] = x_22660);

var G__22661 = (x_22660 + (1));
x_22660 = G__22661;
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
cljs.core.async.t_cljs$core$async20982 = (function (flag,meta20983){
this.flag = flag;
this.meta20983 = meta20983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20984,meta20983__$1){
var self__ = this;
var _20984__$1 = this;
return (new cljs.core.async.t_cljs$core$async20982(self__.flag,meta20983__$1));
}));

(cljs.core.async.t_cljs$core$async20982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20984){
var self__ = this;
var _20984__$1 = this;
return self__.meta20983;
}));

(cljs.core.async.t_cljs$core$async20982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async20982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20983","meta20983",-1224501936,null)], null);
}));

(cljs.core.async.t_cljs$core$async20982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20982");

(cljs.core.async.t_cljs$core$async20982.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20982.
 */
cljs.core.async.__GT_t_cljs$core$async20982 = (function cljs$core$async$__GT_t_cljs$core$async20982(flag,meta20983){
return (new cljs.core.async.t_cljs$core$async20982(flag,meta20983));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async20982(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20997 = (function (flag,cb,meta20998){
this.flag = flag;
this.cb = cb;
this.meta20998 = meta20998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20999,meta20998__$1){
var self__ = this;
var _20999__$1 = this;
return (new cljs.core.async.t_cljs$core$async20997(self__.flag,self__.cb,meta20998__$1));
}));

(cljs.core.async.t_cljs$core$async20997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20999){
var self__ = this;
var _20999__$1 = this;
return self__.meta20998;
}));

(cljs.core.async.t_cljs$core$async20997.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async20997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async20997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20998","meta20998",897916061,null)], null);
}));

(cljs.core.async.t_cljs$core$async20997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20997");

(cljs.core.async.t_cljs$core$async20997.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async20997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20997.
 */
cljs.core.async.__GT_t_cljs$core$async20997 = (function cljs$core$async$__GT_t_cljs$core$async20997(flag,cb,meta20998){
return (new cljs.core.async.t_cljs$core$async20997(flag,cb,meta20998));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async20997(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21005_SHARP_){
var G__21007 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21005_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21007) : fret.call(null,G__21007));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21006_SHARP_){
var G__21008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21006_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21008) : fret.call(null,G__21008));
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
var G__22663 = (i + (1));
i = G__22663;
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
var len__5769__auto___22664 = arguments.length;
var i__5770__auto___22665 = (0);
while(true){
if((i__5770__auto___22665 < len__5769__auto___22664)){
args__5775__auto__.push((arguments[i__5770__auto___22665]));

var G__22666 = (i__5770__auto___22665 + (1));
i__5770__auto___22665 = G__22666;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21011){
var map__21012 = p__21011;
var map__21012__$1 = cljs.core.__destructure_map(map__21012);
var opts = map__21012__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21009){
var G__21010 = cljs.core.first(seq21009);
var seq21009__$1 = cljs.core.next(seq21009);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21010,seq21009__$1);
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
var G__21017 = arguments.length;
switch (G__21017) {
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
var c__20875__auto___22673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21066){
var state_val_21067 = (state_21066[(1)]);
if((state_val_21067 === (7))){
var inst_21062 = (state_21066[(2)]);
var state_21066__$1 = state_21066;
var statearr_21072_22674 = state_21066__$1;
(statearr_21072_22674[(2)] = inst_21062);

(statearr_21072_22674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (1))){
var state_21066__$1 = state_21066;
var statearr_21073_22675 = state_21066__$1;
(statearr_21073_22675[(2)] = null);

(statearr_21073_22675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (4))){
var inst_21036 = (state_21066[(7)]);
var inst_21036__$1 = (state_21066[(2)]);
var inst_21043 = (inst_21036__$1 == null);
var state_21066__$1 = (function (){var statearr_21074 = state_21066;
(statearr_21074[(7)] = inst_21036__$1);

return statearr_21074;
})();
if(cljs.core.truth_(inst_21043)){
var statearr_21075_22676 = state_21066__$1;
(statearr_21075_22676[(1)] = (5));

} else {
var statearr_21077_22677 = state_21066__$1;
(statearr_21077_22677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (13))){
var state_21066__$1 = state_21066;
var statearr_21079_22678 = state_21066__$1;
(statearr_21079_22678[(2)] = null);

(statearr_21079_22678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (6))){
var inst_21036 = (state_21066[(7)]);
var state_21066__$1 = state_21066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21066__$1,(11),to,inst_21036);
} else {
if((state_val_21067 === (3))){
var inst_21064 = (state_21066[(2)]);
var state_21066__$1 = state_21066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21066__$1,inst_21064);
} else {
if((state_val_21067 === (12))){
var state_21066__$1 = state_21066;
var statearr_21080_22679 = state_21066__$1;
(statearr_21080_22679[(2)] = null);

(statearr_21080_22679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (2))){
var state_21066__$1 = state_21066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21066__$1,(4),from);
} else {
if((state_val_21067 === (11))){
var inst_21055 = (state_21066[(2)]);
var state_21066__$1 = state_21066;
if(cljs.core.truth_(inst_21055)){
var statearr_21081_22680 = state_21066__$1;
(statearr_21081_22680[(1)] = (12));

} else {
var statearr_21082_22681 = state_21066__$1;
(statearr_21082_22681[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (9))){
var state_21066__$1 = state_21066;
var statearr_21083_22682 = state_21066__$1;
(statearr_21083_22682[(2)] = null);

(statearr_21083_22682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (5))){
var state_21066__$1 = state_21066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21084_22683 = state_21066__$1;
(statearr_21084_22683[(1)] = (8));

} else {
var statearr_21085_22684 = state_21066__$1;
(statearr_21085_22684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (14))){
var inst_21060 = (state_21066[(2)]);
var state_21066__$1 = state_21066;
var statearr_21086_22685 = state_21066__$1;
(statearr_21086_22685[(2)] = inst_21060);

(statearr_21086_22685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (10))){
var inst_21052 = (state_21066[(2)]);
var state_21066__$1 = state_21066;
var statearr_21087_22686 = state_21066__$1;
(statearr_21087_22686[(2)] = inst_21052);

(statearr_21087_22686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21067 === (8))){
var inst_21046 = cljs.core.async.close_BANG_(to);
var state_21066__$1 = state_21066;
var statearr_21088_22687 = state_21066__$1;
(statearr_21088_22687[(2)] = inst_21046);

(statearr_21088_22687[(1)] = (10));


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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_21089 = [null,null,null,null,null,null,null,null];
(statearr_21089[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_21089[(1)] = (1));

return statearr_21089;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_21066){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21066);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21090){var ex__20747__auto__ = e21090;
var statearr_21091_22688 = state_21066;
(statearr_21091_22688[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21066[(4)]))){
var statearr_21092_22689 = state_21066;
(statearr_21092_22689[(1)] = cljs.core.first((state_21066[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22690 = state_21066;
state_21066 = G__22690;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_21066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_21066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21094 = f__20876__auto__();
(statearr_21094[(6)] = c__20875__auto___22673);

return statearr_21094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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
var process__$1 = (function (p__21095){
var vec__21096 = p__21095;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21096,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21096,(1),null);
var job = vec__21096;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__20875__auto___22691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21103){
var state_val_21104 = (state_21103[(1)]);
if((state_val_21104 === (1))){
var state_21103__$1 = state_21103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21103__$1,(2),res,v);
} else {
if((state_val_21104 === (2))){
var inst_21100 = (state_21103[(2)]);
var inst_21101 = cljs.core.async.close_BANG_(res);
var state_21103__$1 = (function (){var statearr_21133 = state_21103;
(statearr_21133[(7)] = inst_21100);

return statearr_21133;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21103__$1,inst_21101);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0 = (function (){
var statearr_21148 = [null,null,null,null,null,null,null,null];
(statearr_21148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__);

(statearr_21148[(1)] = (1));

return statearr_21148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1 = (function (state_21103){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21103);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21153){var ex__20747__auto__ = e21153;
var statearr_21154_22694 = state_21103;
(statearr_21154_22694[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21103[(4)]))){
var statearr_21155_22695 = state_21103;
(statearr_21155_22695[(1)] = cljs.core.first((state_21103[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22697 = state_21103;
state_21103 = G__22697;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = function(state_21103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1.call(this,state_21103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21157 = f__20876__auto__();
(statearr_21157[(6)] = c__20875__auto___22691);

return statearr_21157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__21159){
var vec__21160 = p__21159;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21160,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21160,(1),null);
var job = vec__21160;
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
var n__5636__auto___22698 = n;
var __22699 = (0);
while(true){
if((__22699 < n__5636__auto___22698)){
var G__21163_22700 = type;
var G__21163_22701__$1 = (((G__21163_22700 instanceof cljs.core.Keyword))?G__21163_22700.fqn:null);
switch (G__21163_22701__$1) {
case "compute":
var c__20875__auto___22703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22699,c__20875__auto___22703,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async){
return (function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = ((function (__22699,c__20875__auto___22703,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async){
return (function (state_21176){
var state_val_21177 = (state_21176[(1)]);
if((state_val_21177 === (1))){
var state_21176__$1 = state_21176;
var statearr_21178_22704 = state_21176__$1;
(statearr_21178_22704[(2)] = null);

(statearr_21178_22704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21177 === (2))){
var state_21176__$1 = state_21176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21176__$1,(4),jobs);
} else {
if((state_val_21177 === (3))){
var inst_21174 = (state_21176[(2)]);
var state_21176__$1 = state_21176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21176__$1,inst_21174);
} else {
if((state_val_21177 === (4))){
var inst_21166 = (state_21176[(2)]);
var inst_21167 = process__$1(inst_21166);
var state_21176__$1 = state_21176;
if(cljs.core.truth_(inst_21167)){
var statearr_21181_22705 = state_21176__$1;
(statearr_21181_22705[(1)] = (5));

} else {
var statearr_21182_22706 = state_21176__$1;
(statearr_21182_22706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21177 === (5))){
var state_21176__$1 = state_21176;
var statearr_21183_22708 = state_21176__$1;
(statearr_21183_22708[(2)] = null);

(statearr_21183_22708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21177 === (6))){
var state_21176__$1 = state_21176;
var statearr_21184_22710 = state_21176__$1;
(statearr_21184_22710[(2)] = null);

(statearr_21184_22710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21177 === (7))){
var inst_21172 = (state_21176[(2)]);
var state_21176__$1 = state_21176;
var statearr_21185_22711 = state_21176__$1;
(statearr_21185_22711[(2)] = inst_21172);

(statearr_21185_22711[(1)] = (3));


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
});})(__22699,c__20875__auto___22703,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async))
;
return ((function (__22699,switch__20743__auto__,c__20875__auto___22703,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0 = (function (){
var statearr_21190 = [null,null,null,null,null,null,null];
(statearr_21190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__);

(statearr_21190[(1)] = (1));

return statearr_21190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1 = (function (state_21176){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21176);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21191){var ex__20747__auto__ = e21191;
var statearr_21192_22712 = state_21176;
(statearr_21192_22712[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21176[(4)]))){
var statearr_21193_22713 = state_21176;
(statearr_21193_22713[(1)] = cljs.core.first((state_21176[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22714 = state_21176;
state_21176 = G__22714;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = function(state_21176){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1.call(this,state_21176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__;
})()
;})(__22699,switch__20743__auto__,c__20875__auto___22703,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async))
})();
var state__20877__auto__ = (function (){var statearr_21196 = f__20876__auto__();
(statearr_21196[(6)] = c__20875__auto___22703);

return statearr_21196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
});})(__22699,c__20875__auto___22703,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async))
);


break;
case "async":
var c__20875__auto___22715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22699,c__20875__auto___22715,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async){
return (function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = ((function (__22699,c__20875__auto___22715,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async){
return (function (state_21209){
var state_val_21210 = (state_21209[(1)]);
if((state_val_21210 === (1))){
var state_21209__$1 = state_21209;
var statearr_21215_22717 = state_21209__$1;
(statearr_21215_22717[(2)] = null);

(statearr_21215_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (2))){
var state_21209__$1 = state_21209;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21209__$1,(4),jobs);
} else {
if((state_val_21210 === (3))){
var inst_21207 = (state_21209[(2)]);
var state_21209__$1 = state_21209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21209__$1,inst_21207);
} else {
if((state_val_21210 === (4))){
var inst_21199 = (state_21209[(2)]);
var inst_21200 = async(inst_21199);
var state_21209__$1 = state_21209;
if(cljs.core.truth_(inst_21200)){
var statearr_21216_22718 = state_21209__$1;
(statearr_21216_22718[(1)] = (5));

} else {
var statearr_21217_22719 = state_21209__$1;
(statearr_21217_22719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (5))){
var state_21209__$1 = state_21209;
var statearr_21218_22720 = state_21209__$1;
(statearr_21218_22720[(2)] = null);

(statearr_21218_22720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (6))){
var state_21209__$1 = state_21209;
var statearr_21219_22721 = state_21209__$1;
(statearr_21219_22721[(2)] = null);

(statearr_21219_22721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21210 === (7))){
var inst_21205 = (state_21209[(2)]);
var state_21209__$1 = state_21209;
var statearr_21222_22723 = state_21209__$1;
(statearr_21222_22723[(2)] = inst_21205);

(statearr_21222_22723[(1)] = (3));


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
});})(__22699,c__20875__auto___22715,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async))
;
return ((function (__22699,switch__20743__auto__,c__20875__auto___22715,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0 = (function (){
var statearr_21223 = [null,null,null,null,null,null,null];
(statearr_21223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__);

(statearr_21223[(1)] = (1));

return statearr_21223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1 = (function (state_21209){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21209);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21224){var ex__20747__auto__ = e21224;
var statearr_21225_22724 = state_21209;
(statearr_21225_22724[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21209[(4)]))){
var statearr_21226_22727 = state_21209;
(statearr_21226_22727[(1)] = cljs.core.first((state_21209[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22735 = state_21209;
state_21209 = G__22735;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = function(state_21209){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1.call(this,state_21209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__;
})()
;})(__22699,switch__20743__auto__,c__20875__auto___22715,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async))
})();
var state__20877__auto__ = (function (){var statearr_21228 = f__20876__auto__();
(statearr_21228[(6)] = c__20875__auto___22715);

return statearr_21228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
});})(__22699,c__20875__auto___22715,G__21163_22700,G__21163_22701__$1,n__5636__auto___22698,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21163_22701__$1)].join('')));

}

var G__22739 = (__22699 + (1));
__22699 = G__22739;
continue;
} else {
}
break;
}

var c__20875__auto___22740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21259){
var state_val_21260 = (state_21259[(1)]);
if((state_val_21260 === (7))){
var inst_21254 = (state_21259[(2)]);
var state_21259__$1 = state_21259;
var statearr_21264_22741 = state_21259__$1;
(statearr_21264_22741[(2)] = inst_21254);

(statearr_21264_22741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (1))){
var state_21259__$1 = state_21259;
var statearr_21269_22742 = state_21259__$1;
(statearr_21269_22742[(2)] = null);

(statearr_21269_22742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (4))){
var inst_21236 = (state_21259[(7)]);
var inst_21236__$1 = (state_21259[(2)]);
var inst_21237 = (inst_21236__$1 == null);
var state_21259__$1 = (function (){var statearr_21270 = state_21259;
(statearr_21270[(7)] = inst_21236__$1);

return statearr_21270;
})();
if(cljs.core.truth_(inst_21237)){
var statearr_21271_22743 = state_21259__$1;
(statearr_21271_22743[(1)] = (5));

} else {
var statearr_21272_22744 = state_21259__$1;
(statearr_21272_22744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (6))){
var inst_21244 = (state_21259[(8)]);
var inst_21236 = (state_21259[(7)]);
var inst_21244__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21245 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21246 = [inst_21236,inst_21244__$1];
var inst_21247 = (new cljs.core.PersistentVector(null,2,(5),inst_21245,inst_21246,null));
var state_21259__$1 = (function (){var statearr_21274 = state_21259;
(statearr_21274[(8)] = inst_21244__$1);

return statearr_21274;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21259__$1,(8),jobs,inst_21247);
} else {
if((state_val_21260 === (3))){
var inst_21256 = (state_21259[(2)]);
var state_21259__$1 = state_21259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21259__$1,inst_21256);
} else {
if((state_val_21260 === (2))){
var state_21259__$1 = state_21259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21259__$1,(4),from);
} else {
if((state_val_21260 === (9))){
var inst_21251 = (state_21259[(2)]);
var state_21259__$1 = (function (){var statearr_21275 = state_21259;
(statearr_21275[(9)] = inst_21251);

return statearr_21275;
})();
var statearr_21276_22750 = state_21259__$1;
(statearr_21276_22750[(2)] = null);

(statearr_21276_22750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (5))){
var inst_21240 = cljs.core.async.close_BANG_(jobs);
var state_21259__$1 = state_21259;
var statearr_21277_22751 = state_21259__$1;
(statearr_21277_22751[(2)] = inst_21240);

(statearr_21277_22751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21260 === (8))){
var inst_21244 = (state_21259[(8)]);
var inst_21249 = (state_21259[(2)]);
var state_21259__$1 = (function (){var statearr_21278 = state_21259;
(statearr_21278[(10)] = inst_21249);

return statearr_21278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21259__$1,(9),results,inst_21244);
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
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0 = (function (){
var statearr_21279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__);

(statearr_21279[(1)] = (1));

return statearr_21279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1 = (function (state_21259){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21259);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21281){var ex__20747__auto__ = e21281;
var statearr_21282_22754 = state_21259;
(statearr_21282_22754[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21259[(4)]))){
var statearr_21283_22756 = state_21259;
(statearr_21283_22756[(1)] = cljs.core.first((state_21259[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22758 = state_21259;
state_21259 = G__22758;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = function(state_21259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1.call(this,state_21259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21284 = f__20876__auto__();
(statearr_21284[(6)] = c__20875__auto___22740);

return statearr_21284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));


var c__20875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21323){
var state_val_21324 = (state_21323[(1)]);
if((state_val_21324 === (7))){
var inst_21319 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
var statearr_21326_22759 = state_21323__$1;
(statearr_21326_22759[(2)] = inst_21319);

(statearr_21326_22759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (20))){
var state_21323__$1 = state_21323;
var statearr_21331_22761 = state_21323__$1;
(statearr_21331_22761[(2)] = null);

(statearr_21331_22761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (1))){
var state_21323__$1 = state_21323;
var statearr_21332_22762 = state_21323__$1;
(statearr_21332_22762[(2)] = null);

(statearr_21332_22762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (4))){
var inst_21287 = (state_21323[(7)]);
var inst_21287__$1 = (state_21323[(2)]);
var inst_21289 = (inst_21287__$1 == null);
var state_21323__$1 = (function (){var statearr_21333 = state_21323;
(statearr_21333[(7)] = inst_21287__$1);

return statearr_21333;
})();
if(cljs.core.truth_(inst_21289)){
var statearr_21334_22763 = state_21323__$1;
(statearr_21334_22763[(1)] = (5));

} else {
var statearr_21338_22764 = state_21323__$1;
(statearr_21338_22764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (15))){
var inst_21301 = (state_21323[(8)]);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21323__$1,(18),to,inst_21301);
} else {
if((state_val_21324 === (21))){
var inst_21314 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
var statearr_21343_22765 = state_21323__$1;
(statearr_21343_22765[(2)] = inst_21314);

(statearr_21343_22765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (13))){
var inst_21316 = (state_21323[(2)]);
var state_21323__$1 = (function (){var statearr_21344 = state_21323;
(statearr_21344[(9)] = inst_21316);

return statearr_21344;
})();
var statearr_21345_22766 = state_21323__$1;
(statearr_21345_22766[(2)] = null);

(statearr_21345_22766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (6))){
var inst_21287 = (state_21323[(7)]);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21323__$1,(11),inst_21287);
} else {
if((state_val_21324 === (17))){
var inst_21309 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
if(cljs.core.truth_(inst_21309)){
var statearr_21346_22768 = state_21323__$1;
(statearr_21346_22768[(1)] = (19));

} else {
var statearr_21347_22769 = state_21323__$1;
(statearr_21347_22769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (3))){
var inst_21321 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21323__$1,inst_21321);
} else {
if((state_val_21324 === (12))){
var inst_21298 = (state_21323[(10)]);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21323__$1,(14),inst_21298);
} else {
if((state_val_21324 === (2))){
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21323__$1,(4),results);
} else {
if((state_val_21324 === (19))){
var state_21323__$1 = state_21323;
var statearr_21350_22771 = state_21323__$1;
(statearr_21350_22771[(2)] = null);

(statearr_21350_22771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (11))){
var inst_21298 = (state_21323[(2)]);
var state_21323__$1 = (function (){var statearr_21351 = state_21323;
(statearr_21351[(10)] = inst_21298);

return statearr_21351;
})();
var statearr_21352_22772 = state_21323__$1;
(statearr_21352_22772[(2)] = null);

(statearr_21352_22772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (9))){
var state_21323__$1 = state_21323;
var statearr_21353_22773 = state_21323__$1;
(statearr_21353_22773[(2)] = null);

(statearr_21353_22773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (5))){
var state_21323__$1 = state_21323;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21354_22774 = state_21323__$1;
(statearr_21354_22774[(1)] = (8));

} else {
var statearr_21355_22775 = state_21323__$1;
(statearr_21355_22775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (14))){
var inst_21301 = (state_21323[(8)]);
var inst_21303 = (state_21323[(11)]);
var inst_21301__$1 = (state_21323[(2)]);
var inst_21302 = (inst_21301__$1 == null);
var inst_21303__$1 = cljs.core.not(inst_21302);
var state_21323__$1 = (function (){var statearr_21356 = state_21323;
(statearr_21356[(8)] = inst_21301__$1);

(statearr_21356[(11)] = inst_21303__$1);

return statearr_21356;
})();
if(inst_21303__$1){
var statearr_21357_22776 = state_21323__$1;
(statearr_21357_22776[(1)] = (15));

} else {
var statearr_21358_22777 = state_21323__$1;
(statearr_21358_22777[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (16))){
var inst_21303 = (state_21323[(11)]);
var state_21323__$1 = state_21323;
var statearr_21359_22778 = state_21323__$1;
(statearr_21359_22778[(2)] = inst_21303);

(statearr_21359_22778[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (10))){
var inst_21295 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
var statearr_21360_22783 = state_21323__$1;
(statearr_21360_22783[(2)] = inst_21295);

(statearr_21360_22783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (18))){
var inst_21306 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
var statearr_21361_22786 = state_21323__$1;
(statearr_21361_22786[(2)] = inst_21306);

(statearr_21361_22786[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (8))){
var inst_21292 = cljs.core.async.close_BANG_(to);
var state_21323__$1 = state_21323;
var statearr_21364_22787 = state_21323__$1;
(statearr_21364_22787[(2)] = inst_21292);

(statearr_21364_22787[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0 = (function (){
var statearr_21366 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21366[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__);

(statearr_21366[(1)] = (1));

return statearr_21366;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1 = (function (state_21323){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21323);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21369){var ex__20747__auto__ = e21369;
var statearr_21371_22789 = state_21323;
(statearr_21371_22789[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21323[(4)]))){
var statearr_21372_22790 = state_21323;
(statearr_21372_22790[(1)] = cljs.core.first((state_21323[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22792 = state_21323;
state_21323 = G__22792;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__ = function(state_21323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1.call(this,state_21323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20744__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21373 = f__20876__auto__();
(statearr_21373[(6)] = c__20875__auto__);

return statearr_21373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));

return c__20875__auto__;
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
var G__21377 = arguments.length;
switch (G__21377) {
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
var G__21379 = arguments.length;
switch (G__21379) {
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
var G__21382 = arguments.length;
switch (G__21382) {
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
var c__20875__auto___22802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21428){
var state_val_21429 = (state_21428[(1)]);
if((state_val_21429 === (7))){
var inst_21424 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21430_22803 = state_21428__$1;
(statearr_21430_22803[(2)] = inst_21424);

(statearr_21430_22803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (1))){
var state_21428__$1 = state_21428;
var statearr_21431_22804 = state_21428__$1;
(statearr_21431_22804[(2)] = null);

(statearr_21431_22804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (4))){
var inst_21405 = (state_21428[(7)]);
var inst_21405__$1 = (state_21428[(2)]);
var inst_21406 = (inst_21405__$1 == null);
var state_21428__$1 = (function (){var statearr_21432 = state_21428;
(statearr_21432[(7)] = inst_21405__$1);

return statearr_21432;
})();
if(cljs.core.truth_(inst_21406)){
var statearr_21433_22805 = state_21428__$1;
(statearr_21433_22805[(1)] = (5));

} else {
var statearr_21434_22806 = state_21428__$1;
(statearr_21434_22806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (13))){
var state_21428__$1 = state_21428;
var statearr_21435_22807 = state_21428__$1;
(statearr_21435_22807[(2)] = null);

(statearr_21435_22807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (6))){
var inst_21405 = (state_21428[(7)]);
var inst_21411 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21405) : p.call(null,inst_21405));
var state_21428__$1 = state_21428;
if(cljs.core.truth_(inst_21411)){
var statearr_21440_22808 = state_21428__$1;
(statearr_21440_22808[(1)] = (9));

} else {
var statearr_21441_22809 = state_21428__$1;
(statearr_21441_22809[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (3))){
var inst_21426 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21428__$1,inst_21426);
} else {
if((state_val_21429 === (12))){
var state_21428__$1 = state_21428;
var statearr_21442_22810 = state_21428__$1;
(statearr_21442_22810[(2)] = null);

(statearr_21442_22810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (2))){
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21428__$1,(4),ch);
} else {
if((state_val_21429 === (11))){
var inst_21405 = (state_21428[(7)]);
var inst_21415 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21428__$1,(8),inst_21415,inst_21405);
} else {
if((state_val_21429 === (9))){
var state_21428__$1 = state_21428;
var statearr_21443_22811 = state_21428__$1;
(statearr_21443_22811[(2)] = tc);

(statearr_21443_22811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (5))){
var inst_21408 = cljs.core.async.close_BANG_(tc);
var inst_21409 = cljs.core.async.close_BANG_(fc);
var state_21428__$1 = (function (){var statearr_21444 = state_21428;
(statearr_21444[(8)] = inst_21408);

return statearr_21444;
})();
var statearr_21445_22812 = state_21428__$1;
(statearr_21445_22812[(2)] = inst_21409);

(statearr_21445_22812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (14))){
var inst_21422 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
var statearr_21446_22813 = state_21428__$1;
(statearr_21446_22813[(2)] = inst_21422);

(statearr_21446_22813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (10))){
var state_21428__$1 = state_21428;
var statearr_21447_22814 = state_21428__$1;
(statearr_21447_22814[(2)] = fc);

(statearr_21447_22814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21429 === (8))){
var inst_21417 = (state_21428[(2)]);
var state_21428__$1 = state_21428;
if(cljs.core.truth_(inst_21417)){
var statearr_21448_22815 = state_21428__$1;
(statearr_21448_22815[(1)] = (12));

} else {
var statearr_21449_22816 = state_21428__$1;
(statearr_21449_22816[(1)] = (13));

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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_21450 = [null,null,null,null,null,null,null,null,null];
(statearr_21450[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_21450[(1)] = (1));

return statearr_21450;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_21428){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21428);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21451){var ex__20747__auto__ = e21451;
var statearr_21452_22817 = state_21428;
(statearr_21452_22817[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21428[(4)]))){
var statearr_21453_22818 = state_21428;
(statearr_21453_22818[(1)] = cljs.core.first((state_21428[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22819 = state_21428;
state_21428 = G__22819;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_21428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_21428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21455 = f__20876__auto__();
(statearr_21455[(6)] = c__20875__auto___22802);

return statearr_21455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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
var c__20875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21483){
var state_val_21484 = (state_21483[(1)]);
if((state_val_21484 === (7))){
var inst_21479 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
var statearr_21486_22820 = state_21483__$1;
(statearr_21486_22820[(2)] = inst_21479);

(statearr_21486_22820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (1))){
var inst_21459 = init;
var inst_21461 = inst_21459;
var state_21483__$1 = (function (){var statearr_21488 = state_21483;
(statearr_21488[(7)] = inst_21461);

return statearr_21488;
})();
var statearr_21489_22821 = state_21483__$1;
(statearr_21489_22821[(2)] = null);

(statearr_21489_22821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (4))){
var inst_21466 = (state_21483[(8)]);
var inst_21466__$1 = (state_21483[(2)]);
var inst_21467 = (inst_21466__$1 == null);
var state_21483__$1 = (function (){var statearr_21491 = state_21483;
(statearr_21491[(8)] = inst_21466__$1);

return statearr_21491;
})();
if(cljs.core.truth_(inst_21467)){
var statearr_21492_22822 = state_21483__$1;
(statearr_21492_22822[(1)] = (5));

} else {
var statearr_21493_22823 = state_21483__$1;
(statearr_21493_22823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (6))){
var inst_21470 = (state_21483[(9)]);
var inst_21461 = (state_21483[(7)]);
var inst_21466 = (state_21483[(8)]);
var inst_21470__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21461,inst_21466) : f.call(null,inst_21461,inst_21466));
var inst_21471 = cljs.core.reduced_QMARK_(inst_21470__$1);
var state_21483__$1 = (function (){var statearr_21495 = state_21483;
(statearr_21495[(9)] = inst_21470__$1);

return statearr_21495;
})();
if(inst_21471){
var statearr_21496_22825 = state_21483__$1;
(statearr_21496_22825[(1)] = (8));

} else {
var statearr_21497_22826 = state_21483__$1;
(statearr_21497_22826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (3))){
var inst_21481 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21483__$1,inst_21481);
} else {
if((state_val_21484 === (2))){
var state_21483__$1 = state_21483;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21483__$1,(4),ch);
} else {
if((state_val_21484 === (9))){
var inst_21470 = (state_21483[(9)]);
var inst_21461 = inst_21470;
var state_21483__$1 = (function (){var statearr_21498 = state_21483;
(statearr_21498[(7)] = inst_21461);

return statearr_21498;
})();
var statearr_21500_22829 = state_21483__$1;
(statearr_21500_22829[(2)] = null);

(statearr_21500_22829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (5))){
var inst_21461 = (state_21483[(7)]);
var state_21483__$1 = state_21483;
var statearr_21502_22830 = state_21483__$1;
(statearr_21502_22830[(2)] = inst_21461);

(statearr_21502_22830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (10))){
var inst_21477 = (state_21483[(2)]);
var state_21483__$1 = state_21483;
var statearr_21503_22831 = state_21483__$1;
(statearr_21503_22831[(2)] = inst_21477);

(statearr_21503_22831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21484 === (8))){
var inst_21470 = (state_21483[(9)]);
var inst_21473 = cljs.core.deref(inst_21470);
var state_21483__$1 = state_21483;
var statearr_21504_22834 = state_21483__$1;
(statearr_21504_22834[(2)] = inst_21473);

(statearr_21504_22834[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__20744__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20744__auto____0 = (function (){
var statearr_21505 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21505[(0)] = cljs$core$async$reduce_$_state_machine__20744__auto__);

(statearr_21505[(1)] = (1));

return statearr_21505;
});
var cljs$core$async$reduce_$_state_machine__20744__auto____1 = (function (state_21483){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21483);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21511){var ex__20747__auto__ = e21511;
var statearr_21512_22837 = state_21483;
(statearr_21512_22837[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21483[(4)]))){
var statearr_21513_22838 = state_21483;
(statearr_21513_22838[(1)] = cljs.core.first((state_21483[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22840 = state_21483;
state_21483 = G__22840;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20744__auto__ = function(state_21483){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20744__auto____1.call(this,state_21483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20744__auto____0;
cljs$core$async$reduce_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20744__auto____1;
return cljs$core$async$reduce_$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21519 = f__20876__auto__();
(statearr_21519[(6)] = c__20875__auto__);

return statearr_21519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));

return c__20875__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__20875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21526){
var state_val_21527 = (state_21526[(1)]);
if((state_val_21527 === (1))){
var inst_21521 = cljs.core.async.reduce(f__$1,init,ch);
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21526__$1,(2),inst_21521);
} else {
if((state_val_21527 === (2))){
var inst_21523 = (state_21526[(2)]);
var inst_21524 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21523) : f__$1.call(null,inst_21523));
var state_21526__$1 = state_21526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21526__$1,inst_21524);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__20744__auto__ = null;
var cljs$core$async$transduce_$_state_machine__20744__auto____0 = (function (){
var statearr_21529 = [null,null,null,null,null,null,null];
(statearr_21529[(0)] = cljs$core$async$transduce_$_state_machine__20744__auto__);

(statearr_21529[(1)] = (1));

return statearr_21529;
});
var cljs$core$async$transduce_$_state_machine__20744__auto____1 = (function (state_21526){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21526);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21530){var ex__20747__auto__ = e21530;
var statearr_21531_22844 = state_21526;
(statearr_21531_22844[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21526[(4)]))){
var statearr_21532_22845 = state_21526;
(statearr_21532_22845[(1)] = cljs.core.first((state_21526[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22846 = state_21526;
state_21526 = G__22846;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__20744__auto__ = function(state_21526){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__20744__auto____1.call(this,state_21526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__20744__auto____0;
cljs$core$async$transduce_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__20744__auto____1;
return cljs$core$async$transduce_$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21537 = f__20876__auto__();
(statearr_21537[(6)] = c__20875__auto__);

return statearr_21537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));

return c__20875__auto__;
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
var G__21545 = arguments.length;
switch (G__21545) {
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
var c__20875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21571){
var state_val_21572 = (state_21571[(1)]);
if((state_val_21572 === (7))){
var inst_21553 = (state_21571[(2)]);
var state_21571__$1 = state_21571;
var statearr_21573_22849 = state_21571__$1;
(statearr_21573_22849[(2)] = inst_21553);

(statearr_21573_22849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (1))){
var inst_21546 = cljs.core.seq(coll);
var inst_21547 = inst_21546;
var state_21571__$1 = (function (){var statearr_21574 = state_21571;
(statearr_21574[(7)] = inst_21547);

return statearr_21574;
})();
var statearr_21575_22850 = state_21571__$1;
(statearr_21575_22850[(2)] = null);

(statearr_21575_22850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (4))){
var inst_21547 = (state_21571[(7)]);
var inst_21551 = cljs.core.first(inst_21547);
var state_21571__$1 = state_21571;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21571__$1,(7),ch,inst_21551);
} else {
if((state_val_21572 === (13))){
var inst_21565 = (state_21571[(2)]);
var state_21571__$1 = state_21571;
var statearr_21579_22854 = state_21571__$1;
(statearr_21579_22854[(2)] = inst_21565);

(statearr_21579_22854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (6))){
var inst_21556 = (state_21571[(2)]);
var state_21571__$1 = state_21571;
if(cljs.core.truth_(inst_21556)){
var statearr_21580_22855 = state_21571__$1;
(statearr_21580_22855[(1)] = (8));

} else {
var statearr_21581_22856 = state_21571__$1;
(statearr_21581_22856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (3))){
var inst_21569 = (state_21571[(2)]);
var state_21571__$1 = state_21571;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21571__$1,inst_21569);
} else {
if((state_val_21572 === (12))){
var state_21571__$1 = state_21571;
var statearr_21582_22857 = state_21571__$1;
(statearr_21582_22857[(2)] = null);

(statearr_21582_22857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (2))){
var inst_21547 = (state_21571[(7)]);
var state_21571__$1 = state_21571;
if(cljs.core.truth_(inst_21547)){
var statearr_21593_22858 = state_21571__$1;
(statearr_21593_22858[(1)] = (4));

} else {
var statearr_21595_22859 = state_21571__$1;
(statearr_21595_22859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (11))){
var inst_21562 = cljs.core.async.close_BANG_(ch);
var state_21571__$1 = state_21571;
var statearr_21596_22860 = state_21571__$1;
(statearr_21596_22860[(2)] = inst_21562);

(statearr_21596_22860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (9))){
var state_21571__$1 = state_21571;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21597_22861 = state_21571__$1;
(statearr_21597_22861[(1)] = (11));

} else {
var statearr_21598_22862 = state_21571__$1;
(statearr_21598_22862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (5))){
var inst_21547 = (state_21571[(7)]);
var state_21571__$1 = state_21571;
var statearr_21599_22863 = state_21571__$1;
(statearr_21599_22863[(2)] = inst_21547);

(statearr_21599_22863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (10))){
var inst_21567 = (state_21571[(2)]);
var state_21571__$1 = state_21571;
var statearr_21600_22864 = state_21571__$1;
(statearr_21600_22864[(2)] = inst_21567);

(statearr_21600_22864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21572 === (8))){
var inst_21547 = (state_21571[(7)]);
var inst_21558 = cljs.core.next(inst_21547);
var inst_21547__$1 = inst_21558;
var state_21571__$1 = (function (){var statearr_21601 = state_21571;
(statearr_21601[(7)] = inst_21547__$1);

return statearr_21601;
})();
var statearr_21602_22865 = state_21571__$1;
(statearr_21602_22865[(2)] = null);

(statearr_21602_22865[(1)] = (2));


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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_21603 = [null,null,null,null,null,null,null,null];
(statearr_21603[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_21603[(1)] = (1));

return statearr_21603;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_21571){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21571);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21604){var ex__20747__auto__ = e21604;
var statearr_21606_22866 = state_21571;
(statearr_21606_22866[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21571[(4)]))){
var statearr_21609_22867 = state_21571;
(statearr_21609_22867[(1)] = cljs.core.first((state_21571[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22868 = state_21571;
state_21571 = G__22868;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_21571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_21571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21610 = f__20876__auto__();
(statearr_21610[(6)] = c__20875__auto__);

return statearr_21610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));

return c__20875__auto__;
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
var G__21613 = arguments.length;
switch (G__21613) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_22870 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_22870(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22871 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_22871(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22872 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_22872(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22873 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_22873(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21618 = (function (ch,cs,meta21619){
this.ch = ch;
this.cs = cs;
this.meta21619 = meta21619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21620,meta21619__$1){
var self__ = this;
var _21620__$1 = this;
return (new cljs.core.async.t_cljs$core$async21618(self__.ch,self__.cs,meta21619__$1));
}));

(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21620){
var self__ = this;
var _21620__$1 = this;
return self__.meta21619;
}));

(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async21618.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async21618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21619","meta21619",641895424,null)], null);
}));

(cljs.core.async.t_cljs$core$async21618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21618");

(cljs.core.async.t_cljs$core$async21618.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21618.
 */
cljs.core.async.__GT_t_cljs$core$async21618 = (function cljs$core$async$__GT_t_cljs$core$async21618(ch,cs,meta21619){
return (new cljs.core.async.t_cljs$core$async21618(ch,cs,meta21619));
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
var m = (new cljs.core.async.t_cljs$core$async21618(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__20875__auto___22874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21757){
var state_val_21758 = (state_21757[(1)]);
if((state_val_21758 === (7))){
var inst_21749 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21759_22875 = state_21757__$1;
(statearr_21759_22875[(2)] = inst_21749);

(statearr_21759_22875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (20))){
var inst_21654 = (state_21757[(7)]);
var inst_21666 = cljs.core.first(inst_21654);
var inst_21667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21666,(0),null);
var inst_21668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21666,(1),null);
var state_21757__$1 = (function (){var statearr_21760 = state_21757;
(statearr_21760[(8)] = inst_21667);

return statearr_21760;
})();
if(cljs.core.truth_(inst_21668)){
var statearr_21761_22876 = state_21757__$1;
(statearr_21761_22876[(1)] = (22));

} else {
var statearr_21762_22877 = state_21757__$1;
(statearr_21762_22877[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (27))){
var inst_21696 = (state_21757[(9)]);
var inst_21623 = (state_21757[(10)]);
var inst_21703 = (state_21757[(11)]);
var inst_21698 = (state_21757[(12)]);
var inst_21703__$1 = cljs.core._nth(inst_21696,inst_21698);
var inst_21704 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21703__$1,inst_21623,done);
var state_21757__$1 = (function (){var statearr_21763 = state_21757;
(statearr_21763[(11)] = inst_21703__$1);

return statearr_21763;
})();
if(cljs.core.truth_(inst_21704)){
var statearr_21764_22878 = state_21757__$1;
(statearr_21764_22878[(1)] = (30));

} else {
var statearr_21765_22879 = state_21757__$1;
(statearr_21765_22879[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (1))){
var state_21757__$1 = state_21757;
var statearr_21766_22880 = state_21757__$1;
(statearr_21766_22880[(2)] = null);

(statearr_21766_22880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (24))){
var inst_21654 = (state_21757[(7)]);
var inst_21673 = (state_21757[(2)]);
var inst_21674 = cljs.core.next(inst_21654);
var inst_21632 = inst_21674;
var inst_21633 = null;
var inst_21634 = (0);
var inst_21635 = (0);
var state_21757__$1 = (function (){var statearr_21767 = state_21757;
(statearr_21767[(13)] = inst_21635);

(statearr_21767[(14)] = inst_21632);

(statearr_21767[(15)] = inst_21634);

(statearr_21767[(16)] = inst_21633);

(statearr_21767[(17)] = inst_21673);

return statearr_21767;
})();
var statearr_21768_22881 = state_21757__$1;
(statearr_21768_22881[(2)] = null);

(statearr_21768_22881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (39))){
var state_21757__$1 = state_21757;
var statearr_21772_22882 = state_21757__$1;
(statearr_21772_22882[(2)] = null);

(statearr_21772_22882[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (4))){
var inst_21623 = (state_21757[(10)]);
var inst_21623__$1 = (state_21757[(2)]);
var inst_21624 = (inst_21623__$1 == null);
var state_21757__$1 = (function (){var statearr_21773 = state_21757;
(statearr_21773[(10)] = inst_21623__$1);

return statearr_21773;
})();
if(cljs.core.truth_(inst_21624)){
var statearr_21774_22883 = state_21757__$1;
(statearr_21774_22883[(1)] = (5));

} else {
var statearr_21775_22884 = state_21757__$1;
(statearr_21775_22884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (15))){
var inst_21635 = (state_21757[(13)]);
var inst_21632 = (state_21757[(14)]);
var inst_21634 = (state_21757[(15)]);
var inst_21633 = (state_21757[(16)]);
var inst_21650 = (state_21757[(2)]);
var inst_21651 = (inst_21635 + (1));
var tmp21769 = inst_21632;
var tmp21770 = inst_21634;
var tmp21771 = inst_21633;
var inst_21632__$1 = tmp21769;
var inst_21633__$1 = tmp21771;
var inst_21634__$1 = tmp21770;
var inst_21635__$1 = inst_21651;
var state_21757__$1 = (function (){var statearr_21776 = state_21757;
(statearr_21776[(13)] = inst_21635__$1);

(statearr_21776[(14)] = inst_21632__$1);

(statearr_21776[(15)] = inst_21634__$1);

(statearr_21776[(18)] = inst_21650);

(statearr_21776[(16)] = inst_21633__$1);

return statearr_21776;
})();
var statearr_21777_22885 = state_21757__$1;
(statearr_21777_22885[(2)] = null);

(statearr_21777_22885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (21))){
var inst_21677 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21781_22886 = state_21757__$1;
(statearr_21781_22886[(2)] = inst_21677);

(statearr_21781_22886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (31))){
var inst_21703 = (state_21757[(11)]);
var inst_21707 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21703);
var state_21757__$1 = state_21757;
var statearr_21782_22887 = state_21757__$1;
(statearr_21782_22887[(2)] = inst_21707);

(statearr_21782_22887[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (32))){
var inst_21695 = (state_21757[(19)]);
var inst_21697 = (state_21757[(20)]);
var inst_21696 = (state_21757[(9)]);
var inst_21698 = (state_21757[(12)]);
var inst_21709 = (state_21757[(2)]);
var inst_21710 = (inst_21698 + (1));
var tmp21778 = inst_21695;
var tmp21779 = inst_21697;
var tmp21780 = inst_21696;
var inst_21695__$1 = tmp21778;
var inst_21696__$1 = tmp21780;
var inst_21697__$1 = tmp21779;
var inst_21698__$1 = inst_21710;
var state_21757__$1 = (function (){var statearr_21783 = state_21757;
(statearr_21783[(19)] = inst_21695__$1);

(statearr_21783[(20)] = inst_21697__$1);

(statearr_21783[(9)] = inst_21696__$1);

(statearr_21783[(12)] = inst_21698__$1);

(statearr_21783[(21)] = inst_21709);

return statearr_21783;
})();
var statearr_21785_22888 = state_21757__$1;
(statearr_21785_22888[(2)] = null);

(statearr_21785_22888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (40))){
var inst_21722 = (state_21757[(22)]);
var inst_21726 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_21722);
var state_21757__$1 = state_21757;
var statearr_21786_22889 = state_21757__$1;
(statearr_21786_22889[(2)] = inst_21726);

(statearr_21786_22889[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (33))){
var inst_21713 = (state_21757[(23)]);
var inst_21715 = cljs.core.chunked_seq_QMARK_(inst_21713);
var state_21757__$1 = state_21757;
if(inst_21715){
var statearr_21787_22890 = state_21757__$1;
(statearr_21787_22890[(1)] = (36));

} else {
var statearr_21788_22891 = state_21757__$1;
(statearr_21788_22891[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (13))){
var inst_21644 = (state_21757[(24)]);
var inst_21647 = cljs.core.async.close_BANG_(inst_21644);
var state_21757__$1 = state_21757;
var statearr_21789_22892 = state_21757__$1;
(statearr_21789_22892[(2)] = inst_21647);

(statearr_21789_22892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (22))){
var inst_21667 = (state_21757[(8)]);
var inst_21670 = cljs.core.async.close_BANG_(inst_21667);
var state_21757__$1 = state_21757;
var statearr_21790_22893 = state_21757__$1;
(statearr_21790_22893[(2)] = inst_21670);

(statearr_21790_22893[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (36))){
var inst_21713 = (state_21757[(23)]);
var inst_21717 = cljs.core.chunk_first(inst_21713);
var inst_21718 = cljs.core.chunk_rest(inst_21713);
var inst_21719 = cljs.core.count(inst_21717);
var inst_21695 = inst_21718;
var inst_21696 = inst_21717;
var inst_21697 = inst_21719;
var inst_21698 = (0);
var state_21757__$1 = (function (){var statearr_21791 = state_21757;
(statearr_21791[(19)] = inst_21695);

(statearr_21791[(20)] = inst_21697);

(statearr_21791[(9)] = inst_21696);

(statearr_21791[(12)] = inst_21698);

return statearr_21791;
})();
var statearr_21792_22894 = state_21757__$1;
(statearr_21792_22894[(2)] = null);

(statearr_21792_22894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (41))){
var inst_21713 = (state_21757[(23)]);
var inst_21728 = (state_21757[(2)]);
var inst_21729 = cljs.core.next(inst_21713);
var inst_21695 = inst_21729;
var inst_21696 = null;
var inst_21697 = (0);
var inst_21698 = (0);
var state_21757__$1 = (function (){var statearr_21793 = state_21757;
(statearr_21793[(19)] = inst_21695);

(statearr_21793[(20)] = inst_21697);

(statearr_21793[(9)] = inst_21696);

(statearr_21793[(25)] = inst_21728);

(statearr_21793[(12)] = inst_21698);

return statearr_21793;
})();
var statearr_21794_22895 = state_21757__$1;
(statearr_21794_22895[(2)] = null);

(statearr_21794_22895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (43))){
var state_21757__$1 = state_21757;
var statearr_21795_22896 = state_21757__$1;
(statearr_21795_22896[(2)] = null);

(statearr_21795_22896[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (29))){
var inst_21737 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21796_22897 = state_21757__$1;
(statearr_21796_22897[(2)] = inst_21737);

(statearr_21796_22897[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (44))){
var inst_21746 = (state_21757[(2)]);
var state_21757__$1 = (function (){var statearr_21797 = state_21757;
(statearr_21797[(26)] = inst_21746);

return statearr_21797;
})();
var statearr_21798_22898 = state_21757__$1;
(statearr_21798_22898[(2)] = null);

(statearr_21798_22898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (6))){
var inst_21687 = (state_21757[(27)]);
var inst_21686 = cljs.core.deref(cs);
var inst_21687__$1 = cljs.core.keys(inst_21686);
var inst_21688 = cljs.core.count(inst_21687__$1);
var inst_21689 = cljs.core.reset_BANG_(dctr,inst_21688);
var inst_21694 = cljs.core.seq(inst_21687__$1);
var inst_21695 = inst_21694;
var inst_21696 = null;
var inst_21697 = (0);
var inst_21698 = (0);
var state_21757__$1 = (function (){var statearr_21799 = state_21757;
(statearr_21799[(19)] = inst_21695);

(statearr_21799[(27)] = inst_21687__$1);

(statearr_21799[(20)] = inst_21697);

(statearr_21799[(28)] = inst_21689);

(statearr_21799[(9)] = inst_21696);

(statearr_21799[(12)] = inst_21698);

return statearr_21799;
})();
var statearr_21800_22899 = state_21757__$1;
(statearr_21800_22899[(2)] = null);

(statearr_21800_22899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (28))){
var inst_21695 = (state_21757[(19)]);
var inst_21713 = (state_21757[(23)]);
var inst_21713__$1 = cljs.core.seq(inst_21695);
var state_21757__$1 = (function (){var statearr_21801 = state_21757;
(statearr_21801[(23)] = inst_21713__$1);

return statearr_21801;
})();
if(inst_21713__$1){
var statearr_21802_22900 = state_21757__$1;
(statearr_21802_22900[(1)] = (33));

} else {
var statearr_21803_22901 = state_21757__$1;
(statearr_21803_22901[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (25))){
var inst_21697 = (state_21757[(20)]);
var inst_21698 = (state_21757[(12)]);
var inst_21700 = (inst_21698 < inst_21697);
var inst_21701 = inst_21700;
var state_21757__$1 = state_21757;
if(cljs.core.truth_(inst_21701)){
var statearr_21804_22902 = state_21757__$1;
(statearr_21804_22902[(1)] = (27));

} else {
var statearr_21805_22903 = state_21757__$1;
(statearr_21805_22903[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (34))){
var state_21757__$1 = state_21757;
var statearr_21806_22904 = state_21757__$1;
(statearr_21806_22904[(2)] = null);

(statearr_21806_22904[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (17))){
var state_21757__$1 = state_21757;
var statearr_21807_22905 = state_21757__$1;
(statearr_21807_22905[(2)] = null);

(statearr_21807_22905[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (3))){
var inst_21751 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21757__$1,inst_21751);
} else {
if((state_val_21758 === (12))){
var inst_21682 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21808_22906 = state_21757__$1;
(statearr_21808_22906[(2)] = inst_21682);

(statearr_21808_22906[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (2))){
var state_21757__$1 = state_21757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21757__$1,(4),ch);
} else {
if((state_val_21758 === (23))){
var state_21757__$1 = state_21757;
var statearr_21809_22907 = state_21757__$1;
(statearr_21809_22907[(2)] = null);

(statearr_21809_22907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (35))){
var inst_21735 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21810_22908 = state_21757__$1;
(statearr_21810_22908[(2)] = inst_21735);

(statearr_21810_22908[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (19))){
var inst_21654 = (state_21757[(7)]);
var inst_21658 = cljs.core.chunk_first(inst_21654);
var inst_21659 = cljs.core.chunk_rest(inst_21654);
var inst_21660 = cljs.core.count(inst_21658);
var inst_21632 = inst_21659;
var inst_21633 = inst_21658;
var inst_21634 = inst_21660;
var inst_21635 = (0);
var state_21757__$1 = (function (){var statearr_21811 = state_21757;
(statearr_21811[(13)] = inst_21635);

(statearr_21811[(14)] = inst_21632);

(statearr_21811[(15)] = inst_21634);

(statearr_21811[(16)] = inst_21633);

return statearr_21811;
})();
var statearr_21812_22909 = state_21757__$1;
(statearr_21812_22909[(2)] = null);

(statearr_21812_22909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (11))){
var inst_21654 = (state_21757[(7)]);
var inst_21632 = (state_21757[(14)]);
var inst_21654__$1 = cljs.core.seq(inst_21632);
var state_21757__$1 = (function (){var statearr_21813 = state_21757;
(statearr_21813[(7)] = inst_21654__$1);

return statearr_21813;
})();
if(inst_21654__$1){
var statearr_21814_22910 = state_21757__$1;
(statearr_21814_22910[(1)] = (16));

} else {
var statearr_21815_22911 = state_21757__$1;
(statearr_21815_22911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (9))){
var inst_21684 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21816_22912 = state_21757__$1;
(statearr_21816_22912[(2)] = inst_21684);

(statearr_21816_22912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (5))){
var inst_21630 = cljs.core.deref(cs);
var inst_21631 = cljs.core.seq(inst_21630);
var inst_21632 = inst_21631;
var inst_21633 = null;
var inst_21634 = (0);
var inst_21635 = (0);
var state_21757__$1 = (function (){var statearr_21817 = state_21757;
(statearr_21817[(13)] = inst_21635);

(statearr_21817[(14)] = inst_21632);

(statearr_21817[(15)] = inst_21634);

(statearr_21817[(16)] = inst_21633);

return statearr_21817;
})();
var statearr_21818_22913 = state_21757__$1;
(statearr_21818_22913[(2)] = null);

(statearr_21818_22913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (14))){
var state_21757__$1 = state_21757;
var statearr_21819_22914 = state_21757__$1;
(statearr_21819_22914[(2)] = null);

(statearr_21819_22914[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (45))){
var inst_21743 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21820_22915 = state_21757__$1;
(statearr_21820_22915[(2)] = inst_21743);

(statearr_21820_22915[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (26))){
var inst_21687 = (state_21757[(27)]);
var inst_21739 = (state_21757[(2)]);
var inst_21740 = cljs.core.seq(inst_21687);
var state_21757__$1 = (function (){var statearr_21821 = state_21757;
(statearr_21821[(29)] = inst_21739);

return statearr_21821;
})();
if(inst_21740){
var statearr_21822_22916 = state_21757__$1;
(statearr_21822_22916[(1)] = (42));

} else {
var statearr_21823_22917 = state_21757__$1;
(statearr_21823_22917[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (16))){
var inst_21654 = (state_21757[(7)]);
var inst_21656 = cljs.core.chunked_seq_QMARK_(inst_21654);
var state_21757__$1 = state_21757;
if(inst_21656){
var statearr_21824_22920 = state_21757__$1;
(statearr_21824_22920[(1)] = (19));

} else {
var statearr_21825_22921 = state_21757__$1;
(statearr_21825_22921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (38))){
var inst_21732 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21826_22922 = state_21757__$1;
(statearr_21826_22922[(2)] = inst_21732);

(statearr_21826_22922[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (30))){
var state_21757__$1 = state_21757;
var statearr_21827_22923 = state_21757__$1;
(statearr_21827_22923[(2)] = null);

(statearr_21827_22923[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (10))){
var inst_21635 = (state_21757[(13)]);
var inst_21633 = (state_21757[(16)]);
var inst_21643 = cljs.core._nth(inst_21633,inst_21635);
var inst_21644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21643,(0),null);
var inst_21645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21643,(1),null);
var state_21757__$1 = (function (){var statearr_21828 = state_21757;
(statearr_21828[(24)] = inst_21644);

return statearr_21828;
})();
if(cljs.core.truth_(inst_21645)){
var statearr_21829_22927 = state_21757__$1;
(statearr_21829_22927[(1)] = (13));

} else {
var statearr_21830_22928 = state_21757__$1;
(statearr_21830_22928[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (18))){
var inst_21680 = (state_21757[(2)]);
var state_21757__$1 = state_21757;
var statearr_21831_22929 = state_21757__$1;
(statearr_21831_22929[(2)] = inst_21680);

(statearr_21831_22929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (42))){
var state_21757__$1 = state_21757;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21757__$1,(45),dchan);
} else {
if((state_val_21758 === (37))){
var inst_21722 = (state_21757[(22)]);
var inst_21623 = (state_21757[(10)]);
var inst_21713 = (state_21757[(23)]);
var inst_21722__$1 = cljs.core.first(inst_21713);
var inst_21723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_21722__$1,inst_21623,done);
var state_21757__$1 = (function (){var statearr_21832 = state_21757;
(statearr_21832[(22)] = inst_21722__$1);

return statearr_21832;
})();
if(cljs.core.truth_(inst_21723)){
var statearr_21833_22930 = state_21757__$1;
(statearr_21833_22930[(1)] = (39));

} else {
var statearr_21834_22931 = state_21757__$1;
(statearr_21834_22931[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21758 === (8))){
var inst_21635 = (state_21757[(13)]);
var inst_21634 = (state_21757[(15)]);
var inst_21637 = (inst_21635 < inst_21634);
var inst_21638 = inst_21637;
var state_21757__$1 = state_21757;
if(cljs.core.truth_(inst_21638)){
var statearr_21835_22932 = state_21757__$1;
(statearr_21835_22932[(1)] = (10));

} else {
var statearr_21836_22933 = state_21757__$1;
(statearr_21836_22933[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__20744__auto__ = null;
var cljs$core$async$mult_$_state_machine__20744__auto____0 = (function (){
var statearr_21837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21837[(0)] = cljs$core$async$mult_$_state_machine__20744__auto__);

(statearr_21837[(1)] = (1));

return statearr_21837;
});
var cljs$core$async$mult_$_state_machine__20744__auto____1 = (function (state_21757){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21757);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21838){var ex__20747__auto__ = e21838;
var statearr_21839_22934 = state_21757;
(statearr_21839_22934[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21757[(4)]))){
var statearr_21840_22935 = state_21757;
(statearr_21840_22935[(1)] = cljs.core.first((state_21757[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22936 = state_21757;
state_21757 = G__22936;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20744__auto__ = function(state_21757){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20744__auto____1.call(this,state_21757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20744__auto____0;
cljs$core$async$mult_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20744__auto____1;
return cljs$core$async$mult_$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21841 = f__20876__auto__();
(statearr_21841[(6)] = c__20875__auto___22874);

return statearr_21841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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
var G__21843 = arguments.length;
switch (G__21843) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_22939 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_22939(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22941 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_22941(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22945 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22945(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22947 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_22947(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22948 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22948(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22949 = arguments.length;
var i__5770__auto___22950 = (0);
while(true){
if((i__5770__auto___22950 < len__5769__auto___22949)){
args__5775__auto__.push((arguments[i__5770__auto___22950]));

var G__22951 = (i__5770__auto___22950 + (1));
i__5770__auto___22950 = G__22951;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21848){
var map__21849 = p__21848;
var map__21849__$1 = cljs.core.__destructure_map(map__21849);
var opts = map__21849__$1;
var statearr_21850_22952 = state;
(statearr_21850_22952[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_21851_22953 = state;
(statearr_21851_22953[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_21852_22954 = state;
(statearr_21852_22954[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21844){
var G__21845 = cljs.core.first(seq21844);
var seq21844__$1 = cljs.core.next(seq21844);
var G__21846 = cljs.core.first(seq21844__$1);
var seq21844__$2 = cljs.core.next(seq21844__$1);
var G__21847 = cljs.core.first(seq21844__$2);
var seq21844__$3 = cljs.core.next(seq21844__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21845,G__21846,G__21847,seq21844__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21853 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21854){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21854 = meta21854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21855,meta21854__$1){
var self__ = this;
var _21855__$1 = this;
return (new cljs.core.async.t_cljs$core$async21853(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21854__$1));
}));

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21855){
var self__ = this;
var _21855__$1 = this;
return self__.meta21854;
}));

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21853.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async21853.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21854","meta21854",214565446,null)], null);
}));

(cljs.core.async.t_cljs$core$async21853.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21853.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21853");

(cljs.core.async.t_cljs$core$async21853.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21853");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21853.
 */
cljs.core.async.__GT_t_cljs$core$async21853 = (function cljs$core$async$__GT_t_cljs$core$async21853(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21854){
return (new cljs.core.async.t_cljs$core$async21853(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21854));
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
var m = (new cljs.core.async.t_cljs$core$async21853(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__20875__auto___22964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_21923){
var state_val_21924 = (state_21923[(1)]);
if((state_val_21924 === (7))){
var inst_21883 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
if(cljs.core.truth_(inst_21883)){
var statearr_21925_22967 = state_21923__$1;
(statearr_21925_22967[(1)] = (8));

} else {
var statearr_21926_22968 = state_21923__$1;
(statearr_21926_22968[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (20))){
var inst_21876 = (state_21923[(7)]);
var state_21923__$1 = state_21923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21923__$1,(23),out,inst_21876);
} else {
if((state_val_21924 === (1))){
var inst_21859 = calc_state();
var inst_21860 = cljs.core.__destructure_map(inst_21859);
var inst_21861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21860,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21860,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21860,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21864 = inst_21859;
var state_21923__$1 = (function (){var statearr_21927 = state_21923;
(statearr_21927[(8)] = inst_21861);

(statearr_21927[(9)] = inst_21863);

(statearr_21927[(10)] = inst_21862);

(statearr_21927[(11)] = inst_21864);

return statearr_21927;
})();
var statearr_21928_22969 = state_21923__$1;
(statearr_21928_22969[(2)] = null);

(statearr_21928_22969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (24))){
var inst_21867 = (state_21923[(12)]);
var inst_21864 = inst_21867;
var state_21923__$1 = (function (){var statearr_21929 = state_21923;
(statearr_21929[(11)] = inst_21864);

return statearr_21929;
})();
var statearr_21930_22971 = state_21923__$1;
(statearr_21930_22971[(2)] = null);

(statearr_21930_22971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (4))){
var inst_21876 = (state_21923[(7)]);
var inst_21878 = (state_21923[(13)]);
var inst_21875 = (state_21923[(2)]);
var inst_21876__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21875,(0),null);
var inst_21877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21875,(1),null);
var inst_21878__$1 = (inst_21876__$1 == null);
var state_21923__$1 = (function (){var statearr_21931 = state_21923;
(statearr_21931[(7)] = inst_21876__$1);

(statearr_21931[(14)] = inst_21877);

(statearr_21931[(13)] = inst_21878__$1);

return statearr_21931;
})();
if(cljs.core.truth_(inst_21878__$1)){
var statearr_21932_22975 = state_21923__$1;
(statearr_21932_22975[(1)] = (5));

} else {
var statearr_21933_22977 = state_21923__$1;
(statearr_21933_22977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (15))){
var inst_21897 = (state_21923[(15)]);
var inst_21868 = (state_21923[(16)]);
var inst_21897__$1 = cljs.core.empty_QMARK_(inst_21868);
var state_21923__$1 = (function (){var statearr_21934 = state_21923;
(statearr_21934[(15)] = inst_21897__$1);

return statearr_21934;
})();
if(inst_21897__$1){
var statearr_21935_22978 = state_21923__$1;
(statearr_21935_22978[(1)] = (17));

} else {
var statearr_21936_22979 = state_21923__$1;
(statearr_21936_22979[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (21))){
var inst_21867 = (state_21923[(12)]);
var inst_21864 = inst_21867;
var state_21923__$1 = (function (){var statearr_21937 = state_21923;
(statearr_21937[(11)] = inst_21864);

return statearr_21937;
})();
var statearr_21938_22980 = state_21923__$1;
(statearr_21938_22980[(2)] = null);

(statearr_21938_22980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (13))){
var inst_21890 = (state_21923[(2)]);
var inst_21891 = calc_state();
var inst_21864 = inst_21891;
var state_21923__$1 = (function (){var statearr_21939 = state_21923;
(statearr_21939[(11)] = inst_21864);

(statearr_21939[(17)] = inst_21890);

return statearr_21939;
})();
var statearr_21940_22982 = state_21923__$1;
(statearr_21940_22982[(2)] = null);

(statearr_21940_22982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (22))){
var inst_21917 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
var statearr_21941_22984 = state_21923__$1;
(statearr_21941_22984[(2)] = inst_21917);

(statearr_21941_22984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (6))){
var inst_21877 = (state_21923[(14)]);
var inst_21881 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21877,change);
var state_21923__$1 = state_21923;
var statearr_21942_22985 = state_21923__$1;
(statearr_21942_22985[(2)] = inst_21881);

(statearr_21942_22985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (25))){
var state_21923__$1 = state_21923;
var statearr_21943_22986 = state_21923__$1;
(statearr_21943_22986[(2)] = null);

(statearr_21943_22986[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (17))){
var inst_21877 = (state_21923[(14)]);
var inst_21869 = (state_21923[(18)]);
var inst_21899 = (inst_21869.cljs$core$IFn$_invoke$arity$1 ? inst_21869.cljs$core$IFn$_invoke$arity$1(inst_21877) : inst_21869.call(null,inst_21877));
var inst_21900 = cljs.core.not(inst_21899);
var state_21923__$1 = state_21923;
var statearr_21944_22987 = state_21923__$1;
(statearr_21944_22987[(2)] = inst_21900);

(statearr_21944_22987[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (3))){
var inst_21921 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21923__$1,inst_21921);
} else {
if((state_val_21924 === (12))){
var state_21923__$1 = state_21923;
var statearr_21945_22992 = state_21923__$1;
(statearr_21945_22992[(2)] = null);

(statearr_21945_22992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (2))){
var inst_21864 = (state_21923[(11)]);
var inst_21867 = (state_21923[(12)]);
var inst_21867__$1 = cljs.core.__destructure_map(inst_21864);
var inst_21868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21867__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21867__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21867__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21923__$1 = (function (){var statearr_21946 = state_21923;
(statearr_21946[(18)] = inst_21869);

(statearr_21946[(16)] = inst_21868);

(statearr_21946[(12)] = inst_21867__$1);

return statearr_21946;
})();
return cljs.core.async.ioc_alts_BANG_(state_21923__$1,(4),inst_21870);
} else {
if((state_val_21924 === (23))){
var inst_21908 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
if(cljs.core.truth_(inst_21908)){
var statearr_21947_22994 = state_21923__$1;
(statearr_21947_22994[(1)] = (24));

} else {
var statearr_21948_22995 = state_21923__$1;
(statearr_21948_22995[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (19))){
var inst_21903 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
var statearr_21949_22996 = state_21923__$1;
(statearr_21949_22996[(2)] = inst_21903);

(statearr_21949_22996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (11))){
var inst_21877 = (state_21923[(14)]);
var inst_21887 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_21877);
var state_21923__$1 = state_21923;
var statearr_21950_22997 = state_21923__$1;
(statearr_21950_22997[(2)] = inst_21887);

(statearr_21950_22997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (9))){
var inst_21894 = (state_21923[(19)]);
var inst_21877 = (state_21923[(14)]);
var inst_21868 = (state_21923[(16)]);
var inst_21894__$1 = (inst_21868.cljs$core$IFn$_invoke$arity$1 ? inst_21868.cljs$core$IFn$_invoke$arity$1(inst_21877) : inst_21868.call(null,inst_21877));
var state_21923__$1 = (function (){var statearr_21951 = state_21923;
(statearr_21951[(19)] = inst_21894__$1);

return statearr_21951;
})();
if(cljs.core.truth_(inst_21894__$1)){
var statearr_21952_22998 = state_21923__$1;
(statearr_21952_22998[(1)] = (14));

} else {
var statearr_21953_22999 = state_21923__$1;
(statearr_21953_22999[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (5))){
var inst_21878 = (state_21923[(13)]);
var state_21923__$1 = state_21923;
var statearr_21954_23000 = state_21923__$1;
(statearr_21954_23000[(2)] = inst_21878);

(statearr_21954_23000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (14))){
var inst_21894 = (state_21923[(19)]);
var state_21923__$1 = state_21923;
var statearr_21955_23001 = state_21923__$1;
(statearr_21955_23001[(2)] = inst_21894);

(statearr_21955_23001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (26))){
var inst_21913 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
var statearr_21956_23003 = state_21923__$1;
(statearr_21956_23003[(2)] = inst_21913);

(statearr_21956_23003[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (16))){
var inst_21905 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
if(cljs.core.truth_(inst_21905)){
var statearr_21957_23004 = state_21923__$1;
(statearr_21957_23004[(1)] = (20));

} else {
var statearr_21958_23005 = state_21923__$1;
(statearr_21958_23005[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (10))){
var inst_21919 = (state_21923[(2)]);
var state_21923__$1 = state_21923;
var statearr_21959_23007 = state_21923__$1;
(statearr_21959_23007[(2)] = inst_21919);

(statearr_21959_23007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (18))){
var inst_21897 = (state_21923[(15)]);
var state_21923__$1 = state_21923;
var statearr_21960_23008 = state_21923__$1;
(statearr_21960_23008[(2)] = inst_21897);

(statearr_21960_23008[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21924 === (8))){
var inst_21876 = (state_21923[(7)]);
var inst_21885 = (inst_21876 == null);
var state_21923__$1 = state_21923;
if(cljs.core.truth_(inst_21885)){
var statearr_21961_23011 = state_21923__$1;
(statearr_21961_23011[(1)] = (11));

} else {
var statearr_21962_23012 = state_21923__$1;
(statearr_21962_23012[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__20744__auto__ = null;
var cljs$core$async$mix_$_state_machine__20744__auto____0 = (function (){
var statearr_21963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21963[(0)] = cljs$core$async$mix_$_state_machine__20744__auto__);

(statearr_21963[(1)] = (1));

return statearr_21963;
});
var cljs$core$async$mix_$_state_machine__20744__auto____1 = (function (state_21923){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_21923);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e21964){var ex__20747__auto__ = e21964;
var statearr_21965_23014 = state_21923;
(statearr_21965_23014[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_21923[(4)]))){
var statearr_21966_23015 = state_21923;
(statearr_21966_23015[(1)] = cljs.core.first((state_21923[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23016 = state_21923;
state_21923 = G__23016;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20744__auto__ = function(state_21923){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20744__auto____1.call(this,state_21923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20744__auto____0;
cljs$core$async$mix_$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20744__auto____1;
return cljs$core$async$mix_$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_21967 = f__20876__auto__();
(statearr_21967[(6)] = c__20875__auto___22964);

return statearr_21967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_23018 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_23018(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_23020 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_23020(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_23023 = (function() {
var G__23024 = null;
var G__23024__1 = (function (p){
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
var G__23024__2 = (function (p,v){
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
G__23024 = function(p,v){
switch(arguments.length){
case 1:
return G__23024__1.call(this,p);
case 2:
return G__23024__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__23024.cljs$core$IFn$_invoke$arity$1 = G__23024__1;
G__23024.cljs$core$IFn$_invoke$arity$2 = G__23024__2;
return G__23024;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__21969 = arguments.length;
switch (G__21969) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23023(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_23023(p,v);
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
cljs.core.async.t_cljs$core$async21973 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21974){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21974 = meta21974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21975,meta21974__$1){
var self__ = this;
var _21975__$1 = this;
return (new cljs.core.async.t_cljs$core$async21973(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21974__$1));
}));

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21975){
var self__ = this;
var _21975__$1 = this;
return self__.meta21974;
}));

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async21973.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async21973.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21974","meta21974",-57538648,null)], null);
}));

(cljs.core.async.t_cljs$core$async21973.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21973");

(cljs.core.async.t_cljs$core$async21973.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async21973");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21973.
 */
cljs.core.async.__GT_t_cljs$core$async21973 = (function cljs$core$async$__GT_t_cljs$core$async21973(ch,topic_fn,buf_fn,mults,ensure_mult,meta21974){
return (new cljs.core.async.t_cljs$core$async21973(ch,topic_fn,buf_fn,mults,ensure_mult,meta21974));
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
var G__21972 = arguments.length;
switch (G__21972) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__21970_SHARP_){
if(cljs.core.truth_((p1__21970_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__21970_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__21970_SHARP_.call(null,topic)))){
return p1__21970_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21970_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async21973(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__20875__auto___23039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22047){
var state_val_22048 = (state_22047[(1)]);
if((state_val_22048 === (7))){
var inst_22043 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
var statearr_22049_23040 = state_22047__$1;
(statearr_22049_23040[(2)] = inst_22043);

(statearr_22049_23040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (20))){
var state_22047__$1 = state_22047;
var statearr_22050_23044 = state_22047__$1;
(statearr_22050_23044[(2)] = null);

(statearr_22050_23044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (1))){
var state_22047__$1 = state_22047;
var statearr_22051_23045 = state_22047__$1;
(statearr_22051_23045[(2)] = null);

(statearr_22051_23045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (24))){
var inst_22026 = (state_22047[(7)]);
var inst_22035 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22026);
var state_22047__$1 = state_22047;
var statearr_22052_23046 = state_22047__$1;
(statearr_22052_23046[(2)] = inst_22035);

(statearr_22052_23046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (4))){
var inst_21978 = (state_22047[(8)]);
var inst_21978__$1 = (state_22047[(2)]);
var inst_21979 = (inst_21978__$1 == null);
var state_22047__$1 = (function (){var statearr_22053 = state_22047;
(statearr_22053[(8)] = inst_21978__$1);

return statearr_22053;
})();
if(cljs.core.truth_(inst_21979)){
var statearr_22054_23047 = state_22047__$1;
(statearr_22054_23047[(1)] = (5));

} else {
var statearr_22055_23048 = state_22047__$1;
(statearr_22055_23048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (15))){
var inst_22020 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
var statearr_22056_23052 = state_22047__$1;
(statearr_22056_23052[(2)] = inst_22020);

(statearr_22056_23052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (21))){
var inst_22040 = (state_22047[(2)]);
var state_22047__$1 = (function (){var statearr_22057 = state_22047;
(statearr_22057[(9)] = inst_22040);

return statearr_22057;
})();
var statearr_22058_23053 = state_22047__$1;
(statearr_22058_23053[(2)] = null);

(statearr_22058_23053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (13))){
var inst_22002 = (state_22047[(10)]);
var inst_22004 = cljs.core.chunked_seq_QMARK_(inst_22002);
var state_22047__$1 = state_22047;
if(inst_22004){
var statearr_22059_23054 = state_22047__$1;
(statearr_22059_23054[(1)] = (16));

} else {
var statearr_22060_23055 = state_22047__$1;
(statearr_22060_23055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (22))){
var inst_22032 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
if(cljs.core.truth_(inst_22032)){
var statearr_22061_23059 = state_22047__$1;
(statearr_22061_23059[(1)] = (23));

} else {
var statearr_22062_23060 = state_22047__$1;
(statearr_22062_23060[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (6))){
var inst_22028 = (state_22047[(11)]);
var inst_21978 = (state_22047[(8)]);
var inst_22026 = (state_22047[(7)]);
var inst_22026__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_21978) : topic_fn.call(null,inst_21978));
var inst_22027 = cljs.core.deref(mults);
var inst_22028__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22027,inst_22026__$1);
var state_22047__$1 = (function (){var statearr_22063 = state_22047;
(statearr_22063[(11)] = inst_22028__$1);

(statearr_22063[(7)] = inst_22026__$1);

return statearr_22063;
})();
if(cljs.core.truth_(inst_22028__$1)){
var statearr_22064_23061 = state_22047__$1;
(statearr_22064_23061[(1)] = (19));

} else {
var statearr_22065_23062 = state_22047__$1;
(statearr_22065_23062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (25))){
var inst_22037 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
var statearr_22066_23063 = state_22047__$1;
(statearr_22066_23063[(2)] = inst_22037);

(statearr_22066_23063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (17))){
var inst_22002 = (state_22047[(10)]);
var inst_22011 = cljs.core.first(inst_22002);
var inst_22012 = cljs.core.async.muxch_STAR_(inst_22011);
var inst_22013 = cljs.core.async.close_BANG_(inst_22012);
var inst_22014 = cljs.core.next(inst_22002);
var inst_21988 = inst_22014;
var inst_21989 = null;
var inst_21990 = (0);
var inst_21991 = (0);
var state_22047__$1 = (function (){var statearr_22067 = state_22047;
(statearr_22067[(12)] = inst_22013);

(statearr_22067[(13)] = inst_21989);

(statearr_22067[(14)] = inst_21990);

(statearr_22067[(15)] = inst_21991);

(statearr_22067[(16)] = inst_21988);

return statearr_22067;
})();
var statearr_22068_23065 = state_22047__$1;
(statearr_22068_23065[(2)] = null);

(statearr_22068_23065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (3))){
var inst_22045 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22047__$1,inst_22045);
} else {
if((state_val_22048 === (12))){
var inst_22022 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
var statearr_22069_23067 = state_22047__$1;
(statearr_22069_23067[(2)] = inst_22022);

(statearr_22069_23067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (2))){
var state_22047__$1 = state_22047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22047__$1,(4),ch);
} else {
if((state_val_22048 === (23))){
var state_22047__$1 = state_22047;
var statearr_22070_23069 = state_22047__$1;
(statearr_22070_23069[(2)] = null);

(statearr_22070_23069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (19))){
var inst_22028 = (state_22047[(11)]);
var inst_21978 = (state_22047[(8)]);
var inst_22030 = cljs.core.async.muxch_STAR_(inst_22028);
var state_22047__$1 = state_22047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22047__$1,(22),inst_22030,inst_21978);
} else {
if((state_val_22048 === (11))){
var inst_21988 = (state_22047[(16)]);
var inst_22002 = (state_22047[(10)]);
var inst_22002__$1 = cljs.core.seq(inst_21988);
var state_22047__$1 = (function (){var statearr_22071 = state_22047;
(statearr_22071[(10)] = inst_22002__$1);

return statearr_22071;
})();
if(inst_22002__$1){
var statearr_22072_23071 = state_22047__$1;
(statearr_22072_23071[(1)] = (13));

} else {
var statearr_22073_23072 = state_22047__$1;
(statearr_22073_23072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (9))){
var inst_22024 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
var statearr_22074_23073 = state_22047__$1;
(statearr_22074_23073[(2)] = inst_22024);

(statearr_22074_23073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (5))){
var inst_21985 = cljs.core.deref(mults);
var inst_21986 = cljs.core.vals(inst_21985);
var inst_21987 = cljs.core.seq(inst_21986);
var inst_21988 = inst_21987;
var inst_21989 = null;
var inst_21990 = (0);
var inst_21991 = (0);
var state_22047__$1 = (function (){var statearr_22075 = state_22047;
(statearr_22075[(13)] = inst_21989);

(statearr_22075[(14)] = inst_21990);

(statearr_22075[(15)] = inst_21991);

(statearr_22075[(16)] = inst_21988);

return statearr_22075;
})();
var statearr_22076_23075 = state_22047__$1;
(statearr_22076_23075[(2)] = null);

(statearr_22076_23075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (14))){
var state_22047__$1 = state_22047;
var statearr_22080_23076 = state_22047__$1;
(statearr_22080_23076[(2)] = null);

(statearr_22080_23076[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (16))){
var inst_22002 = (state_22047[(10)]);
var inst_22006 = cljs.core.chunk_first(inst_22002);
var inst_22007 = cljs.core.chunk_rest(inst_22002);
var inst_22008 = cljs.core.count(inst_22006);
var inst_21988 = inst_22007;
var inst_21989 = inst_22006;
var inst_21990 = inst_22008;
var inst_21991 = (0);
var state_22047__$1 = (function (){var statearr_22081 = state_22047;
(statearr_22081[(13)] = inst_21989);

(statearr_22081[(14)] = inst_21990);

(statearr_22081[(15)] = inst_21991);

(statearr_22081[(16)] = inst_21988);

return statearr_22081;
})();
var statearr_22082_23078 = state_22047__$1;
(statearr_22082_23078[(2)] = null);

(statearr_22082_23078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (10))){
var inst_21989 = (state_22047[(13)]);
var inst_21990 = (state_22047[(14)]);
var inst_21991 = (state_22047[(15)]);
var inst_21988 = (state_22047[(16)]);
var inst_21996 = cljs.core._nth(inst_21989,inst_21991);
var inst_21997 = cljs.core.async.muxch_STAR_(inst_21996);
var inst_21998 = cljs.core.async.close_BANG_(inst_21997);
var inst_21999 = (inst_21991 + (1));
var tmp22077 = inst_21989;
var tmp22078 = inst_21990;
var tmp22079 = inst_21988;
var inst_21988__$1 = tmp22079;
var inst_21989__$1 = tmp22077;
var inst_21990__$1 = tmp22078;
var inst_21991__$1 = inst_21999;
var state_22047__$1 = (function (){var statearr_22083 = state_22047;
(statearr_22083[(13)] = inst_21989__$1);

(statearr_22083[(14)] = inst_21990__$1);

(statearr_22083[(17)] = inst_21998);

(statearr_22083[(15)] = inst_21991__$1);

(statearr_22083[(16)] = inst_21988__$1);

return statearr_22083;
})();
var statearr_22084_23081 = state_22047__$1;
(statearr_22084_23081[(2)] = null);

(statearr_22084_23081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (18))){
var inst_22017 = (state_22047[(2)]);
var state_22047__$1 = state_22047;
var statearr_22085_23083 = state_22047__$1;
(statearr_22085_23083[(2)] = inst_22017);

(statearr_22085_23083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22048 === (8))){
var inst_21990 = (state_22047[(14)]);
var inst_21991 = (state_22047[(15)]);
var inst_21993 = (inst_21991 < inst_21990);
var inst_21994 = inst_21993;
var state_22047__$1 = state_22047;
if(cljs.core.truth_(inst_21994)){
var statearr_22086_23085 = state_22047__$1;
(statearr_22086_23085[(1)] = (10));

} else {
var statearr_22087_23086 = state_22047__$1;
(statearr_22087_23086[(1)] = (11));

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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22088[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22088[(1)] = (1));

return statearr_22088;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22047){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22047);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22089){var ex__20747__auto__ = e22089;
var statearr_22090_23088 = state_22047;
(statearr_22090_23088[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22047[(4)]))){
var statearr_22091_23089 = state_22047;
(statearr_22091_23089[(1)] = cljs.core.first((state_22047[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23092 = state_22047;
state_22047 = G__23092;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22092 = f__20876__auto__();
(statearr_22092[(6)] = c__20875__auto___23039);

return statearr_22092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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
var G__22094 = arguments.length;
switch (G__22094) {
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
var G__22096 = arguments.length;
switch (G__22096) {
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
var G__22098 = arguments.length;
switch (G__22098) {
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
var c__20875__auto___23101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22141){
var state_val_22142 = (state_22141[(1)]);
if((state_val_22142 === (7))){
var state_22141__$1 = state_22141;
var statearr_22143_23103 = state_22141__$1;
(statearr_22143_23103[(2)] = null);

(statearr_22143_23103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (1))){
var state_22141__$1 = state_22141;
var statearr_22144_23104 = state_22141__$1;
(statearr_22144_23104[(2)] = null);

(statearr_22144_23104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (4))){
var inst_22101 = (state_22141[(7)]);
var inst_22102 = (state_22141[(8)]);
var inst_22104 = (inst_22102 < inst_22101);
var state_22141__$1 = state_22141;
if(cljs.core.truth_(inst_22104)){
var statearr_22145_23105 = state_22141__$1;
(statearr_22145_23105[(1)] = (6));

} else {
var statearr_22146_23106 = state_22141__$1;
(statearr_22146_23106[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (15))){
var inst_22127 = (state_22141[(9)]);
var inst_22132 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22127);
var state_22141__$1 = state_22141;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22141__$1,(17),out,inst_22132);
} else {
if((state_val_22142 === (13))){
var inst_22127 = (state_22141[(9)]);
var inst_22127__$1 = (state_22141[(2)]);
var inst_22128 = cljs.core.some(cljs.core.nil_QMARK_,inst_22127__$1);
var state_22141__$1 = (function (){var statearr_22147 = state_22141;
(statearr_22147[(9)] = inst_22127__$1);

return statearr_22147;
})();
if(cljs.core.truth_(inst_22128)){
var statearr_22148_23107 = state_22141__$1;
(statearr_22148_23107[(1)] = (14));

} else {
var statearr_22149_23108 = state_22141__$1;
(statearr_22149_23108[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (6))){
var state_22141__$1 = state_22141;
var statearr_22150_23109 = state_22141__$1;
(statearr_22150_23109[(2)] = null);

(statearr_22150_23109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (17))){
var inst_22134 = (state_22141[(2)]);
var state_22141__$1 = (function (){var statearr_22152 = state_22141;
(statearr_22152[(10)] = inst_22134);

return statearr_22152;
})();
var statearr_22153_23110 = state_22141__$1;
(statearr_22153_23110[(2)] = null);

(statearr_22153_23110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (3))){
var inst_22139 = (state_22141[(2)]);
var state_22141__$1 = state_22141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22141__$1,inst_22139);
} else {
if((state_val_22142 === (12))){
var _ = (function (){var statearr_22154 = state_22141;
(statearr_22154[(4)] = cljs.core.rest((state_22141[(4)])));

return statearr_22154;
})();
var state_22141__$1 = state_22141;
var ex22151 = (state_22141__$1[(2)]);
var statearr_22155_23111 = state_22141__$1;
(statearr_22155_23111[(5)] = ex22151);


if((ex22151 instanceof Object)){
var statearr_22156_23112 = state_22141__$1;
(statearr_22156_23112[(1)] = (11));

(statearr_22156_23112[(5)] = null);

} else {
throw ex22151;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (2))){
var inst_22100 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22101 = cnt;
var inst_22102 = (0);
var state_22141__$1 = (function (){var statearr_22157 = state_22141;
(statearr_22157[(7)] = inst_22101);

(statearr_22157[(11)] = inst_22100);

(statearr_22157[(8)] = inst_22102);

return statearr_22157;
})();
var statearr_22158_23113 = state_22141__$1;
(statearr_22158_23113[(2)] = null);

(statearr_22158_23113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (11))){
var inst_22106 = (state_22141[(2)]);
var inst_22107 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22141__$1 = (function (){var statearr_22159 = state_22141;
(statearr_22159[(12)] = inst_22106);

return statearr_22159;
})();
var statearr_22160_23114 = state_22141__$1;
(statearr_22160_23114[(2)] = inst_22107);

(statearr_22160_23114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (9))){
var inst_22102 = (state_22141[(8)]);
var _ = (function (){var statearr_22161 = state_22141;
(statearr_22161[(4)] = cljs.core.cons((12),(state_22141[(4)])));

return statearr_22161;
})();
var inst_22113 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22102) : chs__$1.call(null,inst_22102));
var inst_22114 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22102) : done.call(null,inst_22102));
var inst_22115 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22113,inst_22114);
var ___$1 = (function (){var statearr_22162 = state_22141;
(statearr_22162[(4)] = cljs.core.rest((state_22141[(4)])));

return statearr_22162;
})();
var state_22141__$1 = state_22141;
var statearr_22163_23117 = state_22141__$1;
(statearr_22163_23117[(2)] = inst_22115);

(statearr_22163_23117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (5))){
var inst_22125 = (state_22141[(2)]);
var state_22141__$1 = (function (){var statearr_22164 = state_22141;
(statearr_22164[(13)] = inst_22125);

return statearr_22164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22141__$1,(13),dchan);
} else {
if((state_val_22142 === (14))){
var inst_22130 = cljs.core.async.close_BANG_(out);
var state_22141__$1 = state_22141;
var statearr_22165_23118 = state_22141__$1;
(statearr_22165_23118[(2)] = inst_22130);

(statearr_22165_23118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (16))){
var inst_22137 = (state_22141[(2)]);
var state_22141__$1 = state_22141;
var statearr_22166_23119 = state_22141__$1;
(statearr_22166_23119[(2)] = inst_22137);

(statearr_22166_23119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (10))){
var inst_22102 = (state_22141[(8)]);
var inst_22118 = (state_22141[(2)]);
var inst_22119 = (inst_22102 + (1));
var inst_22102__$1 = inst_22119;
var state_22141__$1 = (function (){var statearr_22167 = state_22141;
(statearr_22167[(14)] = inst_22118);

(statearr_22167[(8)] = inst_22102__$1);

return statearr_22167;
})();
var statearr_22168_23124 = state_22141__$1;
(statearr_22168_23124[(2)] = null);

(statearr_22168_23124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22142 === (8))){
var inst_22123 = (state_22141[(2)]);
var state_22141__$1 = state_22141;
var statearr_22169_23125 = state_22141__$1;
(statearr_22169_23125[(2)] = inst_22123);

(statearr_22169_23125[(1)] = (5));


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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22170[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22170[(1)] = (1));

return statearr_22170;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22141){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22141);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22171){var ex__20747__auto__ = e22171;
var statearr_22172_23127 = state_22141;
(statearr_22172_23127[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22141[(4)]))){
var statearr_22173_23129 = state_22141;
(statearr_22173_23129[(1)] = cljs.core.first((state_22141[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23130 = state_22141;
state_22141 = G__23130;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22174 = f__20876__auto__();
(statearr_22174[(6)] = c__20875__auto___23101);

return statearr_22174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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
var G__22177 = arguments.length;
switch (G__22177) {
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
var c__20875__auto___23136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22209){
var state_val_22210 = (state_22209[(1)]);
if((state_val_22210 === (7))){
var inst_22189 = (state_22209[(7)]);
var inst_22188 = (state_22209[(8)]);
var inst_22188__$1 = (state_22209[(2)]);
var inst_22189__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22188__$1,(0),null);
var inst_22190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22188__$1,(1),null);
var inst_22191 = (inst_22189__$1 == null);
var state_22209__$1 = (function (){var statearr_22211 = state_22209;
(statearr_22211[(7)] = inst_22189__$1);

(statearr_22211[(9)] = inst_22190);

(statearr_22211[(8)] = inst_22188__$1);

return statearr_22211;
})();
if(cljs.core.truth_(inst_22191)){
var statearr_22212_23137 = state_22209__$1;
(statearr_22212_23137[(1)] = (8));

} else {
var statearr_22213_23138 = state_22209__$1;
(statearr_22213_23138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (1))){
var inst_22178 = cljs.core.vec(chs);
var inst_22179 = inst_22178;
var state_22209__$1 = (function (){var statearr_22214 = state_22209;
(statearr_22214[(10)] = inst_22179);

return statearr_22214;
})();
var statearr_22215_23140 = state_22209__$1;
(statearr_22215_23140[(2)] = null);

(statearr_22215_23140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (4))){
var inst_22179 = (state_22209[(10)]);
var state_22209__$1 = state_22209;
return cljs.core.async.ioc_alts_BANG_(state_22209__$1,(7),inst_22179);
} else {
if((state_val_22210 === (6))){
var inst_22205 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
var statearr_22216_23142 = state_22209__$1;
(statearr_22216_23142[(2)] = inst_22205);

(statearr_22216_23142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (3))){
var inst_22207 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22209__$1,inst_22207);
} else {
if((state_val_22210 === (2))){
var inst_22179 = (state_22209[(10)]);
var inst_22181 = cljs.core.count(inst_22179);
var inst_22182 = (inst_22181 > (0));
var state_22209__$1 = state_22209;
if(cljs.core.truth_(inst_22182)){
var statearr_22218_23143 = state_22209__$1;
(statearr_22218_23143[(1)] = (4));

} else {
var statearr_22219_23144 = state_22209__$1;
(statearr_22219_23144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (11))){
var inst_22179 = (state_22209[(10)]);
var inst_22198 = (state_22209[(2)]);
var tmp22217 = inst_22179;
var inst_22179__$1 = tmp22217;
var state_22209__$1 = (function (){var statearr_22220 = state_22209;
(statearr_22220[(11)] = inst_22198);

(statearr_22220[(10)] = inst_22179__$1);

return statearr_22220;
})();
var statearr_22221_23149 = state_22209__$1;
(statearr_22221_23149[(2)] = null);

(statearr_22221_23149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (9))){
var inst_22189 = (state_22209[(7)]);
var state_22209__$1 = state_22209;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22209__$1,(11),out,inst_22189);
} else {
if((state_val_22210 === (5))){
var inst_22203 = cljs.core.async.close_BANG_(out);
var state_22209__$1 = state_22209;
var statearr_22222_23150 = state_22209__$1;
(statearr_22222_23150[(2)] = inst_22203);

(statearr_22222_23150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (10))){
var inst_22201 = (state_22209[(2)]);
var state_22209__$1 = state_22209;
var statearr_22223_23151 = state_22209__$1;
(statearr_22223_23151[(2)] = inst_22201);

(statearr_22223_23151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22210 === (8))){
var inst_22189 = (state_22209[(7)]);
var inst_22190 = (state_22209[(9)]);
var inst_22188 = (state_22209[(8)]);
var inst_22179 = (state_22209[(10)]);
var inst_22193 = (function (){var cs = inst_22179;
var vec__22184 = inst_22188;
var v = inst_22189;
var c = inst_22190;
return (function (p1__22175_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22175_SHARP_);
});
})();
var inst_22194 = cljs.core.filterv(inst_22193,inst_22179);
var inst_22179__$1 = inst_22194;
var state_22209__$1 = (function (){var statearr_22224 = state_22209;
(statearr_22224[(10)] = inst_22179__$1);

return statearr_22224;
})();
var statearr_22225_23154 = state_22209__$1;
(statearr_22225_23154[(2)] = null);

(statearr_22225_23154[(1)] = (2));


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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22226 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22226[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22226[(1)] = (1));

return statearr_22226;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22209){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22209);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22227){var ex__20747__auto__ = e22227;
var statearr_22228_23155 = state_22209;
(statearr_22228_23155[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22209[(4)]))){
var statearr_22229_23156 = state_22209;
(statearr_22229_23156[(1)] = cljs.core.first((state_22209[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23161 = state_22209;
state_22209 = G__23161;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22230 = f__20876__auto__();
(statearr_22230[(6)] = c__20875__auto___23136);

return statearr_22230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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
var G__22232 = arguments.length;
switch (G__22232) {
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
var c__20875__auto___23165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22256){
var state_val_22257 = (state_22256[(1)]);
if((state_val_22257 === (7))){
var inst_22238 = (state_22256[(7)]);
var inst_22238__$1 = (state_22256[(2)]);
var inst_22239 = (inst_22238__$1 == null);
var inst_22240 = cljs.core.not(inst_22239);
var state_22256__$1 = (function (){var statearr_22258 = state_22256;
(statearr_22258[(7)] = inst_22238__$1);

return statearr_22258;
})();
if(inst_22240){
var statearr_22259_23166 = state_22256__$1;
(statearr_22259_23166[(1)] = (8));

} else {
var statearr_22260_23167 = state_22256__$1;
(statearr_22260_23167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (1))){
var inst_22233 = (0);
var state_22256__$1 = (function (){var statearr_22261 = state_22256;
(statearr_22261[(8)] = inst_22233);

return statearr_22261;
})();
var statearr_22262_23168 = state_22256__$1;
(statearr_22262_23168[(2)] = null);

(statearr_22262_23168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (4))){
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22256__$1,(7),ch);
} else {
if((state_val_22257 === (6))){
var inst_22251 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22263_23173 = state_22256__$1;
(statearr_22263_23173[(2)] = inst_22251);

(statearr_22263_23173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (3))){
var inst_22253 = (state_22256[(2)]);
var inst_22254 = cljs.core.async.close_BANG_(out);
var state_22256__$1 = (function (){var statearr_22264 = state_22256;
(statearr_22264[(9)] = inst_22253);

return statearr_22264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22256__$1,inst_22254);
} else {
if((state_val_22257 === (2))){
var inst_22233 = (state_22256[(8)]);
var inst_22235 = (inst_22233 < n);
var state_22256__$1 = state_22256;
if(cljs.core.truth_(inst_22235)){
var statearr_22265_23174 = state_22256__$1;
(statearr_22265_23174[(1)] = (4));

} else {
var statearr_22266_23175 = state_22256__$1;
(statearr_22266_23175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (11))){
var inst_22233 = (state_22256[(8)]);
var inst_22243 = (state_22256[(2)]);
var inst_22244 = (inst_22233 + (1));
var inst_22233__$1 = inst_22244;
var state_22256__$1 = (function (){var statearr_22267 = state_22256;
(statearr_22267[(8)] = inst_22233__$1);

(statearr_22267[(10)] = inst_22243);

return statearr_22267;
})();
var statearr_22268_23178 = state_22256__$1;
(statearr_22268_23178[(2)] = null);

(statearr_22268_23178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (9))){
var state_22256__$1 = state_22256;
var statearr_22269_23179 = state_22256__$1;
(statearr_22269_23179[(2)] = null);

(statearr_22269_23179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (5))){
var state_22256__$1 = state_22256;
var statearr_22270_23180 = state_22256__$1;
(statearr_22270_23180[(2)] = null);

(statearr_22270_23180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (10))){
var inst_22248 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22271_23181 = state_22256__$1;
(statearr_22271_23181[(2)] = inst_22248);

(statearr_22271_23181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (8))){
var inst_22238 = (state_22256[(7)]);
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22256__$1,(11),out,inst_22238);
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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22272[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22272[(1)] = (1));

return statearr_22272;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22256){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22256);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22273){var ex__20747__auto__ = e22273;
var statearr_22274_23186 = state_22256;
(statearr_22274_23186[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22256[(4)]))){
var statearr_22275_23187 = state_22256;
(statearr_22275_23187[(1)] = cljs.core.first((state_22256[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23188 = state_22256;
state_22256 = G__23188;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22276 = f__20876__auto__();
(statearr_22276[(6)] = c__20875__auto___23165);

return statearr_22276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
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
cljs.core.async.t_cljs$core$async22281 = (function (f,ch,meta22279,_,fn1,meta22282){
this.f = f;
this.ch = ch;
this.meta22279 = meta22279;
this._ = _;
this.fn1 = fn1;
this.meta22282 = meta22282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22283,meta22282__$1){
var self__ = this;
var _22283__$1 = this;
return (new cljs.core.async.t_cljs$core$async22281(self__.f,self__.ch,self__.meta22279,self__._,self__.fn1,meta22282__$1));
}));

(cljs.core.async.t_cljs$core$async22281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22283){
var self__ = this;
var _22283__$1 = this;
return self__.meta22282;
}));

(cljs.core.async.t_cljs$core$async22281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__22277_SHARP_){
var G__22284 = (((p1__22277_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22277_SHARP_) : self__.f.call(null,p1__22277_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22284) : f1.call(null,G__22284));
});
}));

(cljs.core.async.t_cljs$core$async22281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22279","meta22279",-1003790602,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22278","cljs.core.async/t_cljs$core$async22278",495792723,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22282","meta22282",-841191253,null)], null);
}));

(cljs.core.async.t_cljs$core$async22281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22281");

(cljs.core.async.t_cljs$core$async22281.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22281.
 */
cljs.core.async.__GT_t_cljs$core$async22281 = (function cljs$core$async$__GT_t_cljs$core$async22281(f,ch,meta22279,_,fn1,meta22282){
return (new cljs.core.async.t_cljs$core$async22281(f,ch,meta22279,_,fn1,meta22282));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22278 = (function (f,ch,meta22279){
this.f = f;
this.ch = ch;
this.meta22279 = meta22279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22280,meta22279__$1){
var self__ = this;
var _22280__$1 = this;
return (new cljs.core.async.t_cljs$core$async22278(self__.f,self__.ch,meta22279__$1));
}));

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22280){
var self__ = this;
var _22280__$1 = this;
return self__.meta22279;
}));

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async22281(self__.f,self__.ch,self__.meta22279,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22285 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22285) : self__.f.call(null,G__22285));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22278.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22279","meta22279",-1003790602,null)], null);
}));

(cljs.core.async.t_cljs$core$async22278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22278");

(cljs.core.async.t_cljs$core$async22278.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22278.
 */
cljs.core.async.__GT_t_cljs$core$async22278 = (function cljs$core$async$__GT_t_cljs$core$async22278(f,ch,meta22279){
return (new cljs.core.async.t_cljs$core$async22278(f,ch,meta22279));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22278(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22286 = (function (f,ch,meta22287){
this.f = f;
this.ch = ch;
this.meta22287 = meta22287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22288,meta22287__$1){
var self__ = this;
var _22288__$1 = this;
return (new cljs.core.async.t_cljs$core$async22286(self__.f,self__.ch,meta22287__$1));
}));

(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22288){
var self__ = this;
var _22288__$1 = this;
return self__.meta22287;
}));

(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async22286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22287","meta22287",-46970336,null)], null);
}));

(cljs.core.async.t_cljs$core$async22286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22286");

(cljs.core.async.t_cljs$core$async22286.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22286.
 */
cljs.core.async.__GT_t_cljs$core$async22286 = (function cljs$core$async$__GT_t_cljs$core$async22286(f,ch,meta22287){
return (new cljs.core.async.t_cljs$core$async22286(f,ch,meta22287));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async22286(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22289 = (function (p,ch,meta22290){
this.p = p;
this.ch = ch;
this.meta22290 = meta22290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22291,meta22290__$1){
var self__ = this;
var _22291__$1 = this;
return (new cljs.core.async.t_cljs$core$async22289(self__.p,self__.ch,meta22290__$1));
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22291){
var self__ = this;
var _22291__$1 = this;
return self__.meta22290;
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22289.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22290","meta22290",-459799915,null)], null);
}));

(cljs.core.async.t_cljs$core$async22289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22289");

(cljs.core.async.t_cljs$core$async22289.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async22289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22289.
 */
cljs.core.async.__GT_t_cljs$core$async22289 = (function cljs$core$async$__GT_t_cljs$core$async22289(p,ch,meta22290){
return (new cljs.core.async.t_cljs$core$async22289(p,ch,meta22290));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async22289(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22293 = arguments.length;
switch (G__22293) {
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
var c__20875__auto___23208 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22314){
var state_val_22315 = (state_22314[(1)]);
if((state_val_22315 === (7))){
var inst_22310 = (state_22314[(2)]);
var state_22314__$1 = state_22314;
var statearr_22316_23209 = state_22314__$1;
(statearr_22316_23209[(2)] = inst_22310);

(statearr_22316_23209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (1))){
var state_22314__$1 = state_22314;
var statearr_22317_23210 = state_22314__$1;
(statearr_22317_23210[(2)] = null);

(statearr_22317_23210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (4))){
var inst_22296 = (state_22314[(7)]);
var inst_22296__$1 = (state_22314[(2)]);
var inst_22297 = (inst_22296__$1 == null);
var state_22314__$1 = (function (){var statearr_22318 = state_22314;
(statearr_22318[(7)] = inst_22296__$1);

return statearr_22318;
})();
if(cljs.core.truth_(inst_22297)){
var statearr_22319_23211 = state_22314__$1;
(statearr_22319_23211[(1)] = (5));

} else {
var statearr_22320_23212 = state_22314__$1;
(statearr_22320_23212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (6))){
var inst_22296 = (state_22314[(7)]);
var inst_22301 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22296) : p.call(null,inst_22296));
var state_22314__$1 = state_22314;
if(cljs.core.truth_(inst_22301)){
var statearr_22321_23213 = state_22314__$1;
(statearr_22321_23213[(1)] = (8));

} else {
var statearr_22322_23214 = state_22314__$1;
(statearr_22322_23214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (3))){
var inst_22312 = (state_22314[(2)]);
var state_22314__$1 = state_22314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22314__$1,inst_22312);
} else {
if((state_val_22315 === (2))){
var state_22314__$1 = state_22314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22314__$1,(4),ch);
} else {
if((state_val_22315 === (11))){
var inst_22304 = (state_22314[(2)]);
var state_22314__$1 = state_22314;
var statearr_22323_23215 = state_22314__$1;
(statearr_22323_23215[(2)] = inst_22304);

(statearr_22323_23215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (9))){
var state_22314__$1 = state_22314;
var statearr_22324_23216 = state_22314__$1;
(statearr_22324_23216[(2)] = null);

(statearr_22324_23216[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (5))){
var inst_22299 = cljs.core.async.close_BANG_(out);
var state_22314__$1 = state_22314;
var statearr_22325_23217 = state_22314__$1;
(statearr_22325_23217[(2)] = inst_22299);

(statearr_22325_23217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (10))){
var inst_22307 = (state_22314[(2)]);
var state_22314__$1 = (function (){var statearr_22326 = state_22314;
(statearr_22326[(8)] = inst_22307);

return statearr_22326;
})();
var statearr_22327_23218 = state_22314__$1;
(statearr_22327_23218[(2)] = null);

(statearr_22327_23218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22315 === (8))){
var inst_22296 = (state_22314[(7)]);
var state_22314__$1 = state_22314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22314__$1,(11),out,inst_22296);
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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22328 = [null,null,null,null,null,null,null,null,null];
(statearr_22328[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22328[(1)] = (1));

return statearr_22328;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22314){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22314);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22329){var ex__20747__auto__ = e22329;
var statearr_22330_23219 = state_22314;
(statearr_22330_23219[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22314[(4)]))){
var statearr_22331_23220 = state_22314;
(statearr_22331_23220[(1)] = cljs.core.first((state_22314[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23221 = state_22314;
state_22314 = G__23221;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22332 = f__20876__auto__();
(statearr_22332[(6)] = c__20875__auto___23208);

return statearr_22332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22334 = arguments.length;
switch (G__22334) {
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
var c__20875__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22396){
var state_val_22397 = (state_22396[(1)]);
if((state_val_22397 === (7))){
var inst_22392 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22398_23223 = state_22396__$1;
(statearr_22398_23223[(2)] = inst_22392);

(statearr_22398_23223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (20))){
var inst_22362 = (state_22396[(7)]);
var inst_22373 = (state_22396[(2)]);
var inst_22374 = cljs.core.next(inst_22362);
var inst_22348 = inst_22374;
var inst_22349 = null;
var inst_22350 = (0);
var inst_22351 = (0);
var state_22396__$1 = (function (){var statearr_22399 = state_22396;
(statearr_22399[(8)] = inst_22351);

(statearr_22399[(9)] = inst_22348);

(statearr_22399[(10)] = inst_22350);

(statearr_22399[(11)] = inst_22373);

(statearr_22399[(12)] = inst_22349);

return statearr_22399;
})();
var statearr_22400_23224 = state_22396__$1;
(statearr_22400_23224[(2)] = null);

(statearr_22400_23224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (1))){
var state_22396__$1 = state_22396;
var statearr_22401_23225 = state_22396__$1;
(statearr_22401_23225[(2)] = null);

(statearr_22401_23225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (4))){
var inst_22337 = (state_22396[(13)]);
var inst_22337__$1 = (state_22396[(2)]);
var inst_22338 = (inst_22337__$1 == null);
var state_22396__$1 = (function (){var statearr_22402 = state_22396;
(statearr_22402[(13)] = inst_22337__$1);

return statearr_22402;
})();
if(cljs.core.truth_(inst_22338)){
var statearr_22403_23226 = state_22396__$1;
(statearr_22403_23226[(1)] = (5));

} else {
var statearr_22404_23227 = state_22396__$1;
(statearr_22404_23227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (15))){
var state_22396__$1 = state_22396;
var statearr_22408_23228 = state_22396__$1;
(statearr_22408_23228[(2)] = null);

(statearr_22408_23228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (21))){
var state_22396__$1 = state_22396;
var statearr_22409_23229 = state_22396__$1;
(statearr_22409_23229[(2)] = null);

(statearr_22409_23229[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (13))){
var inst_22351 = (state_22396[(8)]);
var inst_22348 = (state_22396[(9)]);
var inst_22350 = (state_22396[(10)]);
var inst_22349 = (state_22396[(12)]);
var inst_22358 = (state_22396[(2)]);
var inst_22359 = (inst_22351 + (1));
var tmp22405 = inst_22348;
var tmp22406 = inst_22350;
var tmp22407 = inst_22349;
var inst_22348__$1 = tmp22405;
var inst_22349__$1 = tmp22407;
var inst_22350__$1 = tmp22406;
var inst_22351__$1 = inst_22359;
var state_22396__$1 = (function (){var statearr_22410 = state_22396;
(statearr_22410[(8)] = inst_22351__$1);

(statearr_22410[(9)] = inst_22348__$1);

(statearr_22410[(10)] = inst_22350__$1);

(statearr_22410[(12)] = inst_22349__$1);

(statearr_22410[(14)] = inst_22358);

return statearr_22410;
})();
var statearr_22411_23230 = state_22396__$1;
(statearr_22411_23230[(2)] = null);

(statearr_22411_23230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (22))){
var state_22396__$1 = state_22396;
var statearr_22412_23231 = state_22396__$1;
(statearr_22412_23231[(2)] = null);

(statearr_22412_23231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (6))){
var inst_22337 = (state_22396[(13)]);
var inst_22346 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22337) : f.call(null,inst_22337));
var inst_22347 = cljs.core.seq(inst_22346);
var inst_22348 = inst_22347;
var inst_22349 = null;
var inst_22350 = (0);
var inst_22351 = (0);
var state_22396__$1 = (function (){var statearr_22413 = state_22396;
(statearr_22413[(8)] = inst_22351);

(statearr_22413[(9)] = inst_22348);

(statearr_22413[(10)] = inst_22350);

(statearr_22413[(12)] = inst_22349);

return statearr_22413;
})();
var statearr_22414_23235 = state_22396__$1;
(statearr_22414_23235[(2)] = null);

(statearr_22414_23235[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (17))){
var inst_22362 = (state_22396[(7)]);
var inst_22366 = cljs.core.chunk_first(inst_22362);
var inst_22367 = cljs.core.chunk_rest(inst_22362);
var inst_22368 = cljs.core.count(inst_22366);
var inst_22348 = inst_22367;
var inst_22349 = inst_22366;
var inst_22350 = inst_22368;
var inst_22351 = (0);
var state_22396__$1 = (function (){var statearr_22415 = state_22396;
(statearr_22415[(8)] = inst_22351);

(statearr_22415[(9)] = inst_22348);

(statearr_22415[(10)] = inst_22350);

(statearr_22415[(12)] = inst_22349);

return statearr_22415;
})();
var statearr_22416_23236 = state_22396__$1;
(statearr_22416_23236[(2)] = null);

(statearr_22416_23236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (3))){
var inst_22394 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22396__$1,inst_22394);
} else {
if((state_val_22397 === (12))){
var inst_22382 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22417_23239 = state_22396__$1;
(statearr_22417_23239[(2)] = inst_22382);

(statearr_22417_23239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (2))){
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22396__$1,(4),in$);
} else {
if((state_val_22397 === (23))){
var inst_22390 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22418_23241 = state_22396__$1;
(statearr_22418_23241[(2)] = inst_22390);

(statearr_22418_23241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (19))){
var inst_22377 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22419_23242 = state_22396__$1;
(statearr_22419_23242[(2)] = inst_22377);

(statearr_22419_23242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (11))){
var inst_22348 = (state_22396[(9)]);
var inst_22362 = (state_22396[(7)]);
var inst_22362__$1 = cljs.core.seq(inst_22348);
var state_22396__$1 = (function (){var statearr_22420 = state_22396;
(statearr_22420[(7)] = inst_22362__$1);

return statearr_22420;
})();
if(inst_22362__$1){
var statearr_22421_23243 = state_22396__$1;
(statearr_22421_23243[(1)] = (14));

} else {
var statearr_22422_23244 = state_22396__$1;
(statearr_22422_23244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (9))){
var inst_22384 = (state_22396[(2)]);
var inst_22385 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_22396__$1 = (function (){var statearr_22423 = state_22396;
(statearr_22423[(15)] = inst_22384);

return statearr_22423;
})();
if(cljs.core.truth_(inst_22385)){
var statearr_22424_23248 = state_22396__$1;
(statearr_22424_23248[(1)] = (21));

} else {
var statearr_22425_23249 = state_22396__$1;
(statearr_22425_23249[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (5))){
var inst_22340 = cljs.core.async.close_BANG_(out);
var state_22396__$1 = state_22396;
var statearr_22426_23250 = state_22396__$1;
(statearr_22426_23250[(2)] = inst_22340);

(statearr_22426_23250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (14))){
var inst_22362 = (state_22396[(7)]);
var inst_22364 = cljs.core.chunked_seq_QMARK_(inst_22362);
var state_22396__$1 = state_22396;
if(inst_22364){
var statearr_22427_23251 = state_22396__$1;
(statearr_22427_23251[(1)] = (17));

} else {
var statearr_22428_23252 = state_22396__$1;
(statearr_22428_23252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (16))){
var inst_22380 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22429_23253 = state_22396__$1;
(statearr_22429_23253[(2)] = inst_22380);

(statearr_22429_23253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (10))){
var inst_22351 = (state_22396[(8)]);
var inst_22349 = (state_22396[(12)]);
var inst_22356 = cljs.core._nth(inst_22349,inst_22351);
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22396__$1,(13),out,inst_22356);
} else {
if((state_val_22397 === (18))){
var inst_22362 = (state_22396[(7)]);
var inst_22371 = cljs.core.first(inst_22362);
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22396__$1,(20),out,inst_22371);
} else {
if((state_val_22397 === (8))){
var inst_22351 = (state_22396[(8)]);
var inst_22350 = (state_22396[(10)]);
var inst_22353 = (inst_22351 < inst_22350);
var inst_22354 = inst_22353;
var state_22396__$1 = state_22396;
if(cljs.core.truth_(inst_22354)){
var statearr_22430_23254 = state_22396__$1;
(statearr_22430_23254[(1)] = (10));

} else {
var statearr_22431_23255 = state_22396__$1;
(statearr_22431_23255[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__20744__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20744__auto____0 = (function (){
var statearr_22432 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22432[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20744__auto__);

(statearr_22432[(1)] = (1));

return statearr_22432;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20744__auto____1 = (function (state_22396){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22396);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22433){var ex__20747__auto__ = e22433;
var statearr_22434_23256 = state_22396;
(statearr_22434_23256[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22396[(4)]))){
var statearr_22435_23257 = state_22396;
(statearr_22435_23257[(1)] = cljs.core.first((state_22396[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23258 = state_22396;
state_22396 = G__23258;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20744__auto__ = function(state_22396){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20744__auto____1.call(this,state_22396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20744__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20744__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22436 = f__20876__auto__();
(statearr_22436[(6)] = c__20875__auto__);

return statearr_22436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));

return c__20875__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22438 = arguments.length;
switch (G__22438) {
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
var G__22440 = arguments.length;
switch (G__22440) {
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
var G__22442 = arguments.length;
switch (G__22442) {
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
var c__20875__auto___23262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22466){
var state_val_22467 = (state_22466[(1)]);
if((state_val_22467 === (7))){
var inst_22461 = (state_22466[(2)]);
var state_22466__$1 = state_22466;
var statearr_22468_23263 = state_22466__$1;
(statearr_22468_23263[(2)] = inst_22461);

(statearr_22468_23263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (1))){
var inst_22443 = null;
var state_22466__$1 = (function (){var statearr_22469 = state_22466;
(statearr_22469[(7)] = inst_22443);

return statearr_22469;
})();
var statearr_22470_23264 = state_22466__$1;
(statearr_22470_23264[(2)] = null);

(statearr_22470_23264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (4))){
var inst_22446 = (state_22466[(8)]);
var inst_22446__$1 = (state_22466[(2)]);
var inst_22447 = (inst_22446__$1 == null);
var inst_22448 = cljs.core.not(inst_22447);
var state_22466__$1 = (function (){var statearr_22471 = state_22466;
(statearr_22471[(8)] = inst_22446__$1);

return statearr_22471;
})();
if(inst_22448){
var statearr_22472_23272 = state_22466__$1;
(statearr_22472_23272[(1)] = (5));

} else {
var statearr_22473_23273 = state_22466__$1;
(statearr_22473_23273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (6))){
var state_22466__$1 = state_22466;
var statearr_22474_23278 = state_22466__$1;
(statearr_22474_23278[(2)] = null);

(statearr_22474_23278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (3))){
var inst_22463 = (state_22466[(2)]);
var inst_22464 = cljs.core.async.close_BANG_(out);
var state_22466__$1 = (function (){var statearr_22475 = state_22466;
(statearr_22475[(9)] = inst_22463);

return statearr_22475;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22466__$1,inst_22464);
} else {
if((state_val_22467 === (2))){
var state_22466__$1 = state_22466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22466__$1,(4),ch);
} else {
if((state_val_22467 === (11))){
var inst_22446 = (state_22466[(8)]);
var inst_22455 = (state_22466[(2)]);
var inst_22443 = inst_22446;
var state_22466__$1 = (function (){var statearr_22476 = state_22466;
(statearr_22476[(10)] = inst_22455);

(statearr_22476[(7)] = inst_22443);

return statearr_22476;
})();
var statearr_22477_23293 = state_22466__$1;
(statearr_22477_23293[(2)] = null);

(statearr_22477_23293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (9))){
var inst_22446 = (state_22466[(8)]);
var state_22466__$1 = state_22466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22466__$1,(11),out,inst_22446);
} else {
if((state_val_22467 === (5))){
var inst_22446 = (state_22466[(8)]);
var inst_22443 = (state_22466[(7)]);
var inst_22450 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22446,inst_22443);
var state_22466__$1 = state_22466;
if(inst_22450){
var statearr_22479_23294 = state_22466__$1;
(statearr_22479_23294[(1)] = (8));

} else {
var statearr_22480_23295 = state_22466__$1;
(statearr_22480_23295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (10))){
var inst_22458 = (state_22466[(2)]);
var state_22466__$1 = state_22466;
var statearr_22481_23296 = state_22466__$1;
(statearr_22481_23296[(2)] = inst_22458);

(statearr_22481_23296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (8))){
var inst_22443 = (state_22466[(7)]);
var tmp22478 = inst_22443;
var inst_22443__$1 = tmp22478;
var state_22466__$1 = (function (){var statearr_22482 = state_22466;
(statearr_22482[(7)] = inst_22443__$1);

return statearr_22482;
})();
var statearr_22483_23297 = state_22466__$1;
(statearr_22483_23297[(2)] = null);

(statearr_22483_23297[(1)] = (2));


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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22484 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22484[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22484[(1)] = (1));

return statearr_22484;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22466){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22466);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22485){var ex__20747__auto__ = e22485;
var statearr_22486_23298 = state_22466;
(statearr_22486_23298[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22466[(4)]))){
var statearr_22487_23299 = state_22466;
(statearr_22487_23299[(1)] = cljs.core.first((state_22466[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23300 = state_22466;
state_22466 = G__23300;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22488 = f__20876__auto__();
(statearr_22488[(6)] = c__20875__auto___23262);

return statearr_22488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22490 = arguments.length;
switch (G__22490) {
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
var c__20875__auto___23305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22528){
var state_val_22529 = (state_22528[(1)]);
if((state_val_22529 === (7))){
var inst_22524 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22530_23306 = state_22528__$1;
(statearr_22530_23306[(2)] = inst_22524);

(statearr_22530_23306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (1))){
var inst_22491 = (new Array(n));
var inst_22492 = inst_22491;
var inst_22493 = (0);
var state_22528__$1 = (function (){var statearr_22531 = state_22528;
(statearr_22531[(7)] = inst_22492);

(statearr_22531[(8)] = inst_22493);

return statearr_22531;
})();
var statearr_22532_23307 = state_22528__$1;
(statearr_22532_23307[(2)] = null);

(statearr_22532_23307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (4))){
var inst_22496 = (state_22528[(9)]);
var inst_22496__$1 = (state_22528[(2)]);
var inst_22497 = (inst_22496__$1 == null);
var inst_22498 = cljs.core.not(inst_22497);
var state_22528__$1 = (function (){var statearr_22533 = state_22528;
(statearr_22533[(9)] = inst_22496__$1);

return statearr_22533;
})();
if(inst_22498){
var statearr_22534_23308 = state_22528__$1;
(statearr_22534_23308[(1)] = (5));

} else {
var statearr_22535_23309 = state_22528__$1;
(statearr_22535_23309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (15))){
var inst_22518 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22536_23310 = state_22528__$1;
(statearr_22536_23310[(2)] = inst_22518);

(statearr_22536_23310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (13))){
var state_22528__$1 = state_22528;
var statearr_22537_23311 = state_22528__$1;
(statearr_22537_23311[(2)] = null);

(statearr_22537_23311[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (6))){
var inst_22493 = (state_22528[(8)]);
var inst_22514 = (inst_22493 > (0));
var state_22528__$1 = state_22528;
if(cljs.core.truth_(inst_22514)){
var statearr_22538_23312 = state_22528__$1;
(statearr_22538_23312[(1)] = (12));

} else {
var statearr_22539_23313 = state_22528__$1;
(statearr_22539_23313[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (3))){
var inst_22526 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22528__$1,inst_22526);
} else {
if((state_val_22529 === (12))){
var inst_22492 = (state_22528[(7)]);
var inst_22516 = cljs.core.vec(inst_22492);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22528__$1,(15),out,inst_22516);
} else {
if((state_val_22529 === (2))){
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22528__$1,(4),ch);
} else {
if((state_val_22529 === (11))){
var inst_22508 = (state_22528[(2)]);
var inst_22509 = (new Array(n));
var inst_22492 = inst_22509;
var inst_22493 = (0);
var state_22528__$1 = (function (){var statearr_22540 = state_22528;
(statearr_22540[(7)] = inst_22492);

(statearr_22540[(8)] = inst_22493);

(statearr_22540[(10)] = inst_22508);

return statearr_22540;
})();
var statearr_22541_23317 = state_22528__$1;
(statearr_22541_23317[(2)] = null);

(statearr_22541_23317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (9))){
var inst_22492 = (state_22528[(7)]);
var inst_22506 = cljs.core.vec(inst_22492);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22528__$1,(11),out,inst_22506);
} else {
if((state_val_22529 === (5))){
var inst_22492 = (state_22528[(7)]);
var inst_22496 = (state_22528[(9)]);
var inst_22493 = (state_22528[(8)]);
var inst_22501 = (state_22528[(11)]);
var inst_22500 = (inst_22492[inst_22493] = inst_22496);
var inst_22501__$1 = (inst_22493 + (1));
var inst_22502 = (inst_22501__$1 < n);
var state_22528__$1 = (function (){var statearr_22542 = state_22528;
(statearr_22542[(12)] = inst_22500);

(statearr_22542[(11)] = inst_22501__$1);

return statearr_22542;
})();
if(cljs.core.truth_(inst_22502)){
var statearr_22543_23321 = state_22528__$1;
(statearr_22543_23321[(1)] = (8));

} else {
var statearr_22544_23322 = state_22528__$1;
(statearr_22544_23322[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (14))){
var inst_22521 = (state_22528[(2)]);
var inst_22522 = cljs.core.async.close_BANG_(out);
var state_22528__$1 = (function (){var statearr_22546 = state_22528;
(statearr_22546[(13)] = inst_22521);

return statearr_22546;
})();
var statearr_22547_23323 = state_22528__$1;
(statearr_22547_23323[(2)] = inst_22522);

(statearr_22547_23323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (10))){
var inst_22512 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22548_23324 = state_22528__$1;
(statearr_22548_23324[(2)] = inst_22512);

(statearr_22548_23324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (8))){
var inst_22492 = (state_22528[(7)]);
var inst_22501 = (state_22528[(11)]);
var tmp22545 = inst_22492;
var inst_22492__$1 = tmp22545;
var inst_22493 = inst_22501;
var state_22528__$1 = (function (){var statearr_22549 = state_22528;
(statearr_22549[(7)] = inst_22492__$1);

(statearr_22549[(8)] = inst_22493);

return statearr_22549;
})();
var statearr_22550_23328 = state_22528__$1;
(statearr_22550_23328[(2)] = null);

(statearr_22550_23328[(1)] = (2));


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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22551[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22551[(1)] = (1));

return statearr_22551;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22528){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22528);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22552){var ex__20747__auto__ = e22552;
var statearr_22553_23329 = state_22528;
(statearr_22553_23329[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22528[(4)]))){
var statearr_22554_23332 = state_22528;
(statearr_22554_23332[(1)] = cljs.core.first((state_22528[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23334 = state_22528;
state_22528 = G__23334;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22555 = f__20876__auto__();
(statearr_22555[(6)] = c__20875__auto___23305);

return statearr_22555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22557 = arguments.length;
switch (G__22557) {
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
var c__20875__auto___23339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__20876__auto__ = (function (){var switch__20743__auto__ = (function (state_22602){
var state_val_22603 = (state_22602[(1)]);
if((state_val_22603 === (7))){
var inst_22598 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22604_23340 = state_22602__$1;
(statearr_22604_23340[(2)] = inst_22598);

(statearr_22604_23340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (1))){
var inst_22558 = [];
var inst_22559 = inst_22558;
var inst_22560 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22602__$1 = (function (){var statearr_22605 = state_22602;
(statearr_22605[(7)] = inst_22559);

(statearr_22605[(8)] = inst_22560);

return statearr_22605;
})();
var statearr_22606_23343 = state_22602__$1;
(statearr_22606_23343[(2)] = null);

(statearr_22606_23343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (4))){
var inst_22563 = (state_22602[(9)]);
var inst_22563__$1 = (state_22602[(2)]);
var inst_22564 = (inst_22563__$1 == null);
var inst_22565 = cljs.core.not(inst_22564);
var state_22602__$1 = (function (){var statearr_22607 = state_22602;
(statearr_22607[(9)] = inst_22563__$1);

return statearr_22607;
})();
if(inst_22565){
var statearr_22608_23345 = state_22602__$1;
(statearr_22608_23345[(1)] = (5));

} else {
var statearr_22609_23347 = state_22602__$1;
(statearr_22609_23347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (15))){
var inst_22559 = (state_22602[(7)]);
var inst_22590 = cljs.core.vec(inst_22559);
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22602__$1,(18),out,inst_22590);
} else {
if((state_val_22603 === (13))){
var inst_22585 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22610_23366 = state_22602__$1;
(statearr_22610_23366[(2)] = inst_22585);

(statearr_22610_23366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (6))){
var inst_22559 = (state_22602[(7)]);
var inst_22587 = inst_22559.length;
var inst_22588 = (inst_22587 > (0));
var state_22602__$1 = state_22602;
if(cljs.core.truth_(inst_22588)){
var statearr_22611_23380 = state_22602__$1;
(statearr_22611_23380[(1)] = (15));

} else {
var statearr_22612_23382 = state_22602__$1;
(statearr_22612_23382[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (17))){
var inst_22595 = (state_22602[(2)]);
var inst_22596 = cljs.core.async.close_BANG_(out);
var state_22602__$1 = (function (){var statearr_22613 = state_22602;
(statearr_22613[(10)] = inst_22595);

return statearr_22613;
})();
var statearr_22614_23383 = state_22602__$1;
(statearr_22614_23383[(2)] = inst_22596);

(statearr_22614_23383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (3))){
var inst_22600 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22602__$1,inst_22600);
} else {
if((state_val_22603 === (12))){
var inst_22559 = (state_22602[(7)]);
var inst_22578 = cljs.core.vec(inst_22559);
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22602__$1,(14),out,inst_22578);
} else {
if((state_val_22603 === (2))){
var state_22602__$1 = state_22602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22602__$1,(4),ch);
} else {
if((state_val_22603 === (11))){
var inst_22563 = (state_22602[(9)]);
var inst_22559 = (state_22602[(7)]);
var inst_22567 = (state_22602[(11)]);
var inst_22575 = inst_22559.push(inst_22563);
var tmp22615 = inst_22559;
var inst_22559__$1 = tmp22615;
var inst_22560 = inst_22567;
var state_22602__$1 = (function (){var statearr_22616 = state_22602;
(statearr_22616[(7)] = inst_22559__$1);

(statearr_22616[(8)] = inst_22560);

(statearr_22616[(12)] = inst_22575);

return statearr_22616;
})();
var statearr_22617_23387 = state_22602__$1;
(statearr_22617_23387[(2)] = null);

(statearr_22617_23387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (9))){
var inst_22560 = (state_22602[(8)]);
var inst_22571 = cljs.core.keyword_identical_QMARK_(inst_22560,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_22602__$1 = state_22602;
var statearr_22618_23393 = state_22602__$1;
(statearr_22618_23393[(2)] = inst_22571);

(statearr_22618_23393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (5))){
var inst_22563 = (state_22602[(9)]);
var inst_22567 = (state_22602[(11)]);
var inst_22568 = (state_22602[(13)]);
var inst_22560 = (state_22602[(8)]);
var inst_22567__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22563) : f.call(null,inst_22563));
var inst_22568__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22567__$1,inst_22560);
var state_22602__$1 = (function (){var statearr_22619 = state_22602;
(statearr_22619[(11)] = inst_22567__$1);

(statearr_22619[(13)] = inst_22568__$1);

return statearr_22619;
})();
if(inst_22568__$1){
var statearr_22620_23397 = state_22602__$1;
(statearr_22620_23397[(1)] = (8));

} else {
var statearr_22621_23398 = state_22602__$1;
(statearr_22621_23398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (14))){
var inst_22563 = (state_22602[(9)]);
var inst_22567 = (state_22602[(11)]);
var inst_22580 = (state_22602[(2)]);
var inst_22581 = [];
var inst_22582 = inst_22581.push(inst_22563);
var inst_22559 = inst_22581;
var inst_22560 = inst_22567;
var state_22602__$1 = (function (){var statearr_22622 = state_22602;
(statearr_22622[(7)] = inst_22559);

(statearr_22622[(14)] = inst_22582);

(statearr_22622[(15)] = inst_22580);

(statearr_22622[(8)] = inst_22560);

return statearr_22622;
})();
var statearr_22623_23400 = state_22602__$1;
(statearr_22623_23400[(2)] = null);

(statearr_22623_23400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (16))){
var state_22602__$1 = state_22602;
var statearr_22624_23402 = state_22602__$1;
(statearr_22624_23402[(2)] = null);

(statearr_22624_23402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (10))){
var inst_22573 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
if(cljs.core.truth_(inst_22573)){
var statearr_22625_23405 = state_22602__$1;
(statearr_22625_23405[(1)] = (11));

} else {
var statearr_22626_23407 = state_22602__$1;
(statearr_22626_23407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (18))){
var inst_22592 = (state_22602[(2)]);
var state_22602__$1 = state_22602;
var statearr_22627_23408 = state_22602__$1;
(statearr_22627_23408[(2)] = inst_22592);

(statearr_22627_23408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22603 === (8))){
var inst_22568 = (state_22602[(13)]);
var state_22602__$1 = state_22602;
var statearr_22628_23409 = state_22602__$1;
(statearr_22628_23409[(2)] = inst_22568);

(statearr_22628_23409[(1)] = (10));


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
var cljs$core$async$state_machine__20744__auto__ = null;
var cljs$core$async$state_machine__20744__auto____0 = (function (){
var statearr_22629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22629[(0)] = cljs$core$async$state_machine__20744__auto__);

(statearr_22629[(1)] = (1));

return statearr_22629;
});
var cljs$core$async$state_machine__20744__auto____1 = (function (state_22602){
while(true){
var ret_value__20745__auto__ = (function (){try{while(true){
var result__20746__auto__ = switch__20743__auto__(state_22602);
if(cljs.core.keyword_identical_QMARK_(result__20746__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20746__auto__;
}
break;
}
}catch (e22630){var ex__20747__auto__ = e22630;
var statearr_22631_23411 = state_22602;
(statearr_22631_23411[(2)] = ex__20747__auto__);


if(cljs.core.seq((state_22602[(4)]))){
var statearr_22632_23412 = state_22602;
(statearr_22632_23412[(1)] = cljs.core.first((state_22602[(4)])));

} else {
throw ex__20747__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__20745__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23414 = state_22602;
state_22602 = G__23414;
continue;
} else {
return ret_value__20745__auto__;
}
break;
}
});
cljs$core$async$state_machine__20744__auto__ = function(state_22602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20744__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20744__auto____1.call(this,state_22602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20744__auto____0;
cljs$core$async$state_machine__20744__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20744__auto____1;
return cljs$core$async$state_machine__20744__auto__;
})()
})();
var state__20877__auto__ = (function (){var statearr_22633 = f__20876__auto__();
(statearr_22633[(6)] = c__20875__auto___23339);

return statearr_22633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__20877__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
