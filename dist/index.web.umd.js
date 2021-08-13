(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@naturacosmeticos/natds-web'), require('styled-components')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@naturacosmeticos/natds-web', 'styled-components'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.BaseUI = {}, global.React, global.natdsWeb, global.styled));
}(this, (function (exports, React, natdsWeb, styled) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

  const Button = (props) => {
      const { onPress, text, testID } = props;
      return (React__default['default'].createElement(natdsWeb.Button, { color: "primary", variant: "contained", "data-testid": testID, onClick: onPress }, text));
  };

  const StyledView = styled__default['default'].div `
  display: flex;
  flex-direction: column;
`;
  const View = ({ className, children, testID }) => {
      return (React__default['default'].createElement(StyledView, { className: className, "data-testid": testID }, children));
  };

  const Text = (props) => {
      const { children, testID } = props;
      return React__default['default'].createElement("span", { "data-testid": testID }, children);
  };

  const Card = ({ children }) => {
      return React__default['default'].createElement(natdsWeb.Card, null, children);
  };

  const TextField = (props) => {
      const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
      const handleChangeText = (e) => {
          const { value } = e.target;
          onChangeText(value);
      };
      return (React__default['default'].createElement(natdsWeb.TextField, { onChange: handleChangeText, value: value, type: type, label: label, helpText: helpText, placeholder: placeholder, "data-testid": testID }));
  };

  const style = { height: 15 };
  const HorizontalSpace = () => React__default['default'].createElement("div", { style: style });

  const ProgressIndicator = () => {
      return React__default['default'].createElement(natdsWeb.ProgressIndicator, { size: 32 });
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
