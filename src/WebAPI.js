import { GetAuthToken } from "./utils";

const URL = "https://student-json-api.lidemy.me";

export const getPosts = () => {
  return fetch(`${URL}/posts`).then((res) => res.json());
};

export const Login = (username, password) => {
  return fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const getMe = () => {
  const token = GetAuthToken();
  return fetch(`${URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const postButtomFetch = (postTitle, postBody) => {
  const token = GetAuthToken();
  fetch("https://student-json-api.lidemy.me/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: postTitle,
      body: postBody,
    }),
  }).then((res) => res.json());
};
