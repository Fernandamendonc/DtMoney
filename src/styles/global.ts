import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root{
    --blue: #5429CC;
    --blue-light:#6933FF;
    --green: #F637EC;
    --red: #E62E4D;
    --whiteshape: #2B2B2B;
    --titulos: #FFFF;
    --textos: #FFFF;
    --background: #2B2B2B;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media (max-width: 1888px) {
      font-size: 93.75%;
    }

    @media (max-width: 728px) {
      font-size: 87.5%;
    }
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .react-modal-overlay{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;

    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    border: 0;

    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`
