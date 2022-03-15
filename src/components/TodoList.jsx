import React from "react";
import Todo from "./Todo";
import { todos } from "../utilities/data";
import styled from "styled-components";

const TodoWrapper = styled.div`
  width: 55%;
  padding-left: 5px;
  /* border: 1px solid #dddddd; */
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;
const Todolist = () => {
  return (
    <TodoWrapper>
      {todos &&
        todos.map((todo) => {
          return <Todo todo={todo} />;
        })}
    </TodoWrapper>
  );
};

export default Todolist;
