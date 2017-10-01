import React from 'react';
import ModalHeader from './ModalHeader';
import ReadableModal from '../components/ReadableModal';

const AddPostModal = props => {
  const label = 'Add New Post';
  return (
    <ReadableModal
      isOpen={props.addPostModalOpen}
      handleCloseModal={props.closeAddPostModal}
      contentLabel={label}
    >
      <ModalHeader
        modalTitle={label}
        handleCloseModal={props.closeAddPostModal}
      />
      {props.children}
    </ReadableModal>
  );
};

export default AddPostModal;
