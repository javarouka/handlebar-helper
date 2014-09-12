/**
 * User: javarouka@gmail.com
 * Date: 2014-09-12 오후 1:42
 */
// CommonJS module is defined
(function (factory) {
    if (typeof define === 'function' && define.amd) { define(factory); }
    else if (typeof exports === 'object') { module.exports = factory(); }
    else {
        var module = factory();
        window.Handlebars.registerHelper(module.HELPER_NAME, module);
    }
})(function() {

    "use strict";

    var VARIABLE_NAME_HASH_KEY = "var",
        oString = Object.prototype.toString;

    function size(context, options) {

        var s = calculateSize(context),
            varName = options.hash[VARIABLE_NAME_HASH_KEY];

        if (varName == null) {
            return String(s);
        }

        this[varName] = s;

        return "";
    }

    function calculateSize(obj) {

        if (!obj) {
            return 0;
        }

        if (obj.length !== null && obj.length !== undefined) {
            return obj.length;
        }
        if (oString.call(obj.size) === "[object Function]") {
            return obj.size();
        }

        throw new TypeError(obj, " is not applicable to SizeHelper.");
    }

    // Fallback
    size.HELPER_NAME = 'size';

    return size;

});
