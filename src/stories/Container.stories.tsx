import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextSample } from "./utils/appBarHighlight.utils";

import { Container } from "../container/container";

export default {
  title: "Utilities/Container",
  argTypes: {
    children: {
      description:
        "The content of the component. The children to render into the Container.",
      table: {
        type: { summary: "node" },
      },
    },
    component: {
      description:
        "The component used for the root node. Either a string to use a HTML element or a component. Will be div by default.",
      table: {
        type: { summary: "elementType" },
        defaultValue: { summary: "div" },
      },
      control: { type: "object" },
    },
    fixed: {
      description:
        "Set the max-width to match the min-width of the current breakpoint. This is useful if you'd prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport. It's fluid by default.",
      table: {
        type: { summary: "boolean" },
      },
      control: { type: "boolean" },
    },
    disableGutters: {
      description: "If true, the left and right padding is removed.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    maxWidth: {
      description:
        "Determine the max-width of the container. The container width grows with the size of the screen. Set to false to disable maxWidth",
      table: {
        type: { summary: 'false | "xs" | "sm" | "md" | "lg" | "xl"' },
        defaultValue: { summary: "lg" },
      },
      options: [false, "xs", "sm", "md", "lg", "xl"],
      control: { type: "radio" },
    },
  },
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: TextSample("Playground"),
  className: undefined,
  component: undefined,
  fixed: undefined,
  disableGutters: undefined,
  maxWidth: undefined,
};

export const Fixed = Template.bind({});
Fixed.args = {
  children: TextSample("Fixed"),
  className: "sample-class-name",
  component: undefined,
  fixed: true,
  disableGutters: undefined,
  maxWidth: undefined,
};

export const XsMaxSize = Template.bind({});
XsMaxSize.args = {
  children: TextSample("Xs Max Size"),
  className: "sample-class-name",
  component: undefined,
  fixed: true,
  disableGutters: undefined,
  maxWidth: "xs",
};

