import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from '../counter/counter'

export default {
  title: 'Components/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} /> ;

export const CounterComponent = Template.bind({});
CounterComponent.args = {
  value: 0,
}

export const CounterLabel = Template.bind({});
CounterLabel.args = {
  size: 'small'
}
