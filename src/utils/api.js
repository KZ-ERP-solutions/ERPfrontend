import axios from './axios';

const api = {
  marketing: {
    order: {
      getById: (id) => {
        const path = `/marketing/order/${id}`;
        return axios.get(path).then((res) => res.data);
      },
      list: async () => {
        const path = '/marketing/order/';
        return axios.get(path).then((res) => res.data);
      },
      create: async (order) => {
        const path = '/marketing/order/';
        return axios.post(path, order).then((res) => res.data);
      },
      status: async () => {
        const path = '/planning/status/';
        return axios.get(path).then((res) => res.data);
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
      add: async (values) => {
        const path = 'planning/Product_api/';
        return axios.post(path, values).then((res) => res.data);
      },
    },
    material: {
      getById: (id) => {
        const path = `/planning/Material_api/${id}`;
        return axios.get(path).then((res) => res.data);
      },
      list: async (page) => {
        const path = `/planning/Material_api/?page=${page}`;
        return axios.get(path).then((res) => res.data);
      },
      suggestions: async () => {
        const path = '/planning/material_suggestion';
        return axios.get(path).then((res) => res.data);
      },
      add: async (values) => {
        const path = '/planning/Material_api/';
        return axios.post(path, values).then((res) => res.data);
      },
      edit: async (values) => {
        const path = '/planning/Material_api/';
        return axios.put(path, values).then((res) => res.data);
      },
    },
    stock: {
      getById: (id) => {
        const path = `/planning/Stock_api/${id}`;
        return axios.get(path).then((res) => res.data);
      },
      list: async () => {
        const path = '/planning/Stock_api/';
        return axios.get(path).then((res) => res.data);
      },
      add: async (values) => {
        const path = '/planning/Stock_api/';
        return axios.post(path, values).then((res) => res.data);
      },
      edit: async (values) => {
        const path = '/planning/Stock_api/';
        return axios.put(path, values).then((res) => res.data);
      },
      log: async () => {
        const path = '/planning/stock_log/';
        return axios.get(path).then((res) => res.data);
      },
      suggestions: async () => {
        const path = '/planning/material_suggestion';
        return axios.get(path).then((res) => res.data);
      },
    },
    notification: {
      list: async () => {
        const path = '/planning/notify_limit/';
        return axios.get(path).then((res) => res.data);
      },
    },
    pi: {
      list: async () => {
        const path = '/planning/pi_api/';
        return axios.get(path).then((res) => res.data);
      },
    },
  },
};

export default api;
