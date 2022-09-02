import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/users/signup';

export function userRegistration(credentials) {
  return axios.post(BASE_URL, credentials);
}
