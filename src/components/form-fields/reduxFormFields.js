import React from 'react';
import withErrorDisplay from './withErrorDisplay';

const textInput = ({ input, label }) => (
  <input {...input} placeholder={label} type="text" id={label} />
);

const selectField = ({ input, label, children }) => (
  <select {...input} id={label}>
    {children}
  </select>
);

const textareaField = ({ input, label }) => (
  <textarea {...input} id={label} placeholder={label} />
);

export const ReadableTextInput = withErrorDisplay(textInput);
export const ReadableSelect = withErrorDisplay(selectField);
export const ReadableTextarea = withErrorDisplay(textareaField);
