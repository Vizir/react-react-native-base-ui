import { IListItemProps as WebListItemProps } from "@naturacosmeticos/natds-web";

export interface IListItemProps extends Omit<WebListItemProps, "button"> {
  testID?: string;
}
