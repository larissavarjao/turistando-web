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
