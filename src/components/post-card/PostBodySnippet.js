import React from 'react';
import { Link } from 'react-router-dom';

const PostBodySnippet = ({ postbody, moreLink }) => {
  if (postbody.length > 200) {
    return (
      <span>
        {postbody.slice(0, 200)}...<Link to={moreLink}>(Read More)</Link>
      </span>
    );
  } else {
    return <span>{postbody}</span>;
  }
};

export default PostBodySnippet;
