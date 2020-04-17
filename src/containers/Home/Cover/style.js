import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30%;

  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    width: calc(100% - 4rem);
    margin-top: 0;
  `}
`;

export const Phrases = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('medium')`
    align-items: flex-start;
    margin-left: 3rem;
  `}
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.grayPurple};
  font-weight: 200;
  font-size: 40px;
  line-height: 1.25;
  margin: 0;
  text-align: center;

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
  color: ${(props) => props.theme.grayPurple};
`;

export const Image = styled.img`
  max-width: 750px;

  ${media.greaterThan('medium')`
    width: 45%;
    align-self: flex-end;
  `}
`;

export const AppleImage = styled.img`
  width: 170px;
  height: auto;
  cursor: pointer;

  ${media.greaterThan('medium')`
    width: auto;
    height: 50px;
  `}
`;

export const GoogleImage = styled.img`
  height: 76px;
  cursor: pointer;
`;

export const Apps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('medium')`
    flex-direction: row;
  `}
`;
