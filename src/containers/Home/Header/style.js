import styled from 'styled-components';
import media from 'styled-media-query';
import { PrimaryGhostButton } from '../../../components/Button';

export const HeaderContainer = styled.header`
  width: 100vw;
  min-height: 80px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  top: 0;
  margin-top: 1rem;

  ${media.greaterThan('medium')`
    padding: 0 5rem;
    width: calc(100vw - 10rem);
    justify-content: space-between;
    position: fixed;
  `};
`;

export const Logo = styled.div`
  display: none;

  ${media.greaterThan('medium')`
    margin-right: 16px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const PrimaryGhostButtonWithMargin = styled(PrimaryGhostButton)`
  margin-right: 16px;
`;
