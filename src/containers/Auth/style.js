import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from '../../style/globalComponents';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: ${(props) => props.theme.white};
`;

export const HalfViewImage = styled.div`
  width: 60vw;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1537522306408-8435f315b2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  ${media.lessThan('medium')`
    display: none;
  `};
`;

export const FormContainer = styled.div`
  padding: 42px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const GoBack = styled(Link)`
  color: ${(props) => props.theme.grayPurple};
`;
