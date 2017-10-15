import React from 'react';
import { Link } from 'react-router-dom';

const PostNotFoundMessage = props => (
  <div>
    <h2>Post Not Found</h2>
    <p>Looks like the post you were looking for isn't here.</p>
    <Link to="/">Back to All Posts</Link>
  </div>
);

export default PostNotFoundMessage;
