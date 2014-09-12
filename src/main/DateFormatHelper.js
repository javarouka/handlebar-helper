/**
 * User: javarouka@gmail.com
 * Date: 2014-09-12 오후 1:32
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) { define(['moment'], factory); }
    else if (typeof exports === 'object') { module.exports = factory(); }
    else {
        var module = factory(moment);
        window.Handlebars.registerHelper(module.HELPER_NAME, module);
    }
})(function(moment) {

    "use strict";

    var oString = Object.prototype.toString,
        defaultFormat = "YYYY. MM. DD. HH:mm:ss";

    function formatDate(value, format) {

        if(oString.call(value) === "[object Number]") {
            value = Number(value);
        }
        format = (oString.call(format) === "[object String]") ? format : defaultFormat;

        return moment(value).format(format);
    }

    // Fallback
    formatDate.HELPER_NAME = 'formatDate';

    return formatDate;

});
