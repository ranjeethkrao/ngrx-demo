import { createReducer, on, Action } from "@ngrx/store";
import { Customer } from "src/app/models/customer";
import * as CustomerActions from "../action/customer.actions";

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[]
}

export const initialState: CustomerState  = {
  customers: []
}

export const customerReducer = createReducer(
  initialState,
  on(
    CustomerActions.addCustomer, 
    (state: CustomerState, {customer}) => ({...state, customers: [...state.customers, customer]})
  )
);

export const reducer = (state: CustomerState | undefined, action: Action) => customerReducer(state, action);