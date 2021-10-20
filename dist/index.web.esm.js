import React from 'react';
import { Button as Button$1, Card as Card$1, TextField as TextField$1, ProgressIndicator as ProgressIndicator$1 } from '@naturacosmeticos/natds-web';
import styled from 'styled-components';

const Button = (props) => {
    const { onPress, text, testID, variant = "contained", size = "medium", startIcon, endIcon, } = props;
    return (React.createElement(Button$1, { color: "primary", variant: variant, "data-testid": testID, onClick: onPress, size: size, startIcon: startIcon, endIcon: endIcon }, text));
};

const StyledView = styled.div `
  display: flex;
  flex-direction: column;
`;
const View = ({ className, children, testID }) => {
    return (React.createElement(StyledView, { className: className, "data-testid": testID }, children));
};

const Text = (props) => {
    const { children, testID } = props;
    return React.createElement("span", { "data-testid": testID }, children);
};

const Card = ({ children, testID }) => {
    return React.createElement(Card$1, { "data-testid": testID }, children);
};

const TextField = (props) => {
    const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
    const handleChangeText = (e) => {
        const { value } = e.target;
        onChangeText(value);
    };
    return (React.createElement(TextField$1, { onChange: handleChangeText, value: value, type: type, label: label, helpText: helpText, placeholder: placeholder, "data-testid": testID }));
};

const style = { height: 15 };
const HorizontalSpace = () => React.createElement("div", { style: style });

const ProgressIndicator = () => {
    return React.createElement(ProgressIndicator$1, { size: 32 });
};

export { Button, Card, HorizontalSpace, ProgressIndicator, Text, TextField, View };
