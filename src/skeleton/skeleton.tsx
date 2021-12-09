import React from "react";
import { Skeleton as NatSkeleton } from "@naturacosmeticos/natds-web";

import { ISkeletonProps } from "./types";

export const Skeleton = React.forwardRef<HTMLDivElement, ISkeletonProps>(
  ({ variant, height, width, animation, ...rest }: ISkeletonProps, ref) => (
    <NatSkeleton
      variant={variant}
      height={height}
      width={width}
      animation={animation}
      ref={ref}
      {...rest}
    />
  )
);

Skeleton.displayName = "Skeleton";
