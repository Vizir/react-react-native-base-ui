import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../checkbox/checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  color: 'primary'
};

export const CheckedComponent = (): React.ReactElement => (
  <Checkbox
    color="secondary"
  />
)
