import React from 'react';

export const SubmitButton = props => (
  <button
    className="ui green button"
    type="submit"
    disabled={props.disableConditions}
  >
    {props.buttonText}
  </button>
);

SubmitButton.defaultProps = {
  buttonText: 'Submit',
};

export const ResetButton = props => (
  <button
    className="ui black button"
    type="button"
    disabled={props.disableConditions}
    onClick={props.resetForm}
  >
    {props.buttonText}
  </button>
);
