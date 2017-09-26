

import type {
  AddComment,
  EditComment,
  DeleteComment,
  AddCommentData,
  EditCommentData,
  UpVoteComment,
  DownVoteComment
} from '../types/comment-types';
import type { id } from '../types/post-types';
import moment from 'moment';
import uuidv4 from 'uuid/v4';

export const addComment = ({
  parentId,
  title,
  body,
  author
}: AddCommentData): AddComment => {
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

export const editComment = ({ id, body }: EditCommentData): EditComment => ({
  type: 'EDIT_COMMENT',
  timestamp: Date.now(),
  id,
  body
});

export const deleteComment = (id: id): DeleteComment => ({
  type: 'DELETE_COMMENT',
  id
});

export const upVoteComment = (id: id): UpVoteComment => ({
  type: 'UP_VOTE_COMMENT',
  id
});

export const downVoteComment = (id: id): DownVoteComment => ({
  type: 'DOWN_VOTE_COMMENT',
  id
});
