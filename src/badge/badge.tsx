import React from "react";
import { Badge as NatBadge } from "@naturacosmeticos/natds-web";

import { IBadgeProps } from "./types";

export const Badge = React.forwardRef<HTMLDivElement, IBadgeProps>(
  (
    {
      children,
      anchorOrigin,
      badgeContent,
      color,
      invisible,
      max,
      overlap,
      showZero,
      variant,
      testID,
      ...rest
    }: IBadgeProps,
    ref
  ) => (
    <NatBadge
      anchorOrigin={anchorOrigin}
      badgeContent={badgeContent}
      color={color}
      invisible={invisible}
      max={max}
      overlap={overlap}
      showZero={showZero}
      variant={variant}
      data-testid={testID}
      ref={ref}
      {...rest}
    >
      {children}
    </NatBadge>
  )
);

Badge.displayName = "Badge";
