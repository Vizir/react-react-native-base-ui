import React from "react";
import { Avatar as NatAvatar } from "@naturacosmeticos/natds-rn";

import { IRNAvatarProps as IAvatarProps } from "./types";

export const Avatar = (props: IAvatarProps): React.ReactElement => {
  const { testID, imgSource, size, type } = props;

  return (
    <NatAvatar
      data-testid={testID}
      imgSource={imgSource}
      size={size}
      type={type}
    />
  );
};
