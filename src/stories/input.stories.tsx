import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "../input/input";

export default {
  title: "Components/Input",
  argTypes: {
    className: {
      description:
        "Specifies one or more class names for the element.Will be forwarded to the HTML element as the class attribute.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "object" },
    },
    mask: {
      description: "Mask format. Based on React Input Mask",
      table: {
        type: { summary: "Mask | MaskFn | undefined" },
      },
      control: { type: "object" },
    },
    margin: {
      description:
        "If dense, will adjust vertical spacing.This is normally obtained via context from FormControl. The normal value is not supported.",
      table: {
        type: { summary: '"done" | "none"' },
      },
      options: ["done", "none"],
      control: { type: "radio" },
    },
    disabled: {
      description: "If true, the input or textarea element will be disabled.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    multiline: {
      description: "If true, a textarea element will be rendered.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    state: {
      table: {
        type: { summary: '"error" | "success"' },
      },
      options: ["error", "success"],
      control: { type: "radio" },
    },
    size: {
      description: "The height of input field",
      table: {
        type: { summary: 'undefined | "semiX" | "medium" | "mediumX"' },
        defaultValue: { summary: "mediumX" },
      },
      options: [undefined, "semiX", "medium", "mediumX"],
      control: { type: "radio" },
    },
    inputComponent: {
      description:
        "The component used for the input element. Either a string to use a HTML element or a componen",
    },
    hasIcon: {
      table: {
        type: { summary: "ElementType<InputBaseComponentProps> | undefined" },
      },
      control: { type: "boolean" },
    },
    onClick: {
      table: {
        type: { summary: "Function" },
      },
    },
    onKeyPress: {
      table: {
        type: { summary: "Function" },
      },
    },
    value: {
      description: "The value of the component.",
    },
  },
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  value: "Sample Text Playground",
  className: undefined,
  mask: undefined,
  margin: undefined,
  disabled: undefined,
  multiline: undefined,
  state: undefined,
  size: undefined,
  inputComponent: undefined,
  hasIcon: undefined,
  testID: undefined,
  onClick: undefined,
  onKeyPress: undefined,
  color: undefined,
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  size: "semiX",
};

export const StateError = Template.bind({});
StateError.args = {
  multiline: false,
  state: "error",
  size: "semiX",
  value: "Sample Text Error",
};

export const StateSuccess = Template.bind({});
StateSuccess.args = {
  multiline: false,
  state: "success",
  size: "semiX",
  value: "Sample Text Success",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  value: "Sample Text Disabled",
};
