import React from 'react';
import {
  Icon,
  SmallErrorMessage,
  MessageContainer,
  SpanErrorMessage,
  MessageTitle,
} from './style';

const error = require('../Icons/illustrations/error.svg');
const success = require('../Icons/illustrations/success.svg');

function Message({ iconPath, message, title }) {
  return (
    <MessageContainer>
      <Icon
        src={iconPath}
        alt="icone para sucesso e erro que ocorre no sistema"
      />
      <MessageTitle>{title}</MessageTitle>
      <SpanErrorMessage>{message}</SpanErrorMessage>
    </MessageContainer>
  );
}

export const ErrorMessage = () => {
  return (
    <Message
      iconPath={error}
      message="Ocorreu um erro ao criar usuário. Por favor, tente novamente mais tarde!"
      title="Ocorreu um erro"
    />
  );
};

export const SuccessMessage = ({ message }) => {
  return <Message iconPath={success} message={message} />;
};

export const ErrorFormMessage = ({ message }) => {
  return <SmallErrorMessage>{message}</SmallErrorMessage>;
};
