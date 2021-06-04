'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var natdsRn = require('@naturacosmeticos/natds-rn');
var reactNative = require('react-native');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Button = ({ onPress, text, testID }) => {
    return (React__default['default'].createElement(natdsRn.Button, { text: text, onPress: onPress, testID: testID, accessibilityLabel: testID }));
};

const Card = ({ children }) => {
    return React__default['default'].createElement(natdsRn.Card, null, children);
};

const TextField = (props) => {
    const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
    return (React__default['default'].createElement(natdsRn.TextField, { onChangeText: onChangeText, value: value, type: type, label: label, helperText: helpText, placeholder: placeholder, testID: testID, accessibilityLabel: testID, accessibilityComponentType: testID, accessibilityTraits: testID }));
};

const style = reactNative.StyleSheet.create({
    view: { height: 10 }
});
const HorizontalSpace = () => (React__default['default'].createElement(reactNative.View, { style: style.view }));

Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function () {
    return reactNative.Text;
  }
});
Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function () {
    return reactNative.View;
  }
});
exports.Button = Button;
exports.Card = Card;
exports.HorizontalSpace = HorizontalSpace;
exports.TextField = TextField;
