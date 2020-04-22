import axios from 'axios';
import { getTokenLocalStorage } from '../utils/localStorage';

const localStorageToken = getTokenLocalStorage();

export default axios.create({
  baseURL: 'http://localhost:4444',
  headers: localStorageToken
    ? {
        Authorization: `Bearer ${localStorageToken}`,
      }
    : {},
});
