import axios from 'axios'
import config from './config'

const instance = axios.create({
  baseURL: config.REACT_APP_BACKEND_URL,
})

export default instance