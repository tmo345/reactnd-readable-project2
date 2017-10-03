import React from 'react';
import createFieldWithErrors from './createFieldWithErrors';

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

export const ReadableTextInput = createFieldWithErrors(textInput);
export const ReadableSelect = createFieldWithErrors(selectField);
export const ReadableTextarea = createFieldWithErrors(textareaField);
