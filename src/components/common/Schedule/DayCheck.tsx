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
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
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
const DateText: AnyStyledComponent = styled.div`
  font-size: 1.5em;
  display: flex;
  user-select: none;
  padding-left: 50px;
`;
export default ({ day, checked, onClick }: IDayCheckProps) => {
  // const { checked, onClick } = props;

  function dayPicker(): string[] {
    switch (day) {
      case "Monday":
        return ["#e43883", "April 5th"];
      case "Tuesday":
        return ["#4825FF", "April 6th"];
      case "Wednesday":
        return ["#E4CF38", "April 7th"];
      case "Thursday":
        return ["#40ABD7", "April 8th"];
      default:
        return ["gray", "nerd"];
    }
  }

  return (
    <div>
      <DayGroup onClick={onClick}>
        <DayColor dayColor={dayPicker()[0]} />
        <FlexColumn>
          <DayText
            style={{
              fontWeight: checked ? "bolder" : "normal",
              color: checked ? "white" : "gray",
            }}
          >
            {day}
          </DayText>
          <DateText
            style={{
              fontWeight: checked ? "bolder" : "normal",
              color: checked ? "white" : "gray",
            }}
          >
            {dayPicker()[1]}
          </DateText>
        </FlexColumn>
      </DayGroup>
    </div>
  );
};
