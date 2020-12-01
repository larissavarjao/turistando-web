import api from '../index';
import { checkErrors } from '../../utils/errors';

export const createTravel = async (travelObject) => {
  try {
    return await api.post('/travels', travelObject);
  } catch (err) {
    console.log(err);
    return new Error();
  }
};

export const getAllTravels = async (userId) => {
  try {
    return await api.get(`/users/${userId}/travels`);
  } catch (err) {
    console.log(err);
    checkErrors(err.message);
    return new Error();
  }
};
