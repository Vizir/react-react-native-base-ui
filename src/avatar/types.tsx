import { IAvatarProps } from "@naturacosmeticos/natds-web";
import { AvatarProps, AvatarImageProps } from "@naturacosmeticos/natds-rn/build/lib/components/Avatar/Avatar.types";

export type IRNAvatarProps = AvatarProps & AvatarImageProps;

export interface IWebAvatarProps extends IAvatarProps {
  testID?: string;
}
