import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title?: string;
  content: any;
  button: string;
  id: string;
  backgroundColor?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  fullBackground?: boolean;
  backgroundSVG?: string;
}

const MiddleBlock = ({
  title,
  content,
  button,
  id,
  fullWidth,
  fullHeight,
  backgroundColor,
  fullBackground,
  backgroundSVG,
}: MiddleBlockProps) => {
  return (
    <MiddleBlockSection
      fullBackground={fullBackground}
      backgroundSVG={backgroundSVG}
      backgroundColor={backgroundColor}
    >
      <Slide
        triggerOnce
        delay={300}
        direction="up"
        className={fullBackground ? "h-100 w-100" : "d-flex align-items-center"}
      >
        <Row justify="center" align="middle" id={id}>
          <ContentWrapper
            fullHeight={fullHeight}
            fullWidth={fullWidth}
            style={{ width: "100%", height: "100%" }}
          >
            <Col lg={24} md={24} sm={24} xs={24}>
              {title && <h6>{title}</h6>}
              <Content>{content}</Content>
              {button && <Button name="submit">{button}</Button>}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
