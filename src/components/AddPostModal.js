import React from 'react';
<<<<<<< HEAD
import ModalHeader from './ModalHeader';
import ReadableModal from '../components/ReadableModal';

=======
import { Button, Form, Dropdown, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { addPostServer } from '../utils/api';
import Modal from 'react-modal';
import ModalHeader from './ModalHeader';
import ReadableModal from '../components/ReadableModal';

const FormPart = styled.div``;

>>>>>>> 4824c51db3f691f74f93e08807ca4dd59bf8e899
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
