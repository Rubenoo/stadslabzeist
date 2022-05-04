import styled from "styled-components";

export const LeftContentSection = styled("section")<{ backgroundColor?: string, backgroundSVG?: string}>`
  position: relative;
  padding: 10rem 8rem 8rem;
  height: 100%;

  ${(props) => (props.backgroundColor && "background-color: " + props.backgroundColor + ";")}
  ${(props) => (props.backgroundSVG && "background-image: url(/img/svg/" + props.backgroundSVG + "); background-size: cover;")}
  
  @media only screen and (max-width: 1024px) {
    padding: 8rem 2rem 6rem;
    min-height: 400px;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 2rem 3rem;
    min-height: 400px;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;
  height: 100%;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;

  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Neue Haas", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;
export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
