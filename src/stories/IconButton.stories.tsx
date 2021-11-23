import React from 'react';
import { Meta } from '@storybook/react';

import { IconButton } from '../iconButton/iconButton';
import { Icon } from '../icon/icon';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  subcomponents: { Icon }
} as Meta<typeof IconButton>;

export const SearchButton = (): React.ReactElement => (
  <IconButton
    color='primary'
    size="medium"
  >
    <Icon name="outlined-action-search" color="primary" />
  </IconButton>
);

export const IconButtonLarge = (): React.ReactElement => (
  <IconButton >
    <Icon name="filled-default-mockup" size="large" />
  </IconButton>
);

export const IconButtonProfile = (): React.ReactElement => (
  <IconButton >
    <Icon name="outlined-social-myprofile" size="large" />
  </IconButton>
);

export const IconButtonExpand = (): React.ReactElement => (
  <IconButton
    aria-label="Show more options"
    color="secondary"
  >
    <Icon
      name="outlined-navigation-arrowbottom"
    />
  </IconButton>
);
