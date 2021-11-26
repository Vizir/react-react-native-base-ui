import React from 'react';

export interface ITabItemProps {
  id?: string;
  "aria-controls"?: string;
  label?: React.ReactNode;
  icon?: string | React.ReactElement;
  children?: React.ReactNode;
}
