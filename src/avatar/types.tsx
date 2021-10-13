import { AvatarSizes, AvatarTypes } from "@naturacosmeticos/natds-rn/build/lib/components/Avatar/Avatar";

export interface IAvatarProps {
  testID?: string;
  size: AvatarSizes;
  type: AvatarTypes;
  imgSource: string;
}
