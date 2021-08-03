import { ActionCreator, AnyAction, Reducer } from 'redux';

type RootState = {
  commentText: string,
}

const initialState: RootState = {
  commentText: '',
};
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: UPDATE_COMMENT,
  text,
});
const rootReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    default:
      return state;
  }
};

export { RootState, rootReducer, updateComment };
