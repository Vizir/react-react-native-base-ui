import React from 'react';
import { Rating as NatRating, IRatingProps } from '@naturacosmeticos/natds-web';

export const Rating = ({ id, size, rate }: IRatingProps): React.ReactElement => {
  return (
    <NatRating
      id={id}
      size={size}
      rate={rate}
    />
  )
}
