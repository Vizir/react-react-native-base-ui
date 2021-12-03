import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '../card/card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: { summary: 'node' },
      },
    },
    className: {
      description: 'Override or extend the styles applied to the component',

    },
    elevation: {
      description: 'Shadow depth, corresponds to dp in the spec.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1'}
      },
      options: [ 0, 1 ],
      control: {
        type: 'radio'
      }
    },
    square: {
      description: 'If true, rounded corners are disabled.',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false'}
      },
      control: {
        type: 'boolean'
      }
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}>Test Card</Card> ;

export const CardStandard = Template.bind({});
CardStandard.args = {
  elevation: 1,
}
