import React from "react";
import { Link as NatLink } from "@naturacosmeticos/natds-web";

import {ILinkProps} from './types';

export const Link = React.forwardRef<HTMLLinkElement | HTMLAnchorElement, ILinkProps>(
  (props: ILinkProps, ref) => {
    const {children} = props;

    return (
      <NatLink {...props} ref={ref}>{children}</NatLink>
    )
  }
);

Link.displayName = "Link";
