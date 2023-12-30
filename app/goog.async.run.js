goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.async.run");
  goog.module.declareLegacyNamespace();
  var WorkQueue = goog.require("goog.async.WorkQueue");
  var asyncStackTag = goog.require("goog.debug.asyncStackTag");
  var nextTick = goog.require("goog.async.nextTick");
  var throwException = goog.require("goog.async.throwException");
  goog.ASSUME_NATIVE_PROMISE = goog.define("goog.ASSUME_NATIVE_PROMISE", false);
  var schedule;
  var workQueueScheduled = false;
  var workQueue = new WorkQueue();
  var run = function(callback, context) {
    if (!schedule) {
      initializeRunner();
    }
    if (!workQueueScheduled) {
      schedule();
      workQueueScheduled = true;
    }
    callback = asyncStackTag.wrap(callback, "goog.async.run");
    workQueue.add(callback, context);
  };
  var initializeRunner = function() {
    if (goog.ASSUME_NATIVE_PROMISE || goog.global.Promise && goog.global.Promise.resolve) {
      var promise = goog.global.Promise.resolve(undefined);
      schedule = function() {
        promise.then(run.processWorkQueue);
      };
    } else {
      schedule = function() {
        nextTick(run.processWorkQueue);
      };
    }
  };
  run.forceNextTick = function(realSetTimeout) {
    schedule = function() {
      nextTick(run.processWorkQueue);
      if (realSetTimeout) {
        realSetTimeout(run.processWorkQueue);
      }
    };
  };
  if (goog.DEBUG) {
    run.resetQueue = function() {
      workQueueScheduled = false;
      workQueue = new WorkQueue();
    };
    run.resetSchedulerForTest = function() {
      initializeRunner();
    };
  }
  run.processWorkQueue = function() {
    var item = null;
    while (item = workQueue.remove()) {
      try {
        item.fn.call(item.scope);
      } catch (e) {
        throwException(e);
      }
      workQueue.returnUnused(item);
    }
    workQueueScheduled = false;
  };
  exports = run;
  return exports;
});

//# sourceMappingURL=goog.async.run.js.map
