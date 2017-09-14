// @flow
import React from 'react';
import { PostListDisplay } from '../containers/PostListDisplay';
import { AddPostDisplay } from '../containers/AddPostDisplay';
import SelectCategoryDisplay from '../containers/SelectCategoryDisplay';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import { PostDisplay } from '../containers/PostDisplay.js';

export const MainView = (props) => (
        <Container>
          <Route exact path="/:category?" component={PostListDisplay} />
          <Route path="/post/:id" component={PostDisplay} />
        </Container>
);
