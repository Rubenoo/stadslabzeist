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

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {

    return (
      <>
        <CustomNavLinkSmall to="/" onClick={() => onClose()}>
          <Span>HOME</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall to="/ditzijnwij" onClick={() => onClose()}>
          <Span>DIT ZIJN WIJ</Span>
        </CustomNavLinkSmall>
      </>
    );
  };
  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon className={"d-none d-lg-block"} src="logowit.svg" width="80px" height="80px" />
            <SvgIcon className={"d-lg-none d-block"} src="logowit.svg" width="50px" height="50px" />
          </LogoContainer>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label className={"d-flex align-items-center justify-content-between"} onClick={onClose}>
              <Col  span={12}>
                <Menu className="mb-0">Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
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
