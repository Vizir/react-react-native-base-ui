import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "../link/link";

export default {
  title: "Components/Link",
  argTypes: {
    children: {
      description: "The content of the link.",
      table: {
        type: { summary: "node" },
      },
    },
    color: {
      description: "The Link color.",
      table: {
        type: {
          summary:
            '"default" | "error" | "inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary"',
        },
        defaultValue: { summary: "default" },
      },
      options: [
        "default",
        "error",
        "inherit",
        "initial",
        "primary",
        "secondary",
        "textPrimary",
        "textSecondary",
      ],
      control: { type: "radio" },
    },
    underline: {
      description: "Controls when the link should have an underline.",
      table: {
        type: { summary: '"none" | "hover" | "always"' },
        defaultValue: { summary: "hover" },
      },
      options: ["none", "hover", "always"],
      control: { type: "radio" },
    },
    variant: {
      description: "Applies the theme typography styles.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "inherit" },
      },
    },
    component: {
      description:
        "The component used for the root node. Either a string to use a DOM element or a component.",
      table: {
        type: { summary: "element" },
        defaultValue: { summary: "a" },
      },
      control: { type: "object" },
    },
    classes: {
      description: "Override or extend the styles applied to the component.",
      control: { type: "object" },
    },
    display: {
      table: {
        type: { summary: 'undefined | "initial" | "block" | "inline"' },
      },
      options: [undefined, "initial", "block", "inline"],
      control: { type: "radio" },
    },
    noWrap: {
      table: {
        type: { summary: 'undefined | "boolean" ' },
      },
      options: [undefined, "boolean"],
      control: { type: "object" },
    },
    gutterBottom: {
      table: {
        type: { summary: 'undefined | "boolean" ' },
      },
      options: [undefined, "boolean"],
      control: { type: "object" },
    },
    paragraph: {
      table: {
        type: { summary: 'undefined | "boolean" ' },
      },
      options: [undefined, "boolean"],
      control: { type: "object" },
    },
    align: {
      table: {
        type: {
          summary:
            'undefined | "center"| "inherit"| "justify"| "left"| "right"',
        },
      },
      options: [undefined, "center", "inherit", "justify", "left", "right"],
      control: { type: "radop" },
    },
    TypographyClasses: {
      description: "The classes prop applied to the Typography element.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    onClick: {
      table: {
        type: {
          summary: "Function",
        },
      },
    },
    onKeyPress: {
      table: {
        type: {
          summary: "Function",
        },
      },
    },
  },
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  children: "Link Test Playground",
  color: "primary",
  underline: "none",
  href: undefined,
  variant: undefined,
  component: undefined,
  classes: undefined,
  display: undefined,
  noWrap: undefined,
  gutterBottom: undefined,
  paragraph: undefined,
  align: undefined,
  variantMapping: undefined,
  TypographyClasses: undefined,
  onClick: undefined,
  onKeyPress: undefined,
};

export const LinkError = Template.bind({});
LinkError.args = {
  children: "Link Error",
  color: "error",
};

export const LinkH1 = Template.bind({});
LinkH1.args = {
  children: "Link H1",
  color: "secondary",
  variant: "h1",
};

export const Sizes = (): React.ReactElement => (
  <>
    <Link color="default" variant="h1">
      h1
    </Link>

    <Link color="primary" underline="hover" variant="h2">
      h2
    </Link>

    <Link color="secondary" underline="hover" variant="h3">
      h3
    </Link>

    <Link color="textPrimary" underline="hover" variant="h4">
      h4
    </Link>
  </>
);
