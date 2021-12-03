import { ButtonBaseProps as RNButtonProps } from "@naturacosmeticos/natds-rn/build/lib/components/Button/Button.types";
import { IButtonProps as WebButtonProps } from "@naturacosmeticos/natds-web/dist/Components/Button/Button.props";
export interface IButtonProps {
  text: string;
  onPress: () => void;
  testID?: string;
}

export interface IWebButtonProps extends IButtonProps, WebButtonProps {}
export interface IRNButtonProps extends IButtonProps, RNButtonProps {}
