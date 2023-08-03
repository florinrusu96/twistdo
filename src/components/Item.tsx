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
  height: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const DetailsContainer = styled.div`
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${COLORS.peachYellow};
  padding: 5px 15px;
  border-radius: 20px;
  width: 85%;
  height: 100%;
  justify-content: center;
`;

const Title = styled.span`
  color: ${COLORS.coral};
  font-weight: 600;
`;

const Description = styled.div`
  color: ${COLORS.earthYellow};
`;

//We need a better way to style this shit.
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 40px;
  height: 40px;
  accent-color: ${COLORS.notGreen};
`;

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
