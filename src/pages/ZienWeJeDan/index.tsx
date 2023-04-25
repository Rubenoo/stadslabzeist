import { lazy, useEffect } from "react";
import Contact from "../../components/ContactForm";
import Footer from "../../components/Footer";

const Container = lazy(() => import("../../common/Container"));

const ZienWeJeDan = () => {
  useEffect(() => {
    if (window.fullpage_api) {
      window.fullpage_api.destroy();
    }
  });
  return (
    <div className="section overflow-auto">
      <Container backgroundSVG={"Website-Achtergrond-blauw-contact.svg"}>
        <Contact
          title={"ZIN OM MEE TE DOEN?"}
          content={
            "Wij zijn altijd op zoek naar nieuwe stadmakers en creatieve geesten om ons netwerk te vergroten en ons team aan te vullen. Lijkt dat je leuk? Laten we elkaar ontmoeten!\nDan gaan we een keer koffiedrinken of een wandeling door Zeist maken met onze Ollie."
          }
          id={"zienwejedan"}
        />
        <Footer show={true} relative={true} />
      </Container>
    </div>
  );
};

export default ZienWeJeDan;
