import React from "react";
import { Button as NatButton } from "@naturacosmeticos/natds-web";

import { Props } from "./types";

export const Button = (props: Props): React.ReactElement => {
  const { onPress, text, testID } = props;

  return (
    <NatButton
      color="primary"
      variant="contained"
      data-testid={testID}
      onClick={onPress}
    >
      {text}
    </NatButton>
  );
};
