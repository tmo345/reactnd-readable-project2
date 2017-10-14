import React from 'react';
import { initialCategoryState } from '../../reducers/category-reducer';
import { required, checkCategories } from './validate';
import {
  ReadableTextInput,
  ReadableSelect,
  ReadableTextarea,
} from './reduxFormFields';
import { Field } from 'redux-form';

const categories = initialCategoryState.categories.filter(
  category => category.name !== 'all',
);

export const CategorySelectField = props => {
  return (
    <Field
      component={ReadableSelect}
      label="Category"
      name="category"
      className="ui selection dropdown"
      validate={[required, checkCategories]}
    >
      <option key="empty" />
      {categories.map(category => (
        <option key={category.name} value={category.name}>
          {category.name.slice(0, 1).toUpperCase() + category.name.slice(1)}
        </option>
      ))}
    </Field>
  );
};

export const TitleInputField = props => (
  <Field
    component={ReadableTextInput}
    type="text"
    name="title"
    label="Title"
    validate={required}
  />
);

export const AuthorInputField = props => (
  <Field
    component={ReadableTextInput}
    type="text"
    name="author"
    label="Author"
    validate={required}
  />
);

export const BodyTextAreaField = props => (
  <Field
    component={ReadableTextarea}
    name="body"
    label="Body"
    validate={required}
  />
);

export const IdHiddenInputField = props => (
  <Field component="input" type="hidden" name="id" />
);

export const ParentIdHiddenInputField = props => (
  <Field component="input" type="hidden" name="parentId" />
);
