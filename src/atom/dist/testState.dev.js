"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _recoil = require("recoil");

var testState = (0, _recoil.atom)({
  key: 'testState',
  // unique ID (with respect to other atoms/selectors)
  "default": '' // default value (aka initial value)

});
var _default = testState;
exports["default"] = _default;