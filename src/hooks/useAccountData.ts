import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IAccountData, IRootState } from '../types';
import { accountRequestAsync } from '../store/account/actions';

export function useAccountData() {
  const accountData = useSelector<IRootState, IAccountData>((state) => state.account);
  const loading = useSelector<IRootState, boolean>((state) => state.account.loading);
  const token = useSelector<IRootState, string>((state) => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(accountRequestAsync());
  }, [token]);

  return { accountData, loading };
}
