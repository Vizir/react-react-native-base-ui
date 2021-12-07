import React, { ReactElement } from "react";
import { Badge as NatBadge } from "@naturacosmeticos/natds-web";

import { IBadgeProps } from "./types";

export const Badge = (props: IBadgeProps): ReactElement => {
  const {
    children,
    anchorOrigin,
    badgeContent,
    color,
    invisible,
    max,
    overlap,
    showZero,
    variant,
    testID
  } = props;

  return (
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
    >
      {children}
    </NatBadge>
  );
};
