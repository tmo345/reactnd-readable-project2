import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { IdHiddenInputField } from '../form-fields/readableFormFields';
import { SubmitButton, ResetButton } from '../form-fields/formButtons';

let DeletePostForm = props => {
  const { handleSubmit, pristine } = props;
  return (
    <form onSubmit={handleSubmit} className="ui form">
      <Loader active={props.processingDeletePost} />

      <IdHiddenInputField />

      <SubmitButton
        buttonText="Yes"
        disableConditions={props.processingDeletePost}
      />
      <ResetButton
        buttonText="Cancel"
        disabled={props.processingDeletePost}
        resetForm={props.closeDeletePostModal}
      />
    </form>
  );
};

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    id: ownProps.post.id,
  },
});

DeletePostForm = reduxForm({ form: 'deletePost' })(DeletePostForm);
export default connect(mapStateToProps)(DeletePostForm);
