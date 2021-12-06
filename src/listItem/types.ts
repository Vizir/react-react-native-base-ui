import React from 'react';
import { IListItemProps as WebListItemProps } from "@naturacosmeticos/natds-web";

export interface IListItemProps {
  testID: string;
  component: React.ElementType;
}

export interface IWebListItemProps extends WebListItemProps, IListItemProps {}
