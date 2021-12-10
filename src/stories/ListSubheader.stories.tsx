import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem, ListItemText, ListItemIcon, Icon } from '../index';
import { ListSubheader } from '../listSubheader/listSubheader'

export default {
  title: 'Components/List/ListSubheader',
  component: ListSubheader,
  argTypes: {
    component: {
      description: 'The component used for the root node. Either a string to use a DOM element or a component.',
      table: {
        type: {summary: '"li"'},
        defaultValue: {summary: '"li"'},
      },
    },
    classes: {
      description: 'Override or extend the styles applied to the component.\
      Check CSS API for more details.',
      table: {
        type: {summary: 'object'},
      },
    },
    color: {
      description: 'The color of the component. It supports those theme colors that make sense for this component.',
      table: {
        type: {summary: '"default" "primary" "inherit"' },
        defaultValue: {summary: '"default"'},
      },
    },
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node'}
      }
    },
    disableGutters: {
      description: 'If true, the ListSubheader will not have gutters.',
      table: {
        type: {summary: 'bool' },
        defaultValue: {summary: 'false'},
      },
    },
    insert: {
      description: 'If true, the ListSubheader will be indented.',
      table: {
        type: {summary: 'bool' },
        defaultValue: {summary: 'false'},
      },
    },
    disableSticky: {
      description: 'If true, the ListSubheader will not stick to the top during scroll.',
      table: {
        type: {summary: 'bool' },
        defaultValue: {summary: 'false'},
      },
    },
  },
} as ComponentMeta<typeof ListSubheader>;

const Template: ComponentStory<typeof ListSubheader> = (args) => <ListSubheader {...args} /> ;

export const ListSubheaderWithLists = Template.bind({});
ListSubheaderWithLists.args = {
  children:
  <>
    <ListItem
      selected
    >
      <ListItemText primary="List item text" />
    </ListItem>
    <ListItem
    >
      <ListItemText
        primary="Primary content"
        secondary="Secondary content"
      />
    </ListItem>
  </>
}

export const ListSubHeaderWithText = Template.bind({});
ListSubHeaderWithText.args = {
  children:
  <>
    <ListItem>
      <ListItemIcon>
        <Icon
          name="outlined-action-love"
          size="small"
        />
      </ListItemIcon>
      <ListItemText primary="List item text">
        Icon and text
      </ListItemText>
    </ListItem>
  </>
}
