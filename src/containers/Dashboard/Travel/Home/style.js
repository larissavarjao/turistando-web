import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TravelsContainer = styled(Container)`
  flex-direction: row;
  margin-top: 24px;
  cursor: pointer;
  flex-wrap: wrap;
`;

export const Travel = styled.div`
  background-color: ${(props) => props.theme.white};
  border-radius: 4px;
  padding: 12px 24px;
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  margin: 0 12px 12px 0;
`;

export const TravelDate = styled.span`
  margin-top: 12px;
  color: ${(props) => props.theme.grayPurple};
`;
