import React from "react";
import { Typography } from "@naturacosmeticos/natds-web";

import { ITextProps } from "./types";

export const Text = (props: ITextProps): React.ReactElement => {
  const {
    children,
    testID,
    color,
    align,
    variant,
    classes,
    component,
    display,
    noWrap,
    gutterBottom,
    paragraph,
    variantMapping
  } = props;

  return (
    <Typography
      data-testid={testID}
      color={color}
      align={align}
      variant={variant}
      classes={classes}
      component={component}
      display={display}
      noWrap={noWrap}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      variantMapping={variantMapping}
    >
      {children}
    </Typography>
  );
};
