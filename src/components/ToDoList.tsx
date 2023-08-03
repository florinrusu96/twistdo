import React from "react";
import { Item } from "./Item";
import { COLORS } from "../colors";

import styled from "styled-components";

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
`

export class ToDoList extends React.Component {
  render() {
    return (
      <Container>
        <Title>To Do:</Title>
        <ItemContainer>
            <Item title="Title" description="Lorem ipsum blal bla bla"></Item>
        </ItemContainer>
      </Container>
    );
  }
}
