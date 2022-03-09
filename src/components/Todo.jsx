import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  border: 1px solid #dddddd;
  margin: 18px;
  padding: 10px;
  background-color: #8ca1a5;
`;
const CardTitle = styled.h5`
  font-size: 18px;
`;
const CardLabel = styled.h5`
  font-size: 18px;
  display: flex;
`;
const CardLabelTag = styled.div`
  align-items: center;
  margin: 7px 0;
  margin-right: 10px;
  padding: 0 10px;
  padding-right: 5px;
  border: 1px solid orange;
  border-radius: 5px;
  background-color: orange;
  white-space: nowrap;
  color: white;
`;
const CardCaption = styled.small`
  font-weight: 600;
`;
const CardContent = styled.div`
  margin: 0;
`;
const CardContentHeader = styled.p``;
const CardBody = styled.p``;
const Todo = ({
  todo: { start_time, category, title, description, email, end_time },
}) => {
  return (
    <Card>
      <CardTitle>Title: {title}</CardTitle>

      <CardCaption>Email: {email}</CardCaption>
      <CardLabel>
        {" "}
        Tag: <CardLabelTag>{category}</CardLabelTag>
      </CardLabel>
      <CardContent>
        <CardContentHeader> Description:</CardContentHeader>{" "}
        <CardBody> {description}</CardBody>
      </CardContent>
      <small>Start: {start_time}</small>
      <small>End: {end_time}</small>
      <button>update</button>
      <button>delete</button>
    </Card>
  );
};

export default Todo;
