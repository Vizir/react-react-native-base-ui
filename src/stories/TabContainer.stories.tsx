import React from 'react';
import { Meta } from '@storybook/react';
import { ITabContainerProps } from '@naturacosmeticos/natds-web';

import { TabContainer } from '../tabContainer/tabContainer'
import { TabItem } from '../tabItem/tabItem'
import { Icon } from '../icon/icon';

export default {
  title: 'Components/TabContainer',
  component: TabContainer,
  subcomponents: { TabItem },
} as Meta<typeof TabContainer>;

export const OneItem = (args: ITabContainerProps): React.ReactElement => (
  <TabContainer {...args}>
    <TabItem label='Test Tab item in Tab Container' />
  </TabContainer>
);

export const MultipleItems = (args: ITabContainerProps): React.ReactElement => (
  <TabContainer
    indicatorColor="secondary"
    scrollButtons="auto"
    textColor="inherit"
    variant="standard"
    value={1}
    {...args}
  >
    <TabItem
      aria-controls="favorites-tab"
      icon={<Icon name="outlined-action-love" size="small"/>}
      id="favorites-tab"
      label="Favorites"
    />
    <TabItem
      aria-controls="outlet-tab"
      icon={<Icon name="outlined-product-outlet" size="small"/>}
      id="outlet-tab"
      label="Outlet"
    />
    <TabItem
      aria-controls="products-tab"
      icon={<Icon name="outlined-product-brandsproduct" size="small"/>}
      id="products-tab"
      label="Products"
    />
    <TabItem
      aria-controls="makeup-tab"
      icon={<Icon name="outlined-product-makeup" size="small"/>}
      id="makeup-tab"
      label="Makeup"
    />
  </TabContainer>
);
