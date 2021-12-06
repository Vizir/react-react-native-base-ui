import React from "react";
import { Logo as NatLogo } from "@naturacosmeticos/natds-web";

import { ILogoProps } from "./types";

export const Logo = (props: ILogoProps): React.ReactElement => {
  const { color, model, size, arialabel } = props;
  return (
    <NatLogo color={color} model={model} size={size} arialabel={arialabel} />
  );
};
