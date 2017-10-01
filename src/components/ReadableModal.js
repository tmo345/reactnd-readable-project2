import React from 'react';
<<<<<<< HEAD
=======
import createModal from './createModal';
>>>>>>> 4824c51db3f691f74f93e08807ca4dd59bf8e899
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
