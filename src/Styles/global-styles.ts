import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
html,body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100vh;
    font-size: 1rem;
    width: 100%;
}

*,*::before,*::after{
    box-sizing: border-box;
}

`;

export default globalStyles;
