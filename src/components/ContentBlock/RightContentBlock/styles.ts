import styled from "styled-components";

export const RightBlockContainer = styled("section")<{
  backgroundColor?: string;
  backgroundSVG?: string;
}>`
  position: relative;
  padding: 10rem 8rem 10rem;
  display: flex;
  align-items: center;
  height: 100%;

  ${(props) =>
    props.backgroundColor && "background-color: " + props.backgroundColor + ";"}
  ${(props) =>
    props.backgroundSVG &&
    "background-image: url(/img/svg/" +
      props.backgroundSVG +
      "); background-size: cover;"}

  @media only screen and (max-width: 1024px) {
    padding: 8rem 2rem 6rem;
    min-height: 400px;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 2rem 3rem;
    min-height: 400px;
  }
`;
export const P = styled("p")`
  font-size: 16px;
  font-family: Neue Haas Medium;

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`;
export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  height: 100%;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 100%;
`;
