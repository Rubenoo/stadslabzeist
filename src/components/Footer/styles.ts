import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;
export const FooterLink = styled("a")`
  font-family: "Neue Haas Bold";
`;
export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
   transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const Extra = styled("section")<any>`
  background: rgb(241, 242, 243);
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

export const LogoContainer = styled("div")`
  display: flex;
  align-items: center;
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

export const Label = styled("label")`
  font-size: 22px;
  text-transform: capitalize;
  color: #18216d;
  display: block;
  margin-bottom: 2rem;
  font-family: "Neue Haas Bold";

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;
