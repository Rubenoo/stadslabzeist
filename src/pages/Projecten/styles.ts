import styled from "styled-components";

export const H1P = styled("h1")`
  font-size: 29px;
  font-family: Neue Haas Black;
  color: #1B3888;
  margin-bottom: 0.5em;
  @media screen and (min-width: 992px) {
    font-size: 80px;
  }
`;
export const H2P = styled("h2")`
  font-size: 25px;
  font-family: Neue Haas Bold;
  margin-left: 0.5em;
  @media screen and (min-width: 992px) {
    font-size: 62px;
  }
`;

export const PI = styled("p")`
  font-size: 25px;
  font-family: Neue Haas Black;
  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`;

export const PM = styled("p")`
  font-size: 25px;
  overflow-y: scroll;

  font-family: Neue Haas Medium;
  max-height: 500px;
  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`;

export const ProjectContainer = styled('div')`
  padding: 5em 1em 1em;
  background-color:#fff;
  @media screen and (min-width: 992px) {
    padding: 8em 2em 1em;
  }
`;
