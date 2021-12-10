import React from "react";
import {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Icon,
  Typography,
} from "@naturacosmeticos/natds-web";

export const ExpansionPanelSummarySample = (): JSX.Element => {
  return (
    <>
      <ExpansionPanelSummary
        expandIcon={
          <Icon name="outlined-navigation-arrowbottom" size="small" />
        }
      >
        <Typography variant="subtitle1">
          Expansion panel summary with subtitle 1 typography
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="subtitle1">
          Expansion panel details with subtitle 1 typography
        </Typography>
      </ExpansionPanelDetails>
    </>
  );
};
