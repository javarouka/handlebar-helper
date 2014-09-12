/**
 * User: javarouka@gmail.com
 * Date: 2014-09-12 오후 2:21
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

    function formatNumber(value) {
        if(!value) {
            return "0";
        }
        return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // Fallback
    formatNumber.HELPER_NAME = 'formatNumber';

    return formatNumber;

});
