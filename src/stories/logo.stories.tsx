import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider, themes } from "@naturacosmeticos/natds-web";

import { Logo } from "../logo/logo";

export default {
  title: "Components/Logo",
  argTypes: {
    color: {
      description: "The Logo color",
      table: {
        type: {
          summary:
            'undefined| "primary" | "secondary" | "neutral" | "highlight" | "surface"',
        },
        defaultValue: { summary: "neutral" },
      },
      options: [
        undefined,
        "primary",
        "secondary",
        "neutral",
        "highlight",
        "surface",
      ],
      control: { type: "radio" },
    },
    arialabel: {
      description: "The Logo description",
      table: {
        type: { summary: "string |  undefined" },
        defaultValue: { summary: "string" },
      },
      control: { type: "object" },
    },
    model: {
      description: "The Logo model.",
      table: {
        type: { summary: 'undefined| "a" | "b"' },
        defaultValue: { summary: "a" },
      },
      options: [undefined, "a", "b"],
      control: { type: "radio" },
    },
    size: {
      description: "The Logo size.",
      table: {
        type: {
          summary:
            'undefined | "semix" | "mediumx" | "largex" | "largexx" | "largexxx" | "hugex" | "hugexx" | "hugexxx" | "veryhuge" | "medium" | "mediumX" | "large" | "largeX" | "largeXX" | "largeXXX" | "huge" | "hugeX" | "hugeXX" | "hugeXXX" | "veryHuge"',
        },
        defaultValue: { summary: "veryHuge" },
      },
      options: [
        undefined,
        "semix",
        "mediumx",
        "largex",
        "largexx",
        "largexxx",
        "hugex",
        "hugexx",
        "hugexxx",
        "veryhuge",
        "medium",
        "mediumX",
        "large",
        "largeX",
        "largeXX",
        "largeXXX",
        "huge",
        "hugeX",
        "hugeXX",
        "hugeXXX",
        "veryHuge",
      ],
    },
  },
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => (
    <Logo {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  color: undefined,
  model: undefined,
  size: undefined,
  arialabel: undefined,
};

const TemplateNatura: ComponentStory<typeof Logo> = (args) => (
  <Provider theme={themes["natura"].light}>
    <Logo {...args} />
  </Provider>
);

export const LogoNatura = TemplateNatura.bind({});
LogoNatura.args = {
};

const TemplateAvon: ComponentStory<typeof Logo> = (args) => (
  <Provider theme={themes["avon"].light}>
    <Logo {...args} />
  </Provider>
);

export const AvonNatura = TemplateAvon.bind({});
AvonNatura.args = {
  model: "b"
};

const TemplateBodyShop: ComponentStory<typeof Logo> = (args) => (
  <Provider theme={themes["theBodyShop"].light}>
    <Logo {...args} />
  </Provider>
);

export const LogoTheBodyShop = TemplateBodyShop.bind({});
LogoTheBodyShop.args = {
};

