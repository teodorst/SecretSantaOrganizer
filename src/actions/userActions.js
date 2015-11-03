// actions for a user
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";
export const USER_REQUEST = "USER_REQUEST";

export function userLoginIn() {
  return {
    type: USER_LOGGED_OUT
  }
}

export function userLoggedOut() {
  return {
    type: USER_LOGGED_OUT
  }
}

export function userRequest() {
  return {
    type: USER_REQUEST
  }
}