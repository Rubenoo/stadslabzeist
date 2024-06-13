import { HPartner, PartnerContainer } from "./styles";
import partners from "../../content/Partners.json";
import PartnersCarousel from "./PartnersCarousel.tsx";

const OnzePartners = () => {
  return (
    <PartnerContainer>
      <HPartner>ONZE PARTNERS</HPartner>
      <PartnersCarousel partners={partners} />
    </PartnerContainer>
  );
};

export default OnzePartners;
