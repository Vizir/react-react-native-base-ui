import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import themes from '@naturacosmeticos/natds-web/dist/Themes';

import { Provider } from '../provider/provider'
import { AppBar } from '../appBar/appBar';

export default {
  title: 'Components/Provider',
  argTypes: {
    children: {
      description: 'The content of the component',
      table: {
        type: { summary: 'element' },
      },
      control: {
        type: 'object'
      },
    },
    themes: {
      table: {
        type: { summary: '"aesop" "avon" "biome" "natura" "theBodyShop"' },
      },
    }
  },
  component: Provider,
} as ComponentMeta<typeof Provider>;

const Template: ComponentStory<typeof Provider> = (args) => <Provider {...args} />;

export const ProviderAppBarNatura = Template.bind({});
ProviderAppBarNatura.args = {
  children: <AppBar position="relative" >Test Provider</AppBar>,
  theme: themes['natura'].light
};

export const ProviderAppBarAvon = Template.bind({});
ProviderAppBarAvon.args = {
  children: <AppBar position="relative" >Test Provider</AppBar>,
  theme: themes['avon'].light
};
