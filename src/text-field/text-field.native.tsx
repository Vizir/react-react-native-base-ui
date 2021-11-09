import React from "react";
import { TextField as NatTextField } from "@naturacosmeticos/natds-rn";

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

  return (
    <NatTextField
      onChangeText={onChangeText}
      value={value}
      type={type}
      label={label}
      helperText={helpText}
      placeholder={placeholder}
      testID={testID}
      accessibilityLabel={testID}
    />
  );
};
