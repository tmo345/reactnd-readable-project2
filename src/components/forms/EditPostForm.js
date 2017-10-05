import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import {
  TitleInputField,
  BodyTextAreaField,
} from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';

let EditPostForm = props => {
  const { handleSubmit, pristine, reset } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <Loader active={props.processingEditPost} />

      <TitleInputField />
      <BodyTextAreaField />
      <Field name="id" component="input" type="hidden" value={props.postId} />

      <SubmitButton disableConditions={props.processingEditPost} />
      <ResetButton
        buttonText="Undo Changes"
        disableConditions={pristine || props.processingEditPost}
        resetForm={reset}
      />
    </form>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: {
      id: ownProps.post.id,
      title: ownProps.post.title,
      body: ownProps.post.body,
    },
  };
};

EditPostForm = reduxForm({ form: 'editPost' })(EditPostForm);
export default connect(mapStateToProps)(EditPostForm);
