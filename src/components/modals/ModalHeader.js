import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const ModalHeader = props => (
  <Grid columns={2}>
    <Grid.Row>
      <Grid.Column width={14}>
        <h2>{props.modalTitle}</h2>
      </Grid.Column>
      <Grid.Column width={2} textAlign="right">
        <Button icon="remove" onClick={props.handleCloseModal} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ModalHeader;
