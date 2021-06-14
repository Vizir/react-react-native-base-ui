import React from "react";
import styled from "styled-components";

import { IViewProps } from "./types";

const StyledView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const View = ({
  className,
  children,
  testID
}: IViewProps): React.ReactElement => {
  return (
    <StyledView className={className} data-testid={testID}>
      {children}
    </StyledView>
  );
};
