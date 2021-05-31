'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var natdsWeb = require('@naturacosmeticos/natds-web');
var styled = require('styled-components');

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

const Text = ({ children }) => React__default['default'].createElement("span", null, children);

const Card = ({ children }) => {
    return React__default['default'].createElement(natdsWeb.Card, null, children);
};

const TextField = (props) => {
    const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
    return (React__default['default'].createElement(natdsWeb.TextField, { onChange: onChangeText, value: value, type: type, label: label, helpText: helpText, placeholder: placeholder, "data-testid": testID }));
};

const style = { height: 15 };
const HorizontalSpace = () => React__default['default'].createElement("div", { style: style });

exports.Button = Button;
exports.Card = Card;
exports.HorizontalSpace = HorizontalSpace;
exports.Text = Text;
exports.TextField = TextField;
exports.View = View;
