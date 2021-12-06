import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import { IconButton } from '../iconButton/iconButton';
import { Icon } from '../icon/icon';

export default {
  title: 'Components/IconButton',
  argTypes: {
    color: {
      description: 'The color of the component. It supports those theme colors that make sense for this component.',
      options: ['default', 'inherit', 'primary', 'secondary'],
      table: {
        type: { summary: '"default", "inherit", "primary", "secondary"' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'radio'
      },
    },
    disabled: {
      description: 'If true, the IconButton base button will be disabled.',
        table: {
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' },
        },
        control: {
          type: 'boolean',
        }
    },
    size: {
      description: 'The size of the IconButton. small is equivalent to the dense IconButton styling.',
        table: {
          type: { summary: '"small" "Medium"' },
          defaultValue: { summary: 'medium' },
        },
        control: {
          options: [ 'small', 'medium' ],
          type: 'radio'
        }
    },
    children: {
      description: 'The content of the component. Usually, the icon element.',
      table: {
        type: { summary: 'node' },
      },
      control: {
        type: 'object'
      }
    },
    edge: {
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        options: [ 'false', 'start', 'end' ],
        type: 'radio'
      }
    }
  },
  component: IconButton,
  subcomponents: { Icon }
} as Meta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const IconButtonPrimary = Template.bind({});
IconButtonPrimary.args = {
  children: <Icon name="outlined-action-search" />
};

export const IconButtonLarge = (): React.ReactElement => (
  <IconButton >
    <Icon name="filled-default-mockup" size="large" />
  </IconButton>
);

export const IconButtonProfile = (): React.ReactElement => (
  <IconButton >
    <Icon name="outlined-social-myprofile" size="large" />
  </IconButton>
);

export const IconButtonExpand = (): React.ReactElement => (
  <IconButton
    aria-label="Show more options"
    color="secondary"
  >
    <Icon
      name="outlined-navigation-arrowbottom"
    />
  </IconButton>
);
