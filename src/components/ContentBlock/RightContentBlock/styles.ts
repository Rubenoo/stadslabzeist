import styled from "styled-components";

export const RightBlockContainer =  styled("section")<{ backgroundColor?: string, backgroundSVG?: string}>`
  position: relative;
  padding: 10rem 2rem 8rem;
  max-height: 800px;

  display: flex;
  align-items: center;
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
  width: 100%;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
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
