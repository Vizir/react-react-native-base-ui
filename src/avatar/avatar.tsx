import React from "react";
import { Avatar as NatAvatar } from "@naturacosmeticos/natds-web";

import { IWebAvatarProps } from "./types";

export const Avatar = React.forwardRef<HTMLDivElement, IWebAvatarProps>(
  (
    {
      testID,
      size,
      variant,
      alt,
      imgProps,
      color,
      children,
      src,
      srcSet,
      sizes,
      ...rest
    }: IWebAvatarProps,
    ref
  ) => (
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
      ref={ref}
      {...rest}
    >
      {children}
    </NatAvatar>
  )
);

Avatar.displayName = "Avatar";
