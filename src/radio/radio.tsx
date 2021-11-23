import React from 'react';
import { Radio as NatRadio, IRadioProps } from '@naturacosmeticos/natds-web';

export const Radio = ({...props}: IRadioProps): React.ReactElement => {
  return (
    <NatRadio {...props} />
  )
}
