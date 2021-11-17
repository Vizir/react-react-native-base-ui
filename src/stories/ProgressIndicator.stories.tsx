import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProgressIndicator } from '../progress-indicator/progress-indicator';

export default {
  title: "Example/ProgressIndicator",
  component: ProgressIndicator,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => (
  <ProgressIndicator {...args} />
);

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 24,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 48,
};

export const Large = Template.bind({});
Large.args = {
  size: 64,
};
