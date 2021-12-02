import React from "react";
import { Counter as NatCounter } from "@naturacosmeticos/natds-web";

import { ICounterProps } from "./types";

export const Counter = (props: ICounterProps): React.ReactElement => {
  const {
    onChange,
    onDecrement,
    onIncrement,
    value,
    label,
    readOnly,
    size,
    maxValue,
    minValue,
  } = props;
  return (
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
    />
  );
};
