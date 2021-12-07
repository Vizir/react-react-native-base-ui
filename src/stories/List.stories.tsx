import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem, ListItemText, ListItemIcon, Icon } from '../index';
import { List } from '../list/list'

export default {
  title: 'Components/List/List',
  component: List,
  argTypes: {
    className: {
     control: {
       type: 'text',
     }
    },
    dense: {
      table: {
        type: {summary: 'boolean'},
      },
      control: {
        type: 'boolean',
      }
    },
    disablePadding: {
      table: {
        type: {summary: 'boolean'},
      },
      control: {
        type: 'boolean',
      }
    },
    subheader: {
      table: {
        type: {summary: 'ReactElement<any, string | JSXElementConstructor<any>> | undefined'},
      },
      control: {
        type: 'object',
      }
    }
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} /> ;

export const ListWithLists = Template.bind({});
ListWithLists.args = {
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

export const ListWithText = Template.bind({});
ListWithText.args = {
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
