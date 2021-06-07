(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@naturacosmeticos/natds-rn'), require('react-native'), require('styled-components/native')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@naturacosmeticos/natds-rn', 'react-native', 'styled-components/native'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseUI = {}, global.React, global.natdsRn, global.reactNative, global.styled));
}(this, (function (exports, React, natdsRn, reactNative, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  const Button = ({ onPress, text, testID }) => {
      return (React__default['default'].createElement(natdsRn.Button, { text: text, onPress: onPress, testID: testID, accessibilityLabel: testID }));
  };

  const Text = styled__default['default'].Text ``;

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

  Object.defineProperty(exports, 'View', {
    enumerable: true,
    get: function () {
      return reactNative.View;
    }
  });
  exports.Button = Button;
  exports.Card = Card;
  exports.HorizontalSpace = HorizontalSpace;
  exports.Text = Text;
  exports.TextField = TextField;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
