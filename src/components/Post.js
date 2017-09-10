import React from 'react';

export const Post = (props) => {
  const id = props.post.get('id');
  const data = {title: 'new title', body: 'new body', id: id};
  return (
    <li
      key={props.post.get('id')}
      onClick={() => props.editPost(data)}
    >{props.post.get('title')}</li>
  )
}
