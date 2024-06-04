import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [open, setVisibility] = useState(false);
  const location = useLocation();
  let colors = {
    textcolor: "#FF0000",
    burgerColor: "#fff",
    backgroundcolor: "#f1cfe5",
    svg: "logowit.svg",
  };

  if (location.pathname === "/projecten") {
    colors = {
      backgroundcolor: "#fff",
      textcolor: "#1B3888",
      svg: "logoblauw.svg",
      burgerColor: "#1B3888",
    };
  }
  if (
    location.pathname === "/zienwejedan" ||
    location.pathname === "/organisatie"
  ) {
    colors = {
      backgroundcolor: "#5CC0E1",
      textcolor: "#1C3887",
      svg: "logoblauw.svg",
      burgerColor: "#fff",
    };
  }

  const showDrawer = () => {
    setVisibility(!open);
  };

  const onClose = () => {
    setVisibility(!open);
    window.fullpage_api.moveTo(1);
  };

  const MenuItem = () => {
    return (
      <>
        <CustomNavLinkSmall
          color={colors.textcolor}
          to="/"
          onClick={() => onClose()}
        >
          <Span color={colors.textcolor}>HOME</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          color={colors.textcolor}
          to="/ditzijnwij"
          onClick={() => onClose()}
        >
          <Span color={colors.textcolor}>DIT ZIJN WIJ</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          color={colors.textcolor}
          to="/zienwejedan"
          onClick={() => onClose()}
        >
          <Span color={colors.textcolor}>ZIEN WE JE DAN</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          color={colors.textcolor}
          to="/projecten"
          onClick={() => onClose()}
        >
          <Span color={colors.textcolor}>PROJECTEN</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          color={colors.textcolor}
          to="/hoe"
          onClick={() => onClose()}
        >
          <Span color={colors.textcolor}>HOE</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          color={colors.textcolor}
          to="/organisatie"
          onClick={() => onClose()}
        >
          <Span color={colors.textcolor}>ORGANISATIE</Span>
        </CustomNavLinkSmall>
      </>
    );
  };
  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon
              className={"d-none d-lg-block"}
              src={colors.svg}
              width="80px"
              height="80px"
            />
            <SvgIcon
              className={"d-lg-none d-block"}
              src={colors.svg}
              width="50px"
              height="50px"
            />
          </LogoContainer>
          <Burger color={colors.burgerColor} onClick={showDrawer}>
            <Outline color={colors.burgerColor} />
          </Burger>
        </Row>
        <Drawer
          styles={{ body: { backgroundColor: colors.backgroundcolor } }}
          closable={false}
          open={open}
          onClose={onClose}
        >
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label
              className={"d-flex align-items-center justify-content-between"}
              onClick={onClose}
            >
              <Col span={12}>
                <Menu color={colors.textcolor} className="mb-0">
                  MENU
                </Menu>
              </Col>
              <Col span={12}>
                <Outline color={colors.textcolor} />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
