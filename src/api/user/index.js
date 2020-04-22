import api from '../index';

export const createUser = async (firstName, lastName, email, password) => {
  try {
    return await api.post('/users', { firstName, lastName, email, password });
  } catch (err) {
    console.log(err);
    return new Error();
  }
};

export const loginUser = async (email, password) => {
  try {
    return await api.post('/auth', { email, password });
  } catch (err) {
    console.log(err);
    return new Error();
  }
};
