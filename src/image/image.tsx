import React from "react";
import { Image as NatImage } from "@naturacosmeticos/natds-web";

import { IImageProps } from "./types";

export const Image = ({
  alt,
  src,
  fallback,
  className,
  disableSelection,
  height,
  maxHeight,
  maxWidth,
  radius,
  state,
  style,
}: IImageProps): React.ReactElement => {
  return (
    <NatImage
      alt={alt}
      src={src}
      fallback={fallback}
      className={className}
      disableSelection={disableSelection}
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      radius={radius}
      state={state}
      style={style}
    />
  );
};
