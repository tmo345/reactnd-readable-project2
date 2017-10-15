import React from 'react';
import { Loader } from 'semantic-ui-react';

const PostDeletedMessage = props => (
  <div>
    <Loader active />
    <h2>Post successfully deleted.</h2>
    <p>Redirecting you to main page...</p>
  </div>
);

export default PostDeletedMessage;
