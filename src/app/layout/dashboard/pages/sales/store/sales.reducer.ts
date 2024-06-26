import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../../users/models/index';
import { Sale } from '../models';
import { SalesActions } from './sales.actions';

export const salesFeatureKey = 'sales';

export interface State {
  sales: Sale[];
  buyers: User[];
  products: User[];
  loading: boolean;
  loadingBuyers: boolean;
  error: unknown;
}

export const initialState: State = {
  sales: [],
  buyers: [],
  products: [],
  loading: false,
  loadingBuyers: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(SalesActions.loadSales, (state) => ({ ...state, loading: true })),
  on(SalesActions.loadSalesSuccess, (state, action) => ({
    ...state,
    loading: false,
    sales: action.data,
  })),
  on(SalesActions.loadSalesFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(SalesActions.loadBuyers, (state) => {
    return {
      ...state,
      loadingBuyers: true,
    };
  }),
  on(SalesActions.loadBuyersSuccess, (state, action) => {
    return {
      ...state,
      loadingBuyers: false,
      buyers: action.data,
    };
  }),
  on(SalesActions.loadProductsSuccess, (state, action) => ({
    ...state,
    home: action.data,
  }))
);

export const salesFeature = createFeature({
  name: salesFeatureKey,
  reducer,
});
