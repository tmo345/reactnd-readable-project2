// import React from 'react';
// import { connect } from 'react-redux';
// import AddPostModal from '../components/AddPostModal';
// import { addPostServerSucceeded } from '../actions/post-actions';
// import { openAddPostModal } from '../actions/ui-actions';
//
// class AddPostDisplay {
//   handleAddPostSubmit = ({ title, author, body, category }) => {};
//
//   render() {
//     return (
//       <AddPostModal
//         addPostsModalOpen={this.props.addPostsModalOpen}
//         toggleAddPostModal={this.props.toggleAddPostModal}
//       />
//     );
//   }
// }
//
// const mapStateToProps = state => ({
//   posts: state.posts,
//   addPostsModalOpen: state.ui.addPostsModalOpen
// });
//
// const mapDispatchToProps = dispatch => ({
//   addPostServerSucceeded: postData =>
//     dispatch(addPostServerSucceeded(postData)),
//   toggleAddPostModal: () => dispatch(toggleAddPostModal())
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(AddPostDisplay);
