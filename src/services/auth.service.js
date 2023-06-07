import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URI;

const register = (username, password) => axios.post(`${API_URL}signup`, {
  username,
  password,
});

const login = (username, password) => axios
  .post(`${API_URL}login/`, {
    username,
    password,
  })
  .then((response) => {
    if (response.data.token) {
      localStorage.setItem(
        'user',
        JSON.stringify({ token: response.data.token }),
      );
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
