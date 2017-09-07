// @flow
import { fromJS, Map } from 'immutable';

const uuidv4 = require('uuid/v4');

type State = {
  posts: {
      [id: string]: {
        id: string,
        timestamp: number,
        title: string,
        body: string,
        author: string,
        category: string,
        votedScore: number
      }
  },
  comments: {
      [id: string]: {
        id: string,
        parentId: string,
        timestamp: string,
        body: string,
        author: string,
        votedScore: number
      }
  }
}

const initalStateJS: State = {
  posts: {
  },
  comments: {
  }
};

const initialState: Map<string,*> = fromJS(initalStateJS);


export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export type UpVotePost = {|
  type: typeof UP_VOTE_POST,
  id: string
|};

export type DownVotePost = {|
  type: typeof DOWN_VOTE_POST,
  id: string
|};

export type UpVoteComment = {|
  type: typeof UP_VOTE_COMMENT,
  id: string
|};

export type DownVoteComment = {|
  type: typeof DOWN_VOTE_COMMENT,
  id: string
|};

export type AddPost = {|
  type: typeof ADD_POST,
  postInfo: {
    id: string,
    timestamp: number,
    title: string,
    body: string,
    author: string,
    category: string,
    votedScore: number
  }
|}

export type EditPost = {|
  type: typeof EDIT_POST,
  postInfo: {
    id: string,
    title: string,
    body: string
  }
|}

export type DeletePost = {|
  type: typeof DELETE_POST,
  postInfo: {
    id: string
  }
|}

export type AddComment = {
  type: typeof ADD_COMMENT,
  id: string,
  timestamp: number,
  body: string,
  author: string,
  parentId: string
}

export type EditComment = {
  type: typeof EDIT_COMMENT,
  timestamp: number,
  body: string
}

export type DeleteComment = {
  type: typeof DELETE_COMMENT,
  id: string
}

type Action =
  | AddPost
  | EditPost
  | DeletePost
  | UpVotePost
  | DownVotePost
  | UpVoteComment
  | DownVoteComment
  | AddComment
  | EditComment
  | DeleteComment

type UpVotePostFunc = (id: string) => UpVotePost
const upVotePost: UpVotePostFunc =
  (id: string) => {
    return {
      type: UP_VOTE_POST,
      id
    }
  }

type DownVotePostFunc = (id: string) => DownVotePost
const downVotePost: DownVotePostFunc =
  (id) => {
    return {
      type: DOWN_VOTE_POST,
      id
    }
  }

type UpVoteCommentFunc = (id: string) => UpVoteComment
const upVoteComment: UpVoteCommentFunc =
  (id) => {
    return {
      type: UP_VOTE_COMMENT,
      id
    }
  }

type DownVoteCommentFunc = (id: string) => DownVoteComment
const downVoteComment: DownVoteCommentFunc =
  (id) => {
    return {
      type: DOWN_VOTE_COMMENT,
      id
    }
  }

type AddPostFunc = { title: string, body: string, author: string, category: string } => AddPost
const addPost: AddPostFunc =
  ({title, body, author, category}) => {
    const uniqueId = `post-${uuidv4()}`;
    return {
      type: ADD_POST,
      postInfo: {
        id: uniqueId,
        timestamp: Date.now(),
        title,
        body,
        author,
        category,
        votedScore: 1
      }
    }
  }

type EditPostFunc = ({id: string, title: string, body: string}) => EditPost
const editPost: EditPostFunc =
  ({id, title, body}) => {
    return {
      type: EDIT_POST,
      postInfo: {
        id,
        title,
        body
      }
    }
  }

type DeletePostFunc = ({id: string}) => DeletePost
const deletePost: DeletePostFunc =
  ({ id }) => {
    return {
      type: DELETE_POST,
      postInfo: {
        id
      }
    }
  }

type AddCommentFunc = ({ id: string, timestamp: number, author: string, body: string, parentId: string}) => AddComment
const addComment: AddCommentFunc =
  ({ id, timestamp, body, author, parentId }) => {
    return {
      type: ADD_COMMENT,
      id,
      timestamp,
      body,
      author,
      parentId
    }
  }

type EditCommentFunc = ({id: string, timestamp: number, body: string}) => EditComment
const editComment: EditCommentFunc =
  ({id, timestamp, body}) => {
    return {
      type: EDIT_COMMENT,
      timestamp,
      body
    }
  }

type DeletCommentFunc = ({id: string}) => DeleteComment;
const deleteComment: DeletCommentFunc =
  ({id}) => {
    return {
      type: DELETE_COMMENT,
      id
    }
  }


type ReducerFunc = (state: Map<string,*>, action: Action) => Map<string,*>
const reducer: ReducerFunc = (state = initialState, action) => {
    switch(action.type) {
      case ADD_POST:
        {
          const { id, timestamp, title, body, author, category, votedScore } = action.postInfo;
          return state.mergeDeep(fromJS({
            posts: {
              [id]: {
                id,
                timestamp,
                title,
                body,
                author,
                category,
                votedScore
              }
            }
          }));
        }

      case EDIT_POST:
        {
          const { id, title, body } = action.postInfo;
          return state.setIn(['posts', id, title], title).setIn( ['posts', id, body], body);
        }

      case DELETE_POST:
        {
          const { id } = action.postInfo;
          return state.deleteIn(['posts', id])
        }

      case UP_VOTE_POST:
        return state

      default:
        return state;
    }
  }

}
