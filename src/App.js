import "./App.css";
import AddTodo from "./components/AddTodo";
import Todolist from "./components/TodoList";
import styled from "styled-components";
import Menu from "./components/Menu";
const Wrapper = styled.div`
  display: flex;
  background: #f2f2f2;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Menu />
      <Todolist />
      <AddTodo />
    </Wrapper>
  );
}

export default App;
