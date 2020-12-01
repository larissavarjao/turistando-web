import styled from 'styled-components';

export const CreateTravelsContainer = styled.div`
  background: ${(props) => props.theme.white};
  border-radius: 8px;
  padding: 24px;
`;

export const CreateTravelsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;
