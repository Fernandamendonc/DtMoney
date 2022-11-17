import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  div{
    background: var(--whiteshape);
    padding: 1.5rem 2rem;
    border-radius: 14px;
    height: 190px;
    background: rgba(0, 0, 0, 0.1); 
    img {
      width: 40px;
      height: 40px;
    }

    color: var(--titulos);

    &.Green{
      background: var(--green);
    }

    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong{
      font-size: 2rem;
      margin-top: 1rem;
      font-weight: 500;
      line-height: 3rem;
      display: block;
    }
  }
`