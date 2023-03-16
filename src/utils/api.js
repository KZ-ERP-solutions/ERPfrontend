import axios from './axios'

const api = {
  marketing: {
    order: {
      list: async () => {
        const path = '/marketing/list_order/'
        return axios.get(path).then((res) => res.data)
      },
    },
  },
}

export default api
