import axios from './axios';

const api = {
  marketing: {
    order: {
      list: async () => {
        const path = '/marketing/list_order/';
        return axios.get(path).then((res) => res.data);
      },
      create: async (order) => {
        const path = '/marketing/create_order/';
        return axios.post(path, order).then((res) => res.data);
      },
    },
  },
  planning: {
    bom: {
      list: async () => {
        const path = '/planning/list_bom';
        return axios.get(path).then((res) => res.data);
      },
      getById: async (id) => {
        const path = `/planning/get_bom_excel/${id}`;
        return axios
          .get(path, {
            responseType: 'blob',
          })
          .then((res) => res.data);
      },
    },
    product: {
      getById: async (id) => {
        const path = `/planning/Product_api/${id}`;
        return axios.get(path).then((res) => res.data);
      },
      list: async (page) => {
        const path = `/planning/Product_api/?page=${page}`;
        return axios.get(path).then((res) => res.data);
      },
      suggestions: async () => {
        const path = '/planning/product_suggestions';
        return axios.get(path).then((res) => res.data);
      },
    },
    material: {
      list: async () => {
        const path = '/planning/list_materials';
        return axios.get(path).then((res) => res.data);
      },
    },
    stock: {
      list: async () => {
        const path = '/planning/Stock_api/';
        return axios.get(path).then((res) => res.data);
      },
      add: async (Stock_api) => {
        const path = '/planning/Stock_api/';
        return axios.post(path, Stock_api).then((res) => res.data);
      },
    },
    notification: {
      list: async () => {
        const path = '/planning/notify_limit/';
        return axios.get(path).then((res) => res.data);
      },
    },
  },
};

export default api;
