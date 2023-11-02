import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yourbaseurl.com',
  // headers, timeout, etc
});

export {api};