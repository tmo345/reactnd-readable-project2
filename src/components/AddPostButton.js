// @flow
import React from 'react';
import type { AddPostDispatch } from '../containers/Listings';

type Props = {
  addPost: AddPostDispatch
}

export const AddPostButton = (props: Props) => {
  return (<button
            onClick={() => props.addPost({title: 'things', author: 'yo', body: 'post', category: 'ayep'})}
          >New Post!</button>)
}
