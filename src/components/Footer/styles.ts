import styled from "styled-components";

export const FooterLink = styled("a")`
  font-family: "Neue Haas Bold";
`;
export const Extra = styled("section")<any>`
  background: #E4E4E4;
  margin-right: auto;
  margin-left: auto;
  position: fixed;
  font-family: "Neue Haas Bold"!important;
  z-index: 10;
  width: 100%;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  opacity: ${(p) => (p.show ? "1" : "0")};
`;


export const FooterContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: end;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;
