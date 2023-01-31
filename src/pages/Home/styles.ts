import styled from "styled-components";

export const P = styled("p")`
  font-size: 18px;
  white-space: pre-wrap;
  font-family: Neue Haas Bold;
  color: #E4E4E4;
  max-height: 400px;
  overflow-y: scroll;
  @media screen and (min-width: 992px) {
    font-size: 20px;
    padding-right: 15px;
    max-height: 100%;
    overflow-y: hidden;
  }
`;

export const H = styled("h1")`
  font-size: 32px;
  white-space: nowrap;
  color: #E4E4E4;
  text-align: start;
  @media screen and (min-width: 992px) {
    font-size: 117px;
  }
`;