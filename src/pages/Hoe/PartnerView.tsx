import { Col, Row } from "antd";
import PartnerCard from "./PartnerCard";

export type Partner = {
  title: string;
  backgroundsvg: string;
  backgroundcolor: string;
  textcolor?: string;
};
const PartnersView = (props: { partners: Array<Partner> }) => {
  return (
    <Row style={{ padding: "0 5em 0 5em" }} gutter={12}>
      {props.partners?.map((partner, index) => (
        <Col lg={8} sm={12}>
          <PartnerCard key={index} partner={partner} />
        </Col>
      ))}
    </Row>
  );
};

export default PartnersView;
