import React from 'react';
export interface ITabContainerProps {
  children?: React.ReactNode;
  // eslint-disable-next-line
  value?: any;
  variant?: 'standard' | 'scrollable' | 'fullWidth';
}
