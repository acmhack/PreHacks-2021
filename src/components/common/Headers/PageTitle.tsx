import React from "react";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-family: Poppins;
  font-size: 250%;
  padding: 4%;
  padding-bottom: 1%;
  font-style: normal;

  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 9vw;
  }
`;

export default (props: any) => {
  return <Title>{props.children}</Title>;
};
