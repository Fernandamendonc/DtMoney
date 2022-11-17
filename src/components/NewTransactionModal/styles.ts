import styled from 'styled-components';

import {transparentize} from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--textos);
    font-size: 1.5rem;

    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    border-radius: 0.25rem;
    border: 1px solid var(--green);
    background: rgba(0, 0, 0, 0.1); 

    font-weight: 400;
    font-size: 1;

    &::placeholder {
      color: white;
    }

    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;
    margin-top: 1.5rem;

    background: var(--green);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;


  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

interface RadioBoxProps{
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  border: none;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover{
    border-color: #aaa;
  }

  img{
  width: 20px;
  height: 20px;
  }

  span{
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--textos);
  }
`