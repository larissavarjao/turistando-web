import React, { useState } from 'react';
import { isEmailValid } from '../../../utils/emailValidator';

import { FormTitle, FormSubTitle } from '../style';
import { Container, FormRow } from './style';
import { InputContainer, Input, Label } from '../../../components/Input';
import { PrimaryButton } from '../../../components/Button';
// import GmailIcon from '../../../components/Icons/Social/gmail';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(isEmailValid(email));
    console.log({ firstName, lastName, email, password });
  };

  return (
    <Container>
      <FormTitle>Cadastro</FormTitle>
      <FormSubTitle>
        Preencha os campos para se cadastrar na plataforma.
      </FormSubTitle>
      <FormRow>
        <InputContainer>
          <Input
            type='text'
            id='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Label htmlFor='firstName'>Nome</Label>
        </InputContainer>
        <InputContainer margin='12px 0 12px 24px'>
          <Input
            type='text'
            id='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <Label htmlFor='lastName'>Sobrenome</Label>
        </InputContainer>
      </FormRow>
      <InputContainer width='100%'>
        <Input
          type='text'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Label htmlFor='email'>E-mail</Label>
      </InputContainer>
      <InputContainer width='100%'>
        <Input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Label htmlFor='password'>Password</Label>
      </InputContainer>
      <PrimaryButton width='100%' margin='24px 0' onClick={onSubmit}>
        Cadastrar
      </PrimaryButton>
      {/* <GmailIcon /> */}
    </Container>
  );
}

export default Register;
