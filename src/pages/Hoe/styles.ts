import styled from "styled-components";

export const P = styled("p")`
  font-size: 18px;
  white-space: pre-wrap;
  font-family: Neue Haas Medium;
  color: #1b3888;
  max-height: 350px;
  overflow-y: scroll;
  @media screen and (min-width: 992px) {
    font-size: 20px;
    padding-right: 15px;
    max-height: 100%;
    overflow-y: hidden;
  }
`;

export const H = styled("h1")`
  font-size: 58px;
  white-space: nowrap;
  color: #1b3888;
  text-align: center;
  @media screen and (min-width: 992px) {
    font-size: 100px;
    text-align: start;
  }
`;
export const HPartner = styled("h1")`
  font-size: 58px;
  white-space: nowrap;
  color: #1b3888;
  text-align: center;
  padding-block: 1em;
  @media screen and (min-width: 992px) {
    font-size: 100px;
    text-align: center;
  }
`;

export const Card = styled("div")<{
  backgroundsvg?: string;
  backgroundcolor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em;
  aspect-ratio: 1/1;

  ${(props) =>
    props.backgroundcolor &&
    "box-shadow: " + props.backgroundcolor + " 0px 5px 15px;"}

  ${(props) =>
    props.backgroundcolor && "border: 1px " + props.backgroundcolor + ";"}

  ${(props) =>
    props.backgroundsvg &&
    "background-image: url(/img/svg/" +
      props.backgroundsvg +
      "); background-size: cover;"}
`;

export const H3 = styled("h3")<{ textcolor?: string }>`
  font-size: 24px;
  text-align: center;
  ${(props) =>
    props.textcolor ? "color: " + props.textcolor + ";" : "color: #E4E4E4;"}
  @media screen and (min-width: 992px) {
    font-size: 35px;
  }
`;

export const PartnerContainer = styled("section")`
  background-image: url(/img/svg/Website-Achtergrond-roze-wit.svg);
  background-size: cover;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
