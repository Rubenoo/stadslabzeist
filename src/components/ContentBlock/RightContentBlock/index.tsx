import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  secondContent,
  t,
  id,
  backgroundColor,
  backgroundSVG,
  fadeRight,
  titleSize,
  person,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <RightBlockContainer backgroundSVG={backgroundSVG} backgroundColor={backgroundColor}>
      <Fade className="w-100" direction={fadeRight ? "right" : "left"}>
        <Row justify={person ? "space-around": "space-between"} align="middle" id={id}>
          <Col className={person ? "d-flex align-items-center justify-content-center" : ""} lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
                <h6 style={titleSize ? {fontSize: titleSize}: {}}>{t(title)}</h6>
              <Content >{content}</Content>              
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            {secondContent ? secondContent : <SvgIcon src={icon} width="100%" height="100%" />}
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
