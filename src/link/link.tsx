import React from "react";
import { Link as NatLink } from "@naturacosmeticos/natds-web";

import { ILinkProps } from "./types";

export const Link = (props: ILinkProps): React.ReactElement => {
  const {
    children,
    color,
    href,
    underline,
    variant,
    component,
    classes,
    display,
    noWrap,
    gutterBottom,
    paragraph,
    align,
    variantMapping,
    TypographyClasses,
    onClick,
    onKeyPress,
  } = props;
  return (
    <NatLink
      color={color}
      href={href}
      underline={underline}
      variant={variant}
      component={component}
      classes={classes}
      display={display}
      noWrap={noWrap}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      align={align}
      variantMapping={variantMapping}
      TypographyClasses={TypographyClasses}
      onClick={onClick}
      onKeyPress={onKeyPress}
    >
      {children}
    </NatLink>
  );
};
