import {
  getIsLoggedIn,
  logout,
  login,
  signup,
  updateUser
} from '../api/auth';

const Types = {
  UPDATE_IS_LOGGED_IN: 'UPDATE_IS_LOGGED_IN',
  LOGOUT: 'LOGOUT',
  SET_USER: 'SET_USER',
  SET_AUTH_ERRORS: 'SET_AUTH_ERRORS',
};

export const updateIsLoggedIn = () => {
  return getIsLoggedIn().then(isLoggedIn => {
    return {
      type: Types.UPDATE_IS_LOGGED_IN,
      payload: isLoggedIn
    };
  }).catch(err => {
    return {
      type: 'nothing',
      payload: null,
    }
  });
};

export const loginUser = (credentials) => {
  return login(credentials).then(res => {
    if(res.logged_in) {
      return {
        type: Types.SET_USER,
        payload: res.user
      };
    } else {
      return {
        type: Types.SET_AUTH_ERRORS,
        payload: res.errors,
      }
    }
  }).catch(err => {
    return {
      type: Types.SET_AUTH_ERRORS,
      payload: ['something went wrong'],
    }
  });
};

export const signupUser = (attributes) => {
  return signup(attributes).then(res => {
    if(res.status === 'created') {
      return {
        type: Types.SET_USER,
        payload: res.user
      };
    } else {
      return {
        type: Types.SET_AUTH_ERRORS,
        payload: res.errors,
      }
    }
  }).catch(err => {
    return {
      type: Types.SET_AUTH_ERRORS,
      payload: ['something went wrong'],
    }
  });
};

export const updateUserAttributes = (attributes) => {
  return updateUser(attributes).then(res => {
    return {
      type: Types.SET_USER,
      payload: res.user
    };
  }).catch(err => {
    return {
      type: 'nothing',
      payload: null,
    }
  });
};

export const logoutUser = () => {
  return logout().then(res => {

    if(res.logged_out) {
      return {
        type: Types.LOGOUT,
        payload: {}
      };
    } else {
      return {
        type: Types.SET_AUTH_ERRORS,
        payload: ['something went wrong'],
      }
    }
  }).catch(err => {
    return {
      type: 'nothing',
      payload: null,
    }
  });
};

export default {
  Types
};
