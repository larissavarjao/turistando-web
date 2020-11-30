import React, { useState, useContext } from 'react';
import { loginUser } from '../../../api/user';
import { PrimaryButton } from '../../../components/Button';
import { Input, InputContainer, Label } from '../../../components/Input';
import { Loading } from '../../../components/ScreenCases';
import { ErrorFormMessage, ErrorMessage } from '../../../components/Message';
import { history } from '../../../context/history';
import { isEmailValid } from '../../../utils/emailValidator';
import {
  setTokenLocalStorage,
  setUserLocalStorage,
} from '../../../utils/localStorage';
import { FormSubTitle, FormTitle } from '../style';
import { Container } from './style';
import { GlobalDispatchContext } from '../../../context/globalContext';

function Login() {
  const dispatch = useContext(GlobalDispatchContext);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    let errors = 0;

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

    const response = await loginUser(email, password);
    if (!response.data) {
      return setError(true);
    }
    const user = response.data.user;
    const token = response.data.token;

    if (user && token) {
      setUserLocalStorage(user);
      setTokenLocalStorage(token);

      dispatch({ type: 'SET_USER', payload: user });
      dispatch({ type: 'SET_TOKEN', payload: token });

      history.push('/dashboard');
    }

    setLoading(false);
  };

  return (
    <Container>
      {!error && (
        <>
          <FormTitle>Login</FormTitle>
          <FormSubTitle>
            Preencha seu email e senha para entrar na plataforma.
          </FormSubTitle>
          <InputContainer width="100%">
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label htmlFor="email">E-mail</Label>
            {emailError && <ErrorFormMessage message={emailError} />}
          </InputContainer>
          <InputContainer width="100%">
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Label htmlFor="password">Senha</Label>
            {passwordError && <ErrorFormMessage message={passwordError} />}
          </InputContainer>
          <PrimaryButton width="100%" margin="24px 0" onClick={onSubmit}>
            Entrar
          </PrimaryButton>
        </>
      )}
      {loading && !error && <Loading />}
      {error && <ErrorMessage />}
    </Container>
  );
}

export default Login;
