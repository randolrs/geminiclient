import apiClient from './config';

const IS_LOGGED_IN = '/logged_in';
const LOGIN = '/login';
const SIGNUP = '/users';
const LOGOUT = '/users/sign_out';

export const getIsLoggedIn = async () => {
  const response = await apiClient.fetch(IS_LOGGED_IN);
  const { logged_in } = response;

  return logged_in;
};

export const login = async ({ userEmail, password }) => {
  const response = await apiClient.post(LOGIN, {
    'user[email]': userEmail,
    'user[password]': password,
  });

  return response;
};

export const signup = async ({ email, password, passwordConfirmation }) => {
  const response = await apiClient.post(SIGNUP, {
    'user[email]': email,
    'user[password]': password,
    'user[password_confirmation]': passwordConfirmation
  });

  return response;
};

export const logout = async () => {
  const response = await apiClient.delete(LOGOUT);

  return response;
};
