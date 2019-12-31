import apiClient from './config';

const IS_LOGGED_IN = '/logged_in';
const LOGIN = '/login';
const USERS = '/users';
const LOGOUT = '/logout';

export const getIsLoggedIn = async () => {
  const response = await apiClient.fetch(IS_LOGGED_IN);
  const { logged_in } = response;

  return logged_in;
};

export const login = async ({ email, password }) => {
  const response = await apiClient.post(LOGIN, {
    'user[email]': email,
    'user[password]': password,
  });

  return response;
};

export const logout = async ({ email, password }) => {
  const response = await apiClient.delete(LOGOUT);

  return response;
};

export const updateUser = async ({ email, currentPassword }) => {
  const response = await apiClient.update(`${USERS}/${1}`, {
    'user[email]': email,
    'user[password]': currentPassword,
  });

  return response;
};

export const signup = async ({ email, password, passwordConfirmation }) => {
  const response = await apiClient.post(USERS, {
    'user[email]': email,
    'user[password]': password,
    'user[password_confirmation]': passwordConfirmation
  });

  return response;
}
