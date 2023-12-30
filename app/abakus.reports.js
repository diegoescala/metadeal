goog.provide('abakus.reports');
abakus.reports.number_string_QMARK_ = (function abakus$reports$number_string_QMARK_(s){
var result = cljs.core.boolean$((function (){var and__5043__auto__ = typeof s === 'string';
if(and__5043__auto__){
return cljs.core.re_matches(/^[+-]?\d.*/,s);
} else {
return and__5043__auto__;
}
})());
return result;
});
abakus.reports.scrub = (function abakus$reports$scrub(m){
var empties = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13891_SHARP_){
return (((!(abakus.reports.number_string_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__13891_SHARP_)))))) || (cljs.core.empty_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__13891_SHARP_)))));
}),cljs.core.keys(m));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13892_SHARP_,p2__13893_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13892_SHARP_,p2__13893_SHARP_);
}),m,empties);
});
abakus.reports.recompute = (function abakus$reports$recompute(prop){
return abakus.analyzer.recompute(abakus.reports.scrub(prop));
});
abakus.reports.average = (function abakus$reports$average(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13920 = arguments.length;
var i__5770__auto___13921 = (0);
while(true){
if((i__5770__auto___13921 < len__5769__auto___13920)){
args__5775__auto__.push((arguments[i__5770__auto___13921]));

var G__13922 = (i__5770__auto___13921 + (1));
i__5770__auto___13921 = G__13922;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return abakus.reports.average.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(abakus.reports.average.cljs$core$IFn$_invoke$arity$variadic = (function (nums){
var c = cljs.core.count(nums);
var sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,nums);
return (sum / c);
}));

(abakus.reports.average.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(abakus.reports.average.cljs$lang$applyTo = (function (seq13894){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13894));
}));

abakus.reports.compute_break_even = (function abakus$reports$compute_break_even(prop,independent_var,dependent_var){
var left = -5.0E8;
var mid = (0);
var right = 5.0E8;
var steps = (0);
while(true){
var results = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (left,mid,right,steps){
return (function (p1__13895_SHARP_){
var G__13900 = abakus.reports.recompute(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prop,independent_var,p1__13895_SHARP_));
return (dependent_var.cljs$core$IFn$_invoke$arity$1 ? dependent_var.cljs$core$IFn$_invoke$arity$1(G__13900) : dependent_var.call(null,G__13900));
});})(left,mid,right,steps))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,mid,right], null));
if(((((30) < steps)) || ((0.01 > Math.abs(cljs.core.second(results)))))){
return mid;
} else {
if((((((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(0)) <= (0))) && (((0) <= cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(1)))))) || ((((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(1)) <= (0))) && (((0) <= cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(0)))))))){
var G__13923 = left;
var G__13924 = abakus.reports.average.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([left,mid], 0));
var G__13925 = mid;
var G__13926 = (steps + (1));
left = G__13923;
mid = G__13924;
right = G__13925;
steps = G__13926;
continue;
} else {
var G__13927 = mid;
var G__13928 = abakus.reports.average.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mid,right], 0));
var G__13929 = right;
var G__13930 = (steps + (1));
left = G__13927;
mid = G__13928;
right = G__13929;
steps = G__13930;
continue;
}
}
break;
}
});
abakus.reports.chart = (function abakus$reports$chart(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13931 = arguments.length;
var i__5770__auto___13932 = (0);
while(true){
if((i__5770__auto___13932 < len__5769__auto___13931)){
args__5775__auto__.push((arguments[i__5770__auto___13932]));

var G__13933 = (i__5770__auto___13932 + (1));
i__5770__auto___13932 = G__13933;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return abakus.reports.chart.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(abakus.reports.chart.cljs$core$IFn$_invoke$arity$variadic = (function (independent_var,dependent_var,title,opts){
var options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,opts);
var prop = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop-info","prop-info",-1596130956)], null))),independent_var,(function (){var G__13912 = abakus.reports.recompute(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop-info","prop-info",-1596130956)], null))));
return (independent_var.cljs$core$IFn$_invoke$arity$1 ? independent_var.cljs$core$IFn$_invoke$arity$1(G__13912) : independent_var.call(null,G__13912));
})());
var steps = (5);
var span = 1.0;
var current_val = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"show-break-even","show-break-even",-263147276)))?abakus.reports.compute_break_even(prop,independent_var,dependent_var):(independent_var.cljs$core$IFn$_invoke$arity$1 ? independent_var.cljs$core$IFn$_invoke$arity$1(prop) : independent_var.call(null,prop)));
var points = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13902_SHARP_){
return ((1.0 + ((p1__13902_SHARP_ / (steps - (1))) - (0.5 * span))) * current_val);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(steps));
var values = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__13903_SHARP_,p2__13904_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13903_SHARP_,abakus.reports.recompute(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prop,independent_var,p2__13904_SHARP_)));
}),cljs.core.PersistentVector.EMPTY,points);
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13905_SHARP_){
return abakus.number_utils.localize((p1__13905_SHARP_ | (0)));
}),points);
var data = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),labels,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),(function (){var G__13913 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dependent_var,values);
if(cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"percent","percent",2031453817))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13906_SHARP_){
return (100.0 * p1__13906_SHARP_);
}),G__13913);
} else {
return G__13913;
}
})(),new cljs.core.Keyword(null,"strokeWidth","strokeWidth",-2130848332),(2)], null)], null)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([points], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([labels], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Options: ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Opts: ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Data: ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0))], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.chart_title], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.line_chart,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"width","width",-384071477),(350),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"chartConfig","chartConfig",-2098287765),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),(function (o){
return "rgba(255,255,255,1)";
}),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"dark-purple","dark-purple",811750438).cljs$core$IFn$_invoke$arity$1(abakus.styles.app_colors),new cljs.core.Keyword(null,"backgroundGradientFrom","backgroundGradientFrom",1405387847),new cljs.core.Keyword(null,"dark-purple","dark-purple",811750438).cljs$core$IFn$_invoke$arity$1(abakus.styles.app_colors),new cljs.core.Keyword(null,"backgroundGradientTo","backgroundGradientTo",851642104),new cljs.core.Keyword(null,"dark-purple","dark-purple",811750438).cljs$core$IFn$_invoke$arity$1(abakus.styles.app_colors),new cljs.core.Keyword(null,"propsForLabels","propsForLabels",-1267872753),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(9)], null),new cljs.core.Keyword(null,"decimalPlaces","decimalPlaces",1934498626),(2)], null)], null)], null)], null);
}));

(abakus.reports.chart.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(abakus.reports.chart.cljs$lang$applyTo = (function (seq13907){
var G__13908 = cljs.core.first(seq13907);
var seq13907__$1 = cljs.core.next(seq13907);
var G__13909 = cljs.core.first(seq13907__$1);
var seq13907__$2 = cljs.core.next(seq13907__$1);
var G__13910 = cljs.core.first(seq13907__$2);
var seq13907__$3 = cljs.core.next(seq13907__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13908,G__13909,G__13910,seq13907__$3);
}));

abakus.reports.summary_section = (function abakus$reports$summary_section(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13934 = arguments.length;
var i__5770__auto___13935 = (0);
while(true){
if((i__5770__auto___13935 < len__5769__auto___13934)){
args__5775__auto__.push((arguments[i__5770__auto___13935]));

var G__13936 = (i__5770__auto___13935 + (1));
i__5770__auto___13935 = G__13936;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return abakus.reports.summary_section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(abakus.reports.summary_section.cljs$core$IFn$_invoke$arity$variadic = (function (show_blank_QMARK_,title,value,data_type){
var value_type = (function (){var or__5045__auto__ = cljs.core.first(data_type);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"currency","currency",-898327568);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abakus.styles.summary_section_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(2)], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.summary_title], null),title], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(5)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.summary_details], null),(cljs.core.truth_(show_blank_QMARK_)?"---":(function (){var G__13918 = value_type;
var G__13918__$1 = (((G__13918 instanceof cljs.core.Keyword))?G__13918.fqn:null);
switch (G__13918__$1) {
case "currency":
return abakus.number_utils.localize(value);

break;
case "percent":
return abakus.number_utils.percentize(value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13918__$1)].join('')));

}
})())], null)], null)], null);
}));

(abakus.reports.summary_section.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(abakus.reports.summary_section.cljs$lang$applyTo = (function (seq13914){
var G__13915 = cljs.core.first(seq13914);
var seq13914__$1 = cljs.core.next(seq13914);
var G__13916 = cljs.core.first(seq13914__$1);
var seq13914__$2 = cljs.core.next(seq13914__$1);
var G__13917 = cljs.core.first(seq13914__$2);
var seq13914__$3 = cljs.core.next(seq13914__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13915,G__13916,G__13917,seq13914__$3);
}));

abakus.reports.break_even_summary = (function abakus$reports$break_even_summary(prop){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.chart_title], null),"Break-even Analysis"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.analysis_info_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.summary_section,false,"Min. rent to cash flow",abakus.reports.compute_break_even(prop,new cljs.core.Keyword(null,"rent-per-unit","rent-per-unit",-894027402),new cljs.core.Keyword(null,"cash-flow-per-unit","cash-flow-per-unit",1008873379))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.analysis_info_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.summary_section,false,"Max purchase price to cash flow",abakus.reports.compute_break_even(prop,new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729),new cljs.core.Keyword(null,"cash-flow-per-unit","cash-flow-per-unit",1008873379))], null)], null)], null);
});
abakus.reports.report = (function abakus$reports$report(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),abakus.styles.app_screen], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([abakus.styles.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.screen_header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.good_deal_container], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),abakus.styles.screen_title_text], null),"Profitability Charts"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.safe_area_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.scroll_view,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.ads.banner], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.break_even_summary,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop-info","prop-info",-1596130956)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.ads.banner], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.chart,new cljs.core.Keyword(null,"rent-per-unit","rent-per-unit",-894027402),new cljs.core.Keyword(null,"cash-flow-per-unit","cash-flow-per-unit",1008873379),"Cash flow by rent",new cljs.core.Keyword(null,"show-break-even","show-break-even",-263147276)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.ads.banner], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.chart,new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729),new cljs.core.Keyword(null,"cash-flow-per-unit","cash-flow-per-unit",1008873379),"Cash flow by purchase price",new cljs.core.Keyword(null,"show-break-even","show-break-even",-263147276)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.ads.banner], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.chart,new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729),new cljs.core.Keyword(null,"cocroi","cocroi",889926563),"Cash-on-cash ROI by purchase price",new cljs.core.Keyword(null,"percent","percent",2031453817)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.ads.banner], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.reports.chart,new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729),new cljs.core.Keyword(null,"five-yr-profit","five-yr-profit",-1519044313),"Net future gain by purchase price",false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [abakus.rn.view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-height","min-height",398480837),(630)], null)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=abakus.reports.js.map
