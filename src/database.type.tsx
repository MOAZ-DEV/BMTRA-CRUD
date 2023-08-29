import { legacy_createStore as createStore } from 'redux';

interface TLI {

  Date: string,
  Amount: string,
  Type: "Dept" | "Income" | "Expense" | "Saving",
  Description?: string,

};
const
  TL: TLI[] = [
    {
      Date: "28/01/2023	",
      Amount: "$ 2,000",
      Type: "Expense",
    },
    {
      Date: "04/01/2023	",
      Amount: "$ 500",
      Type: "Saving",
      Description: "Savings Freelance",
    },
    {
      Date: "16/12/2022	",
      Amount: "$ 145",
      Type: "Income",
      Description: "Expenses Car",
    },
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

