import React from "react";
import { Input as NatInput } from "@naturacosmeticos/natds-web";

import { IInputProps } from "./types";

export const Input = (props: IInputProps): React.ReactElement => {
  const {
    color,
    className,
    mask,
    margin,
    disabled,
    multiline,
    state,
    size,
    inputComponent,
    hasIcon,
    testID,
    value,
    onClick,
    onKeyPress,
  } = props;

  return (
    <NatInput
      color={color}
      className={className}
      mask={mask}
      margin={margin}
      disabled={disabled}
      multiline={multiline}
      state={state}
      size={size}
      inputComponent={inputComponent}
      hasIcon={hasIcon}
      data-testid={testID}
      onClick={onClick}
      onKeyPress={onKeyPress}
      value={value}
    />
  );
};
