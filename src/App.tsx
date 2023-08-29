import { useState } from "react";
import { useSelector } from 'react-redux'
import TransactionsTable from './pages-layouts/TransactionsTable.tsx'
import { transactionsState } from './database.type.tsx'
import { AddTransaction } from './pages-layouts/AddTransaction.tsx'
import './styling/App.scss'

function App() {
  const
    transactions = useSelector<transactionsState, transactionsState["transactions"]>((state) => state.transactions),
    [addingNew, setAddingNew] = useState(false);
  return <div className="App">

    <div className="transactionsWraper">

      <TransactionsTable
        TL={transactions} AND={!addingNew}
        AN={(s: boolean) => setAddingNew(s)} />
      {addingNew ?
        <AddTransaction
          AN={(s: boolean) => setAddingNew(s)} /> : null}

    </div>

  </div>
}

export default App
