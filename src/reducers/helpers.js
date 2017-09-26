import type {
  PostState,
  Post
} from '../types/post-types';
import type {
  CommentState,
  Comment
} from '../types/comment-types';

export const stateObjectToArray = (state: PostState | CommentState): Array<Post | Comment> => {
  return Object.values(state).map((item: Post | Comment) => item);
}

export const stateArraytoObject = (stateArray: Array<Post | Comment>): PostState | CommentState => {
  return stateArray.reduce((stateObject, item) => {
    stateObject[item.id] = item;
    return stateObject;
  }, {})
}
