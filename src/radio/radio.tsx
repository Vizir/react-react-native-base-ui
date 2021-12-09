import React from "react";
import { Radio as NatRadio } from "@naturacosmeticos/natds-web";

import { IRadioProps } from "./types";

export const Radio = React.forwardRef<HTMLButtonElement, IRadioProps>(
  (props: IRadioProps, ref) => {
    const { ...rest } = props;

    return <NatRadio {...rest} ref={ref} />;
  }
);

Radio.displayName = "Radio";
