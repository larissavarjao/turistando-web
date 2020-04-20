import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from '../../style/globalComponents';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${(props) => props.theme.white};

  ${media.lessThan('medium')`
    align-items: center;
    justify-content: center;
  `};
`;

export const HalfViewImage = styled.div`
  width: 70vw;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1537522306408-8435f315b2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;

  ${media.lessThan('medium')`
    display: none;
  `};
`;

export const FormContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('medium')`
    padding: 42px;
    width: 30vw;
    justify-content: flex-start;
    align-items: flex-start;
  `};
`;

export const GoBack = styled(Link)`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 3rem;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  margin: 0;
  font-weight: 500;
  margin-top: 2rem;

  ${media.lessThan('medium')`
    text-align: center;
  `};
`;

export const FormSubTitle = styled.h3`
  margin: 0;
  margin-top: 24px;
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 3rem;
`;
