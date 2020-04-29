import React from 'react';
import ReactLoading from 'react-loading';
import { theme } from '../../../style/globalStyle';
import { LoadingContainer } from './style';

export function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading type='spinningBubbles' color={theme.primaryColor} height={50} width={50} />
    </LoadingContainer>
  );
}
