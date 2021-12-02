import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Skeleton} from '../skeleton/skeleton';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
}

export const Circle = Template.bind({});
Circle.args = {
    height: 'semix',
    variant: 'circle',
    width: 'semix',
}

export const Rect = Template.bind({});
Rect.args = {
    height: 'hugex',
    variant: 'rect',
    width: 'veryhuge'
}
