import React from "react";
import { Item, ItemProps } from "./Item";
import { COLORS } from "../colors";

import styled from "styled-components";

type CreateItemModalProps = {
  showModal: boolean;
};

const Container = styled.div`
  height: 400px;
  width: 400px;
`;

export class CreateItemModal extends React.Component<CreateItemModalProps> {
  render() {
    return <Container></Container>;
  }
}
