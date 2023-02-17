import {Header} from "./components";
import styled, {ThemeProvider} from "styled-components";
import {useState} from "react";
import {lightTheme, darkTheme, GlobalStyles} from './components/ThemeSwitcher/ThemeSwitcher'

const StyledApp = styled.div``;

function App() {
    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <StyledApp>
                    <Header/>
                </StyledApp>
        </ThemeProvider>
);
}

export {App};
