// @flow
import type { Post } from './store-types';
import type { HydratePosts } from './action-types';

declare module 'action-creators' {
  declare function hydratePostsFunc(posts: Array<Post>): HydratePosts
}
