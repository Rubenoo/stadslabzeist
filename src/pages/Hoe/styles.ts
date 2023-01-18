import styled from "styled-components";

export const P = styled("p")`
  font-size: 18px;
  white-space: pre-wrap;
  font-family: Neue Haas Bold;
  color: #1B3888;
  @media screen and (min-width: 992px) {
    font-size: 20px;
    padding-right: 15px;
  }
`;

export const H = styled("h1")`
  font-size: 63px;
  white-space: nowrap;
  color: #1B3888;
  @media screen and (min-width: 992px) {
    font-size: 117px;
  }
`;