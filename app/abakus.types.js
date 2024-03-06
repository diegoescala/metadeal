goog.provide('abakus.types');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
abakus.types.User = (function (firstname,lastname,usertype,token,__meta,__extmap,__hash){
this.firstname = firstname;
this.lastname = lastname;
this.usertype = usertype;
this.token = token;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(abakus.types.User.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(abakus.types.User.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20757,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20766 = k20757;
var G__20766__$1 = (((G__20766 instanceof cljs.core.Keyword))?G__20766.fqn:null);
switch (G__20766__$1) {
case "firstname":
return self__.firstname;

break;
case "lastname":
return self__.lastname;

break;
case "usertype":
return self__.usertype;

break;
case "token":
return self__.token;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20757,else__5346__auto__);

}
}));

(abakus.types.User.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20767){
var vec__20768 = p__20767;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20768,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(abakus.types.User.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#abakus.types.User{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"firstname","firstname",1659984849),self__.firstname],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lastname","lastname",-265181465),self__.lastname],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"usertype","usertype",-1389307151),self__.usertype],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"token","token",-1211463215),self__.token],null))], null),self__.__extmap));
}));

(abakus.types.User.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20756){
var self__ = this;
var G__20756__$1 = this;
return (new cljs.core.RecordIter((0),G__20756__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"firstname","firstname",1659984849),new cljs.core.Keyword(null,"lastname","lastname",-265181465),new cljs.core.Keyword(null,"usertype","usertype",-1389307151),new cljs.core.Keyword(null,"token","token",-1211463215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(abakus.types.User.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(abakus.types.User.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new abakus.types.User(self__.firstname,self__.lastname,self__.usertype,self__.token,self__.__meta,self__.__extmap,self__.__hash));
}));

(abakus.types.User.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(abakus.types.User.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1367784850 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(abakus.types.User.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20758,other20759){
var self__ = this;
var this20758__$1 = this;
return (((!((other20759 == null)))) && ((((this20758__$1.constructor === other20759.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20758__$1.firstname,other20759.firstname)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20758__$1.lastname,other20759.lastname)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20758__$1.usertype,other20759.usertype)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20758__$1.token,other20759.token)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20758__$1.__extmap,other20759.__extmap)))))))))))));
}));

(abakus.types.User.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lastname","lastname",-265181465),null,new cljs.core.Keyword(null,"token","token",-1211463215),null,new cljs.core.Keyword(null,"usertype","usertype",-1389307151),null,new cljs.core.Keyword(null,"firstname","firstname",1659984849),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new abakus.types.User(self__.firstname,self__.lastname,self__.usertype,self__.token,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(abakus.types.User.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20757){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20790 = k20757;
var G__20790__$1 = (((G__20790 instanceof cljs.core.Keyword))?G__20790.fqn:null);
switch (G__20790__$1) {
case "firstname":
case "lastname":
case "usertype":
case "token":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20757);

}
}));

(abakus.types.User.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20756){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20792 = cljs.core.keyword_identical_QMARK_;
var expr__20793 = k__5352__auto__;
if(cljs.core.truth_((pred__20792.cljs$core$IFn$_invoke$arity$2 ? pred__20792.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"firstname","firstname",1659984849),expr__20793) : pred__20792.call(null,new cljs.core.Keyword(null,"firstname","firstname",1659984849),expr__20793)))){
return (new abakus.types.User(G__20756,self__.lastname,self__.usertype,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20792.cljs$core$IFn$_invoke$arity$2 ? pred__20792.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lastname","lastname",-265181465),expr__20793) : pred__20792.call(null,new cljs.core.Keyword(null,"lastname","lastname",-265181465),expr__20793)))){
return (new abakus.types.User(self__.firstname,G__20756,self__.usertype,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20792.cljs$core$IFn$_invoke$arity$2 ? pred__20792.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usertype","usertype",-1389307151),expr__20793) : pred__20792.call(null,new cljs.core.Keyword(null,"usertype","usertype",-1389307151),expr__20793)))){
return (new abakus.types.User(self__.firstname,self__.lastname,G__20756,self__.token,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20792.cljs$core$IFn$_invoke$arity$2 ? pred__20792.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),expr__20793) : pred__20792.call(null,new cljs.core.Keyword(null,"token","token",-1211463215),expr__20793)))){
return (new abakus.types.User(self__.firstname,self__.lastname,self__.usertype,G__20756,self__.__meta,self__.__extmap,null));
} else {
return (new abakus.types.User(self__.firstname,self__.lastname,self__.usertype,self__.token,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20756),null));
}
}
}
}
}));

(abakus.types.User.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"firstname","firstname",1659984849),self__.firstname,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lastname","lastname",-265181465),self__.lastname,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"usertype","usertype",-1389307151),self__.usertype,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"token","token",-1211463215),self__.token,null))], null),self__.__extmap));
}));

(abakus.types.User.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20756){
var self__ = this;
var this__5342__auto____$1 = this;
return (new abakus.types.User(self__.firstname,self__.lastname,self__.usertype,self__.token,G__20756,self__.__extmap,self__.__hash));
}));

(abakus.types.User.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(abakus.types.User.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"firstname","firstname",-994450920,null),new cljs.core.Symbol(null,"lastname","lastname",1375350062,null),new cljs.core.Symbol(null,"usertype","usertype",251224376,null),new cljs.core.Symbol(null,"token","token",429068312,null)], null);
}));

(abakus.types.User.cljs$lang$type = true);

(abakus.types.User.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"abakus.types/User",null,(1),null));
}));

(abakus.types.User.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"abakus.types/User");
}));

/**
 * Positional factory function for abakus.types/User.
 */
abakus.types.__GT_User = (function abakus$types$__GT_User(firstname,lastname,usertype,token){
return (new abakus.types.User(firstname,lastname,usertype,token,null,null,null));
});

/**
 * Factory function for abakus.types/User, taking a map of keywords to field values.
 */
abakus.types.map__GT_User = (function abakus$types$map__GT_User(G__20760){
var extmap__5385__auto__ = (function (){var G__20805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20760,new cljs.core.Keyword(null,"firstname","firstname",1659984849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lastname","lastname",-265181465),new cljs.core.Keyword(null,"usertype","usertype",-1389307151),new cljs.core.Keyword(null,"token","token",-1211463215)], 0));
if(cljs.core.record_QMARK_(G__20760)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20805);
} else {
return G__20805;
}
})();
return (new abakus.types.User(new cljs.core.Keyword(null,"firstname","firstname",1659984849).cljs$core$IFn$_invoke$arity$1(G__20760),new cljs.core.Keyword(null,"lastname","lastname",-265181465).cljs$core$IFn$_invoke$arity$1(G__20760),new cljs.core.Keyword(null,"usertype","usertype",-1389307151).cljs$core$IFn$_invoke$arity$1(G__20760),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(G__20760),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


//# sourceMappingURL=abakus.types.js.map
