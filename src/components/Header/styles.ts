import styled from "styled-components";

export const Container = styled.header`
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  background: var(--background);
  border-radius: 1rem;

  padding: 0 1rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 100px;
  }

  button{
    font-size: 1rem;
    border: 0;
    background: var(--green);
    color: white;
    padding: 0 2rem;
    border-radius: 10px;
    height: 3.9rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`