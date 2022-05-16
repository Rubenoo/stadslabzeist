import { Row, Col } from "antd";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../../common/Button";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  button,
  secondContent,
  t,
  id,
  backgroundColor,
  backgroundSVG,
  titleSize,
  fadeRight,
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
    <LeftContentSection backgroundSVG={backgroundSVG} backgroundColor={backgroundColor}>
      <Fade className="w-100" direction={fadeRight ? "right" : "left"}>
        <Row justify={person ? "space-around": "space-between"} align="middle" id={id}>
          <Col lg={{span: 11, order: 0}} md={{span: 11, order: 0}} sm={{span: 12, order: 0}} xs={{span: 24, order: 1}}>
            {secondContent ? secondContent : <SvgIcon src={icon} width="100%" height="100%" />}
          </Col>
          <Col className={person ? "d-flex align-items-center justify-content-center" : ""} lg={{span: 11, order: 1}} md={{span: 11, order: 1}} sm={{span: 11, order: 1}} xs={{span: 24, order: 0}}>
            <ContentWrapper>
                <h6 style={titleSize ? {fontSize: titleSize}: {}}>{title}</h6>
              <Content>{content}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        backgroundColor={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default LeftContentBlock;
