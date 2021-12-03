import React from "react";
import { Avatar as NatAvatar } from "@naturacosmeticos/natds-web";

import { IAvatarProps } from "./types";

export const Avatar = (props: IAvatarProps): React.ReactElement => {
  const { testID, size, variant, alt, imgProps, color, children, src, srcSet, sizes } = props;

  return (
    <NatAvatar
      color={color}
      data-testid={testID}
      size={size}
      variant={variant}
      alt={alt}
      imgProps={imgProps}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
    >
      {children}
    </NatAvatar>
  );
};
