import React from "react";
import { Rating as NatRating, IRatingProps } from "@naturacosmeticos/natds-web";

export const Rating = React.forwardRef<HTMLButtonElement, IRatingProps>(
  (props: IRatingProps) => {
    const { id, size, rate, ...rest } = props;

    return <NatRating id={id} size={size} rate={rate} {...rest} />;
  }
);

Rating.displayName = "Rating";
