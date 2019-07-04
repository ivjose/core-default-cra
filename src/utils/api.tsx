/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Sheharyar Naseer (@sheharyarn)
 * @license MIT
 *
 */

import axios from 'axios';

/**
 * Create an Axios Client with defaults
 */
const client = axios.create({
  baseURL: process.env.NODE_ENV !== 'production' ? '' : process.env.REACT_APP_API,
});

/**
 * Request Wrapper with default success/error actions
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const request = function(options: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSuccess = function(response: any) {
    console.debug('Request Successful!', response);
    return response.data;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = function(error: any) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
      console.error('Headers:', error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
