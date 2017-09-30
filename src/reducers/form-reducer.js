const initialFormState = {
  addPost: {
    title: '',
    author: '',
    category: '',
    body: ''
  }
};

const forms = (state = initialFormState, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        addPost: {
          ...state.addPost,
          [action.fieldName]: action.value
        }
      };
    default:
      return state;
  }
};

export default forms;
