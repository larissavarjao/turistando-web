import React, { useState } from 'react';

import { InputLabel } from '../../../components/Input';
import { isEmailValid } from '../../../utils/emailValidator';
import { PrimaryButton } from '../../../components/Button';
import { FormTitle, FormSubTitle } from '../style';
import { Container, FormRow } from './style';
import { createUser } from '../../../api/user';
import { Loading } from '../../../components/ScreenCases';
import { ErrorMessage } from '../../../components/Message';
import { history } from '../../../context/history';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    let errors = 0;

    if (firstName.length === 0) {
      setLoading(false);
      setFirstNameError('Nome não é válido.');
      errors++;
    }

    if (email.length === 0 || !isEmailValid(email)) {
      setLoading(false);
      setEmailError('Email não é válido.');
      errors++;
    }

    if (password.length === 0 || password.length < 6) {
      setLoading(false);
      setPasswordError('Senha não é válida. Mínimo de 6 caracteres.');
      errors++;
    }

    if (errors > 0) return;

    const newUser = await createUser(firstName, lastName, email, password);
    if (!newUser.data) {
      return setError(true);
    }

    history.push('/login');

    setLoading(false);
  };

  return (
    <Container>
      {!error && (
        <>
          <FormTitle>Cadastro</FormTitle>
          <FormSubTitle>
            Preencha os campos para se cadastrar na plataforma.
          </FormSubTitle>
          <FormRow>
            <InputLabel
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              error={firstNameError}
              label="Nome"
            />
            <InputLabel
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              margin="0 0 24px 24px"
              label="Sobrenome"
              htmlFor="lastName"
            />
          </FormRow>
          <InputLabel
            width="100%"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            label="E-mail"
            htmlFor="email"
            error={emailError}
          />
          <InputLabel
            width="100%"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            label="Senha"
            htmlFor="password"
            error={passwordError}
          />
          <PrimaryButton width="100%" margin="24px 0" onClick={onSubmit}>
            Cadastrar
          </PrimaryButton>
        </>
      )}
      {loading && !error && <Loading />}
      {error && <ErrorMessage />}
    </Container>
  );
}

export default Register;
