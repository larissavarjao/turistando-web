import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme.white};
  width: calc(100% - 42px * 2);
  height: 64px;
  border-left: 1px solid ${(props) => props.theme.grayLight};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0 42px;
`;

export const Account = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.grayDark};
  padding: 1px;
  cursor: pointer;
`;

export const PageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
