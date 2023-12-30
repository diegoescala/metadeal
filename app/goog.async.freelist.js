goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.async.FreeList");
  goog.module.declareLegacyNamespace();
  var FreeList = function(create, reset, limit) {
    this.limit_ = limit;
    this.create_ = create;
    this.reset_ = reset;
    this.occupants_ = 0;
    this.head_ = null;
  };
  FreeList.prototype.get = function() {
    var item;
    if (this.occupants_ > 0) {
      this.occupants_--;
      item = this.head_;
      this.head_ = item.next;
      item.next = null;
    } else {
      item = this.create_();
    }
    return item;
  };
  FreeList.prototype.put = function(item) {
    this.reset_(item);
    if (this.occupants_ < this.limit_) {
      this.occupants_++;
      item.next = this.head_;
      this.head_ = item;
    }
  };
  FreeList.prototype.occupants = function() {
    return this.occupants_;
  };
  exports = FreeList;
  return exports;
});

//# sourceMappingURL=goog.async.freelist.js.map
