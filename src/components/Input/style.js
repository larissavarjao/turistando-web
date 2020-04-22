import styled from 'styled-components';
import media from 'styled-media-query';

export const InputContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || '250px'};
  margin: ${(props) => props.margin || '0 0 24px 0'};

  ${media.lessThan('medium')`
    margin: 0 0 24px 0;
    width: 100%;
  `};
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.width || '100%'};
  color: ${(props) => props.theme.grayDarkColor};
  transition: 0.4s all;
  cursor: text;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0.5rem 0;
  border-bottom: 1.5px solid ${(props) => props.theme.grayDarkColor};
  box-shadow: none;
  color: ${(props) => props.theme.black};
  font-size: 15px;

  &:invalid {
    outline: 0;
  }

  &:focus,
  &:valid {
    border-color: ${(props) => props.theme.primaryColor};
  }

  &:focus ~ label,
  &:valid ~ label {
    font-size: 12px;
    top: -12px;
    color: ${(props) => props.theme.primaryColor};
  }
`;
