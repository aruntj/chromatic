'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RadioGroup = require('../RadioGroup/RadioGroup');

var _RadioGroup2 = _interopRequireDefault(_RadioGroup);

var _AclFilter = require('../AclFilter/AclFilter');

var _AclFilter2 = _interopRequireDefault(_AclFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
    display: "flex",
    flexDirection: "column"
};
// import '../Dap.css';


var AclFilterStyle = {
    height: "200px"
};

var FieldStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
};

var userMessagePlaceholder = "This message will be displayed to VPN user upon a successfull critera match";

var Actions = function Actions(_ref) {
    var radioItems = _ref.radioItems;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'field' },
            _react2.default.createElement(
                'style',
                null,
                "\
                    .field {\
                        width: 100%;\
                        display: flex;\
                        flex-direction: column;\
                        margin-left: 10px;\
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
                    "
            ),
            _react2.default.createElement(
                'label',
                null,
                'Action'
            ),
            _react2.default.createElement(_RadioGroup2.default, { radioItems: radioItems })
        ),
        _react2.default.createElement(
            'div',
            { style: style },
            _react2.default.createElement(_AclFilter2.default, {
                text: 'Display User Message on Criteria Match',
                placeholder: userMessagePlaceholder,
                style: AclFilterStyle }),
            _react2.default.createElement(_AclFilter2.default, {
                text: 'Apply nework ACL on traffic',
                style: AclFilterStyle })
        )
    );
};

exports.default = Actions;