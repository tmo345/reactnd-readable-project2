import uuidv4 from 'uuid/v4';

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
