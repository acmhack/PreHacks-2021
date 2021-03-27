import React, { useState } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import events from "../../data/events.json";

import Card from "../common/Schedule/ScheduleCard";
import DayCheck from "../common/Schedule/DayCheck";
import SectionTitle from "../common/Headers/SectionHeader";
import SectionDescription from "../common/Descriptions/SectionDescription";

const ScheduleGroup: AnyStyledComponent = styled.div`
  display: flex;

  flex-direction: row;
`;

const EventGroup: AnyStyledComponent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2%;
`;
const DayCheckGroup: AnyStyledComponent = styled.div`
  display: flex;
  padding-right: 10%;

  flex-direction: column;
  @media (max-width: 600px) {
    display: none;
  }
`;
const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;

  flex-direction: column;
`;

const FILTER_TYPES: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday"];

export default () => {
  const [filters, setFilters]: [boolean[], (x: boolean[]) => void] = useState<
    boolean[]
  >(new Array(FILTER_TYPES.length).fill(false));

  const toggleDayCheck: (x: number) => void = (index: number): void => {
    const newFilters: boolean[] = [...filters];
    newFilters[index] = !newFilters[index];
    setFilters(newFilters);
  };

  const showEvent: (x: string) => boolean = (day: string): boolean => {
    if (
      filters.every((filter: boolean) => {
        return filter === false;
      }) ||
      filters[FILTER_TYPES.indexOf(day)]
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <SectionTitle>Schedule</SectionTitle>
        </FlexCenter>
        <FlexCenter>
          <SectionDescription>During 5:30-6:30 pm CDT</SectionDescription>
        </FlexCenter>
      </FlexColumn>

      <ScheduleGroup>
        <DayCheckGroup>
          <DayCheck
            checked={filters[0]}
            onClick={() => {
              toggleDayCheck(0);
            }}
            day="Monday"
          />
          <DayCheck
            checked={filters[1]}
            onClick={() => {
              toggleDayCheck(1);
            }}
            day="Tuesday"
          />
          <DayCheck
            checked={filters[2]}
            onClick={() => {
              toggleDayCheck(2);
            }}
            day="Wednesday"
          />
          <DayCheck
            checked={filters[3]}
            onClick={() => {
              toggleDayCheck(3);
            }}
            day="Thursday"
          />
        </DayCheckGroup>

        <EventGroup>
          {events
            .filter((event: any) => {
              return showEvent(event.day);
            })
            .map((event: any, i: number) => {
              return <Card {...event} key={i} />;
            })}
        </EventGroup>
      </ScheduleGroup>
    </div>
  );
};
