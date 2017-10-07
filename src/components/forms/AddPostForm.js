/**
 *  Basics of how to make form from the redux-forms docs
 *  https://redux-form.com/7.0.4/examples/
*/
import React from 'react';
import { reduxForm } from 'redux-form';
import { Loader } from 'semantic-ui-react';
import {
  CategorySelectField,
  TitleInputField,
  AuthorInputField,
  BodyTextAreaField,
} from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';

const AddPostForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <Loader active={props.processingNewPost} />

      <TitleInputField />
      <AuthorInputField />
      <CategorySelectField />
      <BodyTextAreaField />

      <SubmitButton disableConditions={pristine || submitting} />
      <ResetButton
        disableConditions={pristine || submitting}
        resetForm={reset}
        buttonText="Clear Form"
      />
    </form>
  );
};

export default reduxForm({
  form: 'addPost',
})(AddPostForm);
