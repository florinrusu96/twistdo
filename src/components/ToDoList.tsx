import React from "react";
import { Item, ItemProps } from "./Item";
import { COLORS } from "../colors";

import styled from "styled-components";

type ToDoListProps = {
  items: ItemProps[];
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.earthYellow};
  width: 30vw;
  height: 80vh;
  border-radius: 50px;
  box-sizing: border-box;
  padding: 30px 50px;
  border: 2px solid ${COLORS.peachYellow};
`;

const Title = styled.div`
  font-size: 3.5rem;
  height: 20%;
  align-self: center;
  font-family: Aclonica;
  color: ${COLORS.peachYellow};
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

//Stop people adding todos if it reaches overflow
export class ToDoList extends React.Component<ToDoListProps> {
  render() {
    return (
      <Container>
        <Title>To Do:</Title>
        <ItemContainer></ItemContainer>
      </Container>
    );
  }
}
