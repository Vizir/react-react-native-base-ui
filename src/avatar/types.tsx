import React, {ImgHTMLAttributes} from 'react';
import { AvatarSizes, AvatarTypes } from "@naturacosmeticos/natds-rn/build/lib/components/Avatar/Avatar";
import { AvatarColor, AvatarVariant } from '@naturacosmeticos/natds-web/dist/Components/Avatar/Avatar.props';

export interface IAvatarProps {
  testID?: string;
  size?: AvatarSizes;
  type?: AvatarTypes;
  imgSource?: string;
  alt?: string;
  children?: React.ReactElement;
  color?: AvatarColor;
  src?: string;
  variant?: AvatarVariant;
  srcSet?: string;
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
  sizes?: string;
}
