import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import FAQSegment from "../common/FAQ/FAQSegment";
import SectionHeader from "../common/Headers/SectionHeader";

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;

  padding: 0;
`;
const FlexColumn: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Constraint: AnyStyledComponent = styled.div`
  display: flex;
`;
export default (props: any) => {
  return (
    <div>
      <FlexColumn>
        <FlexCenter>
          <SectionHeader>FAQ</SectionHeader>
        </FlexCenter>
        <FlexCenter>
          <Constraint>
            <FlexCenter>
              <FlexColumn>
                <FAQSegment title="What?">answer</FAQSegment>
                <FAQSegment title="When?">answer</FAQSegment>
                <FAQSegment title="Where?">answer</FAQSegment>
                <FAQSegment title="Who?">answer</FAQSegment>
                <FAQSegment title="Others?">answer</FAQSegment>
              </FlexColumn>
            </FlexCenter>
          </Constraint>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
