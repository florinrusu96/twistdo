import React from "react";
import { Item, ItemProps } from "./Item";
import { COLORS } from "../colors";

import styled from "styled-components";

type CreateItemModalProps = {
  open: boolean;
  close: any;
};

const Container = styled.div<{ $showModal: boolean }>`
  height: 600px;
  width: 600px;
  display: ${(props) => (props.$showModal ? "flex" : "none")};
  flex-direction: column;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 25px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
`;

export class CreateItemModal extends React.Component<CreateItemModalProps> {
  render() {
    const handleCreate = () => {
      //Get existing items
      let items: ItemProps[] = JSON.parse(
        localStorage.getItem("items") || "[]"
      );
      items.push({ title: "Test", description: "test", state: false });
      localStorage.setItem("items", JSON.stringify(items));
    };

    return (
      this.props.open && (
        <Container $showModal={this.props.open}>
          <Button onClick={handleCreate}>Create</Button>
        </Container>
      )
    );
  }
}
