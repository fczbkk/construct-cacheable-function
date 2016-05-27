'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (fn) {
  var memory = {};

  return function () {
    var key = JSON.stringify(arguments);
    if (typeof memory[key] === 'undefined') {
      memory[key] = fn.apply(fn, arguments);
    }
    return memory[key];
  };
};