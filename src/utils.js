const TOKEN_NAME = "token";

export const SetAuthToken = (token) => {
  return localStorage.setItem(TOKEN_NAME, token);
};

export const GetAuthToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};
