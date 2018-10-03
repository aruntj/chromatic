'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
    display: 'flex',
    flexDirection: 'row'
};

var itemStyle = {
    border: 'solid 1px',
    padding: '5px',
    cursor: 'pointer'
};

var itemStyleSelected = _extends({}, itemStyle, {
    backgroundColor: '#5DADE2',
    fontWeight: '600'
});

var RadioGroup = function (_Component) {
    _inherits(RadioGroup, _Component);

    function RadioGroup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RadioGroup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selected: null
        }, _this.selectHandler = function (index) {
            _this.setState({ selected: index });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RadioGroup, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.selected !== this.state.selected) {
                this.setState({ selected: nextProps.selected });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var radioItems = this.props.radioItems;


            var radio = radioItems && _react2.default.createElement(
                'div',
                { style: style },
                radioItems.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        {
                            style: index === _this2.state.selected ? itemStyleSelected : itemStyle,
                            onClick: function onClick() {
                                return _this2.selectHandler(index);
                            },
                            key: item.value },
                        item.name
                    );
                })
            ) || null;

            return radio;
        }
    }]);

    return RadioGroup;
}(_react.Component);

exports.default = RadioGroup;