// @flow
import type { Category } from 'store-types';

const api = "http://localhost:5001";

const token = 'authtoken135';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories: fetch = (): Promise<Array<Category>> =>
  fetch(`${api}/categories`, { headers })
    .then((res) => res.json())
    .then((data: {
      categories: Array<Category>
    }) => {
      return data.categories;
    })
