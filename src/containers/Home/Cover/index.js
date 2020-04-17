import React from 'react';
import {
  Title,
  Image,
  Container,
  Phrases,
  Subtitle,
  Buttons,
  PrimaryGhostButtonWithMargin,
} from './style';
import { PrimaryButton } from '../../../components/Button';

const spaceMan = require('../../../components/Icons/illustrations/growth.svg');

const Cover = () => {
  return (
    <Container>
      <Phrases>
        <Title>
          <span>Voe</span> para onde você <b>quiser</b>
        </Title>
        <Subtitle>Venha voar com a gente</Subtitle>
        <Buttons>
          <PrimaryGhostButtonWithMargin>Registrar</PrimaryGhostButtonWithMargin>
          <PrimaryButton>Login</PrimaryButton>
        </Buttons>
      </Phrases>
      <Image src={spaceMan} alt='Space man' />
    </Container>
  );
};

export default Cover;
