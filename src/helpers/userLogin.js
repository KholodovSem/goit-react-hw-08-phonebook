import axios from 'axios';

const BASE_URL = "https://connections-api.herokuapp.com/users/login";

export function userLogin(credentials) {
  return axios.post(BASE_URL, credentials);
}
