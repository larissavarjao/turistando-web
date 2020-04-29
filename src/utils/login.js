import { getUserLocalStorage, getTokenLocalStorage, clearLocalStorage } from './localStorage';
import { history } from '../context/history';

export const isUserLogged = (state, setUserOnGlobalState, setTokenOnGlobalState) => {
  const isUserOnGlobalState = state.user && Object.keys(state.user).length;

  if (isUserOnGlobalState) return true;

  const isUserOnLocalHost = getUserLocalStorage();
  const isTokenOnLocalHost = getTokenLocalStorage();

  if (isUserOnLocalHost && isTokenOnLocalHost) {
    setUserOnGlobalState(isUserOnLocalHost);
    setTokenOnGlobalState(isTokenOnLocalHost);
    return true;
  }

  return false;
};

export const forceLogout = () => {
  clearLocalStorage();
  history.push('/');
};
