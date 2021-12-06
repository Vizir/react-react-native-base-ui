import { IIconProps as WebIconProps } from "@naturacosmeticos/natds-web/dist/Components/Icon/Icon.props";
export interface IIconProps {
  testID?: string;
}

export interface IWebIconProps extends WebIconProps, IIconProps {}
