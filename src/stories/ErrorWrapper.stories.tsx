import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ErrorWrapper } from '../errorWrapper/error-wrapper';

export default {
  title: "Example/ErrorWrapper",
  component: ErrorWrapper,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ErrorWrapper>;

const Template: ComponentStory<typeof ErrorWrapper> = (args) => (
  <ErrorWrapper {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  icon: true,
  title: "No se encontraron resultados",
  description: "Por favor intente en otro momento",
  textButton: "VOLVER AL INICIO",
  // actionButton:
};

export const noIcon = Template.bind({});
noIcon.args = {
  title: "No se encontraron resultados",
  description: "Por favor intente en otro momento",
  textButton: "VOLVER AL INICIO",
  // actionButton:
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "No se encontraron resultados",
};

export const OnlyAllTexts = Template.bind({});
OnlyAllTexts.args = {
  title: "No se encontraron resultados",
  description: "Por favor intente en otro momento",
};

export const OnlyAllTextsAndButton = Template.bind({});
OnlyAllTextsAndButton.args = {
  title: "No se encontraron resultados",
  description: "Por favor intente en otro momento",
  textButton: "VOLVER AL INICIO",
};

export const OnlyAllTextsAndIcon = Template.bind({});
OnlyAllTextsAndButton.args = {
  icon: true,
  title: "No se encontraron resultados",
  description: "Por favor intente en otro momento",
};
