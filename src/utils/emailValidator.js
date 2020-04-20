import * as EmailValidator from 'email-validator';

export const isEmailValid = (email) => EmailValidator.validate(email);
