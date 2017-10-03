export const checkCategories = value =>
  ['udacity', 'react', 'redux'].includes(value)
    ? undefined
    : ' Please select a valid category from the menu';

export const required = value => (value ? undefined : 'Required');
