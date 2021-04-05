import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

import Answer from "./Answer";

interface ISegmentProps {
  title: string;
  children: string;
  titleColor?: string;
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

const Title: AnyStyledComponent = styled.div`
  font-family: Poppins;
  font-size: 150%;
  padding: 3%;
  color: ${(props: ISegmentProps) => props.titleColor};
  padding-top: 5%;
  font-style: normal;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;
export default ({ title, children }: ISegmentProps) => {
  function titlePicker() {
    switch (title) {
      case "What?":
        return "#e43883";
      case "When?":
        return "#4825FF";
      case "Where?":
        return "#E4CF38";
      case "Who?":
        return "#40ABD7";
      default:
        return "white";
    }
  }

  return (
    <div>
      <Group>
        <FlexColumn>
          <FlexCenter>
            <Title titleColor={titlePicker()}>{title}</Title>
          </FlexCenter>
          <FlexCenter>
            <Answer>{children}</Answer>
          </FlexCenter>
        </FlexColumn>
      </Group>
    </div>
  );
};
