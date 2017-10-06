import React from 'react';
import { Button } from 'semantic-ui-react';

const FormSubmittedMessage = props => (
  <div>
    <h3>{props.heading}</h3>
    <Button onClick={props.closeModal}>{props.closeButtonText}</Button>
    {props.secondaryButtonText && (
      <Button onClick={props.resetFormSubmitted}>
        {props.secondaryButtonText}
      </Button>
    )}
  </div>
);

export default FormSubmittedMessage;
