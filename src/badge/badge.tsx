import React, { ReactElement } from "react";
import { Badge as NatBadge } from "@naturacosmeticos/natds-web";

import { IBadgeProps } from "./types";

export const Badge = (props: IBadgeProps): ReactElement => {
  return <NatBadge {...props}></NatBadge>;
};
