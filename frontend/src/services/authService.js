import API from '../api/axios';

export const signupUser = async (email, password) => {
  return await API.post('/auth/signup', { email, password });
};

export const loginUser = async (email, password) => {
  return await API.post('/auth/login', { email, password });
};
