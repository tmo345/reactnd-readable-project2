import { connect } from 'react-redux';
import AddPostModal from '../components/AddPostModal';
import { addPost } from '../actions/post-actions';
import { toggleAddPostModal } from '../actions/ui-actions';

const mapStateToProps = state => ({
  posts: state.posts,
  addPostsModalOpen: state.ui.addPostsModalOpen
});

const mapDispatchToProps = dispatch => ({
  addPost: postData => dispatch(addPost(postData)),
  toggleAddPostModal: () => dispatch(toggleAddPostModal())
});

export const AddPostDisplay = connect(mapStateToProps, mapDispatchToProps)(
  AddPostModal
);
