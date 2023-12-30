goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.async.WorkQueue");
  goog.module.declareLegacyNamespace();
  var FreeList = goog.require("goog.async.FreeList");
  var $jscomp$destructuring$var31 = goog.require("goog.asserts");
  var assert = $jscomp$destructuring$var31.assert;
  var WorkQueue = function() {
    this.workHead_ = null;
    this.workTail_ = null;
  };
  WorkQueue.prototype.add = function(fn, scope) {
    var item = this.getUnusedItem_();
    item.set(fn, scope);
    if (this.workTail_) {
      this.workTail_.next = item;
      this.workTail_ = item;
    } else {
      assert(!this.workHead_);
      this.workHead_ = item;
      this.workTail_ = item;
    }
  };
  WorkQueue.prototype.remove = function() {
    var item = null;
    if (this.workHead_) {
      item = this.workHead_;
      this.workHead_ = this.workHead_.next;
      if (!this.workHead_) {
        this.workTail_ = null;
      }
      item.next = null;
    }
    return item;
  };
  WorkQueue.prototype.returnUnused = function(item) {
    WorkQueue.freelist_.put(item);
  };
  WorkQueue.prototype.getUnusedItem_ = function() {
    return WorkQueue.freelist_.get();
  };
  WorkQueue.DEFAULT_MAX_UNUSED = goog.define("goog.async.WorkQueue.DEFAULT_MAX_UNUSED", 100);
  WorkQueue.freelist_ = new FreeList(function() {
    return new WorkItem();
  }, function(item) {
    return item.reset();
  }, WorkQueue.DEFAULT_MAX_UNUSED);
  var WorkItem = function() {
    this.fn = null;
    this.scope = null;
    this.next = null;
  };
  WorkItem.prototype.set = function(fn, scope) {
    this.fn = fn;
    this.scope = scope;
    this.next = null;
  };
  WorkItem.prototype.reset = function() {
    this.fn = null;
    this.scope = null;
    this.next = null;
  };
  exports = WorkQueue;
  return exports;
});

//# sourceMappingURL=goog.async.workqueue.js.map
