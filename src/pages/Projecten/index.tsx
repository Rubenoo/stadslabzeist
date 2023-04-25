import { Row, Col } from "antd";
import { lazy } from "react";
import ProjectTable from "./ProjectTable";
import { H1P, ProjectContainer } from "./styles";
import ProjectenArray from "../../content/Projecten.json";
import Footer from "../../components/Footer";

const Container = lazy(() => import("../../common/Container"));

const Projecten = () => {
  return (
    <Container backgroundColor="#E4E4E4">
      <ProjectContainer>
        <Row>
          <Col span={24} lg={8}>
            <H1P>PROJECTEN</H1P>
          </Col>
          <Col span={24} lg={16}>
            <ProjectTable ProjectenArray={ProjectenArray} />
          </Col>
        </Row>
      </ProjectContainer>
      <Footer show relative />
    </Container>
  );
};

export default Projecten;
