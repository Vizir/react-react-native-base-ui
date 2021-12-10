import React from "react";
import { Input as NatInput, IInputProps } from "@naturacosmeticos/natds-web";

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props:IInputProps, ref) => <NatInput {...props} ref={ref} />
);

Input.displayName = 'Input';
