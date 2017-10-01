import React from 'react';
import { Button, Form, Dropdown, Grid, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { addPostServer } from '../utils/api';
import Modal from 'react-modal';
import ModalHeader from './ModalHeader';
import ReadableModal from '../components/ReadableModal';

const FormPart = styled.div``;

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
