import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")<any>`
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 992px) {
    padding: 1rem 1rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")<any>`
  display: block;

  svg {
    ${(p) => p.color && "fill: " + p.color + ";"}
  }
`;

export const Menu = styled("h5")<any>`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  ${(p) => p.color && "color: " + p.color + ";"}
`;

export const CustomNavLinkSmall = styled(Link)`
  font-size: 1.2rem;
  ${(p) => p.color && "color: " + p.color + ";"}
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  font-family: Neue Haas Bold;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
  ${(p) => p.color && "color: " + p.color + ";"}
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${(p) => p.color && "color: " + p.color + ";"}

  &:hover,
  &:active,
  &:focus {
    filter: brightness(70%);
    text-underline-position: under;
    text-decoration: wavy underline;
  }
`;
