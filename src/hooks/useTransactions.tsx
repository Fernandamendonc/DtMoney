import { api } from '../services/api';

import {
  createContext, 
  useEffect, 
  useState, 
  ReactNode, 
  useContext} from 'react'
 
interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createAt: string
}

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionsContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export function TransactionsProvider({children} : TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() =>{
    api.get('/transations')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createTransaction(transactionInput: TransactionInput){ 
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date(),
    })

    const {transaction} = response.data
    setTransactions([
      ...transactions,
      transaction,
    ])
  }

  return(
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}