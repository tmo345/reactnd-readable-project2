import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Loader } from 'semantic-ui-react';
import { IdHiddenInputField } from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';

class DeleteCommentForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
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
