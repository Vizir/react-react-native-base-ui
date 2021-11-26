import React from 'react';
import { Counter as NatCounter } from '@naturacosmeticos/natds-web';

import { ICounterProps } from './types';

export const Counter = ({ onChange, onDecrement, onIncrement, value = 1 }:ICounterProps):React.ReactElement => {
  return (
    <NatCounter
      initialValue={value!}
      onChange={onChange}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
    />
  )
}
