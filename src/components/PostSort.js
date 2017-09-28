import React from 'react';
import { List, Icon } from 'semantic-ui-react';

const PostSort = props => (
  <List horizontal>
    <List.Item>
      <List.Header>Sort By:</List.Header>
      <List horizontal>
        <List.Item
          disabled={props.postsLoading}
          onClick={() => props.setSortPostByFlag('timestamp', 'ascending')}
          as="a"
        >
          Date Ascending
        </List.Item>
        <List.Item
          disabled={props.postsLoading}
          onClick={() => props.setSortPostByFlag('timestamp', 'descending')}
          as="a"
        >
          Date Descending<Icon name="sort descending" />{' '}
        </List.Item>
        <List.Item
          disabled={props.postsLoading}
          onClick={() => props.setSortPostByFlag('voteScore', 'ascending')}
          as="a"
        >
          Votes Ascending
        </List.Item>
        <List.Item
          disabled={props.postsLoading}
          onClick={() => props.setSortPostByFlag('voteScore', 'descending')}
          as="a"
        >
          Votes Descending
        </List.Item>
      </List>
    </List.Item>
  </List>
);

export default PostSort;
