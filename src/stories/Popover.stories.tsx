import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Popover} from '../popover/popover';

export default {
    title: 'Components/Popover',
    argsType: {
        children: {
            description: 'Popper render function or node.',
            table: {
                type: {summary: 'node | func'},
            },
            control: { type: 'text'}
        },
        placement: {
            description: 'Popper placement.',
            table: {
                type: {summary: '"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"' },
                defaultValue: {summary: "bottom"}
            },
            options: ["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"],
            control: {type: "select"},
        },
        id: {
            control: {type: "text"}
        },
        maxWidth: {
            table: { summary: "number"},
            control: {type: "number"}
        },
        open: {
            description: `If \`true\`, the \`Popover\` is visible.`,
            table: {summary: 'bool'},
            control: {type: "boolean"}
        },
        component: {
            table: {summary: 'element'},
            control: {type: "object"}
        },
        container: {
            description: 'A node, component instance, or function that returns either.',
            table: {summary: 'object | func'},
            control: {type: "object"}
        },
        direction: {
            table: {summary: 'PopperPlacementType'},
            control: {type: "object"}
        },
        anchorEl: {
            description: `This is the reference element, or a function that returns the reference element
            It may be used to set the position of the popover.
            Its value should be an HTML element instance or a referenceObject.`,
            table: {summary: 'object | func'},
            control: {type: "object"}
        },
        disablePortal: {
            description: `Disable the portal behavior. The children stay within it's parent DOM hierarchy.`,
            table: {summary: 'bool'},
            defaultValue: { summary: 'false'},
            control: {type: "boolean"}
        },
        keepMounted: {
            description: `Always keep the children in the DOM.
            This prop can be useful in SEO situation or when you want to maximize the responsiveness of the \`Popper.\``,
            table: {summary: 'bool'},
            defaultValue: { summary: 'false'},
            control: {type: "boolean"}
        },
        popperOptions: {
            description: `Options provided to the \`Popover\` positioning engine.`,
            table: {summary: 'object'},
            defaultValue: { summary: '{ }'},
            control: {type: "boolean"}
        },
        popperRef: {
            description: `A ref that points to the used popper instance.`,
            table: {summary: 'ref'},
            control: {type: "object"}
        },
        transition: {
            description: `Help supporting a \`react-transition-group\` / \`Transition\` component.`,
            table: {summary: 'bool'},
            defaultValue: { summary: 'false'},
            control: {type: "boolean"}
        },
        actionLink: {
            table: {summary: 'IActionLinkProps'},
            control: {type: "object"}
        }
    },
    component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const TopPlacement = Template.bind({});
TopPlacement.args = {
    children: 'Content',
  placement: 'top',
  id: 'popover',
  maxWidth: 0,
  open: false
};

export const BottomPlacement = Template.bind({});
BottomPlacement.args = {
    maxWidth: 0,
    open: false,
    placement: 'bottom',
    id: 'popover',
}

export const LeftPlacement = Template.bind({});
LeftPlacement.args = {
    maxWidth: 0,
    open: false,
    placement: 'left',
    id: 'popover',
}
