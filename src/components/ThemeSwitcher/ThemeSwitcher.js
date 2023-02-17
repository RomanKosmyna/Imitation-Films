import {createGlobalStyle} from "styled-components";

const lightTheme = {
        body: '#fff',
        fontColor: '#000'
    };

const darkTheme = {
        body: '#000',
        fontColor: '#fff'
    };

const GlobalStyles = createGlobalStyle`
body {
background-color: ${props => props.theme.body}
}
`;

export {lightTheme, darkTheme, GlobalStyles};