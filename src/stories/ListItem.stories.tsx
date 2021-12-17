import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListItem } from "../listItem/listItem";
import { ListItemText, ListItemIcon, Icon } from "../index";

export default {
  title: "Components/List/ListItem",
  component: ListItem,
  argTypes: {
    component: {
      description:
        "The component used for the root node\
       Either a string to use a HTML element or a component.",
      table: {
        type: {
          summary: "ElementType<any>",
        },
      },
    },
    button: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    selected: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => (
  <ListItem {...args} />
);

export const ListItemWithText = Template.bind({});
ListItemWithText.args = {
  children: (
    <ListItemText primary="Primary content" secondary="Secondary content" />
  ),
};

export const ListItemWithIcon = Template.bind({});
ListItemWithIcon.args = {
  children: (
    <>
      <ListItemIcon>
        <Icon name="outlined-action-love" size="small" />
      </ListItemIcon>
      <ListItemText primary="List item text">Icon and text</ListItemText>
    </>
  ),
};
