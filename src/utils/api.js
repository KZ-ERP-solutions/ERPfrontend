import axios from './axios'

const api = {
  marketing: {
    createOrder: async (formData) => {
      const path = '/'
      return axios.post(path, formData).then((response) => response)
    },
  },
}

export default api
