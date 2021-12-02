import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip } from '../chip/chip'

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args}>Test App Bar</Chip> ;

export const ChipPlayground = Template.bind({});
ChipPlayground.args = {
  color: 'primary',
  label: 'Test Playground',
  variant: 'default',
  clickable: true,
  disabled: false,
  classes: undefined,
  component: undefined,
  icon: undefined,
  avatar: undefined,
  deleteIcon: undefined,
  onDelete: undefined,
}

export const ChipStandard = Template.bind({});
ChipStandard.args = {
  color: 'secondary',
  label: 'Test Standard',
  variant: 'default',
}

export const ChipClickable = Template.bind({});
ChipClickable.args = {
  color: 'primary',
  label: 'Test Clickable',
  variant: 'default',
  clickable: true,
}

export const ChipDisabled = Template.bind({});
ChipDisabled.args = {
  color: 'primary',
  label: 'Test disabled',
  variant: 'default',
  clickable: true,
  disabled: true,
}

