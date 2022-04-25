import styled from "styled-components";

export const MiddleBlockSection = styled("section")<{ backgroundColor?: string, backgroundSVG?: string}>`
  position: relative;
  ${(props) => (props.backgroundColor && "background-color: " + props.backgroundColor + ";")}
  ${(props) => (props.backgroundSVG && "background-image: url(/img/svg/" + props.backgroundSVG + "); background-size: cover;")}

  padding: 7.5rem 0 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 800px;
  
  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")<{ fullWidth?: boolean, fullHeight?: boolean}>`
  max-width: ${(props) => (props.fullWidth ? "100%" : "570px")};
  max-height: ${(props) => (props.fullHeight ? "100%" : "570px")};
  ${(props) => (props.fullHeight && "max-height: 100%;")}


  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
