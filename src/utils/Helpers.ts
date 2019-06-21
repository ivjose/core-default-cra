import * as validator from 'validator';
import { UserAuth } from '../custom-types';
import { DEFAULT_USER_AUTH } from './Consts';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
/** Handle form validation for the login form
 * @param email - user's auth email
 * @param password - user's auth password
 * @param setError - function that handles updating error state value
 */
export const validateLoginForm = (
  email: string,
  password: string,
  setError: (error: string | null) => void,
): boolean => {
  // Check for undefined or empty input fields
  if (!email || !password) {
    setError('Please enter a valid email and password.');
    return false;
  }

  return true;
};

/** Return user auth from local storage value */
export const getStoredUserAuth = (): UserAuth => {
  const auth = window.localStorage.getItem('UserAuth');
  if (auth) {
    return JSON.parse(auth);
  }
  return DEFAULT_USER_AUTH;
};

/**
 * API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParams - body parameters of request
 */

export const apiRequest = async (
  url: string,
  method: string,
  bodyParams?: { username: string; password: string },
): Promise<any> => {
  const response = await axios.post(url, bodyParams);
  console.log(response, 'teg asd');

  return await response.data;
};
