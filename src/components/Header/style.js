import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.white};
  width: 100%;
  height: 64px;
  border-left: 1px solid ${(props) => props.theme.grayLight};
`;
