export const selectAuth = state => state.auth;
export const selectIsLoggeIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user;
export const selectUserEmail = state => state.auth.user.email;