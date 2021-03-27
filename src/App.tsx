import React from "react";
import "./App.css";
import styled, { AnyStyledComponent } from "styled-components";

import PageHeader from "./components/common/Headers/PageHeader";
import PageTitle from "./components/common/Headers/PageTitle";

import Schedule from "./components/sections/Schedule";
import About from "./components/sections/About";
import FAQ from "./components/sections/FAQ";

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
  display: flex;

  width: 1000px;
`;
const SectionDiv: AnyStyledComponent = styled.div`
  padding-bottom: 8%;
  padding-top: 8%;
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
            <SectionDiv>
              <About />
            </SectionDiv>

            <SectionDiv>
              <Schedule />
            </SectionDiv>

            <SectionDiv>
              <FAQ />
            </SectionDiv>
          </FlexContainer>
        </Constraint>
      </FlexCenter>
    </div>
  );
};
