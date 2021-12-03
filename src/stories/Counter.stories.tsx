import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "../counter/counter";

export default {
  title: "Components/Counter",
  component: Counter,
  argTypes: {
    value: {
      description: "The value of input",
      table: {
        type: { summary: 'number | undefined ' },
        defaultValue: { summary: 0 },
      },
    },
    label: {
      description: 'Insert a label above Counter input group. This attribute is optional.'
    },
    readOnly: {
      description: 'If true disable component actions.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }

    },
    size: {
      description: 'Select Counter component height',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '\"small\"' },
      }
    },
    maxValue: {
      description: 'The maximum valid value for the component',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 99 },
      }
    },
    minValue: {
      description: 'The minimum valid value for the component',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      }
    },
    onChange: {
      description: 'Execute a callback when user change the input manually.',
      table: {
        type: { summary: 'Function' },
      }
    },
    onIncrement: {
      description: 'Execute a callback when increment button is pressed.',
      table: {
        type: { summary: 'Function' },
      }
    },
    onDecrement: {
      description: 'Execute a callback when decrement button is pressed.',
      table: {
        type: { summary: 'Function' },
      }
    },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const CounterPlayground = Template.bind({});
CounterPlayground.args = {
  value: 1,
  label: "sample label",
  readOnly: false,
  size: "medium",
  maxValue: 99,
  minValue: 0,
  onChange: undefined,
  onIncrement: undefined,
  onDecrement: undefined,
};

export const CounterComponent = Template.bind({});
CounterComponent.args = {
  value: 0,
};
