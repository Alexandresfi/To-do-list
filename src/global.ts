import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media (max-width: 1080px){
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.75%;
    }
}

body {
    background: #1C1C1C;
    color: white;
    position: relative;

    font-family: 'Montserrat', sans-serif;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: normal;
    font-weight: normal;
    position: relative;

    -webkit-font-smoothing: antialiased;
}

[disabled] {
	opacity: 0.6;
	cursor: not-allowed;
}

a{
    text-decoration: none;
    color: white;
}

ul {
	list-style: none;
}

`