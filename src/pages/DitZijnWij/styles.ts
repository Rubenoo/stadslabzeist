import styled from "styled-components";

export const A = styled("a")<{ textColor?: string}>`
  font-size: 17px;
  font-family: Neue Haas Bold;
  ${(props) => (props.textColor ? "color: " + props.textColor + ";" : "color: #1B3888;")}

  margin-bottom: 0.5em;
  @media screen and (min-width: 992px) {
    font-size: 29px;
  }
`;
export const P = styled("p")<{ textColor?: string}>`
  font-size: 15px;
  font-family: Neue Haas Medium;
  ${(props) => (props.textColor ? "color: " + props.textColor + ";" : "color: #1B3888;")}

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`;