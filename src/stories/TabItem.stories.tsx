import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '../icon/icon';
import { TabItem } from '../tabItem/tabItem'

export default {
  title: 'Components/TabItem',
  component: TabItem,
} as ComponentMeta<typeof TabItem>;

const Template: ComponentStory<typeof TabItem> = (args) => <TabItem {...args} /> ;

export const TabItemLabel = Template.bind({});
TabItemLabel.args = {
  "aria-controls": "playground-tab",
  id: "playground-tab",
  label: "Test component",
}

export const TabItemIcon = Template.bind({});
TabItemIcon.args = {
  "aria-controls": "favorites-tab",
  id: "favorites-tab",
  label: "Favorites",
  icon: <Icon name="outlined-action-love" size="huge" />,
}
