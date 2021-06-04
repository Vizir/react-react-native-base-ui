import React from 'react';
import { Button as Button$1, Card as Card$1, TextField as TextField$1 } from '@naturacosmeticos/natds-rn';
import { StyleSheet, View } from 'react-native';
export { Text, View } from 'react-native';

const Button = ({ onPress, text, testID }) => {
    return (React.createElement(Button$1, { text: text, onPress: onPress, testID: testID, accessibilityLabel: testID }));
};

const Card = ({ children }) => {
    return React.createElement(Card$1, null, children);
};

const TextField = (props) => {
    const { onChangeText, value, type, label, helpText, placeholder, testID } = props;
    return (React.createElement(TextField$1, { onChangeText: onChangeText, value: value, type: type, label: label, helperText: helpText, placeholder: placeholder, testID: testID, accessibilityLabel: testID, accessibilityComponentType: testID, accessibilityTraits: testID }));
};

const style = StyleSheet.create({
    view: { height: 10 }
});
const HorizontalSpace = () => (React.createElement(View, { style: style.view }));

export { Button, Card, HorizontalSpace, TextField };
