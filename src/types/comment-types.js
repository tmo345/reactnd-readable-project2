// @flow

import type {
  id,
  timestamp,
  title,
  body,
  author,
  voteScore
} from "./post-types";

export type parentId = id;

export type Comment = {
  id: id,
  parentId: id,
  body: body,
  author: author,
  voteScore: voteScore,
  timestamp: timestamp
};

export type AddCommentData = {
  parentId: id,
  title: title,
  body: body,
  author: author
};

export type EditCommentData = {
  id: id,
  body: body
};

export type CommentState = {
  [id: string]: Comment
};

export type AddComment =
  & { type: "ADD_COMMENT" }
  & Comment;

export type EditComment = {
  type: "EDIT_COMMENT",
  id: string,
  timestamp: timestamp,
  body: body
};

export type DeleteComment = {
  type: "DELETE_COMMENT",
  id: id
};

export type UpVoteComment = {
  type: "UP_VOTE_COMMENT",
  id: id
};

export type DownVoteComment = {
  type: "DOWN_VOTE_COMMENT",
  id: id
};

export type CommentAction =
  | AddComment
  | EditComment
  | DeleteComment
  | UpVoteComment
  | DownVoteComment;
