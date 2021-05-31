import React from "react";
import styled from "styled-components";

export interface IViewProps {
  children: React.ReactNode;
  className?: string;
  testID?: string;
}

const StyledView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const View = ({ className, children, testID }: IViewProps): React.ReactElement => {
  return (
    <StyledView className={className} data-testid={testID}>
      {children}
    </StyledView>
  );
};
