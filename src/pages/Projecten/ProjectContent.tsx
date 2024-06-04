import { Carousel, Col, Row } from "antd";
import { Project } from "../../common/types";
import { PI, PM, ProjectLink } from "./styles";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ProjectContent = (props: { project: Project }) => {
  const links = props.project.links?.map((link, index) => (
    <ProjectLink
      key={index}
      target="_blank"
      href={link.src}
      textcolor={props.project.titleColor}
    >
      {link.text}
    </ProjectLink>
  ));
  // @ts-ignore
  return (
    <div>
      <Carousel
        style={{ marginBottom: "1em" }}
        autoplay
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        {props.project.images?.map((image, index) => (
          <div
            className={"d-flex justify-content-center align-items-center"}
            key={index}
          >
            <img
              loading="lazy"
              style={{ maxHeight: "350px", maxWidth: "100%" }}
              src={"/" + image.src}
              alt={image.title}
            />
          </div>
        ))}
      </Carousel>
      <Row>
        <Col flex={""} span={24} lg={12}>
          <div className={"d-flex flex-column justify-content-between h-100"}>
            <PI style={{ color: props.project.titleColor }}>
              {props.project.introText}
            </PI>
            <div className="d-none d-lg-flex flex-column align-items-start">
              {props.project.logo && (
                <img
                  loading="lazy"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "90%",
                    marginBlock: "1rem",
                  }}
                  src={"/" + props.project.logo}
                  alt={"logo"}
                />
              )}
              {props.project.logoText && (
                <PM style={{ color: props.project.titleColor }}>
                  {props.project.logoText}
                </PM>
              )}
              {links}
            </div>
          </div>
        </Col>
        <Col span={24} lg={12}>
          <PM style={{ color: props.project.titleColor }}>
            {props.project.mainText}
          </PM>
          <div className="d-lg-none d-flex flex-column">{links}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectContent;
