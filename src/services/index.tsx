import "whatwg-fetch";

export const api = "http://localhost:8000";
export const fetchArticle = () => {
  return fetch(`${api}/article`).then(response => response.json());
};
export const fetchInfo = () => {
  return fetch(`${api}/info`).then(response => response.json());
};
