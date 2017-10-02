import React from 'react';
import { Card, Loader, Dimmer } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostCardContainer = styled.li`margin-bottom: 15px;`;
const Votes = styled.div`float: right;`;

const PostCard = props => {
  const { post } = props;
  console.log('incard', props.commentNumberLoading);
  return (
    <PostCardContainer>
      <Card fluid>
        <Card.Content>
          <Votes>Votes: {post.voteScore}</Votes>
          <Card.Header>
            <Link to={`${post.category}/${post.id}`}>{post.title}</Link>
          </Card.Header>
          <Card.Meta>
            <div>{new Date(post.timestamp).toDateString()}</div>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <div>{post.body}</div>
        </Card.Content>
        <Card.Content>
          <Card.Meta>
            <div>
              Comments:{' '}
              {props.commentNumberLoading ? (
                <Loader size="mini" inline active />
              ) : (
                props.commentNumber
              )}
            </div>
          </Card.Meta>
        </Card.Content>
      </Card>
    </PostCardContainer>
  );
};

export default PostCard;
