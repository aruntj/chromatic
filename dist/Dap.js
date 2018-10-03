'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Actions = require('./Actions/Actions');

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./Dap.css";

var textAreaStyle = {
    height: '160px'
};

var nameInputStyle = {
    height: '24px'
};

var Dap = function Dap(_ref) {
    var radioItems = _ref.radioItems;

    return _react2.default.createElement(
        'div',
        { className: 'dap' },
        _react2.default.createElement(
            'style',
            null,
            "\
                .dap {\
                    padding: 20px;\
                }\
                .field {\
                    width: 100%;\
                    display: flex;\
                    flex-direction: column;\
                }\
                .field > label {\
                    margin-bottom: 10px;\
                }\
                .field > input {\
                    margin-bottom: 20px\
                }\
                .field > div {\
                    margin-bottom: 20px;\
                }\
                .left-right {\
                    display: grid;\
                    grid-template-areas: \
                    'left right';\
                    grid-gap: 20px;\
                }\
                .left {\
                    grid-area: left;\
                }\
                .right {\
                    grid-area: right;\
                }\
                "
        ),
        _react2.default.createElement(
            'div',
            { className: 'left-right' },
            _react2.default.createElement(
                'div',
                { className: 'left' },
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Name'
                    ),
                    _react2.default.createElement('input', { type: 'text', style: nameInputStyle })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'field' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Policy Description'
                    ),
                    _react2.default.createElement('textarea', { style: textAreaStyle })
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'right' },
                _react2.default.createElement(_Actions2.default, { radioItems: radioItems })
            )
        )
    );
};

exports.default = Dap;