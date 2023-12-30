goog.provide('example.app');
if((typeof example !== 'undefined') && (typeof example.app !== 'undefined') && (typeof example.app.shadow_splash !== 'undefined')){
} else {
example.app.shadow_splash = require("../assets/shadow-cljs.png");
}
if((typeof example !== 'undefined') && (typeof example.app !== 'undefined') && (typeof example.app.cljs_splash !== 'undefined')){
} else {
example.app.cljs_splash = require("../assets/cljs.png");
}
if((typeof example !== 'undefined') && (typeof example.app !== 'undefined') && (typeof example.app.Stack !== 'undefined')){
} else {
example.app.Stack = shadow.js.shim.module$$react_navigation$native_stack.createNativeStackNavigator();
}
example.app.home = (function example$app$home(props){
var with_let17577 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let17577","with-let17577",-707141137));
var temp__5808__auto___17592 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___17592 == null)){
} else {
var c__13485__auto___17593 = temp__5808__auto___17592;
if((with_let17577.generation === c__13485__auto___17593.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let17577.generation = c__13485__auto___17593.ratomGeneration);
}

var init17578 = (with_let17577.length === (0));
var counter = ((((init17578) || (cljs.core.not(with_let17577.hasOwnProperty((0))))))?(with_let17577[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-counter","get-counter",-947296024)], null))):(with_let17577[(0)]));
var tap_enabled_QMARK_ = ((((init17578) || (cljs.core.not(with_let17577.hasOwnProperty((1))))))?(with_let17577[(1)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counter-tappable?","counter-tappable?",335976858)], null))):(with_let17577[(1)]));
var res17582 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(50),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(72),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),cljs.core.deref(counter)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.widgets.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-counter","inc-counter",2085478987)], null));
}),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(cljs.core.deref(tap_enabled_QMARK_)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"blue","blue",-622100620)], null)], null),"Tap me, I'll count"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.widgets.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return props.navigation.navigate("About");
})], null),"Tap me, I'll navigate"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(160),new cljs.core.Keyword(null,"height","height",1025178622),(160)], null),new cljs.core.Keyword(null,"source","source",-433931539),example.app.cljs_splash], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Image,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(160),new cljs.core.Keyword(null,"height","height",1025178622),(160)], null),new cljs.core.Keyword(null,"source","source",-433931539),example.app.shadow_splash], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620)], null)], null),"Using: shadow-cljs+expo+reagent+re-frame"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$expo_status_bar.StatusBar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"auto"], null)], null)], null);
return res17582;
});
example.app.about = (function example$app$about(){
var with_let17586 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let17586","with-let17586",-1956375084));
var temp__5808__auto___17594 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___17594 == null)){
} else {
var c__13485__auto___17595 = temp__5808__auto___17594;
if((with_let17586.generation === c__13485__auto___17595.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let17586.generation = c__13485__auto___17595.ratomGeneration);
}

var init17587 = (with_let17586.length === (0));
var counter = ((((init17587) || (cljs.core.not(with_let17586.hasOwnProperty((0))))))?(with_let17586[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-counter","get-counter",-947296024)], null))):(with_let17586[(0)]));
var res17588 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"padding-vertical","padding-vertical",118164607),(50),new cljs.core.Keyword(null,"padding-horizontal","padding-horizontal",893803864),(20),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"flex-start","flex-start",1432697815)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(54),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),"About Example App"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20)], null)], null),["Counter is at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(counter))].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(15),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"blue","blue",-622100620)], null)], null),"Built with React Native, Expo, Reagent, re-frame, and React Navigation"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$expo_status_bar.StatusBar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"auto"], null)], null)], null);
return res17588;
});
example.app.root = (function example$app$root(){
var with_let17589 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let17589","with-let17589",1748563362));
var temp__5808__auto___17596 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___17596 == null)){
} else {
var c__13485__auto___17597 = temp__5808__auto___17596;
if((with_let17589.generation === c__13485__auto___17597.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let17589.generation = c__13485__auto___17597.ratomGeneration);
}

var init17590 = (with_let17589.length === (0));
var _BANG_root_state = ((((init17590) || (cljs.core.not(with_let17589.hasOwnProperty((0))))))?(with_let17589[(0)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","root-state","navigation/root-state",-811804777)], null))):(with_let17589[(0)]));
var save_root_state_BANG_ = ((((init17590) || (cljs.core.not(with_let17589.hasOwnProperty((1))))))?(with_let17589[(1)] = (function (state){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("navigation","set-root-state","navigation/set-root-state",812659384),state], null));
})):(with_let17589[(1)]));
var add_listener_BANG_ = ((((init17590) || (cljs.core.not(with_let17589.hasOwnProperty((2))))))?(with_let17589[(2)] = (function (navigation_ref){
if(cljs.core.truth_(navigation_ref)){
return navigation_ref.addListener("state",save_root_state_BANG_);
} else {
return null;
}
})):(with_let17589[(2)]));
var res17591 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$react_navigation$native.NavigationContainer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),add_listener_BANG_,new cljs.core.Keyword(null,"initialState","initialState",-1307412411),(cljs.core.truth_(cljs.core.deref(_BANG_root_state))?cljs.core.deref(_BANG_root_state).data.state:null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.app.Stack.Navigator,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.app.Stack.Screen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Home",new cljs.core.Keyword(null,"component","component",1555936782),(function (props){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.app.home,props], null));
}),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Example App"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.app.Stack.Screen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"About",new cljs.core.Keyword(null,"component","component",1555936782),(function (props){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.app.about,props], null));
}),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"About"], null)], null)], null)], null)], null);
return res17591;
});
example.app.start = (function example$app$start(){
return expo.root.render_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.app.root], null)));
});
example.app.init = (function example$app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return example.app.start();
});

//# sourceMappingURL=example.app.js.map
