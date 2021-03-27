import React from "react";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";
import SectionHeader from "./components/common/Headers/SectionHeader";
import PageHeader from "./components/common/Headers/PageHeader";
import PageTitle from "./components/common/Headers/PageTitle";

import Schedule from "./components/sections/Schedule";
import About from "./components/sections/About";

const FlexContainer: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const FlexLeft: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

const Constraint: AnyStyledComponent = styled.div`
  max-width: 1000px;
  display: flex;

  width: 1000px;
`;
const ScheduleDiv: AnyStyledComponent = styled.div`
  padding-left: 50px;
  @media (max-width: 600px) {
    padding: 0px;
  }
`;
const AboutDiv: AnyStyledComponent = styled.div`
  padding-bottom: 80px;
  padding-top: 80px;
`;
export default () => {
  return (
    <div>
      <FlexCenter>
        <Constraint>
          <FlexContainer>
            <FlexLeft>
              <PageTitle>PickHacks presents</PageTitle>
              <PageHeader>PreHacks</PageHeader>
            </FlexLeft>

            <AboutDiv>
              <About />
            </AboutDiv>

            <ScheduleDiv>
              <Schedule />
            </ScheduleDiv>
          </FlexContainer>
        </Constraint>
      </FlexCenter>
    </div>
  );
};
