goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.disposeAll");
  goog.module.declareLegacyNamespace();
  var dispose = goog.require("goog.dispose");
  function disposeAll(var_args) {
    for (var i = 0, len = arguments.length; i < len; ++i) {
      var disposable = arguments[i];
      if (goog.isArrayLike(disposable)) {
        disposeAll.apply(null, disposable);
      } else {
        dispose(disposable);
      }
    }
  }
  exports = disposeAll;
  return exports;
});

//# sourceMappingURL=goog.disposable.disposeall.js.map
