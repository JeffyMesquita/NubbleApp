import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.LjOlWqKn1CX97KxXLNmAm9D5gPgMCVQzwiH6dBcJPRkNBMAbgu2jJRcGIwUv',
  },
});
