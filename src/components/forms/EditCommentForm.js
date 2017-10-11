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

//class EditCommentForm extends React.Component {
//render() {
//return (
//<form onSubmit={this.props.handleSubmit}>
//<textarea
//name="body"
//onChange={e => this.props.editCommentBody(e.target.value)}
//value={this.props.formField.body}
///>
//</form>
//);
//}
//}

//const mapStateToProps = (state, ownProps) => ({
//commentState: state.comments[ownProps.comment.parentId][ownProps.comment.id],
//formField: state.formField.editComment.body,
//});

//const mapDispatchToProps = dispatch => ({
//editCommentBody: body => dispatch(editCommentBody(body)),
//setIdForEditComment: id => dispatch(setIdForEditComment(id)),
//});

//export default connect(mapStateToProps, mapDispatchToProps)(EditCommentForm);
class EditCommentForm extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} form={this.props.form} className="ui form">
        <Loader active={this.props.processingNewComment} />

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
