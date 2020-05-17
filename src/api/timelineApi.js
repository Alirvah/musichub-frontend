import axios from 'axios';
import { handleResponse, handleError } from './apiUtils';
import { API_URL, BASE_URL, HOST } from '../config/constants';

export function getTimeline() {
  return axios
    .get(HOST + BASE_URL + API_URL.TIMELINE)
    .then(handleResponse)
    .catch(handleError);
}
