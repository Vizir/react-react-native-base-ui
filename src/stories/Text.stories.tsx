import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../text/text";

export default {
  title: "Components/Text",
  argTypes: {
    children: {
      description:
        "The inner content of Typography.Children nodes to apply the typography.",
      table: {
        type: { summary: "node" },
      },
    },
    color: {
      description:
        "The color of the component.It supports those theme colors that make sense for this component.",
      table: {
        type: {
          summary:
            '"error"| "inherit"| "initial"| "primary"| "secondary"| "textPrimary"| "textSecondary"',
        },
        defaultValue: { summary: "initial" },
      },
    },
    align: {
      description: "Set the text-align on the component. Defaults to 'inherit'",
      table: {
        type: { summary: '"inherit"| "left"| "center"| "right"' },
        defaultValue: { summary: "inherit" },
      },
      options: ["inherit", "left", "center", "right"],
      control: { type: "radio" },
    },
    gutterBottom: {
      description: "If true, the text will have a bottom margin.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    noWrap: {
      description:
        "If true, the text will not wrap, but instead will truncate with a text overflow ellipsis.Note that text overflow can only happen with block or inline-block level elements. The element needs to have a width in order to overflow).",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
    paragraph: {
      description: "If true and component property is undefined, the component used for root node will be p.If true, the text will have a bottom margin.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
    },
  },
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextPlayground = Template.bind({});
TextPlayground.args = {
  children: "Text Test",
  color: "primary",
  align: "center",
  gutterBottom: false,
  noWrap: true,
  paragraph: true,
};

export const Heading1 = Template.bind({});
Heading1.args = {
  children: "this is a heading",
  color: "primary",
  variant: "h1",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: "this is a subtitle",
  color: "primary",
  variant: "subtitle1",
};
