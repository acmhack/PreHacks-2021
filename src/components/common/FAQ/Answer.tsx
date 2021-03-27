import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: Poppins;
  font-size: 130%;
  padding-top: 10%;
  font-style: normal;
  font-weight: 300;
  line-height: 1em;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 3vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
