import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import styled from 'styled-components';
import CommentCardDisplay from '../comment-card/CommentCardDisplay';

const CommentContainer = styled(Comment)`
  margin-top: 0 !important;
  padding-top: 0 !important;
`;

const CommentList = props => {
  if (props.comments.length > 0) {
    return (
      <div>
        {props.comments.map(comment => {
          return (
            <Comment key={comment.id} as={CommentContainer}>
              <CommentCardDisplay comment={comment} />
            </Comment>
          );
        })}
      </div>
    );
  } else {
    return <p>No comments have been made for this post</p>;
  }
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
