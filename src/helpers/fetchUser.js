import axios from 'axios';

const BASE_URL = "https://connections-api.herokuapp.com/users/current";

export function fetchUser() {
  return axios.get(BASE_URL);
}
