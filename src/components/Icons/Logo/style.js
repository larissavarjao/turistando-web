import styled from 'styled-components';

export const LogoWordStyle = styled.p`
  margin: ${(props) => props.margin || 0};
  font-family: 'Raleway', sans-serif;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 700;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '2rem')};
`;

export const LogoImageStyle = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const LogoStyle = styled.div`
  margin-right: 16px;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
