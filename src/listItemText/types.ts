import { IListItemTextProps as WebListItemTextProps } from "@naturacosmeticos/natds-web";

export interface IListItemTextProps {
  testID?: string;
}

export interface IWebListItemTextProps extends WebListItemTextProps, IListItemTextProps {}
