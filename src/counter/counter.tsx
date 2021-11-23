import React from 'react';
import { Counter as NatCounter } from '@naturacosmeticos/natds-web';

import { ICounterProps } from './types';

export const Counter = ({ onChange, onDecrement, onIncrement, ...rest }:ICounterProps):React.ReactElement => {
  return (
    <NatCounter
      onChange={onChange}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      {...rest}
    />
  )
}
