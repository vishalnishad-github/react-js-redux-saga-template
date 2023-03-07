import { USERS } from "../constants";

export const getUsers = () => {
  return {
    type: USERS.GET_USERS_REQUESTED,
  };
};
