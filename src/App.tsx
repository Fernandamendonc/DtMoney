import { useState } from 'react';
import Modal from 'react-modal'

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { Global } from './styles/global';
import { Container } from './styles/App'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Container>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <NewTransactionModal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <Dashboard />
        <Global />
      </Container>
    </TransactionsProvider>
  );
}

export default App
