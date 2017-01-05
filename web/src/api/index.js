import Api from './api';
const api = new Api({
  // baseURI: '/api',
  baseURI: 'https://ruby-china.org/api/v3',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
export default api
