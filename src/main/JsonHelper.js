/**
 * User: javarouka@gmail.com
 * Date: 2014-09-12 오후 2:27
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

    function _json(value) {
        if(!value) {
            return "{}";
        }
        return JSON.stringify(value);
    }

    // Fallback
    _json.HELPER_NAME = 'json';

    return _json;

});
