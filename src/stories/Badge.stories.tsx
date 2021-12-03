import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "@naturacosmeticos/natds-web";

import { Badge } from "../badge/badge";

const Box = (): React.ReactElement => {
  return (
    <div
      style={{ width: "40px", height: "40px", backgroundColor: "lightgray" }}
    ></div>
  );
};

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    component: {
      description:
        "The component used for the root node. Either a string to use a DOM element or a component.",
      table: {
        type: { summary: "elementType" },
        defaultValue: { summary: "span" },
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Box />
  </Badge>
);

const TemplateIcon: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Icon name="outlined-action-filter" size="large" />
  </Badge>
);

export const Playground = Template.bind({});
Playground.args = {
  anchorOrigin: { horizontal: "right", vertical: "top" },
  badgeContent: "999",
  color: "primary",
  invisible: false,
  max: 99,
  overlap: "circle",
  showZero: false,
  variant: "standard",
  children: undefined,
};

export const DefaultColor = Template.bind({});
DefaultColor.args = {
  ...Playground.args,
  color: "default",
};

export const ErrorColor = Template.bind({});
ErrorColor.args = {
  ...Playground.args,
  color: "error",
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  ...Playground.args,
  color: "primary",
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  ...Playground.args,
  color: "secondary",
};

export const DotVariant = Template.bind({});
DotVariant.args = {
  ...Playground.args,
  variant: "dot",
};

export const WithFilterIcon = TemplateIcon.bind({});
WithFilterIcon.args = {
  ...Playground.args,
};
