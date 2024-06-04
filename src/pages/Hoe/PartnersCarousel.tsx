import { Carousel } from "antd";
import PartnerCard from "./PartnerCard";

export type Partner = {
  title: string;
  backgroundsvg: string;
  backgroundcolor: string;
  textcolor?: string;
};
const PartnersCarousel = (props: { partners: Array<Partner> }) => {
  return (
    <Carousel style={{ padding: "0em 3em 0 3em", height: "100%" }} autoplay>
      {props.partners?.map((partner, index) => (
        <PartnerCard key={index} partner={partner} />
      ))}
    </Carousel>
  );
};

export default PartnersCarousel;
