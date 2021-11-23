import React from 'react';
import { Image as NatImage } from '@naturacosmeticos/natds-web';

import { IImageProps } from './types';

export const Image = ({alt, src}: IImageProps): React.ReactElement => {
  return (
    <NatImage alt={alt} src={src} />
  )
}
