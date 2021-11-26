import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from '../image/image'

export default {
  title: 'Components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} /> ;

export const ImageExample = Template.bind({});
ImageExample.args = {
  alt: 'Test image',
}
