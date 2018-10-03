'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.options = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _AclFilter = require('./AclFilter');

var _AclFilter2 = _interopRequireDefault(_AclFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = exports.options = {
    applyAcl: true
};

(0, _react3.storiesOf)('AclFilter', module).add('Default', function () {
    return _react2.default.createElement(_AclFilter2.default, { values: options, text: 'Apply nework ACL on traffic' });
});