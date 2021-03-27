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
            Event for high schools to build hype and get them acclimated. HYPE
            HYPE!
          </SectionDescription>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
