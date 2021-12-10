import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "@naturacosmeticos/natds-web";

import { themes } from "../themes/themes";
import { Provider } from "../provider/provider";

export default {
  title: "Utilities/themes",
  argTypes: {
    theme: {
      table: {
        type: {
          summary: '"aesop" | "avon" | "biome" | "natura" | "theBodyShop"',
        },
      },
      options: ["aesop", "avon", "biome", "natura", "theBodyShop"],
      control: { type: "radio" },
    },
  },
  component: themes,
};

const Template: ComponentStory<typeof Provider> = (args) => (
  <Provider {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: <Typography color="primary">Text</Typography>,
  theme: themes["natura"].light,
};
