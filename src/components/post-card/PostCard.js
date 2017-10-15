import React from 'react';
import { Card, Loader } from 'semantic-ui-react';
import VoteButtons from '../voting/VoteButtons';
import PostBodySnippet from './PostBodySnippet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatTime } from '../../utils/helpers';

const PostCardContainer = styled.li`
  margin-bottom: 25px;
`;
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
const PostMeta = styled.span`
  color: #76768e;
`;
const PostTitle = styled.h3`
  color: #fff !important;
`;
const PostCardHeader = styled(Card.Content)`
  background-color: #2884cb !important;
`;
const PostComments = styled.div`
  color: #76768e;
  float: right;
`;
const PostBody = styled.p`
  margin-top: 10px !important;
`;
const CardFooter = styled.div`
  padding-top: 7.5px !important;
  padding-bottom: 7.5px !important;
`;
const PostCategory = styled.span`
  text-transform: capitalize;
`;
const PostCard = props => {
  const {
    id,
    category,
    title,
    timestamp,
    author,
    body,
    voteScore,
  } = props.post;
  const postDetailUrl = `${category}/${id}`;
  return (
    <PostCardContainer>
      <Card fluid>
        <PostCardHeader>
          <Votes>
            Votes: {' '}
            {props.votesNowProcessing.includes(id) ? (
              <Loader size="mini" inline active />
            ) : (
              voteScore
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
            <Link to={postDetailUrl}>
              <PostTitle>{title}</PostTitle>
            </Link>
          </Card.Header>
        </PostCardHeader>
        <Card.Content>
          <Card.Meta>
            <PostMeta>{formatTime(timestamp)}</PostMeta>
            <br />
            <PostMeta>
              Category: <PostCategory>{category}</PostCategory>
            </PostMeta>
          </Card.Meta>
          <PostBody>
            <PostBodySnippet postbody={body} moreLink={postDetailUrl} />
          </PostBody>
        </Card.Content>
        <Card.Content as={CardFooter}>
          <Card.Meta>
            <PostMeta>Author: {author}</PostMeta>
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
