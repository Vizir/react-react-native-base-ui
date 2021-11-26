import React from 'react';
import { PropTypes } from '@material-ui/core';

export interface IIconButtonProps {
  children: React.ReactNode;
  color?: PropTypes.Color;
  edge?: 'start' | 'end' | false;
  size?: 'small' | 'medium';
}
