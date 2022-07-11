"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _stitches = require("../stitches.config");

var _excluded = ["primary"];

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return (0, _stitches.styled)( /*#__PURE__*/_react.default.createElement("button", {
    type: "button"
  }, /*#__PURE__*/_react.default.createElement("span", null, "My Button")), {
    background: 'orange'
  });
};

exports.Button = Button;
Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
};