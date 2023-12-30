goog.provide('abakus.analyzer');
abakus.analyzer.mortgage_multiplier = (653.63 / (112000));
abakus.analyzer.taxes_insur_multiplier = (522.0 / (135000));
abakus.analyzer.params = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"five-yr-return","five-yr-return",1023776225),new cljs.core.Keyword(null,"property-value-amt","property-value-amt",-660227038),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"rehab","rehab",948503779),new cljs.core.Keyword(null,"cash-flow-per-unit","cash-flow-per-unit",1008873379),new cljs.core.Keyword(null,"cocroi","cocroi",889926563),new cljs.core.Keyword(null,"stock-market-ret","stock-market-ret",-1908676923),new cljs.core.Keyword(null,"five-yr-profit","five-yr-profit",-1519044313),new cljs.core.Keyword(null,"time-horizon-years","time-horizon-years",-396302617),new cljs.core.Keyword(null,"monthly-maint","monthly-maint",337559816),new cljs.core.Keyword(null,"total-cost","total-cost",1556320617),new cljs.core.Keyword(null,"five-year-price","five-year-price",-1432479446),new cljs.core.Keyword(null,"vacancy-percentage","vacancy-percentage",1265265034),new cljs.core.Keyword(null,"annual-profit","annual-profit",733020906),new cljs.core.Keyword(null,"prop-tax-percent","prop-tax-percent",-521976212),new cljs.core.Keyword(null,"mortgage","mortgage",-1632211666),new cljs.core.Keyword(null,"stock-mkt-growth-percent","stock-mkt-growth-percent",1153750127),new cljs.core.Keyword(null,"closing-costs","closing-costs",923485520),new cljs.core.Keyword(null,"monthly-exp","monthly-exp",-1826832143),new cljs.core.Keyword(null,"loan-principal-interest","loan-principal-interest",-1967339023),new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729),new cljs.core.Keyword(null,"num-units","num-units",1389753073),new cljs.core.Keyword(null,"cap-rate","cap-rate",472592914),new cljs.core.Keyword(null,"property-tax-and-insurance","property-tax-and-insurance",1316387987),new cljs.core.Keyword(null,"rent-per-unit","rent-per-unit",-894027402),new cljs.core.Keyword(null,"five-yr-apprec","five-yr-apprec",-446536167),new cljs.core.Keyword(null,"management-fee","management-fee",-829148262),new cljs.core.Keyword(null,"mkt-beat","mkt-beat",1961187355),new cljs.core.Keyword(null,"loan-amt","loan-amt",1188234492),new cljs.core.Keyword(null,"prop-insur","prop-insur",1173762557),new cljs.core.Keyword(null,"hoa","hoa",-359189923),new cljs.core.Keyword(null,"monthly-non-mortgage-exp","monthly-non-mortgage-exp",-480819329),new cljs.core.Keyword(null,"first-yr-profit","first-yr-profit",-311735425),new cljs.core.Keyword(null,"five-yr-value","five-yr-value",-607191169)],[(function (p){
return ((new cljs.core.Keyword(null,"five-yr-value","five-yr-value",-607191169).cljs$core$IFn$_invoke$arity$1(p) / new cljs.core.Keyword(null,"total-cost","total-cost",1556320617).cljs$core$IFn$_invoke$arity$1(p)) - 1.0);
}),(function (p){
return (0.5 * (new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p) + new cljs.core.Keyword(null,"five-year-price","five-year-price",-1432479446).cljs$core$IFn$_invoke$arity$1(p)));
}),(function (p){
return (0.2 * new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (5.0 * new cljs.core.Keyword(null,"closing-costs","closing-costs",923485520).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (((((1.0 - (0.01 * new cljs.core.Keyword(null,"vacancy-percentage","vacancy-percentage",1265265034).cljs$core$IFn$_invoke$arity$1(p))) * new cljs.core.Keyword(null,"rent-per-unit","rent-per-unit",-894027402).cljs$core$IFn$_invoke$arity$1(p)) * new cljs.core.Keyword(null,"num-units","num-units",1389753073).cljs$core$IFn$_invoke$arity$1(p)) - new cljs.core.Keyword(null,"monthly-exp","monthly-exp",-1826832143).cljs$core$IFn$_invoke$arity$1(p)) / new cljs.core.Keyword(null,"num-units","num-units",1389753073).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (new cljs.core.Keyword(null,"annual-profit","annual-profit",733020906).cljs$core$IFn$_invoke$arity$1(p) / new cljs.core.Keyword(null,"total-cost","total-cost",1556320617).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return ((new cljs.core.Keyword(null,"total-cost","total-cost",1556320617).cljs$core$IFn$_invoke$arity$1(p) * Math.pow((1.0 + (0.01 * new cljs.core.Keyword(null,"stock-mkt-growth-percent","stock-mkt-growth-percent",1153750127).cljs$core$IFn$_invoke$arity$1(p))),new cljs.core.Keyword(null,"time-horizon-years","time-horizon-years",-396302617).cljs$core$IFn$_invoke$arity$1(p))) - new cljs.core.Keyword(null,"total-cost","total-cost",1556320617).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return ((new cljs.core.Keyword(null,"five-yr-value","five-yr-value",-607191169).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"total-cost","total-cost",1556320617).cljs$core$IFn$_invoke$arity$1(p)) + new cljs.core.Keyword(null,"five-yr-apprec","five-yr-apprec",-446536167).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return 5.0;
}),(function (p){
return (new cljs.core.Keyword(null,"property-value-amt","property-value-amt",-660227038).cljs$core$IFn$_invoke$arity$1(p) / 2000.0);
}),(function (p){
return ((new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(p) + new cljs.core.Keyword(null,"rehab","rehab",948503779).cljs$core$IFn$_invoke$arity$1(p)) + new cljs.core.Keyword(null,"closing-costs","closing-costs",923485520).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return ((1.0 + (new cljs.core.Keyword(null,"time-horizon-years","time-horizon-years",-396302617).cljs$core$IFn$_invoke$arity$1(p) * 0.04)) * new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return 5.0;
}),(function (p){
return ((new cljs.core.Keyword(null,"cash-flow-per-unit","cash-flow-per-unit",1008873379).cljs$core$IFn$_invoke$arity$1(p) * new cljs.core.Keyword(null,"num-units","num-units",1389753073).cljs$core$IFn$_invoke$arity$1(p)) * 12.0);
}),(function (p){
return 2.3;
}),(function (p){
return (new cljs.core.Keyword(null,"loan-principal-interest","loan-principal-interest",-1967339023).cljs$core$IFn$_invoke$arity$1(p) + new cljs.core.Keyword(null,"property-tax-and-insurance","property-tax-and-insurance",1316387987).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return 7.0;
}),(function (p){
return (0.02 * new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (((new cljs.core.Keyword(null,"mortgage","mortgage",-1632211666).cljs$core$IFn$_invoke$arity$1(p) + new cljs.core.Keyword(null,"hoa","hoa",-359189923).cljs$core$IFn$_invoke$arity$1(p)) + new cljs.core.Keyword(null,"monthly-maint","monthly-maint",337559816).cljs$core$IFn$_invoke$arity$1(p)) + (new cljs.core.Keyword(null,"management-fee","management-fee",-829148262).cljs$core$IFn$_invoke$arity$1(p) / 12.0));
}),(function (p){
return (new cljs.core.Keyword(null,"loan-amt","loan-amt",1188234492).cljs$core$IFn$_invoke$arity$1(p) * abakus.analyzer.mortgage_multiplier);
}),(function (p){
return 100000.0;
}),(function (p){
return (1);
}),(function (p){
return ((new cljs.core.Keyword(null,"annual-profit","annual-profit",733020906).cljs$core$IFn$_invoke$arity$1(p) + ((12) * new cljs.core.Keyword(null,"loan-principal-interest","loan-principal-interest",-1967339023).cljs$core$IFn$_invoke$arity$1(p))) / new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (((new cljs.core.Keyword(null,"property-value-amt","property-value-amt",-660227038).cljs$core$IFn$_invoke$arity$1(p) * (0.01 * new cljs.core.Keyword(null,"prop-tax-percent","prop-tax-percent",-521976212).cljs$core$IFn$_invoke$arity$1(p))) + new cljs.core.Keyword(null,"prop-insur","prop-insur",1173762557).cljs$core$IFn$_invoke$arity$1(p)) / 12.0);
}),(function (p){
return (800);
}),(function (p){
return (new cljs.core.Keyword(null,"five-year-price","five-year-price",-1432479446).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (new cljs.core.Keyword(null,"num-units","num-units",1389753073).cljs$core$IFn$_invoke$arity$1(p) * new cljs.core.Keyword(null,"rent-per-unit","rent-per-unit",-894027402).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (new cljs.core.Keyword(null,"five-yr-profit","five-yr-profit",-1519044313).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"stock-market-ret","stock-market-ret",-1908676923).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (new cljs.core.Keyword(null,"property-value-amt","property-value-amt",-660227038).cljs$core$IFn$_invoke$arity$1(p) * 0.015);
}),(function (p){
return (0);
}),(function (p){
return (new cljs.core.Keyword(null,"monthly-exp","monthly-exp",-1826832143).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"mortgage","mortgage",-1632211666).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return (new cljs.core.Keyword(null,"annual-profit","annual-profit",733020906).cljs$core$IFn$_invoke$arity$1(p) - new cljs.core.Keyword(null,"total-cost","total-cost",1556320617).cljs$core$IFn$_invoke$arity$1(p));
}),(function (p){
return ((new cljs.core.Keyword(null,"annual-profit","annual-profit",733020906).cljs$core$IFn$_invoke$arity$1(p) * new cljs.core.Keyword(null,"time-horizon-years","time-horizon-years",-396302617).cljs$core$IFn$_invoke$arity$1(p)) + new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(p));
})]);
abakus.analyzer.compute = (function abakus$analyzer$compute(param,property){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(property,param) == null)))){
return property;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(property,param,(function (){var fexpr__13980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(abakus.analyzer.params,param);
return (fexpr__13980.cljs$core$IFn$_invoke$arity$1 ? fexpr__13980.cljs$core$IFn$_invoke$arity$1(property) : fexpr__13980.call(null,property));
})());
}
});
abakus.analyzer.test_prop = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"five-year-price","five-year-price",-1432479446),(600000),new cljs.core.Keyword(null,"num-units","num-units",1389753073),(9),new cljs.core.Keyword(null,"hoa","hoa",-359189923),(0),new cljs.core.Keyword(null,"rent-per-unit","rent-per-unit",-894027402),(800)], null);
abakus.analyzer.recompute = (function abakus$analyzer$recompute(prop){
return abakus.analyzer.compute(new cljs.core.Keyword(null,"mkt-beat","mkt-beat",1961187355),abakus.analyzer.compute(new cljs.core.Keyword(null,"stock-market-ret","stock-market-ret",-1908676923),abakus.analyzer.compute(new cljs.core.Keyword(null,"five-yr-return","five-yr-return",1023776225),abakus.analyzer.compute(new cljs.core.Keyword(null,"five-yr-profit","five-yr-profit",-1519044313),abakus.analyzer.compute(new cljs.core.Keyword(null,"five-yr-value","five-yr-value",-607191169),abakus.analyzer.compute(new cljs.core.Keyword(null,"cocroi","cocroi",889926563),abakus.analyzer.compute(new cljs.core.Keyword(null,"cap-rate","cap-rate",472592914),abakus.analyzer.compute(new cljs.core.Keyword(null,"annual-profit","annual-profit",733020906),abakus.analyzer.compute(new cljs.core.Keyword(null,"total-cost","total-cost",1556320617),abakus.analyzer.compute(new cljs.core.Keyword(null,"rehab","rehab",948503779),abakus.analyzer.compute(new cljs.core.Keyword(null,"cash-flow-per-unit","cash-flow-per-unit",1008873379),abakus.analyzer.compute(new cljs.core.Keyword(null,"monthly-non-mortgage-exp","monthly-non-mortgage-exp",-480819329),abakus.analyzer.compute(new cljs.core.Keyword(null,"monthly-exp","monthly-exp",-1826832143),abakus.analyzer.compute(new cljs.core.Keyword(null,"closing-costs","closing-costs",923485520),abakus.analyzer.compute(new cljs.core.Keyword(null,"mortgage","mortgage",-1632211666),abakus.analyzer.compute(new cljs.core.Keyword(null,"property-tax-and-insurance","property-tax-and-insurance",1316387987),abakus.analyzer.compute(new cljs.core.Keyword(null,"prop-insur","prop-insur",1173762557),abakus.analyzer.compute(new cljs.core.Keyword(null,"prop-tax-percent","prop-tax-percent",-521976212),abakus.analyzer.compute(new cljs.core.Keyword(null,"loan-principal-interest","loan-principal-interest",-1967339023),abakus.analyzer.compute(new cljs.core.Keyword(null,"loan-amt","loan-amt",1188234492),abakus.analyzer.compute(new cljs.core.Keyword(null,"down","down",1565245570),abakus.analyzer.compute(new cljs.core.Keyword(null,"monthly-maint","monthly-maint",337559816),abakus.analyzer.compute(new cljs.core.Keyword(null,"five-yr-apprec","five-yr-apprec",-446536167),abakus.analyzer.compute(new cljs.core.Keyword(null,"management-fee","management-fee",-829148262),abakus.analyzer.compute(new cljs.core.Keyword(null,"rent-per-unit","rent-per-unit",-894027402),abakus.analyzer.compute(new cljs.core.Keyword(null,"num-units","num-units",1389753073),abakus.analyzer.compute(new cljs.core.Keyword(null,"vacancy-percentage","vacancy-percentage",1265265034),abakus.analyzer.compute(new cljs.core.Keyword(null,"stock-mkt-growth-percent","stock-mkt-growth-percent",1153750127),abakus.analyzer.compute(new cljs.core.Keyword(null,"hoa","hoa",-359189923),abakus.analyzer.compute(new cljs.core.Keyword(null,"property-value-amt","property-value-amt",-660227038),abakus.analyzer.compute(new cljs.core.Keyword(null,"five-year-price","five-year-price",-1432479446),abakus.analyzer.compute(new cljs.core.Keyword(null,"time-horizon-years","time-horizon-years",-396302617),abakus.analyzer.compute(new cljs.core.Keyword(null,"purchase-price","purchase-price",1588187729),prop)))))))))))))))))))))))))))))))));
});
var result_14029 = abakus.analyzer.recompute(abakus.analyzer.test_prop);
new cljs.core.Keyword(null,"mkt-beat","mkt-beat",1961187355).cljs$core$IFn$_invoke$arity$1(result_14029);

//# sourceMappingURL=abakus.analyzer.js.map
