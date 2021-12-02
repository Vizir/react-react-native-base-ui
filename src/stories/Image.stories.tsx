import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from "../image/image";

export default {
  title: "Components/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const WithOverlay = Template.bind({});
WithOverlay.args = {
  src: "https://zeroheight.com/uploads/CKp-xkMzUziuVtBy4yXxyg.jpg",
  alt: "Test image",
  state: true,
  height: "medium",
  width: "medium",
};

export const Fallback = Template.bind({});
Fallback.args = {
  src: "",
  alt: "Test image",
  fallback: "https://zeroheight.com/uploads/CKp-xkMzUziuVtBy4yXxyg.jpg",
  height: "medium",
  width: "medium",
};

export const WithRadius = Template.bind({});
WithRadius.args = {
  src: "https://zeroheight.com/uploads/CKp-xkMzUziuVtBy4yXxyg.jpg",
  alt: "Test image",
  height: "medium",
  width: "medium",
  radius: true,
};
