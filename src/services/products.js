import axios from 'axios'
import { BASE_URL } from '../utils/serviceHelpers'

export const getAllProducts = () => {
  return axios.get(BASE_URL)
    .then(response => ({data: response.data, status: response.status}))
    .catch(error => {
      if(!error.status) return({error: 'Failed connection', status: 0})
      return ({error: error.message, status: error.response.status})
    })
}

export const getProductById = (id) => {
  return axios.get(`${BASE_URL}/${id}`)
    .then(response => ({data: response.data, status: response.status}))
    .catch(error => {
      if(!error.status) return({error: 'Failed connection', status: 0})
      return ({error: error.message, status: error.response.status})
    })
}