import type { Category, Post } from 'store-types';

const api = "http://localhost:5001";

const token = 'authtoken135';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const fetchFromApi = () => {
  return fetch(`${api}/categories`, { headers });
}

export const getCategories: fetch = (): Promise<Array<Category>> =>
  fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
    .then((data: {
      categories: Array<Category>
    }) => {
      return data.categories;
    })

export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(res => res.json(), error => console.log('An error occurs', error))
  .then((data) => {
    return data;
  })

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
  .then(res => {
    console.log('got response from server')
    return res.json()
  })
  .then(data => {
    console.log('data', data)
    return data
  })

export const fetchPostsByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
  .then((res) => res.json())
  .then((data) => data);
