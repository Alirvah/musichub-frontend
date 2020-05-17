import { API_URL, BASE_URL, HOST } from '../config/constants';
import { handleError, handleResponse } from './apiUtils';

import axios from 'axios';

export function getApplications(group) {
  return axios
    .get(`${HOST}${BASE_URL}${API_URL.APPLICATION}?perm_group=${group}`)
    .then(handleResponse)
    .catch(handleError);
}
