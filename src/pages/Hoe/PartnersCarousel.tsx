import PartnerCard from "./PartnerCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export type Partner = {
  title: string;
  backgroundsvg: string;
  backgroundcolor: string;
  textcolor?: string;
};
const PartnersCarousel = (props: { partners: Array<Partner> }) => {
  return (
    <Carousel
      infinite
      responsive={responsive}
      autoPlay
      centerMode
      renderDotsOutside
      autoPlaySpeed={5000}
      arrows
      itemClass={"p-3"}
    >
      {props.partners.map((partner, index) => (
        <PartnerCard key={index} partner={partner} />
      ))}
    </Carousel>
  );
};

export default PartnersCarousel;
