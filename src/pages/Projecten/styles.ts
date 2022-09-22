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
  font-family: Neue Haas Medium;
  margin: 0;
  @media screen and (min-width: 992px) {
    font-size: 50px;
  }
`;

export const PI = styled("p")`
  font-size: 18px;
  font-family: Neue Haas Bold;
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`;

export const PM = styled("p")`
  font-size: 18px;
  overflow-y: scroll;

  font-family: Neue Haas Medium;
  max-height: 500px;
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`;

export const ProjectContainer = styled('div')`
  padding: 5em 1em 1em;
  background-color:#E4E4E4;
  @media screen and (min-width: 992px) {
    padding: 8em 2em 1em;
  }
`;
