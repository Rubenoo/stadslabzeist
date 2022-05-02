import styled from "styled-components";

export const MiddleBlockSection = styled("section")<{ backgroundColor?: string, backgroundSVG?: string, fullBackground?: boolean}>`
  position: relative;
  ${(props) => (props.backgroundColor && "background-color: " + props.backgroundColor + ";")}
  ${(props) => (props.backgroundSVG && "background-image: url(/img/svg/" + props.backgroundSVG + "); background-size: cover;")}

  padding: 7.5rem 0 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  height: ${(props) => (props.fullBackground ? "1200px" : "800px")};

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
    height: 800px;
  }
`;

export const Content = styled("p")`
  padding: 0;
`;

export const ContentWrapper = styled("div")<{ fullWidth?: boolean, fullHeight?: boolean}>`
  max-width: ${(props) => (props.fullWidth ? "100%" : "570px")};
  max-height: ${(props) => (props.fullHeight ? "100%" : "570px")};

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
