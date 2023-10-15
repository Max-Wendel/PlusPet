import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import type { RootState, AppDispatch } from './store';
import FetchStatus from '../enums/FetchStatus';

//Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const isLoading = (status: FetchStatus) =>
  FetchStatus.Loading === status;

export const isFailed = (status: FetchStatus) => FetchStatus.Failed === status;

export const isFulfilled = (status: FetchStatus) =>
  FetchStatus.Fulfilled === status;

export const useQuery = () => {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
};