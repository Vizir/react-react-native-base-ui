import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItemText } from '../listItemText/listItemText'

export default {
  title: 'Components/List/ListItemText',
  component: ListItemText,
  argTypes: {
    children: {
      description: 'Alias for the primary property.',
      table: {
        type: { summary: 'node' },
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
    primary: {
      description: 'The main content element.',
      table: {
        type: { summary: 'node' },
      },
      control: {
        type: 'text'
      },
    },
    secondary: {
      description: 'The secondary content element.',
      table: {
        type: { summary: 'node' },
      },
      control: {
        type: 'text'
      },
    },
    inset: {
      description: 'If true, the children will be indented.\
      This should be used if there is no left avatar or left icon.',
      table: {
        type: { summary: 'bool' },
      },
      control: {
        type: 'boolean',
        defaultValue: { summary: '\"false\"'},
      },
    },
    disableTypography: {
      description: 'If true, the children won\'t be wrapped by a Typography component.\
      This can be useful to render an alternative Typography variant by wrapping the children (or primary) text,\
      and optional secondary text with the Typography component.',
      table: {
        type: { summary: 'bool' },
      },
      control: {
        type: 'boolean',
        defaultValue: { summary: '\"false\"'},
      },
    },
    primaryTypographyProps: {
      description: 'These props will be forwarded to the primary Typography\
      component (as long as disableTypography is not true).',
      table: {
        type: { summary: 'object' },
      },
      control: {
        type: 'boolean',
      },
    },
    secondaryTypographyProps: {
      description: 'These props will be forwarded to the secondary Typography\
      component (as long as disableTypography is not true).',
      table: {
        type: { summary: 'object' },
      },
      control: {
        type: 'boolean',
      },
    },
  }
} as ComponentMeta<typeof ListItemText>;

const Template: ComponentStory<typeof ListItemText> = (args) => <ListItemText {...args} /> ;

export const ListItemTextPrimary = Template.bind({});
ListItemTextPrimary.args = {
  primary: 'Text primary',
}

export const ListItemTextSecondary = Template.bind({});
ListItemTextSecondary.args = {
  primary: 'Text primary',
  secondary: 'Text secondary',
}
