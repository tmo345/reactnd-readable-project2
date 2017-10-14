export const SET_SORT_POST_FLAG = 'SET_SORT_POST_FLAG';
export const SET_SORT_COMMENT_FLAG = 'SET_SORT_COMMENT_FLAG';

export const setSortPostFlag = (flag, direction) => ({
  type: SET_SORT_POST_FLAG,
  flag,
  direction,
});

export const setSortCommentFlag = (flag, direction) => ({
  type: SET_SORT_COMMENT_FLAG,
  flag,
  direction,
});
