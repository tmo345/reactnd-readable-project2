import React from 'react';
import Modal from 'react-modal';

const ReadableModal = props => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.handleCloseModal}
    contentLabel={props.contentLabel}
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      },
      content: {
        top: '10%',
        bottom: '12.5%',
        right: '10%',
        left: '10%',
        padding: '25px'
      }
    }}
  >
    {props.children}
  </Modal>
);

export default ReadableModal;
