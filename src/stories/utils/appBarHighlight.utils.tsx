import React from "react";
import {
  Typography,
} from "@naturacosmeticos/natds-web";

export const TextSample = (defaultText = 'Sample text'): JSX.Element => {
  return (
    <Typography>
    {defaultText}
    </Typography>
  );
};
