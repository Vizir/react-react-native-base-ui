import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../text/text";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  children: "Text Test",
  color: "primary",
  align:"center",
  gutterBottom: false,
  noWrap: true,
  paragraph: true
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

