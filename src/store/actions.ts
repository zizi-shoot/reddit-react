import { ActionCreator, AnyAction } from 'redux';

enum ActionType {
  UPDATE_COMMENT = 'UPDATE_COMMENT',
}

const updateComment: ActionCreator<AnyAction> = (text: string) => ({
  type: ActionType.UPDATE_COMMENT,
  text,
});

export {
  ActionType,
  updateComment,
};
