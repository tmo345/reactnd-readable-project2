// @flow
import React from 'react';

export const AddPostButton = (props) => {
  return (<button
            onClick={() => props.addPost({title: 'things', author: 'yo', body: 'post', category: 'ayep'})}
          >New Post!</button>)
}
