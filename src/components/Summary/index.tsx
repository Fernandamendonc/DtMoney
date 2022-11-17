import { useTransactions } from "../../hooks/useTransactions";

import incomeImg from '../../assets/income.svg';
import outcomeImg from  '../../assets/outcome.svg';
import totalImg from '../../assets/Total.svg';

import { Container } from "./styles";

export function Summary(){
  const {transactions} = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposit += transaction.amount
      acc.total += transaction.amount
    } else{
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc

  }, {
    deposit: 0,
    withdraws: 0,
    total: 0,
  })

  return(
    <Container>
      <div className="box">
        <header>
          <p>Entradas</p>
          <img src={ incomeImg } alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)}
        </strong>
      </div>
      <div className="box">
        <header>
          <p>Saídas</p>
          <img src={ outcomeImg } alt="Saídas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className='Green'>
        <header>
          <p>Total</p>
          <img src={ totalImg } alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  )
}