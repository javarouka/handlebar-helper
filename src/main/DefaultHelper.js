/**
 * User: javarouka@gmail.com
 * Date: 2014-09-12 오전 11:35
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) { define(factory); }
    else if (typeof exports === 'object') { module.exports = factory(); }
    else {
        var module = factory();
        window.Handlebars.registerHelper(module.HELPER_NAME, module);
    }
})(function() {

    "use strict";

    var defaultValue = "";

    function _default(orig, def) {

        if(!orig) {
            return def || defaultValue;
        }

        return orig;
    }

    // Fallback
    _default.HELPER_NAME = 'default';

    return _default;

});
