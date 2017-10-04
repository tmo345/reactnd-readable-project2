import React from 'react';
import { Card, Loader } from 'semantic-ui-react';
import VoteButtons from '../voting/VoteButtons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostCardContainer = styled.li`margin-bottom: 25px;`;
const Votes = styled.div`
  float: right;
  font-size: 1.15rem;
  display: inline-block;
  color: #fff;
`;
const InlineVoteButtons = styled.div`
  display: inline-block;
  margin-left: 10px;
`;
const PostMeta = styled.span`color: #76768e;`;
const PostTitle = styled.h3`color: #fff !important;`;
const PostCardHeader = styled(Card.Content)`
  background-color: #2884cb !important;
`;
const PostComments = styled.div`
  color: #76768e;
  float: right;
`;
const PostBody = styled.p`margin-top: 10px !important;`;
const CardFooter = styled.div`
  padding-top: 7.5px !important;
  padding-bottom: 7.5px !important;
`;

const PostCard = props => {
  const { post } = props;
  return (
    <PostCardContainer>
      <Card fluid>
        <PostCardHeader>
          <Votes>
            Votes: {' '}
            {props.votesNowProcessing.includes(post.id) ? (
              <Loader size="mini" inline active />
            ) : (
              post.voteScore
            )}
            <InlineVoteButtons>
              <VoteButtons
                votingOn={props.post}
                handleVote={props.handlePostVote}
                votesNowProcessing={props.votesNowProcessing}
              />
            </InlineVoteButtons>
          </Votes>
          <Card.Header>
            <Link to={`${post.category}/${post.id}`}>
              <PostTitle>{post.title}</PostTitle>
            </Link>
          </Card.Header>
        </PostCardHeader>
        <Card.Content>
          <Card.Meta>
            <PostMeta>{new Date(post.timestamp).toDateString()}</PostMeta>
          </Card.Meta>
          <PostBody>{post.body}</PostBody>
        </Card.Content>
        <Card.Content as={CardFooter}>
          <Card.Meta>
            <PostMeta>Author: {post.author}</PostMeta>
            <PostComments>
              Comments:{' '}
              {props.commentNumberLoading ? (
                <Loader size="mini" inline active />
              ) : (
                props.commentNumber
              )}
            </PostComments>
          </Card.Meta>
        </Card.Content>
      </Card>
    </PostCardContainer>
  );
};

export default PostCard;
