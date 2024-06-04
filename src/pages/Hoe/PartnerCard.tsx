import { Partner } from "./PartnersCarousel";
import { Card, H3 } from "./styles";

const PartnerCard = (props: { partner: Partner }) => {
  return (
    <Card
      backgroundsvg={props.partner.backgroundsvg}
      backgroundcolor={props.partner.backgroundcolor}
    >
      <H3 textcolor={props.partner.backgroundcolor}>{props.partner.title}</H3>
    </Card>
  );
};

export default PartnerCard;
