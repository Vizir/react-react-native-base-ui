import React from 'react';
import { Button as Button$1, Card as Card$1, TextField as TextField$1 } from '@naturacosmeticos/natds-web';
import styled from 'styled-components';

const Button = (props) => {
    const { onPress, text, testID } = props;
    return (React.createElement(Button$1, { color: "primary", variant: "contained", "data-testid": testID, onClick: onPress }, text));
};

const StyledView = styled.div `
  display: flex;
  flex-direction: column;
`;
const View = ({ className, children, testID }) => {
    return (React.createElement(StyledView, { className: className, "data-testid": testID }, children));
};

const Text = ({ children }) => React.createElement("span", null, children);

const Card = ({ children }) => {
    return React.createElement(Card$1, null, children);
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

export { Button, Card, HorizontalSpace, Text, TextField, View };
