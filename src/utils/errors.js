import { forceLogout } from './login';

const errors = {
  notLogged: 'Request failed with status code 401',
};

export const checkErrors = (message) => {
  if (message === errors.notLogged) {
    forceLogout();
  }
};
