import React from 'react';
import { FormTitle, FormSubTitle } from '../style';
import { Container, FormRow } from './style';
import { InputContainer, Input, Label } from '../../../components/Input';
import { PrimaryButton } from '../../../components/Button';

function Register() {
  return (
    <Container>
      <FormTitle>Cadastro</FormTitle>
      <FormSubTitle>
        Preencha os campos para se cadastrar na plataforma.
      </FormSubTitle>
      <FormRow>
        <InputContainer>
          <Input type='text' id='firstName' required />
          <Label for='firstName'>Nome</Label>
        </InputContainer>
        <InputContainer margin='12px 0 12px 24px'>
          <Input type='text' id='lastName' required />
          <Label for='lastName'>Sobrenome</Label>
        </InputContainer>
      </FormRow>
      <InputContainer width='100%'>
        <Input type='text' id='email' required />
        <Label for='email'>E-mail</Label>
      </InputContainer>
      <InputContainer width='100%'>
        <Input type='password' id='password' required />
        <Label for='password'>Password</Label>
      </InputContainer>
      <PrimaryButton width='100%' margin='24px 0'>
        Cadastrar
      </PrimaryButton>
    </Container>
  );
}

export default Register;
