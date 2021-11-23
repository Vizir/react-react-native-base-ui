import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '../radio/radio'

export default {
  title: 'Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} /> ;

export const RadioDisable = Template.bind({});
RadioDisable.args = {
  disabled: true,
  checked: false,
  color: 'default',
}

export const RadioColor = Template.bind({});
RadioColor.args = {
  color: 'secondary',
}

export const PrimaryColor = (): React.ReactElement => (
  <Radio
    color="primary"
  />
)
