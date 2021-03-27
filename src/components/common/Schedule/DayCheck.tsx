import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
interface IDayCheckProps {
  checked: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  day: string;
  dayColor?: string;
}

const DayText: AnyStyledComponent = styled.div`
  font-size: 1.5em;
  display: flex;
  user-select: none;
  padding-left: 50px;
`;
const DayColor: AnyStyledComponent = styled.div`
  display: flex;
  margin-top: 5px;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: ${(props: IDayCheckProps) => props.dayColor};
`;
const DayGroup: AnyStyledComponent = styled.div`
  display: flex;
  padding-bottom: 7%;
  width: 100%;
  flex-direction: row;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default ({ day, checked, onClick }: IDayCheckProps) => {
  // const { checked, onClick } = props;

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
      <DayGroup onClick={onClick}>
        <DayColor dayColor={dayPicker} />
        <DayText style={{ fontWeight: checked ? "bold" : "normal" }}>
          {day}
        </DayText>
      </DayGroup>
    </div>
  );
};
