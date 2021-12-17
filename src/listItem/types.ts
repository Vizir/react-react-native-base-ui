import { IListItemProps as WebListItemProps } from "@naturacosmeticos/natds-web";

export interface IListItemProps {
  testID?: string;
}

export interface IWebListItemProps extends WebListItemProps, IListItemProps {}
