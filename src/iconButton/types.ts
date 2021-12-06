import { IIconButtonProps as WebIconButtonProps } from "@naturacosmeticos/natds-web";

export interface IIconButtonProps {
  testID?: string;
}

export interface IWebIconButtonProps extends WebIconButtonProps, IIconButtonProps {}
