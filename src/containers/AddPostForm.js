/**
*  Adapted from the redux-forms docs https://redux-form.com/7.0.4/examples/syncvalidation/
*/
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { curry } from 'ramda';
import { Loader } from 'semantic-ui-react';

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  }

  if (!values.author) {
    errors.author = 'Required';
  }

  if (!values.category) {
    errors.category = 'Required';
  } else if (!['udacity', 'react', 'redux'].includes(values.category)) {
    errors.category = 'Please select a valid category from menu';
  }

  if (!values.body) {
    errors.body = 'Required';
  }

  return errors;
};

const textInput = ({ input, label }) => (
  <input {...input} placeholder={label} type="text" id={label} />
);

const selectField = ({ input, label, children }) => (
  <select {...input} id={label}>
    {children}
  </select>
);

const textareaField = ({ input, label }) => (
  <textarea {...input} id={label} placeholder={label} />
);

const renderField = curry((renderElement, props) => {
  const { label, meta: { touched, error } } = props;
  const classes = `ui form field required ${touched && (error && 'error')}`;
  return (
    <div className={classes}>
      <label htmlFor={label}>{label}</label>
      {renderElement(props)}
      {touched &&
        (error && (
          <div className="ui error message">
            <span>{error}</span>
          </div>
        ))}
    </div>
  );
});

const renderTextInput = renderField(textInput);
const renderSelect = renderField(selectField);
const renderTextarea = renderField(textareaField);

const AddPostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <Loader active={props.processingNewPost} />
      <Field
        name="title"
        component={renderTextInput}
        type="text"
        label="Title"
      />

      <Field
        id="author"
        name="author"
        component={renderTextInput}
        type="text"
        label="Author"
      />
      <Field
        id="category"
        name="category"
        component={renderSelect}
        className="ui selection dropdown"
        label="Category"
      >
        <option key="empty" />
        {props.categories.map(category => (
          <option key={category.value} value={category.value}>
            {category.text}
          </option>
        ))}
      </Field>
      <Field id="body" name="body" component={renderTextarea} label="Body" />
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
  form: 'addPost',
  validate
})(AddPostForm);
