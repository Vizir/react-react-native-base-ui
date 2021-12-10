import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "@naturacosmeticos/natds-web";

import { ExpansionPanelSummary } from "../expansionPanelSummary/expansionPanelSummary";

export default {
  title: "Components/ExpansionPanelSummary",
  argTypes: {
    children: {
      description: "The content of the component.",
      table: {
        type: { summary: "node" },
      },
    },
    classes: {
      description: "Override or extend the styles applied to the component.",
      table: {
        type: { summary: "object" },
      },
      control: {
        type: "object",
      },
    },
    expandIcon: {
      description: "The icon to display as the expand indicator.",
      table: {
        type: { summary: "node" },
      },
    },
    onFocusVisible: {
      description: "Callback fired when the component is focused with a keyboard. We trigger a onFocus callback too",
      table: {
        type: { summary: "FocusEventHandler<any> | undefined" },
      },
    },
    tabIndex: {
      table: {
        type: { summary: "number | undefined" },
      },
      control: {
        type: 'object'
      }
    },
    action: {
      description: "A ref for imperative actions. It currently only supports focusVisible() action.",
      table: {
        type: { summary: "Ref<ButtonBaseActions> | undefined" },
      },
      control: {
        type: 'object'
      }
    },
    disabled: {
      description: "If true, the base button will be disabled.",
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: {
        type: 'boolean'
      }
    },
    centerRipple: {
      description: "If true, the ripples will be centered. They won't start at the cursor interaction position.",
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: {
        type: 'boolean'
      }
    },
    disableRipple: {
      description: "If true, the ripple effect will be disabled.⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the focusVisibleClassName",
      table: {
        type: { summary: "boolean | undefined" },
      },
    },
    disableTouchRipple: {
      description: "If true, the touch ripple effect will be disabled.",
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: {
        type: 'boolean'
      }
    },
    focusRipple: {
      description: "If true, the base button will have a keyboard focus ripple.",
      table: {
        type: { summary: "boolean | undefined" },
      },
      control: {
        type: 'boolean'
      }
    },
    focusVisibleClassName: {
      description: "This prop can help identify which element has keyboard focus. The class name will be applied when the element gains the focus through keyboard interaction. It's a polyfill for the CSS :focus-visible selector. The rationale for using this feature is explained here. A polyfill can be used to apply a focus-visible class to other components if needed.",
      table: {
        type: { summary: "string | undefined" },
      },
    },
    TouchRippleProps: {
      description: "Props applied to the TouchRipple element.",
      table: {
        type: { summary: "Partial<TouchRippleProps> | undefined" },
      },
    },
    IconButtonProps: {
      description: "Props applied to the IconButton element wrapping the expand icon.",
      table: {
        type: { summary: "object" },
      },
    },
  },
  component: ExpansionPanelSummary,
} as ComponentMeta<typeof ExpansionPanelSummary>;

const Template: ComponentStory<typeof ExpansionPanelSummary> = (args) => (
  <ExpansionPanelSummary {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: "Expansion panel details content",
  classes: undefined,
  expandIcon: <Icon name="outlined-navigation-arrowbottom" size="small" />,
  onFocusVisible: undefined,
  tabIndex: undefined,
  action: undefined,
  disabled: undefined,
  centerRipple: undefined,
  disableRipple: undefined,
  disableTouchRipple: undefined,
  focusRipple: undefined,
  focusVisibleClassName: undefined,
  TouchRippleProps: undefined,
  IconButtonProps: undefined,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Expansion panel details content",
  classes: undefined,
  expandIcon: <Icon name="outlined-navigation-arrowbottom" size="small" />,
  onFocusVisible: undefined,
  tabIndex: undefined,
  action: undefined,
  disabled: true,
  centerRipple: undefined,
  disableRipple: undefined,
  disableTouchRipple: undefined,
  focusRipple: undefined,
  focusVisibleClassName: undefined,
  TouchRippleProps: undefined,
  IconButtonProps: undefined,
};
