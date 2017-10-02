import React from 'react';
import { Card, Loader, Icon, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostCardContainer = styled.li`margin-bottom: 15px;`;
const Votes = styled.div`float: right;`;
const StyledIcon = styled(Icon)`margin: 0 !important;`;
const StyledButton = styled(Button)`
  padding: 0.15rem !important;
  border-radius: 100% !important;
`;

const PostCard = props => {
  const { post } = props;
  console.log(props.postVoteProcessing);
  return (
    <PostCardContainer>
      <Card fluid>
        <Card.Content>
          <Votes>
            Votes: {' '}
            {props.postVoteProcessing ? (
              <Loader size="mini" inline active />
            ) : (
              post.voteScore
            )}
            <br />
            <Button
              onClick={() => {
                props.postVoteProcessingOn();
                props
                  .handlePostVote(post.id, 'upVote')
                  .then(() => props.postVoteProcessingOff());
              }}
              as={StyledButton}
              compact
              circular
              size="mini"
              basic
              disabled={props.postVoteProcessing}
              // color="green"
            >
              <StyledIcon size="large" name="plus" fitted />
            </Button>
            <Button
              onClick={() => {
                props.postVoteProcessingOn();
                props
                  .handlePostVote(post.id, 'downVote')
                  .then(() => props.postVoteProcessingOff());
              }}
              as={StyledButton}
              compact
              basic
              circular
              size="mini"
              disabled={props.postVoteProcessing}
              // color="red"
            >
              <StyledIcon size="large" name="minus" fitted />
            </Button>
          </Votes>
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
