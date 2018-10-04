'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Rule = require('./Rule');

var _Rule2 = _interopRequireDefault(_Rule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderTop: '1px solid lightgrey',
    borderLeft: '1px solid lightgrey',
    borderRight: '1px solid lightgrey'
};

var RuleList = function RuleList(_ref) {
    var rules = _ref.rules;

    return _react2.default.createElement(
        'div',
        { style: style },
        rules.map(function (rule, index) {
            return _react2.default.createElement(_Rule2.default, { rule: rule });
        })
    );
};

exports.default = RuleList;