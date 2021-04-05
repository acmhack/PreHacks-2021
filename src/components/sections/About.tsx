import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import SectionTitle from "../common/Headers/SectionHeader";
import SectionDescription from "../common/Descriptions/SectionDescription";

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
  padding: 0;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export default (props: any) => {
  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <SectionTitle>About</SectionTitle>
        </FlexCenter>
        <FlexCenter>
          <SectionDescription>
            PreHacks! This is our new event to help novice hackers get
            comfortable before they join us for PickHacks. This four-hour series
            will be spread over four days. We'll do crash courses of popular
            programming languages, walkthroughs of common hackathon software,
            answer questions about how our hackathon will work, and network. We
            want to help you feel prepared and familiar when you join us for
            PickHacks, so our new event is tailored towards your needs!
          </SectionDescription>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
