import uuidv4 from 'uuid/v4';
import {
  fetchComments,
  postCommentToServer,
  voteCommentServer,
} from '../utils/api';

export const VOTE_FOR_COMMENT_STARTED = 'VOTE_FOR_COMMENT_STARTED';
export const VOTE_FOR_COMMENT_SUCCEEDED = 'VOTE_FOR_COMMENT_SUCCEEDED';

export const ADD_COMMENT_SERVER_STARTED = 'ADD_COMMENT_SERVER_STARTED';
export const ADD_COMMENT_SERVER_SUCCEEDED = 'ADD_COMMENT_SERVER_SUCCEEDED';

export const addCommentServerStarted = () => ({
  type: ADD_COMMENT_SERVER_STARTED,
});

export const addCommentServerSucceeded = comment => ({
  type: ADD_COMMENT_SERVER_SUCCEEDED,
  comment,
});

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
    author,
  };
};

export const voteForCommentStarted = id => ({
  type: VOTE_FOR_COMMENT_STARTED,
  id,
});

export const voteForCommentSucceeded = (comment, id) => ({
  type: VOTE_FOR_COMMENT_SUCCEEDED,
  comment,
  id,
});

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
    type: 'COMMENT_FETCH_SUCCEEDED',
    commentsByParentId,
  };
};

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
  console.log(parentId);
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
      //return response;
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

export const editComment = ({ id, body }) => ({
  type: 'EDIT_COMMENT',
  timestamp: Date.now(),
  id,
  body,
});

export const deleteComment = id => ({
  type: 'DELETE_COMMENT',
  id,
});

export const upVoteComment = id => ({
  type: 'UP_VOTE_COMMENT',
  id,
});

export const downVoteComment = id => ({
  type: 'DOWN_VOTE_COMMENT',
  id,
});
