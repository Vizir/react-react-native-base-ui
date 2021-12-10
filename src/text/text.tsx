import React from "react";
import { Typography as NatTypography, ITypographyProps } from "@naturacosmeticos/natds-web";

export const Text = React.forwardRef<HTMLSpanElement | HTMLElement, ITypographyProps>((props: ITypographyProps, ref) => {
  const {children} = props

  return (
    <NatTypography {...props} ref={ref}>{children}</NatTypography>
  )
})

Text.displayName = 'Text'
