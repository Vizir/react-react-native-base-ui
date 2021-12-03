import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../avatar/avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    children: {
      description: 'Used to render icon or text elements inside the Avatar\
       if src is not set. This can be an element, or just a string.',
      table: {
        type: { summary: 'ReactNode' },
      },
      control: {
        type: 'object'
      },
    },
    color: {
      description:
        'The color of the component.\
        It supports those theme colors that make sense for this component.',
        options: ['default', 'inherit', 'primary', 'secondary'],
        control: {
          type: 'radio'
        },
        table: {
          type: { summary: 'string' },
          defaultValue: { summary: '\"default\"'}
        }
    },
    alt: {
      description:
      'Used in combination with src or srcSet to provide\
      an alt attribute for the rendered img element.',
      table: {
        type: { summary: 'string' }
      }
    },
    size: {
      description: 'The possible sizes of the Avatar',
      table: {
        type: { summary: 'AvatarSizes' },
        defaultValue: { summary: '\"standard\"'}
      },
      control: {
        type: 'select'
      }
    },
    src: {
      description:
      'The src attribute for the img element.',
    },
    variant: {
      description:
      'The shape of the avatar.',
      table: {
        defaultValue: { summary: '\"circle\"'}
      }
    },
    srcSet: {
      description: 'The srcSet attribute for the img element. Use this attribute for responsive image display.'
    },
    imgProps: {
      description: 'Attributes applied to the img element if the component is used to display an image.\
       It can be used to listen for the loading error event.'
    },
    sizes: {
      description: 'The sizes attribute for the img element.'
    }
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} /> ;

export const AvatarStandard = Template.bind({});
AvatarStandard.args = {
  alt: 'Test Avatar',
  color: 'primary',
  size: 'huge',
}

export const AvatarSquare = Template.bind({});
AvatarSquare.args = {
  alt: 'Test Avatar',
  color: 'secondary',
  variant: 'square'
}

export const AvatarRounded = Template.bind({});
AvatarRounded.args = {
  alt: 'Test Avatar',
  color: 'primary',
  variant: 'rounded'
}
