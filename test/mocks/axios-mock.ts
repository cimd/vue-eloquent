import axios, { AxiosInstance } from 'axios'

const http: AxiosInstance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:8000',
})

export default http
