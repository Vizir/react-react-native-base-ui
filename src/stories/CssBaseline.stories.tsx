import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextSample } from "./utils/appBarHighlight.utils";

import { CssBaseline } from "../cssBaseline/cssBaseline";

export default {
  title: "Utilities/CssBaseline",
  argTypes: {
    children: {
      description: "The content of the component.",
      table: {
        type: { summary: "node" },
      },
    },
    classes: {
      description: "Override or extend the styles applied to the component.",
      table: {
        type: { summary: "object" },
      },
      control: {
        type: "object",
      },
    },
  },
  component: CssBaseline,
} as ComponentMeta<typeof CssBaseline>;

const Template: ComponentStory<typeof CssBaseline> = (args) => (
  <CssBaseline {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: TextSample(),
  classes: undefined,
};
