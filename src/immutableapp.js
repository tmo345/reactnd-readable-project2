// @flow
import { fromJS, Map } from 'immutable';

const uuidv4 = require('uuid/v4');

type Post = {
  id: string,
  timestamp: number,
  title: string,
  body: string,
  author: string,
  category: string,
  voteScore: number
}

type Comment = {
  id: string,
  parentId: string,
  timestamp: string,
  body: string,
  author: string,
  voteScore: number
}

type State = {|
  posts: {
    [id: string]: Post
  },
  comments: {
    [id: string]: Comment
  }
|}

const initalStateJS: State = {
  posts: {
    'id1': {
      id: 'id1',
      timestamp: Date.now(),
      title: 'First post',
      body: 'First post content',
      author: 'Author of first post',
      category: 'Category of first post',
      voteScore: 1
    }
  },
  comments: {}
};

type StateMap = Map<string,(string|number|Post|Comment)>

const initialState: StateMap = fromJS(initalStateJS);


const UP_VOTE_POST = 'UP_VOTE_POST';
const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';

const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

type UpVotePost = {|
  type: typeof UP_VOTE_POST,
  id: string
|};

type DownVotePost = {|
  type: typeof DOWN_VOTE_POST,
  id: string
|};

type UpVoteComment = {|
  type: typeof UP_VOTE_COMMENT,
  id: string
|};

type DownVoteComment = {|
  type: typeof DOWN_VOTE_COMMENT,
  id: string
|};

type AddPost = {|
  type: typeof ADD_POST,
  id: string,
  timestamp: number,
  title: string,
  body: string,
  author: string,
  category: string,
  voteScore: number
|}

type EditPost = {|
  type: typeof EDIT_POST,
  id: string,
  title: string,
  body: string
|}

type DeletePost = {|
  type: typeof DELETE_POST,
  id: string
|}

type AddComment = {
  type: typeof ADD_COMMENT,
  id: string,
  timestamp: number,
  body: string,
  author: string,
  parentId: string,
  voteScore: number
}

type EditComment = {
  type: typeof EDIT_COMMENT,
  timestamp: number,
  body: string
}

type DeleteComment = {
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
      id: uniqueId,
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
      voteScore: 1
    }
  }

type EditPostFunc = ({id: string, title: string, body: string}) => EditPost
const editPost: EditPostFunc =
  ({id, title, body}) => {
    return {
      type: EDIT_POST,
      id,
      title,
      body
    }
  }

type DeletePostFunc = ({id: string}) => DeletePost
const deletePost: DeletePostFunc =
  ({ id }) => {
    return {
      type: DELETE_POST,
      id
    }
  }

type AddCommentFunc = ({ id: string, timestamp: number, author: string, body: string, voteScore: number, parentId: string}) => AddComment
const addComment: AddCommentFunc =
  ({ id, timestamp, body, author, parentId, voteScore }) => {
    return {
      type: ADD_COMMENT,
      id,
      timestamp,
      body,
      author,
      parentId,
      voteScore
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
        {
          const { id } = action;
          return state.updateIn(['posts', id, 'votedScore'], score => score + 1)
        }

      case DOWN_VOTE_POST:
        {
          const { id } = action;
          return state.updateIn(['posts', id, 'votedScore'], score => score - 1)
        }

      default:
        return state;
    }
  }

export {
  addPost,
  reducer
}
