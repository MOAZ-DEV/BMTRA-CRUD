import { legacy_createStore as createStore } from 'redux';

export interface TLI {
  [x: string]: any;
  Date: any,
  Amount: string,
  Type: "Dept" | "Income" | "Expense" | "Saving",
  Description?: string,
};
const
  TL: TLI[] = [
    
  ], initialstate = {
    transactions: TL,
  };

export type transactionsState = {
  [x: string]: any;
  transactions: Array<TLI>,
}
type action = {
  type: "ADD_TRANSACTION" | "DELETE_TRANSACTION",
  payload: TLI
}

const reducer = (state: transactionsState = initialstate, action: action) => {

  switch (action.type) {
    case "ADD_TRANSACTION": {
      return {
        ...state, transactions: [...state.transactions, action.payload],
      }
    }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => transaction.Date !== action.payload.Date && transaction.Type !== action.payload.Type)
            };
    default:
      return state;
  }

};
export const DB = createStore(reducer);

