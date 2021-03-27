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
                <FAQSegment title="What?">sd</FAQSegment>
                <FAQSegment title="When?">sd</FAQSegment>
                <FAQSegment title="Where?">sd</FAQSegment>
                <FAQSegment title="Who?">sd</FAQSegment>
                <FAQSegment title="Others?">sd</FAQSegment>
              </FlexColumn>
            </FlexCenter>
          </Constraint>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
