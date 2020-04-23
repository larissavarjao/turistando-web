import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MaterialIcon } from '../Icons/Material/style';

export const MenuContainer = styled.div`
  background: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 17px 0;
  height: calc(100vh - 17 * 2px);
  width: ${(props) => props.open && '188px'};
  position: relative;
`;

export const MenuTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  margin-left: 24px;
`;

export const NavLinkContainer = styled(NavLink)`
  margin: 16px 0;
  padding: 0 24px;
  border-right: 2px solid transparent;
  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 24px * 2);
  text-decoration: none;

  &:nth-child(2) {
    margin-top: 42px;
  }

  svg {
    margin-right: ${(props) => props.open && '24px'};
    transition: 0.5s ease-in-out;
    fill: ${(props) => props.theme.gray};
  }

  &.active,
  &:hover {
    transition: 0.5s ease-in-out;
    border-right: 2px solid ${(props) => props.theme.primaryColor};

    span {
      transition: 0.5s ease-in-out;
      color: ${(props) => props.theme.primaryColor};
    }

    svg {
      transition: 0.5s ease-in-out;
      fill: ${(props) => props.theme.primaryColor};
    }
  }
`;

export const MaterialIconMenu = styled(MaterialIcon)`
  position: absolute;
  color: #d0cfd8;
  top: 14px;
  right: -24px;
  background: ${(props) => props.theme.white};
  cursor: pointer;
  display: ${(props) => (props.open ? 'block' : 'none')};
  transition: 0.5s ease-in-out;
`;

export const MenuOptionTitle = styled.span`
  transition: 0.5s ease-in-out;
  color: ${(props) => props.theme.gray};
  font-size: 14px;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;
