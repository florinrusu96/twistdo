import React from "react";
import { ToDoList } from "./components/ToDoList";

import styled from "styled-components";
import { COLORS } from "./colors";

const AppContainer = styled.div`
  background-color: ${COLORS.purple};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <ToDoList></ToDoList>
    </AppContainer>
  );
}

export default App;
