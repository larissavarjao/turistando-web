import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuContainer = styled.div`
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 17px 0;
  height: calc(100vh - 17 * 2px);
`;

export const MenuTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
`;

export const NavLinkContainer = styled(NavLink)`
  margin: 16px 0;
  padding: 0 24px;
  border-right: 2px solid transparent;
  transition: 0.5s ease-in-out;
  display: flex;

  &:nth-child(2) {
    margin-top: 42px;
  }

  svg {
    transition: 0.5s ease-in-out;
    fill: ${(props) => props.theme.gray};
  }

  &.active,
  &:hover {
    transition: 0.5s ease-in-out;
    border-right: 2px solid ${(props) => props.theme.primaryColor};

    svg {
      transition: 0.5s ease-in-out;
      fill: ${(props) => props.theme.primaryColor};
    }
  }
`;
