import axios, { AxiosInstance } from 'axios'

const http: AxiosInstance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:8089',
})

export default http
