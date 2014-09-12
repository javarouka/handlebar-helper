/**
 * User: javarouka@gmail.com
 * Date: 2014-09-11 오후 5:16
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

    var defaultValue = "<br/>";

    function join(context, options) {

        if(arguments.length > 1 && typeof arguments[1] === 'string') {
            defaultValue = arguments[1];
        }

        if(Array.isArray(context)) {
            return context.join(defaultValue);
        }

        return context;
    }

    // Fallback
    join.HELPER_NAME = 'join';

    return join;

});
