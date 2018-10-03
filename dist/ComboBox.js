'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComboBox = function ComboBox(_ref) {
    var values = _ref.values;
    2;
    return _react2.default.createElement(
        'select',
        null,
        values.map(function (option, _) {
            return _react2.default.createElement(
                'option',
                {
                    value: option.value,
                    key: option.value },
                option.name
            );
        })
    );
};

exports.default = ComboBox;