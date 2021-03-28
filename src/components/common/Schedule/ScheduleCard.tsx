import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

interface CardProps {
  title: string;
  description: string;
  dayColor?: string;
  day: string;
}

const Box: AnyStyledComponent = styled.div`
  flex-grow: 1;

  flex-basis: 0;

  height: auto;
  margin-left: 13px;
  display: flex;
  border-radius: 10px;
  padding: 1%;
  background-color: white;
  flex-direction: column;
  color: black;
`;
const DescText: AnyStyledComponent = styled.div`
  font-weight: 400;
  font-size: 1em;
`;
const TitleText: AnyStyledComponent = styled.div`
  display: flex;
  font-weight: 400;
  padding-right: 10px;
  font-size: 1.5em;

  padding-bottom: 2%;

  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (max-width: 400px) {
    font-size: 0.9em;
  }
`;
const Border: AnyStyledComponent = styled.div`
  display: flex;
  border-left: 10px solid ${(props: CardProps) => props.dayColor};
  border-radius: 10px;
`;
const BoxGroup: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  padding-bottom: 5%;
`;
const TitleGroup: AnyStyledComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
`;
const DayLabel: AnyStyledComponent = styled.div`
  display: flex;
  background-color: ${(props: CardProps) => props.dayColor};
  border-radius: 50px;

  padding: 4px;
  font-size: 14px;
  position: absolute;
  color: white;
  top: 0px;
  right: 0px;
  align-items: center;
  height: 16px;
  @media (min-width: 600px) {
    display: none;
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
const Test: AnyStyledComponent = styled.div`
  display: flex;
 
  width: 50px;

  @media (min-width: 600px) {
    display: none;
`;

export default ({ title, description, day }: CardProps) => {
  function dayPicker() {
    switch (day) {
      case "Monday":
        return "#e43883";
      case "Tuesday":
        return "#4825FF";
      case "Wednesday":
        return "#E4CF38";
      case "Thursday":
        return "#40ABD7";
      default:
        return "gray";
    }
  }

  return (
    <div>
      <BoxGroup>
        <Border dayColor={dayPicker} />
        <Box>
          <TitleGroup>
            <TitleText>{title}</TitleText>
            <Test></Test>
            <DayLabel dayColor={dayPicker}>{day}</DayLabel>
          </TitleGroup>

          <DescText>{description}</DescText>
        </Box>
      </BoxGroup>
    </div>
  );
};
