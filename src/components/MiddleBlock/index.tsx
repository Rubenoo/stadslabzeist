import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title?: string;
  content: any;
  button: string;
  id: string;
  backgroundcolor?: string;
  fullwidth?: boolean;
  fullHeight?: boolean;
  fullBackground?: boolean;
  backgroundsvg?: string;
}

const MiddleBlock = ({
  title,
  content,
  button,
  id,
  fullwidth,
  fullHeight,
  backgroundcolor,
  fullBackground,
  backgroundsvg,
}: MiddleBlockProps) => {
  return (
    <MiddleBlockSection
      fullBackground={fullBackground}
      backgroundsvg={backgroundsvg}
      backgroundcolor={backgroundcolor}
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
            fullwidth={fullwidth}
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
