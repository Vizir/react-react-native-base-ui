import React from "react";
import { Avatar as NatAvatar } from "@naturacosmeticos/natds-web";

import { IAvatarProps } from "./types";

export const Avatar = (props: IAvatarProps): React.ReactElement => {
  const { testID, size } = props;

  return (
    <NatAvatar
      color="primary"
      data-testid={testID}
      size={size}
    />
  );
};
