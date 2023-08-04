import React, { useState } from "react";
import { ToDoList } from "./components/ToDoList";

import styled from "styled-components";
import { COLORS } from "./colors";
import { ItemProps } from "./components/Item";
import { CreateItemModal } from "./components/CreateItemModal";

const AppContainer = styled.div`
  background-color: ${COLORS.purple};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CreateItem = styled.button`
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
  const [showCreateTodo, setCreateTodo] = useState(false);
  const handleOpenModal = () => setCreateTodo(true);
  const handleCloseModal = () => setCreateTodo(false);

  return (
    <AppContainer>
      <ToDoList items={items}></ToDoList>
      <CreateItem onClick={handleOpenModal}>New ToDo</CreateItem>
      <CreateItemModal open={showCreateTodo} close={handleCloseModal}/>
    </AppContainer>
  );
}

export default App;
