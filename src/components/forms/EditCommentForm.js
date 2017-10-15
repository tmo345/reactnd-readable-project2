import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Loader } from 'semantic-ui-react';
import { BodyTextAreaField } from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';
import { Field } from 'redux-form';

class EditCommentForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} form={this.props.form} className="ui form">
        <Loader active={this.props.processingEditComment} />

        <BodyTextAreaField />
        <Field component="input" type="hidden" name="parentId" />

        <SubmitButton disableConditions={pristine || submitting} />
        <ResetButton
          disableConditions={pristine || submitting}
          resetForm={reset}
          buttonText="Undo Changes"
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const commentId = state.ui.modals.editCommentModal.forCommentId;
  const parentId = state.ui.modals.editCommentModal.parentId;
  return {
    initialValues: {
      body: state.comments[parentId][commentId]['body'],
      id: commentId,
    },
  };
};

EditCommentForm = reduxForm({
  form: 'editComment',
})(EditCommentForm);

export default connect(mapStateToProps)(EditCommentForm);
