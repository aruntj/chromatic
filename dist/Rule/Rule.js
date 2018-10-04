'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    display: 'grid',
    // gridTemplateAreas: `
    //                     'lhs opr rhs'
    //                     `,
    gridTemplateColumn: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px',
    // borderStyle: 'solid',
    // borderWidth: '1px',
    borderBottom: '1px solid lightgrey'
};

var lhsStyle = {
    // gridArea: 'lhs'
    gridColumn: '1',
    width: '200px'
};

var oprStyle = {
    // gridArea: 'opr',
    gridColumn: '2',
    margin: 'auto',
    width: '100px',
    textAlignLast: 'center'
};

var rhsStyle = {
    // gridArea: 'rhs'
    gridColumn: '3'
};

var opr = ['=', '!=', '>', '<', '>=', '<='];

var createSelector = function createSelector(values, style, selected) {
    return _react2.default.createElement(
        'select',
        { style: style, selected: selected },
        values.map(function (value, _) {
            return _react2.default.createElement(
                'option',
                { key: value, value: value },
                value
            );
        })
    );
};

var Rule = function Rule(_ref) {
    var rule = _ref.rule;

    return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
            'label',
            { style: lhsStyle },
            rule.type
        ),
        createSelector(opr, oprStyle, rule.opr),
        _react2.default.createElement('input', { type: 'text',
            style: rhsStyle,
            placeholder: 'Type Here',
            value: rule.value })
    );
};

exports.default = Rule;