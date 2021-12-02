import { SizePropValue } from "@naturacosmeticos/natds-web/dist/hooks/useSizeStyleProp";
import React from "react";

export interface IImageProps {
  alt: React.ImgHTMLAttributes<HTMLImageElement>["alt"];
  src: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  fallback?: string;
  className?: string;
  disableSelection?: boolean;
  height?: SizePropValue;
  maxHeight?: SizePropValue;
  maxWidth?: SizePropValue;
  radius?: boolean;
  state?: boolean;
  style?: React.ImgHTMLAttributes<HTMLImageElement>["style"];
  width?: SizePropValue;
  draggable?: boolean | "auto";
}
