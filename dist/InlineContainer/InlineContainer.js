'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineContainer = function (_Component) {
    _inherits(InlineContainer, _Component);

    function InlineContainer() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, InlineContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = InlineContainer.__proto__ || Object.getPrototypeOf(InlineContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            editable: false
        }, _this.outerRect = {
            border: '1px solid lightgray',
            borderRadius: "5px"
        }, _this.editHandler = function () {
            _this.setState({ editable: !_this.state.editable });
        }, _this.onDiscardHandler = function () {
            _this.setState({ editable: false });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(InlineContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: this.outerRect },
                _react2.default.createElement(_Header2.default, { clickHandler: this.editHandler }),
                this.props.children,
                _react2.default.createElement(_Footer2.default, { editable: this.state.editable, onDiscard: this.onDiscardHandler })
            );
        }
    }]);

    return InlineContainer;
}(_react.Component);

;

exports.default = InlineContainer;