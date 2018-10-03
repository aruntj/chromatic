'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.options = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ComboBox = require('./ComboBox');

var _ComboBox2 = _interopRequireDefault(_ComboBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = exports.options = [{ name: 'India', value: "india" }, { name: 'China', value: "china" }, { name: 'Pakistan', value: "pakistan" }];

(0, _react3.storiesOf)('ComboBox', module).add('Default', function () {
    return _react2.default.createElement(_ComboBox2.default, { values: options });
});