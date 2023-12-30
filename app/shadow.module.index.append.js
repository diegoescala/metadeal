
shadow.cljs.devtools.client.env.module_loaded('index');

try { abakus.core.init(); } catch (e) { console.error("An error occurred when calling (abakus.core/init)"); throw(e); }