import React from "react";
import styled from "styled-components/native";

import { IViewProps } from "./types";

const ViewStyled = styled.View``;

export const View = (props: IViewProps): React.ReactElement => {
  const { testID, children } = props;

  return <ViewStyled accessibilityLabel={testID}>{children}</ViewStyled>;
};
