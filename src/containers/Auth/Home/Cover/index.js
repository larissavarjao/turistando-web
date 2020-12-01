import React from 'react';
import {
  Title,
  Image,
  Container,
  Phrases,
  Subtitle,
  AppleImage,
  GoogleImage,
  Apps,
} from './style';

const spaceMan = require('../../../components/Icons/illustrations/growth.svg');
const apple = require('../../../assets/images/apple.svg');
const google = require('../../../assets/images/google.png');

const Cover = () => {
  return (
    <Container>
      <Phrases>
        <Title>
          <span>Voe</span> para onde você <b>quiser</b>
        </Title>
        <Subtitle>Venha voar com a gente</Subtitle>
        <Apps>
          <AppleImage src={apple} alt="link para aplicativo na app store" />
          <GoogleImage
            src={google}
            alt="link para aplicativo na google play store"
          />
        </Apps>
      </Phrases>
      <Image src={spaceMan} alt="Space man" />
    </Container>
  );
};

export default Cover;
