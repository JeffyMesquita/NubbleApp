import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.2Uw7J25vOuIZhtrgxGcNAyG1mm0unqD8m6v1AKDfbICwlWBmm1qpW-74Quk4',
  },
});
