import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip } from '../chip/chip'

export default {
  title: 'Components/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args}>Test App Bar</Chip> ;

export const ChipStandard = Template.bind({});
ChipStandard.args = {
  color: 'secondary',
  label: 'Test Standard',
  variant: 'default',
}

export const ChipClickable = Template.bind({});
ChipClickable.args = {
  color: 'primary',
  label: 'Test Standard',
  variant: 'default',
  clickable: true,
}
