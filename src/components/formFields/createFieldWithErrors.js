import React from 'react';
import { Field } from 'redux-form';
import { curry, compose } from 'ramda';

const withErrorDisplay = curry(InputComponent => {
  return props => {
    const { label, meta: { touched, error } } = props;
    const classes = `ui form field required ${touched && (error && 'error')}`;
    return (
      <div className={classes}>
        <label htmlFor={label}>{label}</label>
        {/* Use the passed in renderElement function to render the input field */}
        {InputComponent(props)}
        {touched &&
          (error && (
            <div className="ui error message">
              <span>{error}</span>
            </div>
          ))}
      </div>
    );
  };
});

const withReduxFormField = InputComponent => {
  return props => {
    if (props.children) {
      return (
        <Field
          component={InputComponent}
          name={props.name}
          label={props.label}
          validate={props.validate}
        >
          {props.children}
        </Field>
      );
    } else {
      return (
        <Field
          component={InputComponent}
          name={props.name}
          label={props.label}
          validate={props.validate}
        />
      );
    }
  };
};

const createFieldWithErrors = compose(withReduxFormField, withErrorDisplay);

export default createFieldWithErrors;
