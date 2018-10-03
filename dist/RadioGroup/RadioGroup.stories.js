"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.props = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _RadioGroup = require("./RadioGroup");

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var radioItems = [{ name: 'Allow' }, { name: 'Quarantine' }, { name: 'Block' }];

var props = exports.props = {
    radioItems: radioItems,
    selected: 1
};

(0, _react3.storiesOf)('RadioGroup', module).add('Default', function () {
    return _react2.default.createElement(_RadioGroup2.default, props);
});