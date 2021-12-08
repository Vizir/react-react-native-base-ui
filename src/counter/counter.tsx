import React from "react";
import { Counter as NatCounter } from "@naturacosmeticos/natds-web";

import { ICounterProps } from "./types";

export const Counter = React.forwardRef<HTMLDivElement, ICounterProps>(
  ({
    onChange,
    onDecrement,
    onIncrement,
    value,
    label,
    readOnly,
    size,
    maxValue,
    minValue,
    ...rest
  }: ICounterProps) => (
    <NatCounter
      value={value}
      label={label}
      readOnly={readOnly}
      size={size}
      maxValue={maxValue}
      minValue={minValue}
      onChange={onChange}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      {...rest}
    />
  )
);

Counter.displayName = "Counter";
