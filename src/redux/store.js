import { createStore } from 'redux';

// A simple reducer (you can customize this)
const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export { store };
