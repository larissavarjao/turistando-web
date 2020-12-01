import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  background: ${(props) => props.theme.white};
  min-height: 100vh;

  ${media.greaterThan('medium')`
    top: 0;
  `}
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
