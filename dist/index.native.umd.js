(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@naturacosmeticos/natds-rn'), require('styled-components/native'), require('react-native')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@naturacosmeticos/natds-rn', 'styled-components/native', 'react-native'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseUI = {}, global.React, global.natdsRn, global.styled, global.reactNative));
}(this, (function (exports, React, natdsRn, styled, reactNative) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  const Button = ({ onPress, text, testID, type = "contained", size = "semiX", }) => {
      return (React__default['default'].createElement(natdsRn.Button, { text: text, onPress: onPress, testID: testID, accessibilityLabel: testID, type: type, size: size }));
  };

  const ViewStyled = styled__default['default'].View ``;
  const View = (props) => {
      const { testID, children } = props;
      return React__default['default'].createElement(ViewStyled, { accessibilityLabel: testID }, children);
  };

  const TextStyled = styled__default['default'].Text ``;
  const Text = (props) => {
      const { children, testID } = props;
      return React__default['default'].createElement(TextStyled, { accessibilityLabel: testID }, children);
  };

  const Card = ({ children, testID }) => {
      return React__default['default'].createElement(natdsRn.Card, { testID: testID }, children);
  };

  const TextField = (props) => {
      const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
      return (React__default['default'].createElement(natdsRn.TextField, { onChangeText: onChangeText, value: value, type: type, label: label, helperText: helpText, placeholder: placeholder, testID: testID, accessibilityLabel: testID }));
  };

  const style = reactNative.StyleSheet.create({
      view: { height: 10 }
  });
  const HorizontalSpace = () => (React__default['default'].createElement(reactNative.View, { style: style.view }));

  const ProgressIndicator = () => {
      return React__default['default'].createElement(natdsRn.ProgressIndicator, { size: "medium" });
  };

  exports.Button = Button;
  exports.Card = Card;
  exports.HorizontalSpace = HorizontalSpace;
  exports.ProgressIndicator = ProgressIndicator;
  exports.Text = Text;
  exports.TextField = TextField;
  exports.View = View;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
