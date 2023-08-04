import React from "react";
import { ToDoList } from "./components/ToDoList";

import styled from "styled-components";
import { COLORS } from "./colors";
import { ItemProps } from './components/Item';

const AppContainer = styled.div`
  background-color: ${COLORS.purple};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CreateTodo = styled.button`
  color: ${COLORS.notGreen};
  background-color: ${COLORS.earthYellow};
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  cursor: pointer;
  margin-top: 25px;
`;

function App() {
  let items: ItemProps[] = [];
  const handleNewTicket = () => {
    
  };

  return (
    <AppContainer>
      <ToDoList items={items}></ToDoList>
      <CreateTodo onClick={handleNewTicket}>New ToDo</CreateTodo>
    </AppContainer>
  );
}

export default App;
