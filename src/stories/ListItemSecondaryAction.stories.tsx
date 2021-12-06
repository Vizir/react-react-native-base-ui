import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItemSecondaryAction } from '../listItemSecondaryAction/listItemSecondaryAction'
import { Checkbox } from '../checkbox/checkbox';

export default {
  title: 'Components/List/ListItemSecondaryAction',
  component: ListItemSecondaryAction,
  argTypes: {
    children: {
      description: 'The content of the component, normally an IconButton or selection control.',
      table: {
        type: { summary: 'element' },
      },
      control: {
        type: 'object'
      },
    },
    classes: {
      description: 'Override or extend the styles applied to the component.\
      Check CSS API below for more details.',
      table: {
        type: { summary: 'element' },
      },
      control: {
        type: 'object'
      },
    },
  }
} as ComponentMeta<typeof ListItemSecondaryAction>;

const Template: ComponentStory<typeof ListItemSecondaryAction> = (args) => <ListItemSecondaryAction {...args} /> ;

export const ListItemSecondaryActionText = Template.bind({});
ListItemSecondaryActionText.args = {
  children: 'Test Text',
}

export const ListItemSecondaryActionCheckbox = Template.bind({});
ListItemSecondaryActionCheckbox.args = {
  children: <Checkbox />,
}
