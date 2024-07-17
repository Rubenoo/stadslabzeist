import { useEffect } from "react";
import Footer from "../../components/Footer";
import { Col, Row } from "antd";

const Organisatie = () => {
  useEffect(() => {
    if (window.fullpage_api) {
      window.fullpage_api.destroy();
    }
  });
  return (
    <>
      <div className="organisatie">
        <Row gutter={{ lg: 124, sm: 0 }}>
          <Col lg={14}>
            <h1>ORGANISATIE</h1>
            <p>
              In mei 2023 is Stadslab Zeist een stichting geworden. De
              dagelijkse leiding van Stichting Stadslab Zeist wordt uitgevoerd
              door directeur Merel de Jong. We zijn momenteel bezig met de
              procedure om een ANBI (Algemeen Nut Beogende Instelling) te
              worden.
            </p>
          </Col>
          <Col lg={8}>
            <p>
              <b>RSIN</b>
              <br />
              865301773
            </p>

            <p>
              <b>Jaarverslag 2023</b>
              <br />
              <a
                href={"/documenten/Jaarverslag-2023-Stadslab-Zeist.pdf"}
                className={"text-decoration-underline"}
                download
              >
                Bekijk het jaarverslag
              </a>
            </p>

            <p>
              <b>Beleidsplan 2024-2026</b>
              <br />
              <a
                href={"/documenten/Beleidsplan-Stadslab-Zeist.pdf"}
                className={"text-decoration-underline"}
                download
              >
                Bekijk het beleidsplan
              </a>
            </p>
            <p>
              <b>Bestuur</b>
              <br />
              Ons bestuur bestaat uit:
              <br />
              Yno Hoekstra (voorzitter)
              <br />
              Merel Schrijvers (penningmeester)
              <br />
              Ebs Koek (secretaris)
            </p>

            <p>
              <b>Ons team</b> <br />
              Merel de Jong
              <br />
              Marloes van Haaren
              <br />
              Emma Fijma
              <br />
              Marloes Klok
              <br />
              Xander Lenders
            </p>
          </Col>
        </Row>
      </div>
      <Footer show />
    </>
  );
};

export default Organisatie;
