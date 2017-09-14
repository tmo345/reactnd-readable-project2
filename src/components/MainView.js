// @flow
import React from 'react';
import { PostListDisplay } from '../containers/PostListDisplay';
import { AddPostDisplay } from '../containers/AddPostDisplay';
import SelectCategoryDisplay from '../containers/SelectCategoryDisplay';

export const MainView = () => (
  <div>
    <SelectCategoryDisplay />
    <PostListDisplay/>
    <AddPostDisplay />
  </div>
);
