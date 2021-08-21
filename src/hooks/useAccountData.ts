import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IAccountData, IRootState } from '../types';
import { accountRequestAsync } from '../store/account/actions';
import { saveToken } from '../store/token/actions';

export function useAccountData() {
  const accountData = useSelector<IRootState, IAccountData>((state) => state.account);
  const loading = useSelector<IRootState, boolean>((state) => state.account.loading);
  const token = useSelector<IRootState, string>((state) => state.token.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveToken());
  }, []);

  useEffect(() => {
    if (token === 'undefined' || !token) return;
    dispatch(accountRequestAsync());
  }, [token]);

  return { accountData, loading };
}
