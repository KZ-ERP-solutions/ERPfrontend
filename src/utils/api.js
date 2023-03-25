import axios from './axios'

const api = {
  marketing: {
    order: {
      list: async () => {
        const path = '/marketing/list_order/'
        return axios.get(path).then((res) => res.data)
      },
      create:async (order)=>{
        const path = '/marketing/create_order/'
        return axios.post(path,order).then((res) => res.data)
      }
    },
  },
}

export default api
