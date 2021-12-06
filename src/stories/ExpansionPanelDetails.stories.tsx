import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExpansionPanelDetails } from "../expansionPanelDetails/expansionPanelDetails";

export default {
  title: "Components/ExpansionPanelDetails",
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
  component: ExpansionPanelDetails,
} as ComponentMeta<typeof ExpansionPanelDetails>;

const Template: ComponentStory<typeof ExpansionPanelDetails> = (args) => (
  <ExpansionPanelDetails {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: "  Expansion panel details content",
  classes: undefined,
};
