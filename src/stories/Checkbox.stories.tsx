import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "../checkbox/checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      description: "If true, the component is checked.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    color: {
      description:
        "The color of the component. It supports those theme colors that make sense for this component.",
      table: {
        type: { summary: '"primary"| "secondary" | "default"' },
        defaultValue: { summary: "secondary" },
      },
      options: ["primary", "secondary", "default"],
      control: { type: "radio" },
    },
    disabled: {
      description: "If true, the checkbox will be disabled.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    indeterminate: {
      description:
        "If true, the component appears indeterminate.This does not set the native input element to indeterminate due to inconsistent behavior across browsers. However, we set a data-indeterminate attribute on the input.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    action: {
      description:
        "A ref for imperative actions. It currently only supports focusVisible() action.",
      table: {
        type: { summary: '"Ref<ButtonBaseActions>" | "undefined"' },
      },
      control: { type: "object" },
    },
    disableFocusRipple: {
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: { type: "object" },
    },
    edge: {
      description:
        "If given, uses a negative margin to counteract the padding on one side (this is often helpful for aligning the left or right side of the icon with content above or below, without ruining the border size and shape).",
      table: {
        type: { summary: 'false| "start"| "end"| undefined' },
      },
      control: { type: "object" },
    },
    centerRipple: {
      description:
        "If true, the ripples will be centered. They won`t start at the cursor interaction position",
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: { type: "object" },
    },
    disableTouchRipple: {
      description: "If true, the touch ripple effect will be disabled.",
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: { type: "boolean" },
    },
    focusRipple: {
      description:
        "If true, the base button will have a keyboard focus ripple.",
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: { type: "object" },
    },
    focusVisibleClassName: {
      control: { type: "object" },
    },
    onFocusVisible: {
      table: {
        type: { summary: '"FocusEventHandler<any>" | "undefined"' },
      },
    },
    TouchRippleProps: {
      table: {
        type: { summary: '"Partial<TouchRippleProps>" | "undefined"' },
      },
      control: { type: "object" },
    },
    checkedIcon: {
      description: "The icon to display when the component is checked.",
      table: {
        type: { summary: "node" },
      },
    },
    classes: {
      description: "Override or extend the styles applied to the component",
      table: {
        type: { summary: "object" },
      },
      control: { type: "object" },
    },
    disableRipple: {
      description: "true, the ripple effect will be disabled.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    icon: {
      description: "The icon to display when the component is unchecked.",
      table: {
        type: { summary: "node" },
      },
    },
    id: {
      description: "The id of the input element.",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    indeterminateIcon: {
      description: "The icon to display when the component is indeterminate.",
      table: {
        type: { summary: "node" },
        defaultValue: { summary: "<IndeterminateCheckBoxIcon />" },
      },
    },
    inputProps: {
      description: "Attributes applied to the input element.",
      table: {
        type: { summary: "object" },
      },
      control: { type: "object" },
    },
    inputRef: {
      description: "Pass a ref to the input element",
      table: {
        type: { summary: "ref" },
      },
    },
    onChange: {
      description: "Callback fired when state changes",
      table: {
        type: { summary: "Function" },
      },
    },
    required: {
      description: "If true, the input element will be required.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    value: {
      description:
        "The value of the component. The DOM API casts this to a string.",
      table: {
        type: { summary: "any" },
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CheckboxPlayground = Template.bind({});
CheckboxPlayground.args = {
  checked: false,
  color: "primary",
  disabled: undefined,
  indeterminate: undefined,
  action: undefined,
  disableFocusRipple: undefined,
  edge: undefined,
  centerRipple: undefined,
  disableTouchRipple: undefined,
  focusRipple: undefined,
  focusVisibleClassName: undefined,
  onFocusVisible: undefined,
  TouchRippleProps: undefined,
  checkedIcon: undefined,
  classes: undefined,
  disableRipple: undefined,
  icon: undefined,
  id: undefined,
  indeterminateIcon: undefined,
  inputProps: undefined,
  inputRef: undefined,
  onChange: undefined,
  required: undefined,
  value: undefined,
};

export const Contained = Template.bind({});
Contained.args = {
  color: "primary",
  checked: true,
};
