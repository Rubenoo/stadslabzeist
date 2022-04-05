import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title?: string;
  content: any;
  button: string;
  t: any;
  id: string;
  backgroundColor?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const MiddleBlock = ({ title, content, button, t, id, fullWidth, fullHeight, backgroundColor }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection backgroundColor={backgroundColor}>
      <Slide triggerOnce delay={300} direction="up" style={{ width: "100%", height: "100%", }}>
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper fullHeight={fullHeight} fullWidth={fullWidth} style={{ width: "100%", height: "100%", }}>
            <Col lg={24} md={24} sm={24} xs={24}>
              {(title && <h6>{title}</h6>)}
              <Content>{content}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
