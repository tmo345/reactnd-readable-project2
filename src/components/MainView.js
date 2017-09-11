// @flow
import React from 'react';
import { PostListDisplay } from '../containers/PostListDisplay';
import { AddPostDisplay } from '../containers/AddPostDisplay';

export const MainView = () => (
  <div>
    <PostListDisplay/>
    <AddPostDisplay />
  </div>
);
