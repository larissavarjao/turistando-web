import styled from 'styled-components';

const DefaultButton = styled.button`
  padding: 8px;
  font-size: 15px;
  padding-left: 40px;
  padding-right: 40px;
  display: block;
  box-shadow: 0 0 0 0 #5b3cc4;
  transition: all 0.25s ease;
  border-radius: 35px;
  cursor: pointer;
  outline: none;
  min-height: 38px;
  min-width: 150px;
`;

export const PrimaryButton = styled(DefaultButton)`
  color: #fff;
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
  color: #fff;
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
