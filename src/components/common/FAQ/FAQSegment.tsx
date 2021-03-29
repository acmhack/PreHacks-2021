import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import QuestionHeader from "./QuestionHeader";
import Answer from "./Answer";

interface ISegmentProps {
  title: string;
  children: string;
}
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
const Group: AnyStyledComponent = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

export default ({ title, children }: ISegmentProps) => {
  return (
    <div>
      <Group>
        <FlexColumn>
          <FlexCenter>
            <QuestionHeader>{title}</QuestionHeader>
          </FlexCenter>
          <FlexCenter>
            <Answer>{children}</Answer>
          </FlexCenter>
        </FlexColumn>
      </Group>
    </div>
  );
};
