import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../button/button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: {
      description: "The content of the button",
      table: {
        type: { summary: "node" },
        defaultValue: { summary: "default" },
      },
      options: [],
      control: { type: "function" },
    },
    color: {
      description:
        'The color of the "Button" component. It supports those theme colors that make sense for this component.',
      table: {
        type: { summary: '"default" |"inherit" | "primary" | "secondary"' },
        defaultValue: { summary: "default" },
      },
      options: ["default", "inherit", "primary", "secondary"],
      control: { type: "radio" },
    },
    endIcon: {
      description: "Element placed after the children.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    startIcon: {
      description: "Element placed before the children.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    size: {
      description:
        'The size of the button. "small" is equivalent to the dense button styling.',
      table: {
        type: { summary: '"small" | "medium" | "large"' },
        defaultValue: { summary: "small" },
      },
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant to use.",
      table: {
        type: { summary: '"contained" | "outlined" | "text"' },
        defaultValue: { summary: "contained" },
      },
      options: ["contained", "outlined", "text"],
      control: { type: "radio" },
    },
    text: {
      description: "The text content.",
    },
    onPress: {
      description: "The function called when the button is pressed.",
      control: { type: "object" },
    },
    testID: {
      description: "The reference ID for testing components.",
    },
    href: {
      description:
        'The URL to link to when the button is clicked. If defined, an "a" element will be used as the root node.',
    },
    fullWidth: {
      description:
        'If "true", the "Button" will take up the full width of its container.',
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disableElevation: {
      description: 'If "true", no elevation is used.',
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disabledso: {
      description: 'If "true", the "Button" will be disabled.',
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    disableFocusRipple: {
      description: 'If "true", the ripple effect will be disabled.',
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: undefined,
  variant: "contained",
  text: "Text",
  color: "primary",
  size: "medium",
  action: (): void => {},
  disabled: false,
  disableFocusRipple: false,
  centerRipple: false,
  disableTouchRipple: false,
  href: "",
  disableElevation: false,
  fullWidth: false,
  onPress: (): void => console.log("Clicked"),
};

export const Text = Template.bind({});
Text.args = {
  children: undefined,
  variant: "text",
  text: "Text",
};

export const Outline = Template.bind({});
Outline.args = {
  children: undefined,
  variant: "outlined",
  text: "Text",
};

export const Small = Template.bind({});
Small.args = {
  children: undefined,
  variant: "contained",
  size: "small",
  text: "Text",
};

export const Medium = Template.bind({});
Medium.args = {
  variant: "contained",
  size: "medium",
  text: "Text",
};

export const Large = Template.bind({});
Large.args = {
  children: undefined,
  variant: "contained",
  size: "large",
  text: "Text",
};
