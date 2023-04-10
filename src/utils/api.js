import axios from './axios'

const api = {
  marketing: {
    order: {
      list: async () => {
        const path = '/marketing/list_order/'
        return axios.get(path).then((res) => res.data)
      },
      create: async (order) => {
        const path = '/marketing/create_order/'
        return axios.post(path, order).then((res) => res.data)
      },
    },
  },
  planning: {
    bom: {
      list: async () => {
        const path = '/planning/list_bom'
        return axios.get(path).then((res) => res.data)
      },
    },
    product: {
      list: async () => {
        const path = '/planning/list_product'
        return axios.get(path).then((res) => res.data)
      },
    },
  },
}

export default api
