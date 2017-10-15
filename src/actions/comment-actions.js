import uuidv4 from 'uuid/v4';
import {
  fetchComments,
  postCommentToServer,
  voteCommentServer,
  putCommentServer,
  deleteCommentApi,
} from '../utils/api';

export const COMMENT_FETCH_SUCCEEDED = 'COMMENT_FETCH_SUCCEEDED';

export const ADD_COMMENT_SERVER_STARTED = 'ADD_COMMENT_SERVER_STARTED';
export const ADD_COMMENT_SERVER_SUCCEEDED = 'ADD_COMMENT_SERVER_SUCCEEDED';

export const EDIT_COMMENT_SERVER_STARTED = 'EDIT_COMMENT_SERVER_STARTED';
export const EDIT_COMMENT_SERVER_SUCCESS = 'EDIT_COMMENT_SERVER_SUCCESS';

export const DELETE_COMMENT_SERVER_STARTED = 'DELETE_COMMENT_SERVER_STARTED';
export const DELETE_COMMENT_SERVER_SUCCESS = 'DELETE_COMMENT_SERVER_SUCCESS';

export const VOTE_FOR_COMMENT_STARTED = 'VOTE_FOR_COMMENT_STARTED';
export const VOTE_FOR_COMMENT_SUCCEEDED = 'VOTE_FOR_COMMENT_SUCCEEDED';

/**
 * Synchronous Actions
 */

// Set comment state after retrieval of comments during hydration
export const commentFetchSucceeded = (comments, postId) => {
  let commentsByParentId;
  if (comments.length > 0) {
    commentsByParentId = comments.reduce(
      (acc, currentItem) => {
        acc[postId][currentItem.id] = currentItem;
        return acc;
      },
      {
        [postId]: {},
      },
    );
  } else {
    commentsByParentId = {
      [postId]: {},
    };
  }
  return {
    type: COMMENT_FETCH_SUCCEEDED,
    commentsByParentId,
  };
};
// Add Comments
export const addCommentServerStarted = () => ({
  type: ADD_COMMENT_SERVER_STARTED,
});

export const addCommentServerSucceeded = comment => ({
  type: ADD_COMMENT_SERVER_SUCCEEDED,
  comment,
});

// Edit Comments
export const editCommentServerStarted = () => ({
  type: EDIT_COMMENT_SERVER_STARTED,
});

export const editCommentServerSuccess = comment => ({
  type: EDIT_COMMENT_SERVER_SUCCESS,
  comment,
});

// Delete Comments
export const deleteCommentServerStarted = () => ({
  type: DELETE_COMMENT_SERVER_STARTED,
});

export const deleteCommentServerSuccess = comment => ({
  type: DELETE_COMMENT_SERVER_SUCCESS,
  comment,
});

// Voting for Comments
export const voteForCommentStarted = id => ({
  type: VOTE_FOR_COMMENT_STARTED,
  id,
});

export const voteForCommentSucceeded = (comment, id) => ({
  type: VOTE_FOR_COMMENT_SUCCEEDED,
  comment,
  id,
});

/**
 * Asynchronous Actions
 */

export const setCommentsForPost = postId => {
  return function(dispatch) {
    return fetchComments(postId)
      .then(response => response.data)
      .then(comments => {
        dispatch(commentFetchSucceeded(comments, postId));
      });
  };
};

export const addCommentServer = ({ parentId, body, author }) => {
  const uniqueId = `comment-${uuidv4()}`;
  const timestamp = Date.now();
  return function(dispatch) {
    dispatch(addCommentServerStarted());
    return postCommentToServer({
      id: uniqueId,
      parentId,
      timestamp,
      body,
      author,
    }).then(response => {
      return dispatch(addCommentServerSucceeded(response.data));
    });
  };
};

export const voteForComment = (comment, direction) => {
  return function(dispatch) {
    dispatch(voteForCommentStarted(comment.id));
    return voteCommentServer(comment.id, direction).then(response => {
      dispatch(voteForCommentSucceeded(response.data, comment.id));
    });
  };
};

export const editCommentServer = ({ id, body }) => {
  return function(dispatch) {
    dispatch(editCommentServerStarted());

    return putCommentServer(id, body).then(response => {
      dispatch(editCommentServerSuccess(response.data));
    });
  };
};

export const deleteCommentServer = ({ id }) => {
  return function(dispatch) {
    dispatch(deleteCommentServerStarted());
    return deleteCommentApi(id).then(response => {
      dispatch(deleteCommentServerSuccess(response.data));
    });
  };
};
