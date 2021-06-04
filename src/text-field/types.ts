import React from "react";

export interface TextFieldProps {
  onChangeText: (value: string) => void;
  value: string;
  type: "text" | "password";
  label: string;
  helpText?: string;
  placeholder: string;
  testID?: string;
}
