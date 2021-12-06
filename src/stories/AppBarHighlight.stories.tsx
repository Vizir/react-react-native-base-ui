import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextSample } from "./utils/appBarHighlight.utils";

import { AppBarHighlight } from "../appBarHighlight/appBarHighlight";

export default {
  title: "Components/AppBarHighlight",
  argTypes: {
    children: {
      description: "Used to render elements inside the AppBarHighlight",
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    className: {
      description: "Specifies one or more class names for the element.Will be forwarded to the HTML element as the class attribute.",
      table: {
        type: { summary: 'string | undefined' },
      },
    },
    component: {
      description: "The component used for the root node. Either a string to use a HTML element of a component.",
      table: {
        type: { summary: 'React.ElementType' },
      },
    },
  },
  component: AppBarHighlight,
} as ComponentMeta<typeof AppBarHighlight>;

const Template: ComponentStory<typeof AppBarHighlight> = (args) => (
  <AppBarHighlight {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  component: undefined,
  className: undefined,
  children: undefined,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  component: undefined,
  className: undefined,
  children: TextSample()
};

export const WithClass = Template.bind({});
WithClass.args = {
  component: undefined,
  className: "sample-class-name",
  children: TextSample()
};

