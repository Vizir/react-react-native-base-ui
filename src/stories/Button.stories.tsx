import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../button/button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  text: 'Text',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  text: 'Text',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  text: 'Text',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'contained',
  size: 'small',
  text: 'Text',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'contained',
  size: 'medium',
  text: 'Text',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'contained',
  size: 'large',
  text: 'Text',
};
