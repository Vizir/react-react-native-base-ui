import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../icon/icon'

export default {
  title: 'Components/Icon',
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

export const IconComponent = (): React.ReactElement => (
  <div>
    <Icon name="filled-default-mockup" size="micro" />
    <Icon name="filled-default-mockup" size="tiny" />
    <Icon name="filled-default-mockup" size="small" />
    <Icon name="filled-default-mockup" size="standard" />
    <Icon name="filled-default-mockup" size="medium" />
    <Icon name="filled-default-mockup" size="large" />
    <Icon name="filled-default-mockup" size="largeX" />
    <Icon name="filled-default-mockup" size="largeXX" />
    <Icon name="filled-default-mockup" size="huge" />
    <Icon name="filled-default-mockup" size="hugeX" />
    <Icon name="filled-default-mockup" size="hugeXX" />
  </div>
)
