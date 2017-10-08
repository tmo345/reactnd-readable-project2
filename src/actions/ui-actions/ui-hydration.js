export const HYDRATING_POSTS_COMPLETE = 'HYDRATING_POSTS_COMPLETE';
export const HYDRATING_COMMENTS_COMPLETE = 'HYDRATING_COMMENTS_COMPLETE';

export const hydratingPostsComplete = () => ({
  type: HYDRATING_POSTS_COMPLETE,
});

export const hydratingCommentsComplete = () => ({
  type: HYDRATING_COMMENTS_COMPLETE,
});
