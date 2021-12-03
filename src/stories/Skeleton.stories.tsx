import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Skeleton} from '../skeleton/skeleton';

export default {
    title: 'Components/Skeleton',
    argTypes: {
        variant: {
            description: "The component supports 3 shape variants for the type of content that will be rendered.",
            table: {
                type: {summary: 'undefined | "circle" | "rect" | "text"'},
                defaultValue: {summary: "text"},
            },
            options: ["undefined", "circle", "rect", "text"],
            control: {type: "radio"}
        },
        height: {
            description: "Height of the skeleton. Useful when you want to adapt the skeleton to a element - for instance, a card.",
            table: {
                type: {summary: "SizePropValue"},
                defaultValue: {summary: "auto"},
            },
            options: ["auto", "semix", "mediumx", "largex", "largexx", "largexxx", "hugex", "hugexx", "hugexxx", "veryhuge", "none", "small", "tiny", "standard"],
            control: {type: "select"}
        },
        width: {
            description: "Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.",
            table: {
                type: {summary: "SizePropValue"},
                defaultValue: {summary: "auto"},
            },
            options: ["auto", "semix", "mediumx", "largex", "largexx", "largexxx", "hugex", "hugexx", "hugexxx", "veryhuge", "none", "small", "tiny", "standard"],
            control: {type: "select"}
        },
        animation: {
            description:  `
            The animation. If \`false\` the animation effect is disabled.
            By default, the skeleton pulsate, but you can change the animation for a wave or disable it entirely.
            `,
            table: {
                type: {summary: 'false | "pulse" | "wave" | undefined'},
                defaultValue: {summary: "pulse"}
            },
            control: {type: "object"}
        },
        children: {
            description: `
            When it comes to other components, you may not want to repeat the height and width.
            In these instances, you can pass \`children\` and it will infer its width and height from them.
            `,
        }
    },
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
