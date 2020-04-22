export const setUserLocalStorage = (user) => {
  return localStorage.setItem('user', user);
};

export const getUserLocalStorage = () => {
  return localStorage.getItem('user');
};
