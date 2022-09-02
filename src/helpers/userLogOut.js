import axios from 'axios';

const BASE_URL = "https://connections-api.herokuapp.com/users/logout";

export function userLogOut() {
  return axios.post(BASE_URL);
}
