"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _Actions = require("./Actions");

var _Actions2 = _interopRequireDefault(_Actions);

var _RadioGroup = require("../RadioGroup/RadioGroup.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('Actions', module).add('Default', function () {
    return _react2.default.createElement(_Actions2.default, _RadioGroup.props);
});