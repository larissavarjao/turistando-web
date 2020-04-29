import styled from 'styled-components';
import media from 'styled-media-query';

const DefaultButton = styled.button`
  padding: 8px;
  font-size: 15px;
  display: block;
  box-shadow: 0 0 0 0 #5b3cc4;
  transition: all 0.25s ease;
  border-radius: 35px;
  cursor: pointer;
  outline: none;
  min-height: 38px;
  width: ${(props) => props.width || '100px'};
  margin: ${(props) => props.margin || 0};
  text-transform: uppercase;

  ${media.greaterThan('medium')`
    width: ${(props) => props.width || '150px'};
  `}
`;

export const PrimaryButton = styled(DefaultButton)`
  color: ${(props) => props.theme.white};
  border: none;
  background: ${(props) => props.theme.primaryColor};

  &:hover {
    box-shadow: 0 9px 28px -9px ${(props) => props.theme.primaryColor};
  }
`;

export const PrimaryGhostButton = styled(DefaultButton)`
  color: ${(props) => props.theme.primaryColor};
  background: transparent;
  border: ${(props) => `1.25px solid ${props.theme.primaryColor}`};

  &:hover {
    box-shadow: 0 9px 28px -9px ${(props) => props.theme.primaryColor};
  }
`;

export const SecondaryButton = styled(DefaultButton)`
  color: ${(props) => props.theme.white};
  border: none;
  background: ${(props) => props.theme.secondaryColor};

  &:hover {
    box-shadow: 0 9px 28px -9px ${(props) => props.theme.secondaryColor};
  }
`;
export const SecondaryGhostButton = styled(DefaultButton)`
  color: ${(props) => props.theme.secondaryColor};
  background: transparent;
  border: ${(props) => `1.25px solid ${props.theme.secondaryColor}`};

  &:hover {
    box-shadow: 0 9px 28px -9px ${(props) => props.theme.secondaryColor};
  }
`;

export const RoundedButtonStyle = styled(DefaultButton)`
  color: ${(props) => props.theme.white};
  border: none;
  background: ${(props) => props.theme.primaryColor};
  width: 44px !important;
  height: 44px;
  position: relative;

  &:hover {
    box-shadow: 0 9px 28px -9px ${(props) => props.theme.primaryColor};
  }
`;

export const RoundedSign = styled.span`
  font-size: 27px;
  right: 13px;
  top: 5px;
  position: absolute;
`;
