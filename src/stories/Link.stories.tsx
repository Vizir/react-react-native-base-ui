import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '../link/link'

export default {
  title: 'Components/Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const LinkPrimary = Template.bind({});
LinkPrimary.args = {
  children: 'Link Test',
  color: 'primary',
  underline: 'none',
};

export const LinkError = Template.bind({});
LinkError.args = {
  children: 'Link Error',
  color: 'error',
};

export const LinkH1 = Template.bind({});
LinkH1.args = {
  children: 'Link H1',
  color: 'secondary',
  variant: "h1",
};

export const Sizes = (): React.ReactElement => (
  <>
    <Link
      color="default"
      variant="h1"
    >
      h1
    </Link>

    <Link
      color="primary"
      underline="hover"
      variant="h2"
    >
      h2
    </Link>

    <Link
      color="secondary"
      underline="hover"
      variant="h3"
    >
      h3
    </Link>

    <Link
      color="textPrimary"
      underline="hover"
      variant="h4"
    >
      h4
    </Link>

  </>
)
