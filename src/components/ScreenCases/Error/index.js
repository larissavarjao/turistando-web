import React from 'react';
import { Container, Text, Image } from '../style';

export function Error({ message }) {
  return (
    <Container>
      <Image
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 58 58"
        style={{ enableBackground: 'new 0 0 58 58' }}
        space="preserve"
      >
        <rect style={{ fill: '#ECF0F1' }} width="58" height="58" />
        <rect style={{ fill: '#546A79' }} width="58" height="12" />
        <circle style={{ fill: '#ED7161' }} cx="6" cy="6" r="3" />
        <circle style={{ fill: '#F0C419' }} cx="15" cy="6" r="3" />
        <circle style={{ fill: '#4FBA6F' }} cx="24" cy="6" r="3" />
        <path
          style={{ fill: '#BDC3C7' }}
          d="M35,48H22c-0.552,0-1-0.447-1-1s0.448-1,1-1h13c0.552,0,1,0.447,1,1S35.552,48,35,48z"
        />
        <path
          style={{ fill: '#BDC3C7' }}
          d="M40,52H17c-0.552,0-1-0.447-1-1s0.448-1,1-1h23c0.552,0,1,0.447,1,1S40.552,52,40,52z"
        />
        <circle style={{ fill: '#ED7161' }} cx="29" cy="30" r="12" />
        <path
          style={{ fill: '#FFFFFF' }}
          d="M30.414,30l4.293-4.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L29,28.586
	l-4.293-4.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L27.586,30l-4.293,4.293c-0.391,0.391-0.391,1.023,0,1.414
	C23.488,35.902,23.744,36,24,36s0.512-0.098,0.707-0.293L29,31.414l4.293,4.293C33.488,35.902,33.744,36,34,36
	s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L30.414,30z"
        />
      </Image>
      <Text>{message}</Text>
    </Container>
  );
}
