import uuidv4 from 'uuid/v4';
import { fetchComments } from '../utils/api';

export const addComment = ({ parentId, title, body, author }) => {
  const uniqueId = `comment-${uuidv4()}`;
  return {
    type: 'ADD_COMMENT',
    id: uniqueId,
    timestamp: Date.now(),
    voteScore: 1,
    parentId,
    title,
    body,
    author
  };
};

export const commentFetchStarted = () => ({
  type: 'COMMENT_FETCH_STARTED'
});

export const commentFetchSucceeded = comments => ({
  type: 'COMMENT_FETCH_SUCCEEDED',
  comments
});

export const setCommentsForPost = postId => {
  return function(dispatch) {
    dispatch(commentFetchStarted());
    return fetchComments(postId).then(response =>
      dispatch(commentFetchSucceeded(response.data))
    );
  };
};

export const editComment = ({ id, body }) => ({
  type: 'EDIT_COMMENT',
  timestamp: Date.now(),
  id,
  body
});

export const deleteComment = id => ({
  type: 'DELETE_COMMENT',
  id
});

export const upVoteComment = id => ({
  type: 'UP_VOTE_COMMENT',
  id
});

export const downVoteComment = id => ({
  type: 'DOWN_VOTE_COMMENT',
  id
});
