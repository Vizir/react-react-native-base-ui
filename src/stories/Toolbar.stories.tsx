import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Toolbar } from "../toolbar/toolbar";

export default {
  title: "Components/Toolbar",
  argTypes: {
    variant: {
      description: "The variant to use.",
      table: {
        type: { summary: 'undefined | "regular" | "dense"| "prominent"' },
      },
      options: [undefined , "regular" , "dense", "prominent"],
      control: { type: "radio" },
    },
  },
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

const Template: ComponentStory<typeof Toolbar> = (args) => (
  <Toolbar {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  color: undefined,
  variant: undefined,
  disableGutters: undefined
};
