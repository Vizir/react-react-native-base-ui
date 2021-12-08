import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon, IconButton, Text as Typography } from "../index";
import { SnackbarContent } from "../snackbarContent/snackbarContent";

export default {
  title: "Components/Snackbar/SnackbarContent",
  component: SnackbarContent,
  argTypes: {
    classes: {
      description:
        "Override or extend the styles applied to the component. Check CSS API for more details.",
      table: {
        type: { summary: "object" },
      },
    },
    role: {
      description:
        "The role of the SnackbarContent.\
      If the Snackbar requires focus to be closed, the alertdialog role should be used instead.",
      table: {
        type: { summary: '"alert" "alertDialog"' },
        defaultValue: { summary: '"alert"' },
      },
    },
    color: {
      description:
        "The color scheme to be applied to the content (including the background) based on the theme.",
      table: {
        type: { summary: '"default" "error" "success" "warning" "info"' },
        defaultValue: { summary: '"default"' },
      },
      control: {
        options: ["default", "error", "success", "warning", "info"],
        type: 'radio',
      },
    },
    action: {
      description: "The action to display.",
      table: {
        type: { summary: "node" },
      },
    },
    message: {
      description: "The message to display.",
      table: {
        type: { summary: "node" },
      },
    },
  },
} as ComponentMeta<typeof SnackbarContent>;

const Template: ComponentStory<typeof SnackbarContent> = (args) => (
  <SnackbarContent {...args} />
);

export const SnackbarContentSuccess = Template.bind({});
SnackbarContentSuccess.args = {
  action: (
    <IconButton aria-label="Close" color="inherit">
      <Icon name="outlined-navigation-close" size="tiny" />
    </IconButton>
  ),
  message: (
    <div style={{ alignItems: "center", display: "flex" }}>
      <Typography variant="body2">Test snackBar Content success</Typography>
    </div>
  ),
  color: "success",
};

export const SnackbarContentWarning = Template.bind({});
SnackbarContentWarning.args = {
  action: (
    <IconButton aria-label="Close" color="inherit">
      <Icon name="outlined-navigation-close" size="tiny" />
    </IconButton>
  ),
  message: (
    <div style={{ alignItems: "center", display: "flex" }}>
      <Typography variant="body2">Test snackBar Content warning</Typography>
    </div>
  ),
  color: "warning",
};
