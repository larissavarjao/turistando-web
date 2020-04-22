import styled from 'styled-components';

export const MaterialIcon = styled.i`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${(props) => props.size || '36px'};
  color: ${(props) => props.color || props.theme.primaryColor};
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  -moz-osx-font-smoothing: grayscale;

  font-feature-settings: 'liga';
`;
