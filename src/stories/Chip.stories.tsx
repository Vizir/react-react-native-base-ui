import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chip } from "../chip/chip";

export default {
  title: "Components/Chip",
  argTypes: {
    color: {
      description:
        "The color of the component. It supports those theme colors that make sense for this component.",
      table: {
        type: { summary: '"default"| "primary"| "secondary"' },
        defaultValue: { summary: "default" },
      },
      options: ["default", "primary", "secondary"],
      control: { type: "radio" },
    },
    children: {
      description: "The content of the label.",
      table: {
        type: { summary: "node" },
      },
    },
    variant: {
      description: "The variant to use.",
      table: {
        type: { summary: '"default"| "outlined"' },
        defaultValue: { summary: "default" },
      },
      options: ["default", "outlined"],
      control: { type: "radio" },
    },
    clickable: {
      description:
        "If true, the chip will appear clickable, and will raise when pressed, even if the onClick prop is not defined.If false, the chip will not be clickable, even if onClick prop is defined. This can be used, for example, along with the component prop to indicate an anchor Chip is clickable.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
    },
    disabled: {
      description: "If true, the chip should be displayed in a disabled state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    classes: {
      description: "Override or extend the styles applied to the component.",
      table: {
        type: { summary: "object" },
      },
      control: { type: "object" },
    },
    component: {
      description:
        "The component used for the root node. Either a string to use a DOM element or a component.",
      table: {
        type: { summary: "element" },
      },
      control: { type: "object" },
    },
    icon: {
      description: "Icon element.",
      table: {
        type: { summary: "element" },
      },
      control: { type: "object" },
    },
    avatar: {
      description: "Avatar element.",
      table: {
        type: { summary: "element" },
      },
      control: { type: "object" },
    },
    deleteIcon: {
      description:
        "Override the default delete icon element. Shown only if onDelete is set.",
      table: {
        type: { summary: "Function" },
      },
    },
  },
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args}>Test App Bar</Chip>
);

export const ChipPlayground = Template.bind({});
ChipPlayground.args = {
  color: "primary",
  label: "Test Playground",
  variant: "default",
  clickable: true,
  disabled: false,
  classes: undefined,
  component: undefined,
  icon: undefined,
  avatar: undefined,
  deleteIcon: undefined,
  onDelete: undefined,
};

export const ChipStandard = Template.bind({});
ChipStandard.args = {
  color: "secondary",
  label: "Test Standard",
  variant: "default",
};

export const ChipClickable = Template.bind({});
ChipClickable.args = {
  color: "primary",
  label: "Test Clickable",
  variant: "default",
  clickable: true,
};

export const ChipDisabled = Template.bind({});
ChipDisabled.args = {
  color: "primary",
  label: "Test disabled",
  variant: "default",
  clickable: true,
  disabled: true,
};
