import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import {
  TitleInputField,
  BodyTextAreaField,
  IdHiddenInputField,
} from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';

let EditPostForm = props => {
  const { handleSubmit, pristine, reset } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <Loader active={props.processingEditPost} />

      <TitleInputField />
      <BodyTextAreaField />
      <IdHiddenInputField />

      <SubmitButton disableConditions={props.processingEditPost} />
      <ResetButton
        buttonText="Undo Changes"
        disableConditions={pristine || props.processingEditPost}
        resetForm={reset}
      />
    </form>
  );
};
const mapStateToProps = state => {
  return {
    initialValues: {
      id: state.ui.modals.editPostModal.forPostId,
      title: state.posts[state.ui.modals.editPostModal.forPostId]['title'],
      body: state.posts[state.ui.modals.editPostModal.forPostId]['body'],
    },
  };
};

EditPostForm = reduxForm({ form: 'editPost' })(EditPostForm);
export default connect(mapStateToProps)(EditPostForm);
