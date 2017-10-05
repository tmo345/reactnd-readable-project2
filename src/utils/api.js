import axios from 'axios';

const api = 'http://localhost:5001';

const token = 'authtoken135';

const headers = {
  Accept: 'application/json',
  Authorization: token
};

export const fetchFromApi = () => {
  return fetch(`${api}/categories`, { headers });
};

export const fetchCategories: fetch = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => {
      return data.categories;
    });

export const fetchPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json(), error => console.log('An error occurs', error))
    .then(data => {
      return data;
    });

export const fetchPost = id =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => {
      console.log('got response from server');
      return res.json();
    })
    .then(data => {
      console.log('data', data);
      return data;
    });

export const fetchPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const fetchComments = postId => {
  return axios({
    method: 'get',
    url: `${api}/posts/${postId}/comments`,
    headers
  });
};

export const postPostToServer = (
  title,
  id,
  timestamp,
  body,
  author,
  category
) => {
  return axios({
    method: 'post',
    url: `${api}/posts`,
    headers,
    data: {
      title,
      id,
      timestamp,
      body,
      author,
      category
    }
  });
};

export const votePostServer = (id, option) => {
  return axios({
    method: 'post',
    url: `${api}/posts/${id}`,
    headers,
    data: {
      option
    }

export const putPostServer = (id, title, body) => {
  return axios({
    method: 'put',
    url: `${api}/posts/${id}`,
    headers,
    data: {
      id,
      title,
      body,
    },
  });
};
