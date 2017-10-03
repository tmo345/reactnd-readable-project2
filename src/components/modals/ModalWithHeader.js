import React from 'react';
import ModalHeader from './ModalHeader';
import ReadableModal from './ReadableModal';

const ModalWithHeader = props => {
  return (
    <ReadableModal
      isOpen={props.isOpen}
      handleCloseModal={props.closeModal}
      contentLabel={props.label}
    >
      <ModalHeader
        modalTitle={props.label}
        handleCloseModal={props.closeModal}
      />
      {props.children}
    </ReadableModal>
  );
};

export default ModalWithHeader;
