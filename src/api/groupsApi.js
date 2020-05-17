import { API_URL, BASE_URL, HOST } from '../config/constants';
import { handleError, handleResponse } from './apiUtils';

import axios from 'axios';

export function getGroups() {
  return axios
    .get(HOST + BASE_URL + API_URL.BUSINESS_GROUP)
    .then(handleResponse)
    .catch(handleError);
}
