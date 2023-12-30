goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.labs.userAgent.engine");
  goog.module.declareLegacyNamespace();
  var googArray = goog.require("goog.array");
  var googString = goog.require("goog.string.internal");
  var util = goog.require("goog.labs.userAgent.util");
  function isPresto() {
    return util.matchUserAgent("Presto");
  }
  function isTrident() {
    return util.matchUserAgent("Trident") || util.matchUserAgent("MSIE");
  }
  function isEdge() {
    return util.matchUserAgent("Edge");
  }
  function isWebKit() {
    return util.matchUserAgentIgnoreCase("WebKit") && !isEdge();
  }
  function isGecko() {
    return util.matchUserAgent("Gecko") && !isWebKit() && !isTrident() && !isEdge();
  }
  function getVersion() {
    var userAgentString = util.getUserAgent();
    if (userAgentString) {
      var tuples = util.extractVersionTuples(userAgentString);
      var engineTuple = getEngineTuple(tuples);
      if (engineTuple) {
        if (engineTuple[0] == "Gecko") {
          return getVersionForKey(tuples, "Firefox");
        }
        return engineTuple[1];
      }
      var browserTuple = tuples[0];
      var info;
      if (browserTuple && (info = browserTuple[2])) {
        var match = /Trident\/([^\s;]+)/.exec(info);
        if (match) {
          return match[1];
        }
      }
    }
    return "";
  }
  function getEngineTuple(tuples) {
    if (!isEdge()) {
      return tuples[1];
    }
    for (var i = 0; i < tuples.length; i++) {
      var tuple = tuples[i];
      if (tuple[0] == "Edge") {
        return tuple;
      }
    }
  }
  function isVersionOrHigher(version) {
    return googString.compareVersions(getVersion(), version) >= 0;
  }
  function getVersionForKey(tuples, key) {
    var pair = googArray.find(tuples, function(pair) {
      return key == pair[0];
    });
    return pair && pair[1] || "";
  }
  exports = {getVersion:getVersion, isEdge:isEdge, isGecko:isGecko, isPresto:isPresto, isTrident:isTrident, isVersionOrHigher:isVersionOrHigher, isWebKit:isWebKit,};
  return exports;
});

//# sourceMappingURL=goog.labs.useragent.engine.js.map
