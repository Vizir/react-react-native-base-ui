import React from "react";

export interface TextFieldProps {
  onChangeText: (event?: React.ChangeEvent<HTMLInputElement> | string) => void;
  value: string;
  type: "text" | "password";
  label: string;
  helpText?: string;
  placeholder: string;
  testID?: string;
}
