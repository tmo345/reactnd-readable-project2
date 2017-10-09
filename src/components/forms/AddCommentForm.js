import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Loader } from 'semantic-ui-react';
import {
  AuthorInputField,
  BodyTextAreaField,
  ParentIdHiddenInputField,
} from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';

let AddCommentForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <Loader active={props.processingNewComment} />

      <AuthorInputField />
      <BodyTextAreaField />
      <ParentIdHiddenInputField />

      <SubmitButton disableConditions={pristine || submitting} />
      <ResetButton
        disableConditions={pristine || submitting}
        resetForm={reset}
        buttonText="Clear Form"
      />
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      parentId: ownProps.parentId,
    },
  };
};

AddCommentForm = reduxForm({
  form: 'addComment',
})(AddCommentForm);

export default connect(mapStateToProps)(AddCommentForm);
