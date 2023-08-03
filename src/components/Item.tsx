import React from "react";
import styled from "styled-components";
import { COLORS } from "../colors";

type ItemProps = {
  title: string;
  description: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.span`
  color: ${COLORS.peachYellow};
`;

const Description = styled.div``;

const DetailsContainer = styled.div``;

const CheckBox = styled.input.attrs({ type: "checkbox" })``;

export class Item extends React.Component<ItemProps> {
  render() {
    return (
      <Container>
        <CheckBox />
        <DetailsContainer>
            <Title>{this.props.title}</Title>
            <Description>{this.props.description}</Description>
        </DetailsContainer>
      </Container>
    );
  }
}
