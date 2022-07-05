import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;

    th{
      color: var(--textos);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td{
      padding: 1rem 2rem;
      border: 0;
      background: var(--whiteshape);
      color: var(--textos);
      border-radius: 0.25rem;

      &:first-child{
        color: var(--titulos);
      }
      &.positivo{
        color: var(--green);
      }
      &.negativo{
        color: var(--red);
      }
    }
  }
`;