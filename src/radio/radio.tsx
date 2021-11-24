import React from 'react';
import { Radio as NatRadio } from '@naturacosmeticos/natds-web';

import { IRadioProps } from './types';

export const Radio = ({...props}: IRadioProps): React.ReactElement => {
  return (
    <NatRadio {...props} />
  )
}
