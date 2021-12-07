import { IListItemIconProps as WebListItemIconProps } from "@naturacosmeticos/natds-web";

export interface IListItemIconProps {
  testID?: string;
}

export interface IWebListItemIconProps extends WebListItemIconProps, IListItemIconProps {}
