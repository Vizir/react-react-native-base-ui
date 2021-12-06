import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../avatar/avatar';
import { ListItemAvatar } from '../listItemAvatar/listItemAvatar'

export default {
  title: 'Components/List/ListItemAvatar',
  component: ListItemAvatar,
  argTypes: {
    children: {
      description: 'The content of the component – normally Avatar.',
      table: {
        type: { summary: 'element' },
      },
      control: {
        type: 'object'
      },
    },
    className: {
      table: {
        type: { summary: 'string' },
      },
      control: {
        type: 'object'
      },
    },
    style: {
      table: {
        type: { summary: 'CSSProperties' },
      },
      control: {
        type: 'object'
      },
    },
    secondary: {
      description: 'Override or extend the styles applied to the component.\
      See CSS API for more details.',
      table: {
        type: { summary: 'object' },
      },
      control: {
        type: 'object'
      },
    },
  }
} as ComponentMeta<typeof ListItemAvatar>;

const Template: ComponentStory<typeof ListItemAvatar> = (args) => <ListItemAvatar {...args} /> ;

export const ListItemAvatarPrimary = Template.bind({});
ListItemAvatarPrimary.args = {
  children: <Avatar />,
}
