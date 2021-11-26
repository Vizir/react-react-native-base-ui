import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppBar } from '../appBar/appBar'

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args}>Test App Bar</AppBar> ;

export const AppBarRelative = Template.bind({});
AppBarRelative.args = {
  color: 'secondary',
  position: 'relative',
}

export const AppBarAbsolute = Template.bind({});
AppBarAbsolute.args = {
  color: 'primary',
  position: 'absolute',
}

export const AppBarComponent = (): React.ReactElement => (
  <AppBar
    position="absolute"
    color="transparent"
  >
    Component build
  </AppBar>
)
