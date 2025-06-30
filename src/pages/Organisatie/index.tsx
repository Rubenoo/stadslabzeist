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
              Op 1 oktober 2020 startte Stadslab Zeist onder penvoerderschap van
              Kunstenhuis Idea. Op 2 juni 2023 is Stadslab Zeist een stichting
              geworden. De dagelijkse leiding van Stichting Stadslab Zeist wordt
              uitgevoerd door directeur Merel de Jong. Per 1 januari 2025 is
              Stichting Stadslab Zeist officieel een stichting met ANBI-status
              (Algemeen Nut Beogende Instelling).
            </p>
            <Row justify={"space-between"} className="flex-column flex-lg-row">
              <Col>
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
              </Col>
              <Col>
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
          </Col>
          <Col lg={8}>
            <p>
              <b>RSIN</b>
              <br />
              865301773
            </p>
            <p>
              <a
                href={"/documenten/Beleidsplan-Stadslab-Zeist.pdf"}
                className={"text-decoration-underline"}
                download
              >
                Beleidsplan 2024-2026
              </a>
            </p>

            <p>
              <a
                href={"/documenten/Jaarverslag-2023-Stadslab-Zeist.pdf"}
                className={"text-decoration-underline"}
                download
              >
                Jaarverslag 2023
              </a>
            </p>
            <p>
              <a
                href={"/documenten/Jaarverslag-2024-Stadslab-Zeist.pdf"}
                className={"text-decoration-underline"}
                download
              >
                Jaarverslag 2024
              </a>
            </p>
            <p>
              <a
                href={"/documenten/Stadslab-Zeist-Jaarrekening-2023.pdf"}
                className={"text-decoration-underline"}
                download
              >
                Jaarrekening 2023
              </a>
            </p>
            <p>
              <a
                href={"/documenten/Stadslab-Zeist-Jaarrekening-2024.pdf"}
                className={"text-decoration-underline"}
                download
              >
                Jaarrekening 2024
              </a>
            </p>
          </Col>
        </Row>
      </div>
      <Footer show />
    </>
  );
};

export default Organisatie;
