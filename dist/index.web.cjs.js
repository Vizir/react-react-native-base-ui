'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var natdsWeb = require('@naturacosmeticos/natds-web');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Button = (props) => {
    const { onPress, text, testID, variant = "contained", size = "medium", startIcon, endIcon, } = props;
    return (React__default['default'].createElement(natdsWeb.Button, { color: "primary", variant: variant, "data-testid": testID, onClick: onPress, size: size, startIcon: startIcon, endIcon: endIcon }, text));
};

const ContainerWrapper = styled__default['default'].div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;
const Title = styled__default['default'].div `
  margin: 30px 0 15px;
`;
const LinkButton = styled__default['default'].div `
  margin-top: 150px;
`;

const ErrorWrapper = (props) => {
    const { icon, title, description, textButton, actionButton } = props;
    return (React__default['default'].createElement(ContainerWrapper, null,
        icon && (React__default['default'].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "106", height: "106", version: "1.1" },
            React__default['default'].createElement("path", { fill: "#C2C2C2", fillRule: "nonzero", d: "M53.002 106C23.775 106 0 82.223 0 53.001 0 23.775 23.775 0 53.002 0 82.222 0 106 23.775 106 53.001 106 82.223 82.223 106 53.002 106zm0-99.169c-25.46 0-46.17 20.711-46.17 46.17 0 25.459 20.71 46.172 46.17 46.172 25.459 0 46.169-20.713 46.169-46.172 0-25.459-20.71-46.17-46.169-46.17zM64.17 55.518c-3.212 2.609-7.186 5.832-7.751 12.613-.148 1.763-1.61 3.137-3.33 3.137h-.178a3.268 3.268 0 0 1-2.37-1.018 3.102 3.102 0 0 1-.828-2.344c.682-9.863 6.618-14.666 10.168-17.536.717-.58 1.286-1.04 1.633-1.392a11.978 11.978 0 0 0 3.532-8.52c0-6.641-5.403-12.043-12.043-12.043-6.039 0-11.171 4.51-11.946 10.486-.225 1.747-1.668 3.064-3.362 3.064h-.177c-.918 0-1.79-.382-2.392-1.051a3.023 3.023 0 0 1-.776-2.358c.955-9.588 9.03-16.88 18.653-16.844 5 0 9.704 1.95 13.25 5.494a18.614 18.614 0 0 1 5.49 13.248 18.627 18.627 0 0 1-5.49 13.259c-.573.578-1.224 1.11-2.083 1.805zM53.002 76.385a4.863 4.863 0 0 1 4.857 4.857A4.864 4.864 0 0 1 53 85.962a4.864 4.864 0 0 1-4.859-4.72 4.862 4.862 0 0 1 4.861-4.857z" }))),
        React__default['default'].createElement(Title, null,
            React__default['default'].createElement(natdsWeb.Typography, { variant: "h4", color: "textPrimary", align: "center" }, title)),
        description && (React__default['default'].createElement(natdsWeb.Typography, { variant: "subtitle1", color: "textSecondary", align: "center" }, description)),
        textButton && (React__default['default'].createElement(LinkButton, null,
            React__default['default'].createElement(natdsWeb.Button, { color: "primary", variant: "text", onClick: actionButton, size: "large" },
                React__default['default'].createElement("strong", null, textButton))))));
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
    return React__default['default'].createElement(natdsWeb.Typography, { "data-testid": testID }, children);
};

const Card = ({ children, testID }) => {
    return React__default['default'].createElement(natdsWeb.Card, { "data-testid": testID }, children);
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

const ProgressIndicator = (props) => {
    return React__default['default'].createElement(natdsWeb.ProgressIndicator, { size: 32, ...props });
};

exports.Button = Button;
exports.Card = Card;
exports.ErrorWrapper = ErrorWrapper;
exports.HorizontalSpace = HorizontalSpace;
exports.ProgressIndicator = ProgressIndicator;
exports.Text = Text;
exports.TextField = TextField;
exports.View = View;
