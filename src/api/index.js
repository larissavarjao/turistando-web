import axios from 'axios';
import { getUserLocalStorage } from '../utils/localStorage';

const localStorageUser = getUserLocalStorage();

export default axios.create({
  baseURL: 'http://localhost:4444',
  headers: localStorageUser
    ? {
        Authorization: `Bearer ${localStorageUser}`,
      }
    : {},
});
