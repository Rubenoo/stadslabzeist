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
  const [visible, setVisibility] = useState(false);
  const location                 = useLocation();
  var colors                     = {textColor: "#FF0000", burgerColor: '#fff' , backgroundColor: "#f1cfe5", svg: "logowit.svg"}
  
  if(location.pathname === "/projecten"){
    colors ={backgroundColor: "#fff", textColor: "#1B3888", svg: "logoblauw.svg", burgerColor: "#1B3888"};
  }
  if(location.pathname === "/zienwejedan"){
    colors ={backgroundColor: "#5CC0E1", textColor: "#1C3887", svg: "logoblauw.svg", burgerColor: "#fff"};
  }

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
    window.fullpage_api.moveTo(1);
  };

  const MenuItem = () => {

    return (
      <>
        <CustomNavLinkSmall color={colors.textColor} to="/" onClick={() => onClose()}>
          <Span color={colors.textColor}>HOME</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall color={colors.textColor} to="/ditzijnwij" onClick={() => onClose()}>
          <Span color={colors.textColor}>DIT ZIJN WIJ</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall color={colors.textColor} to="/zienwejedan" onClick={() => onClose()}>
          <Span color={colors.textColor}>ZIEN WE JE DAN</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall color={colors.textColor} to="/projecten" onClick={() => onClose()}>
          <Span color={colors.textColor}>PROJECTEN</Span>
        </CustomNavLinkSmall>
      </>
    );
  };
  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon className={"d-none d-lg-block"} src={colors.svg} width="80px" height="80px" />
            <SvgIcon className={"d-lg-none d-block"} src={colors.svg} width="50px" height="50px" />
          </LogoContainer>
          <Burger color={colors.burgerColor} onClick={showDrawer}>
            <Outline color={colors.burgerColor}/>
          </Burger>
        </Row>
        <Drawer bodyStyle={{backgroundColor: colors.backgroundColor}} closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label className={"d-flex align-items-center justify-content-between"} onClick={onClose}>
              <Col  span={12}>
                <Menu color={colors.textColor} className="mb-0">Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline color={colors.textColor}/>
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
