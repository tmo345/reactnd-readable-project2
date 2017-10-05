import React from 'react';

const withErrorDisplay = InputComponent => {
  return props => {
    const { label, meta: { touched, error } } = props;
    const classes = `ui form field required ${touched && (error && 'error')}`;
    return (
      <div className={classes}>
        <label htmlFor={label}>{label}</label>

        <InputComponent {...props} />

        {touched &&
          (error && (
            <div className="ui error message">
              <span>{error}</span>
            </div>
          ))}
      </div>
    );
  };
};

export default withErrorDisplay;
