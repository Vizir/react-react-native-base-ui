import React from 'react';
import {
  Image as NatImage,
  ImageProps
} from '@naturacosmeticos/natds-web';

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (props: ImageProps, ref) => <NatImage {...props} ref={ref} />
);

Image.displayName = 'Image';
