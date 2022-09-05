import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users/';

export function userRegistration(credentials) {
  return axios.post("signup", credentials);
}

export function userLogin(credentials) {
  return axios.post("login", credentials);
}

export function userLogOut() {
  return axios.post("logout");
}

export function fetchUser() {
  return axios.get("current");
}
