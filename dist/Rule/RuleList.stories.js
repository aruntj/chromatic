"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _RuleList = require("./RuleList");

var _RuleList2 = _interopRequireDefault(_RuleList);

var _Rule = require("./Rule.stories");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react3.storiesOf)('RuleList', module)
// .addDecorator(story => <div style={{ width: '600px' }}>{story()}</div>)
.add('Default', function () {
    return _react2.default.createElement(_RuleList2.default, { rules: _Rule.rules });
});