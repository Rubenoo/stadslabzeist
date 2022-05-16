import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
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

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  display: block;

  svg {
    fill: #fff;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #FF0000;
`;

export const CustomNavLinkSmall = styled(Link)`
  font-size: 1.2rem;
  color: #FF0000;
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
  color: #FF0000;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #DC143C;
    text-underline-position: under;
    text-decoration: #DC143C wavy underline;
  }
`;
