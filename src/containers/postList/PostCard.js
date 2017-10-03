import React from 'react';
import { Card, Loader, Icon, Button } from 'semantic-ui-react';
import VoteButtons from '../../components/VoteButtons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostCardContainer = styled.li`margin-bottom: 15px;`;
const Votes = styled.div`
  float: right;
  font-size: 1.2rem;
  > p {
    margin-bottom: 0.3rem;
  }
`;

const PostCard = props => {
  const { post } = props;
  return (
    <PostCardContainer>
      <Card fluid>
        <Card.Content>
          <Votes>
            <p>
              Votes: {' '}
              {props.postVotesNowProcessing.includes(post.id) ? (
                <Loader size="mini" inline active />
              ) : (
                post.voteScore
              )}
            </p>
            {/* <br /> */}
            <VoteButtons
              votingOn={props.post}
              handleVote={props.handlePostVote}
              votesCurrentlyProcessing={props.postVotesNowProcessing}
            />
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
