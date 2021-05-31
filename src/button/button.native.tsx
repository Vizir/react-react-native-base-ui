import React from "react";
import { Button as NatButton } from "@naturacosmeticos/natds-rn";

import { Props } from "./types";

export const Button = ({ onPress, text, testID }: Props): React.ReactElement => {
  return (
    <NatButton
      text={text}
      onPress={onPress}
      testID={testID}
      accessibilityLabel={testID}
    />
  );
};
