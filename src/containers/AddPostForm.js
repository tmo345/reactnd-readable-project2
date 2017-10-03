/**
*  Adapted from the redux-forms docs https://redux-form.com/7.0.4/examples/syncvalidation/
*/
import React from 'react';
import { reduxForm } from 'redux-form';
import { Loader } from 'semantic-ui-react';
import {
  required,
  checkCategories
} from '../components/formFields/validate.js';
import {
  ReadableTextInput,
  ReadableSelect,
  ReadableTextarea
} from '../components/formFields/reduxFormFields';

const AddPostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <Loader active={props.processingNewPost} />
      <ReadableTextInput name="title" label="Title" validate={required} />
      <ReadableTextInput name="author" label="Author" validate={required} />
      <ReadableSelect
        name="category"
        label="Category"
        className="ui selection dropdown"
        validate={[required, checkCategories]}
      >
        <option key="empty" />
        {props.categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.text}
          </option>
        ))}
      </ReadableSelect>
      <ReadableTextarea name="body" label="Body" validate={required} />
      <button
        disabled={pristine || submitting}
        className="ui green button"
        type="submit"
      >
        Submit
      </button>
      <button
        className="ui black button"
        type="button"
        disabled={pristine || submitting}
        onClick={reset}
      >
        Clear Form
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'addPost'
})(AddPostForm);
