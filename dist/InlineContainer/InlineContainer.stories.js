'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.options = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _InlineContainer = require('./InlineContainer');

var _InlineContainer2 = _interopRequireDefault(_InlineContainer);

var _RuleList = require('../Rule/RuleList');

var _RuleList2 = _interopRequireDefault(_RuleList);

var _Rule = require('../Rule/Rule.stories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = exports.options = {
    applyAcl: true
};

(0, _react3.storiesOf)('InlineContainer', module).add('Default', function () {
    return _react2.default.createElement(
        'div',
        { style: { margin: "25px" } },
        ' ',
        _react2.default.createElement(
            _InlineContainer2.default,
            null,
            _react2.default.createElement(
                'p',
                null,
                'Inline content'
            )
        ),
        ' '
    );
}).add('With Rules', function () {
    return _react2.default.createElement(
        _InlineContainer2.default,
        null,
        _react2.default.createElement(_RuleList2.default, { rules: _Rule.rules })
    );
});