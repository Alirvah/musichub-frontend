export const API_URL = {
  TOKEN: '/api/token/',
  REGISTER: '/accounts/register/'
};

export const HOST =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'http://10.171.94.79:80';

export const BASE_URL = '/bookit/api/v1';
