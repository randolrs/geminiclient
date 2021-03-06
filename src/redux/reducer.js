import ACTIONS from './action';

const defaultState = {
  isUserLoggedIn: false,
  currentUser: {},
  authErrors: [],
};

const sampleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.UPDATE_IS_LOGGED_IN: {
      let newState = {
        ...state,
        isUserLoggedIn: action.payload
      };

      return newState;
    }

    case ACTIONS.Types.SET_USER: {
      let newState = {
        ...state,
        currentUser: action.payload,
        isUserLoggedIn: true,
      };

      return newState;
    }

    case ACTIONS.Types.SET_AUTH_ERRORS: {
      let newState = {
        ...state,
        authErrors: action.payload
      };

      return newState;
    }

    case ACTIONS.Types.LOGOUT: {
      let newState = {
        ...state,
        isUserLoggedIn: false,
        currentUser: {},
      };

      return newState;
    }

    default:
      return state;
  }
};

export default sampleReducer;
