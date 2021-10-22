import React from "react";
import { Button as NatButton } from "@naturacosmeticos/natds-rn";

import { IButtonProps } from "./types";

export const Button = ({
  onPress,
  text,
  testID,
  variant="contained",
  mobileSize="semiX",
}: IButtonProps): React.ReactElement => {
  return (
    <NatButton
      text={text}
      onPress={onPress}
      testID={testID}
      accessibilityLabel={testID}
      type={variant}
      size={mobileSize}
    />
  );
};
