import React from "react";

interface Props {
  children: React.ReactNode;
  testID?: string;
}

export const Text: React.FC<Props> = (props: Props): React.ReactElement => {
  const { children, testID } = props;
  return <span data-testid={testID}>{children}</span>;
};
