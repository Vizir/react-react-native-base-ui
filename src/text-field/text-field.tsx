import React from "react";
import { TextField as NatTextField } from "@naturacosmeticos/natds-web";

import { TextFieldProps } from "./types";

export const TextField = (props: TextFieldProps): React.ReactElement => {
  const {
    onChangeText,
    value,
    type,
    label,
    helpText,
    placeholder,
    testID
  } = props;

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {value} = e.target;
    onChangeText(value)
  }

  return (
    <NatTextField
      onChange={handleChangeText}
      value={value}
      type={type}
      label={label}
      helpText={helpText}
      placeholder={placeholder}
      data-testid={testID}
    />
  );
};
