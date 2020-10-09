import { UserActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const signOut = (user) => ({
  type: UserActionTypes.SIGN_OUT,
  payload: user,
});
