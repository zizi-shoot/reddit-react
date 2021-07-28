import React from 'react';

type TFocusContext = {
  value: boolean,
  onClick:(value: boolean) => void;
}

export const focusContext = React.createContext<TFocusContext>({
  value: false,
  onClick: () => {},
});
