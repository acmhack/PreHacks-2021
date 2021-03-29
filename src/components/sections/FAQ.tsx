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

  max-width: 600px;
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
                <FAQSegment title="What?">
                  Prehacks is an opportunity for those new to the hackathon
                  scene to learn the in's and out's of the process. From basic
                  coding knowledge to how to submit your project, everything you
                  would need to know to fully enjoy Pickhacks is here!
                </FAQSegment>
                <FAQSegment title="When?">
                  Prehacks is the weekend before Pickhacks, taking place on
                  Saturday, April 3rd from 2-6pm CST.
                </FAQSegment>
                <FAQSegment title="Where?">
                  Prehacks, like Pickhacks, will take place competely virtually,
                  with the majority of the event being held on Hopin. All talks
                  will also be posted on the Pickhacks Youtube channel after the
                  event.
                </FAQSegment>
                <FAQSegment title="Who?">
                  While the event was created with those who are new to the
                  hacking scene in mind that are looking to gain a little bit
                  more experience before the actual event, anyone is welcome!
                  We'll have an abundance of talks meant to make Pickhacks flow
                  smoothly and comfortably for everyone.
                </FAQSegment>
                <FAQSegment title="Others?">
                  If you have any other questions that are not listed here, feel
                  free to reach out to us at pickhacks@mst.edu or on our social
                  media!
                </FAQSegment>
              </FlexColumn>
            </FlexCenter>
          </Constraint>
        </FlexCenter>
      </FlexColumn>
    </div>
  );
};
