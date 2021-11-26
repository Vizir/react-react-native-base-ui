import React from 'react';
import { Button as Button$1, Card as Card$1, TextField as TextField$1, ProgressIndicator as ProgressIndicator$1 } from '@naturacosmeticos/natds-rn';
import styled from 'styled-components/native';
import { StyleSheet, View as View$1 } from 'react-native';

const Button = ({ onPress, text, testID, variant = "contained", mobileSize = "semiX", }) => {
    return (React.createElement(Button$1, { text: text, onPress: onPress, testID: testID, accessibilityLabel: testID, type: variant, size: mobileSize }));
};

const ViewStyled = styled.View ``;
const View = (props) => {
    const { testID, children } = props;
    return React.createElement(ViewStyled, { accessibilityLabel: testID }, children);
};

const TextStyled = styled.Text ``;
const Text = (props) => {
    const { children, testID } = props;
    return React.createElement(TextStyled, { accessibilityLabel: testID }, children);
};

const Card = ({ children, testID }) => {
    return React.createElement(Card$1, { testID: testID }, children);
};

const TextField = (props) => {
    const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
    return (React.createElement(TextField$1, { onChangeText: onChangeText, value: value, type: type, label: label, helperText: helpText, placeholder: placeholder, testID: testID, accessibilityLabel: testID }));
};

const style = StyleSheet.create({
    view: { height: 10 }
});
const HorizontalSpace = () => (React.createElement(View$1, { style: style.view }));

const ProgressIndicator = () => {
    return React.createElement(ProgressIndicator$1, { size: "medium" });
};

export { Button, Card, HorizontalSpace, ProgressIndicator, Text, TextField, View };
