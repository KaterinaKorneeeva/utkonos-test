import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
     body {
        font-family: 'rubik', sans-serif
     }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    p {
        white-space: pre-line;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
    /* Remove outline on the forms and links */
    :active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
    }
    input {
        outline: none;
    }
`
