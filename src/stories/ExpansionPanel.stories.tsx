import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ExpansionPanelSummarySample } from "./utils/expansionPanel.utils";

import { ExpansionPanel } from "../expansionPanel/expansionPanel";

export default {
  title: "Components/ExpansionPanel",
  argTypes: {
    children: {
      description: "The content of the expansion panel.All of children must be ExpansionPanelActions, ExpansionPanelDetails or ExpansionPanelSummary components.Otherwise, you may receive the following error message: TypeError: Cannot read property 'props' of undefined at Accordion",
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
    onChange: {
      description: "Callback fired when the expand/collapse state is changed.(event, expanded)",
    },
  TransitionComponent: {
    description: "The component used for the collapse effect. Follow this guide to learn more about the requirements for this component",
    table: {
      type: { summary: "element" },
      defaultValue: { summary: "Collapse" },
    },
  },
  TransitionProps: {
    description: "Props applied to the Transition element.",
    table: {
      type: { summary: "object" },
      defaultValue: { summary: "Collapse" },
    },
  },
  disabled: {
    description: "If true, the panel will be displayed in a disabled state.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
    control: { type: "boolean" },
  },
  expanded: {
    description: "If true, expands the panel, otherwise collapse it. Setting this prop enables control over the panel",
    table: {
      type: { summary: "boolean" },
    },
    control: { type: "boolean" },
  },
  defaultExpanded: {
    description: "If true, expands the panel by default.",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
    control: { type: "boolean" },
  },
  },
  component: ExpansionPanel,
} as ComponentMeta<typeof ExpansionPanel>;

const Template: ComponentStory<typeof ExpansionPanel> = (args) => (
  <ExpansionPanel {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: ExpansionPanelSummarySample(),
  classes: undefined,
  onChange: undefined,
  TransitionComponent: undefined,
  TransitionProps: undefined,
  disabled: undefined,
  expanded: undefined,
  defaultExpanded: undefined,
};

export const Expanded = Template.bind({});
Expanded.args = {
  children: ExpansionPanelSummarySample(),
  classes: undefined,
  onChange: undefined,
  TransitionComponent: undefined,
  TransitionProps: undefined,
  disabled: undefined,
  expanded: true,
  defaultExpanded: undefined,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: ExpansionPanelSummarySample(),
  classes: undefined,
  onChange: undefined,
  TransitionComponent: undefined,
  TransitionProps: undefined,
  disabled: true,
  expanded: undefined,
  defaultExpanded: undefined,
};

