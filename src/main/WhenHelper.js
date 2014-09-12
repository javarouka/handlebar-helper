/**
 * User: javarouka@gmail.com
 * Date: 2014-09-12 오후 2:30
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

    var OPERATORS = {};

    function addOperator(name, operator) {
        OPERATORS[name] = operator;
    }

    function equals(left, right){
        return left == right;
    }
    function identical(left, right){
        return left === right;
    }
    function equalsAsString(left, right){
        return identical(String(left), String(right));
    }
    function lessThan(left, right){
        return left < right;
    }
    function lessThanOrEquals(left, right){
        return left <= right;
    }
    function greaterThan(left, right){
        return left > right;
    }
    function greaterThanOrEquals(left, right){
        return left >= right;
    }
    function and(left, right){
        return !!(left && right);
    }
    function or(left, right){
        return !!(left || right);
    }

    function register() {
        addOperator("equals", equals);
        addOperator("identical", identical);
        addOperator("equalsAsString", equalsAsString);
        addOperator("lessThan", lessThan);
        addOperator("lessThanOrEquals", lessThanOrEquals);
        addOperator("greaterThan", greaterThan);
        addOperator("greaterThanOrEquals", greaterThanOrEquals);
        addOperator("and", and);
        addOperator("or", or);
    }

    register();

    function when(left, operator, right, options) {
        var O = OPERATORS[operator];
        if(!O) {
            throw new TypeError("operator is undefined");
        }

        return (O(left, right)) ? options.fn() : options.inverse();
    }

    // Fallback
    when.HELPER_NAME = 'when';
    when.addOperator = addOperator;

    return when;

});