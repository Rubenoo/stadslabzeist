import styled from "styled-components";

export const P = styled("p")`
  font-size: 18px;
  white-space: pre-wrap;
  font-family: Neue Haas Medium;
  color: #1B3888;
  max-height: 350px;
  overflow-y: scroll;
  @media screen and (min-width: 992px) {
    font-size: 20px;
    padding-right: 15px;
    max-height: 100%;
    overflow-y: hidden;
  }
`;

export const H = styled("h1")`
  font-size: 58px;
  white-space: nowrap;
  color: #1B3888;
  @media screen and (min-width: 992px) {
    font-size: 117px;
  }
`;