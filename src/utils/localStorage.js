export const setUserLocalStorage = (user) => {
  return localStorage.setItem('user', JSON.stringify(user));
};

export const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const setTokenLocalStorage = (token) => {
  return localStorage.setItem('token', token);
};

export const getTokenLocalStorage = () => {
  return localStorage.getItem('token');
};

export const clearLocalStorage = () => {
  return localStorage.clear();
};

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
