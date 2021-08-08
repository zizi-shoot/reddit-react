import { ActionCreator, AnyAction, Reducer } from 'redux';
// Typings
type RootState = {
  commentText: string,
  userToken: string,
}

// Actions
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
});

const setToken: ActionCreator<AnyAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

// Root
const initialState: RootState = {
  commentText: '',
  userToken: '',
};
const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        userToken: action.token,
      };
    default:
      return state;
  }
};

export { RootState, rootReducer, updateComment, setToken };
