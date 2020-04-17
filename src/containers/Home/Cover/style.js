import styled from 'styled-components';
import { PrimaryGhostButton } from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

export const Phrases = styled.div`
  margin-left: 3rem;
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
  font-weight: 200;
  font-size: 40px;
  line-height: 1.25;
  margin: 0;

  span {
    font-weight: 500;
    color: ${(props) => props.theme.primaryColor};
  }

  b {
    font-weight: 500;
  }
`;

export const Subtitle = styled.h2`
  padding: 10px;
  padding-left: 0;
  padding-bottom: 20px;
  font-size: 1.3rem;
  line-height: 1.3;
  font-weight: 300;
  margin: 0;
  color: ${(props) => props.theme.title};
`;

export const Image = styled.img`
  max-width: 750px;
  width: 45%;
  align-self: flex-end;
`;

export const PrimaryGhostButtonWithMargin = styled(PrimaryGhostButton)`
  margin-right: 16px;
`;
