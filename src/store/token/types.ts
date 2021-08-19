import { TokenAction } from './actions';

interface IToken {
  value: string,
}

type TTokenAction = {
  type: typeof TokenAction.SAVE_TOKEN,
  token: string,
}

interface ITokenAction {
  type: TokenAction.SAVE_TOKEN,
  token: string,
}

export { IToken, TTokenAction, ITokenAction };
