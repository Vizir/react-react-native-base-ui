import React from "react";
import { View, StyleSheet } from "react-native";

const style = StyleSheet.create({
  view: { height: 10 }
});

export const HorizontalSpace = (): React.ReactElement => (
  <View style={style.view} />
);
