import React from "react";
import styled, { AnyStyledComponent } from "styled-components";
import Hero from "../../images/artpiece.gif";
import PageHeader from "../common/Headers/PageHeader";
import PageTitle from "../common/Headers/PageTitle";

const PickGif: AnyStyledComponent = styled.img`
  max-width: 100%;
`;

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

const PickGifBorder: AnyStyledComponent = styled.div`
  background-color: #201f1f;
  display: flex;
  border-radius: 15px;
  padding: 0.7rem;
`;

const MSTGroup: AnyStyledComponent = styled.div`
  text-align: right;
  padding-right: 20px;
`;

const MSTtext: AnyStyledComponent = styled.div`
  font-size: 140%;
  font-family: titling-gothic-fb, sans-serif;
  font-weight: 200;

  @media (max-width: 600px) {
    font-size: 3.2vw;
  }
`;
const HeroDiv: AnyStyledComponent = styled.div`
  padding-left: 20px;
`;
export default (props: any) => {
  return (
    <div>
      <HeroDiv>
        <FlexCenter>
          <FlexColumn>
            <PageTitle>PickHacks presents</PageTitle>
            <PageHeader>PreHacks</PageHeader>
            <PickGifBorder>
              <PickGif src={Hero} />
            </PickGifBorder>
            <MSTGroup>
              <FlexColumn>
                <MSTtext>Missouri University of Science and Technology</MSTtext>

                <MSTtext>Spring 2021</MSTtext>
              </FlexColumn>
            </MSTGroup>
          </FlexColumn>
        </FlexCenter>
      </HeroDiv>
    </div>
  );
};
