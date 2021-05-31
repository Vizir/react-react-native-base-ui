export interface TextFieldProps {
  onChangeText: () => void;
  value: string;
  type: "text" | "password";
  label: string;
  helpText?: string;
  placeholder: string;
  testID?: string;
}
