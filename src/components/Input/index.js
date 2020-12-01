import React from 'react';
import { Input, InputContainer, Label } from './style';
import { ErrorFormMessage } from '../Message';

export const InputLabel = ({
  type,
  id,
  value,
  onChange,
  required,
  htmlFor,
  label,
  error,
  width,
  margin,
}) => {
  return (
    <InputContainer width={width} margin={margin}>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      />
      <Label htmlFor={htmlFor}>{label}</Label>
      {error && <ErrorFormMessage message={error} />}
    </InputContainer>
  );
};
