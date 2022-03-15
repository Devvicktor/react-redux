import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  /* border: 1px solid #dddddd; */
  margin: 18px;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
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
  margin: 7px 0 0 10px;

  padding: 0 10px;
  padding-right: 5px;
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  white-space: nowrap;
  color: ${(props) => props.theme.textColor};
`;
const CardCaption = styled.small`
  font-weight: 600;
`;
const CardContent = styled.div`
  margin: 0;
`;
const Button = styled.button`
  border-radius: 5px 5px 5px 5px;
  margin-right: 10px;
  padding: 5px 5px 5px 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  border: ${(props) => props.theme.border};
`;
const CardActionArea = styled.div`
  margin: auto;
`;
const CardMeta = styled.div`
  margin: 10px 0 0 0;
`;
const CardContentHeader = styled.p`
  font-weight: 600;
`;
const CardBody = styled.p``;
const Todo = ({
  todo: { start_time, category, title, description, email, end_time },
}) => {
  return (
    <Card>
      <CardTitle>Title: {title}</CardTitle>

      <CardCaption>Email: {email}</CardCaption>
      <CardMeta>
        {" "}
        <small>Start: {start_time}</small>
        <small>End: {end_time}</small>
      </CardMeta>
      <CardLabel>
        <span>
          {" "}
          Tag: <CardLabelTag>{category}</CardLabelTag>
        </span>{" "}
      </CardLabel>
      <CardContent>
        <CardContentHeader> Description:</CardContentHeader>{" "}
        <CardBody> {description}</CardBody>
      </CardContent>

      <CardActionArea>
        {" "}
        <Button>update</Button>
        <Button>delete</Button>
      </CardActionArea>
    </Card>
  );
};

export default Todo;
