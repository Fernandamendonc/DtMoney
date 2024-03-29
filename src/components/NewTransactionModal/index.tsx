import { FormEvent,  
  useState } from 'react'

import Modal from 'react-modal'
import { useTransactions } from '../../hooks/useTransactions'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { 
  Container, 
  TransactionTypeContainer, 
  RadioBox } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({isOpen, onRequestClose}:  NewTransactionModalProps){
  const {createTransaction} = useTransactions()

  const [type, setType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState(0)

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()

    setType('deposit')
    setTitle('')
    setCategory('')
    setAmount(0)

    await createTransaction({
      title,
      category,
      amount,
      type,
    })

    onRequestClose()

  }

  return(
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input 
          placeholder='Titulo' 
          value={title}
          onChange={
            event => setTitle(event.target.value)
          }
        />
        <input 
          type="number"
          placeholder='Valor'
          className='price' 
          value={amount}
          onChange={
            event => setAmount(Number(event.target.value))
          }
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => {setType('deposit')}}
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>
          <RadioBox 
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => {setType('withdraw')}}
          >
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input 
          placeholder='Categoria' 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />
        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}