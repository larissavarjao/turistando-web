import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 250px;
  height: 44px;
  line-height: 44px;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: ${(props) => props.theme.grayLightColor};
  transition: 0.6s all;
  cursor: text;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0.5rem 0;
  border-bottom: 1.5px solid ${(props) => props.theme.grayLightColor};
  box-shadow: none;
  color: ${(props) => props.theme.black};

  &:invalid {
    outline: 0;
  }

  &:focus,
  &:valid {
    border-color: ${(props) => props.theme.primaryColor};
  }

  &:focus ~ label,
  &:valid ~ label {
    font-size: 14px;
    top: -24px;
    color: ${(props) => props.theme.primaryColor};
  }
`;
