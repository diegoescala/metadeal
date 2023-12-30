goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.promise.Resolver");
  goog.module.declareLegacyNamespace();
  var GoogPromise = goog.requireType("goog.Promise");
  var Thenable = goog.requireType("goog.Thenable");
  var Resolver = function() {
    this.promise;
    this.resolve;
    this.reject;
  };
  exports = Resolver;
  return exports;
});

//# sourceMappingURL=goog.promise.resolver.js.map
