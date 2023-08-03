import React from "react";
import styled from 'styled-components';

type ItemProps = {
  title: string;
  description: string;
};

const Title = styled.span`
color: red;
`

export class Item extends React.Component<ItemProps> {
  render() {
    return <Title>{this.props.title}</Title>;
  }
}
