import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItemIcon } from '../listItemIcon/listItemIcon'
import { Icon } from '../icon/icon'
import { Checkbox } from '../checkbox/checkbox';

export default {
  title: 'Components/List/ListItemIcon',
  component: ListItemIcon,
  argTypes: {
    children: {
      description: 'The content of the component, like Icon, SvgIcon, or\
      a natds-icons SVG icon element.',
      table: {
        type: { summary: 'element' },
      },
      control: {
        type: 'object'
      },
    },
    classes: {
      description:
        'Override or extend the styles applied to the component.\
        See CSS API below for more details.',
        table: {
          type: { summary: 'object' },
        },
        control: {
          type: 'object'
        },
    },
  }
} as ComponentMeta<typeof ListItemIcon>;

const Template: ComponentStory<typeof ListItemIcon> = (args) => <ListItemIcon {...args} /> ;

export const ListItemIconFavorite = Template.bind({});
ListItemIconFavorite.args = {
  children: <Icon name="outlined-action-love" size="large" />
}

export const ListItemIconCheckbox = Template.bind({});
ListItemIconCheckbox.args = {
  children: <Checkbox color="secondary" />
}
