import React from 'react';

export interface IImageProps {
  alt: React.ImgHTMLAttributes<HTMLImageElement>['alt'];
  src?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
}
