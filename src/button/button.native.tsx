import React from "react";
import { Button as NatButton } from "@naturacosmeticos/natds-rn";

import { IRNButtonProps } from "./types";

export const Button = ({
  onPress,
  text,
  testID,
  type = "contained",
  size = "semiX",
}: IRNButtonProps): React.ReactElement => {
  return (
    <NatButton
      text={text}
      onPress={onPress}
      testID={testID}
      accessibilityLabel={testID}
      type={type}
      size={size}
    />
  );
};
