import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../icon/icon'

export default {
  title: 'Components/Icon',
  argTypes: {
    name: {
      description: 'The Icon name',
      table: {
        type: { summary: 'IconName', },
        defaultValue: { summary: '"filled-default-mockup"' },
      },
      control: {
        type: 'select'
      },
    },
    color: {
      options: ['default', 'error', 'inherit', 'primary', 'secondary'],
      table: {
        type: { summary: '"default", "error", "inherit", "primary", "secondary"' },
      },
      control: {
        type: 'radio'
      },
    },
    size: {
      description: 'The Icon size. It is standard by default.',
        options: ['micro', 'tiny', 'small', 'standard', 'medium', 'large', 'largeX', 'largeXX', 'huge', 'hugeX', 'hugeXX', 'largeX', 'largeXX', 'hugeX', 'hugeXX'],
        table: {
          type: { summary: '"micro" "tiny" "small" "standard" "medium" "large" "largeX" "largeXX" "huge" "hugeX" "hugeXX" "largeX" "largeXX" "hugeX" "hugeXX"' },
          defaultValue: { summary: '"standard' },
        },
        control: {
          type: 'select',
        }
    },
    classes: {
      description: 'Override or extend the styles applied to the component.\
      See CSS API for more details.',
        table: {
          type: { summary: 'object' }
        }
    }
  },
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconLarge = Template.bind({});
IconLarge.args = {
  name: 'filled-default-mockup',
  color: 'primary',
  size: 'large'
};

export const IconMedium = Template.bind({});
IconMedium.args = {
  name: 'outlined-content-menu',
  color: 'secondary',
  size: 'medium'
};

export const IconHuge = Template.bind({});
IconHuge.args = {
  name: 'outlined-action-search',
  color: 'error',
  size: 'huge'
};
