import "./App.css";
import AddTodo from "./components/AddTodo";
import Todolist from "./components/TodoList";
import styled from "styled-components";
import Menu from "./components/Menu";

import NavBar from "./components/NavBar";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./util/theme";
const Wrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  color: ${(props) => props.theme.textColor};
`;
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.textColor}
  }
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <NavBar />
      <Wrapper>
        <Menu />
        <Todolist />
        <AddTodo />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
