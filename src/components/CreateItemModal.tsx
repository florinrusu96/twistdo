import React from "react";
import { Item, ItemProps } from "./Item";
import { COLORS } from "../colors";

import styled from "styled-components";

type CreateItemModalProps = {
  open: boolean;
};

const Container = styled.div<{$showModal: boolean}>`
  height: 400px;
  width: 600px;
  display: ${props  => props.$showModal ? 'flex' : 'none'};
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export class CreateItemModal extends React.Component<CreateItemModalProps> {
  render() {
    console.log(this.props.open)
    return this.props.open &&(<Container $showModal={this.props.open}></Container>);
  }
}
