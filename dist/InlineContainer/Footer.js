"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Footer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Footer.__proto__ || Object.getPrototypeOf(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.nonEditable = {
            backgroundColor: "#f2f2f2",
            height: "18px",
            borderTop: "1px solid lightgray"
        }, _this.editableStyle = {
            backgroundColor: "#f2f2f2",
            height: "30px",
            borderTop: "1px solid lightgray"
        }, _this.buttonPanelStyle = {
            float: "right",
            marginRight: "10px",
            marginTop: "5px"
        }, _this.saveButtonStyle = {
            color: "#049fd9",
            fontSize: "13px",
            marginRight: "10px",
            cursor: "pointer"
        }, _this.discardButtonStyle = {
            fontSize: "13px",
            cursor: "pointer",
            color: "#6d6e70"
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            var buttons = null;
            var style = this.nonEditable;
            if (this.props.editable) {
                style = this.editableStyle;
                buttons = _react2.default.createElement(
                    "div",
                    { style: this.buttonPanelStyle },
                    _react2.default.createElement(
                        "span",
                        { style: this.saveButtonStyle, onClick: this.props.onSave },
                        "Save"
                    ),
                    _react2.default.createElement(
                        "span",
                        { style: this.discardButtonStyle, onClick: this.props.onDiscard },
                        "Discard"
                    )
                );
            }
            return _react2.default.createElement(
                "div",
                { style: style },
                buttons
            );
        }
    }]);

    return Footer;
}(_react.Component);

;

exports.default = Footer;