import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.purpleLightColor};
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DashboardContainer = styled.div`
  padding: 32px;
`;
