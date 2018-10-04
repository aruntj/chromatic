"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rules = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _Rule = require("./Rule");

var _Rule2 = _interopRequireDefault(_Rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = exports.rules = [{ type: 'Assigned IPv4 Address', opr: '=', value: '10.20.11.100' }, { type: 'Assigned IPv6 Address' }, { type: 'SCEP Required', opr: '!=', value: 'True' }, { type: 'Username' }, { type: 'Username2' }];

(0, _react3.storiesOf)('Rule', module).add('Default', function () {
    return _react2.default.createElement(_Rule2.default, { rule: rules[0] });
});