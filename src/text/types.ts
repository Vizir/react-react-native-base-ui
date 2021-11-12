import React from "react";
import { ITypographyProps } from "@naturacosmeticos/natds-web";
import { TypographyAlign, TypographyColor, TypographyVariant } from "@naturacosmeticos/natds-web/dist/Components/Typography/Typography.props"

export interface ITextProps extends ITypographyProps {
  children: React.ReactNode;
  testID?: string;
  align?: TypographyAlign;
  color?: TypographyColor;
  variant?: TypographyVariant;
}
