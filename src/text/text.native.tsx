import React from "react";
import styled from "styled-components/native";

import { ITextProps } from "./types";
const TextStyled = styled.Text``;

export const Text = (props: ITextProps): React.ReactElement => {
  const { children, testID } = props;

  return <TextStyled accessibilityLabel={testID}>{children}</TextStyled>;
};
