import type { AxiosInstance } from 'axios'
import axios from 'axios'

const http: AxiosInstance = axios.create({
  withCredentials: false,
  baseURL: 'http://localhost:8000'
})

export default http
