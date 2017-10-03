import React from 'react';
import { Button } from 'semantic-ui-react';

const PostSubmittedMessage = props => (
  <div>
    <h1>Post Submitted</h1>
    <Button onClick={props.closeAddPostModal}>Close Modal</Button>
    <Button onClick={props.resetAddPostFormSubmitted}>Add new post</Button>
  </div>
);

export default PostSubmittedMessage;
