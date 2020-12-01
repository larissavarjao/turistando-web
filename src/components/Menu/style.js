import styled from 'styled-components';
import media from 'styled-media-query';
import { NavLink } from 'react-router-dom';
import { MaterialIcon } from '../Icons/Material/style';

export const MenuContainer = styled.div`
  position: absolute;
  width: ${(props) => (props.open ? '100vw' : '0')};
  display: ${(props) => (props.open ? 'flex' : 'none')};
  background: ${(props) => props.theme.primaryColor};
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${media.greaterThan('medium')`
    background: ${(props) => props.theme.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 17px 0;
    height: calc(100vh - 17 * 2px);
    width: ${(props) => (props.open ? '188px' : 'auto')};
    position: relative;
  `};
`;

export const MenuTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${media.greaterThan('medium')`
    align-items: flex-start;
  `};
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 8px;

  ${media.greaterThan('medium')`
    width: 30px;
    height: 30px;
    margin-left: 24px;
  `};
`;

export const NavLinkContainer = styled(NavLink)`
  text-decoration: none;
  margin: 16px 0;

  svg {
    display: none;
  }

  ${media.greaterThan('medium')`
    padding: 0 24px;
    border-right: 2px solid transparent;
    transition: 0.5s ease-in-out;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: calc(100% - 24px * 2 - 2px);

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
        display: block;
        transition: 0.5s ease-in-out;
        fill: ${(props) => props.theme.primaryColor};
      }
    }
  `};
`;

export const MaterialIconMenu = styled(MaterialIcon)`
  display: none;

  ${media.greaterThan('medium')`
    position: absolute;
    color: #d0cfd8;
    top: 14px;
    right: -24px;
    background: ${(props) => props.theme.white};
    cursor: pointer;
    display: ${(props) => (props.open ? 'block' : 'none')};
    transition: 0.5s ease-in-out;
  `};
`;

export const MenuOptionTitle = styled.span`
  color: ${(props) => props.theme.white};
  font-size: 27px;

  ${media.greaterThan('medium')`
    transition: 0.5s ease-in-out;
    color: ${(props) => props.theme.gray};
    font-size: 14px;
    display: ${(props) => (props.open ? 'block' : 'none')};
    transform: ${(props) => (props.open ? 'scale(1)' : 'none')};
    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  `};
`;

export const LogOut = styled.div`
  svg {
    fill: ${(props) => props.theme.white};
    cursor: pointer;
    margin: 12px 0 0 0;
    width: 40px;
    height: 40px;

    ${media.greaterThan('medium')`
      fill: ${(props) => props.theme.gray};
      margin: 0 0 0 24px;
      width: 30px;
      height: 30px;
    `}
  }
`;

export const MaterialIconClose = styled(MaterialIcon)`
  color: ${(props) => props.theme.white} !important;
  position: absolute;
  top: 12px;
  right: 12px;

  ${media.greaterThan('medium')`
    display: none;
  `}
`;
