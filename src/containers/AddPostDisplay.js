import { connect } from 'react-redux';
import AddPostModal from '../components/AddPostModal';
import { addPost } from '../actions/post-actions';

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  addPost: postData => dispatch(addPost(postData))
});

export const AddPostDisplay = connect(mapStateToProps, mapDispatchToProps)(
  AddPostModal
);
