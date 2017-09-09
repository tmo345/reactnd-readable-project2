// @flow

const api = "http://localhost:5001";

const token = 'authtoken135';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories: fetch = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
