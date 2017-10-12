import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, initialize } from 'redux-form';
import { Loader } from 'semantic-ui-react';
import {
  BodyTextAreaField,
  IdHiddenInputField,
} from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';
import { Field } from 'redux-form';
import uuidv4 from 'uuid/v4';

class DeleteCommentForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} form={this.props.form} className="ui form">
        <Loader active={this.props.processingDeleteComment} />

        <IdHiddenInputField />

        <SubmitButton
          buttonText="Yes"
          disableConditions={this.props.processingDeleteComment}
        />
        <ResetButton
          disableConditions={this.props.processingDeleteComment}
          resetForm={this.props.closeDeleteCommentModal}
          buttonText="Cancel"
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const commentId = state.ui.modals.deleteCommentModal.forCommentId;
  return {
    initialValues: {
      id: commentId,
    },
  };
};

DeleteCommentForm = reduxForm({
  form: 'deleteComment',
})(DeleteCommentForm);

export default connect(mapStateToProps)(DeleteCommentForm);
