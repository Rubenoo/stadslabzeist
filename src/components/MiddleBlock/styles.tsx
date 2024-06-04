import styled from "styled-components";

export const MiddleBlockSection = styled("section")<{
  backgroundcolor?: string;
  backgroundsvg?: string;
  fullBackground?: boolean;
}>`
  position: relative;
  ${(props) =>
    props.backgroundcolor && "background-color: " + props.backgroundcolor + ";"}
  ${(props) =>
    props.backgroundsvg &&
    "background-image: url(/img/svg/" +
      props.backgroundsvg +
      "); background-size: cover;"}

  padding: 7.5rem 0 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0;
`;
export const AnimatedContainer = styled("div")`
  -webkit-animation: MoveUpDown 1.5s infinite  alternate;
  animation: MoveUpDown 1.5s infinite  alternate;

  position: absolute;
  left: 50%;
  right: 50%;
  bottom: 15px;
  }
  @-webkit-keyframes MoveUpDown {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
  }
  @keyframes MoveUpDown {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

export const SecondContentContainer = styled("div")<{ top: string }>`
  position: relative;
  top: 0;
  @media screen and (min-width: 992px) {
    ${(props) => props.top && "top: " + props.top + ";"}
  }
`;

export const ContentWrapper = styled("div")<{
  fullwidth?: boolean;
  fullHeight?: boolean;
}>`
  max-width: ${(props) => (props.fullwidth ? "100%" : "570px")};
  max-height: ${(props) => (props.fullHeight ? "100%" : "570px")};

  @media only screen and (max-width: 768px) {
    padding: 4em;
  }
`;
