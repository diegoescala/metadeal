goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.debug.asyncStackTag");
  goog.module.declareLegacyNamespace();
  var $jscomp$destructuring$var32 = goog.require("goog.asserts");
  var assertExists = $jscomp$destructuring$var32.assertExists;
  var createTask = goog.DEBUG && goog.global.console && goog.global.console.createTask ? goog.global.console.createTask.bind(goog.global.console) : undefined;
  var CONSOLE_TASK_SYMBOL = createTask ? Symbol("consoleTask") : undefined;
  function wrap(fn, name) {
    name = name === void 0 ? "anonymous" : name;
    if (!goog.DEBUG || !createTask) {
      return fn;
    }
    if (fn[assertExists(CONSOLE_TASK_SYMBOL)]) {
      return fn;
    }
    var consoleTask = createTask(fn.name || name);
    function wrappedFn() {
      var args = $jscomp.getRestArguments.apply(0, arguments);
      var $jscomp$this = this;
      return consoleTask["run"](function() {
        return fn.call.apply(fn, [$jscomp$this].concat($jscomp.arrayFromIterable(args)));
      });
    }
    wrappedFn[assertExists(CONSOLE_TASK_SYMBOL)] = consoleTask;
    return wrappedFn;
  }
  exports = {wrap:wrap,};
  return exports;
});

//# sourceMappingURL=goog.debug.asyncstacktag.js.map
