import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppBar } from '../appBar/appBar'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {
    children: {
      description: 'The content of the component.',
      table: {
        type: {
          summary: 'node',
        },
      },
      control: {
        type: 'text'
      },
    },
    color: {
      description:
        'The color of the component.\
        It supports those theme colors that make sense for this component.',
      options: ['default', 'inherit', 'primary', 'secondary'],
      control: {
        type: 'radio'
      },
    },
    position: {
      description:
        'The positioning type. The behavior of the different options is described in the MDN web docs.\
        Note: sticky is not universally supported and will\ fall back to static when unavailable.',
        options: ['absolute', 'fixed', 'relative', 'static'],
        control: {
          type: 'select'
        }
    },
    classes: {
      description: 'Override or extend the styles applied to the component.\
      See CSS API for more details.',
        table: {
          type: { summary: 'object' }
        }
    }
  },
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
  position: 'relative',
}

export const AppBarComponent = (): React.ReactElement => (
  <AppBar
    position="relative"
    color="transparent"
  >
    Component build
  </AppBar>
)
