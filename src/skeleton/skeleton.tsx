import React from 'react';
import {Skeleton as NatSkeleton} from '@naturacosmeticos/natds-web';

import { ISkeletonProps } from './types';

export const Skeleton = (props: ISkeletonProps): React.ReactElement => {
    const {
        variant,
        height,
        width,
        animation,
    } = props;

    return (
        <NatSkeleton variant={variant} height={height} width={width} animation={animation} />
    );
}
