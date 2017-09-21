import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import CategoryFilterLink from '../containers/FilterCategoryLink';

const PostSort = (props) => (
  <List horizontal>
    <List.Item>
      <List.Header>Sort By:</List.Header>
      <List horizontal>
        <List.Item
          onClick={() => props.setSortPostByFlag('timestamp', 'ascending')}
          as='a'
        >Date Ascending</List.Item>
        <List.Item
          onClick={() => props.setSortPostByFlag('timestamp', 'descending')}
          as='a'
        >Date Descending<Icon name='sort descending'/> </List.Item>
        <List.Item
          onClick={() => props.setSortPostByFlag('voteScore', 'ascending')}
          as='a'
        >Votes Ascending</List.Item>
        <List.Item
          onClick={() => props.setSortPostByFlag('voteScore', 'descending')}
          as='a'>Votes Descending</List.Item>
      </List>
    </List.Item>
  </List>
)

export default PostSort;
