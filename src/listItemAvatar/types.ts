import { IListItemAvatarProps as WebListItemAvatarProps } from "@naturacosmeticos/natds-web";

export interface IListItemAvatarProps {
  testID: string;
}

export interface IWebListItemAvatarProps extends Omit<WebListItemAvatarProps, 'ref'>, IListItemAvatarProps {}
