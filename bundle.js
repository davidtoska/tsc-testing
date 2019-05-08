"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var array1 = [1, 2, 3, 4];
var itemArray = [
    { id: "1", nr: 1 },
    { id: "1", nr: 2 },
    { id: "1", nr: 3 },
    { id: "1", nr: 4 },
    { id: "1", nr: 5 }
];
var red = function (acc, val) {
    console.log("acc: " + acc);
    //   console.log("val" + val);
    return acc + val.nr;
};
console.log(itemArray.reduce(red, 0));
console.log("types");
var a = { id: 1 };
var b = { id: 2 };
var c = { id: 3 };
var fname = "David";
var lname = "David";
console.log(__assign({}, a, b, a));
