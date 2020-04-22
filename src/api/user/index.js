import api from '../index';

export const createUser = async (firstName, lastName, email, password) => {
  try {
    return await api.post('/users', { firstName, lastName, email, password });
  } catch (err) {
    console.log(err);
    return new Error('Ocorreu um erro ao criar usuário. Por favor, tente novamente mais tarde!');
  }
};
