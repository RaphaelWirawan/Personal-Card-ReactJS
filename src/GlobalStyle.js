import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        background-color: #f5f5f5;
        font-family: 'Lato';
        font-size: 5vh;
        height: 100vh;
        display: flex;
        align-content: center;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;

export default GlobalStyle;