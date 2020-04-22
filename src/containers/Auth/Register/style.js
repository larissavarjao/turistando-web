import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormRow = styled.div`
  ${media.greaterThan('medium')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `};
`;
