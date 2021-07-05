const URL = "https://student-json-api.lidemy.me";

export const getPosts = () => {
  return fetch(`${URL}/posts`).then((res) => res.json());
};
