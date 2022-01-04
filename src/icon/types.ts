import { IIconProps as WebIconProps } from "@naturacosmeticos/natds-web/dist/Components/Icon/Icon.props";
import { IconProps as RNIconProps } from "@naturacosmeticos/natds-rn/build/lib/components/Icon/Icon.types";
export interface IIconProps {
  testID?: string;
}

export interface IRNIconProps extends RNIconProps, IIconProps {}

export interface IWebIconProps extends WebIconProps, IIconProps {}
