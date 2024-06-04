import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  ${(p) =>
    p.backgroundcolor &&
    "background-color: " + p.backgroundcolor + "; height: 100%;"}

  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  ${(p) =>
    p.backgroundsvg &&
    "background-image: url(/img/svg/" +
      p.backgroundsvg +
      "); height: 100%; background-position: center; background-size: cover; background-attachment: scroll; background-repeat: no-repeat;"}
  // werkt mobile   ${(p) =>
    p.backgroundsvg &&
    "background-image: url(/img/svg/" +
      p.backgroundsvg +
      "); height: 100%; background-position: center; background-size: cover; background-attachment: scroll; background-repeat: no-repeat;"}
  @media only screen and (max-width: 768px) {
    ${(p) =>
      p.backgroundsvg &&
      "background-position: center; background-size: cover; background-attachment: fixed; background-repeat: repeat-y;"}
  }
`;
