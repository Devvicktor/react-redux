import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addItemToTodo } from "../store/actions";
const TodoWrapper = styled.div`
  width: 25%;
  margin-left: 10px;
  margin-right: 30px;
`;
const H5 = styled.h5`
  font-size: 25px;
  text-align: centre;
  margin: 0 0 0.5vh 0;
`;
const Label = styled.label`
  display: block;
  text-align: center;
  font-size: 18px;
  margin: 0 0 0.2vh 0;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
`;
const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  height: 15vh;
`;
export default function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    title: "",
    email: "",
    categories: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("INPUT", input);
    dispatch(addItemToTodo(input));
    setInput({
      title: "",
      email: "",
      categories: "",
      description: "",
      start_date: "",
      end_date: "",
    });
  };
  return (
    <TodoWrapper>
      {" "}
      <H5>Add To do Item</H5>
      <form>
        <Label>Title: </Label>
        <Input
          name='title'
          value={input.title}
          type='text'
          placeholder='Todo tittle'
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <Label>Email:</Label>
        <Input
          name='email'
          value={input.email}
          type='email'
          placeholder='Add email'
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />{" "}
        <Label>Categories:</Label>{" "}
        <Input
          name='categories'
          value={input.categories}
          type='text'
          placeholder='categories'
          onChange={(e) => setInput({ ...input, categories: e.target.value })}
        />
        <Label>Description:</Label>{" "}
        <TextArea
          name='description'
          value={input.description}
          type='text'
          placeholder='Add description'
          onChange={(e) => setInput({ ...input, description: e.target.value })}
        />
        <Label> Start:</Label>{" "}
        <Input
          name='start_date'
          value={input.start_date}
          type='text'
          placeholder='Add start date'
          onChange={(e) => setInput({ ...input, start_date: e.target.value })}
        />
        <Label>End:</Label>
        <Input
          name='end_date'
          value={input.end_date}
          type='text'
          placeholder='Add stop date'
          onChange={(e) => setInput({ ...input, end_date: e.target.value })}
        />
        <div>
          {" "}
          <button onClick={handleSubmit}>Add</button>
        </div>
      </form>
    </TodoWrapper>
  );
}
