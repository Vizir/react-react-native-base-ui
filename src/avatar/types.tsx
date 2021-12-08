import { IAvatarProps } from "@naturacosmeticos/natds-web";
import { AvatarProps } from "@naturacosmeticos/natds-rn/build/lib/components/Avatar/Avatar";

export interface IRNAvatarProps extends AvatarProps {
  testID?: string;
}

export interface IWebAvatarProps extends IAvatarProps {
  testID?: string;
}
