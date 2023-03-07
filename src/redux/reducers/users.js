import { USERS } from "../constants";

const initialState = {
  users: [],
  loading: false,
  success: false,
  error: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case USERS.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case USERS.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
        success: true,
      };
    case USERS.GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
