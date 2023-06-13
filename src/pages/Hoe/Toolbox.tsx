import { lazy } from "react";
import { H, P } from "./styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Toolbox = () => {
  return (
    <ContentBlock
      type="right"
      title={""}
      person
      content={
        <H>
          ONZE
          <br />
          TOOLBOX
        </H>
      }
      secondContent={
        <P className="scrollable">
          <strong>CO-CREATIE </strong>
          Alles doen we vanuit verbinding, samen met anderen. Vanuit de behoefte
          en wens die er is.
          <br />
          <br />
          <strong>EXPERIMENT </strong>
          We leren dus door samen te experimenteren. Soms moet je eerst iets
          proberen, voordat je weet dat het eigenlijk anders moet.
          <br />
          <br />
          <strong>BROEDPLAATS </strong>
          Wij zijn een broedplaats en daarom op zoek naar plek voor makers. Want
          zet een groep creatieven op 1 plek en er gebeurt iets! Met de mensen
          onderling, de plek en de omgeving van de plek.
          <br />
          <br />
          <strong>ONTMOETING </strong>
          Wij doen nooit iets zelf, maar altijd samen. Zo krijg je draagvlak en
          leren we samen. Per project bekijken wij welke partners we kunnen
          betrekken. Partners die elkaar vaak nog niet kennen, maar na 1 keer
          samen iets gedaan te hebben, gebeurt dat vaker!
          <br />
          <br />
          <strong>SLAGKRACHT </strong>
          Met elkaar sta je sterker, met elkaar ben je creatiever, met elkaar
          ben je sneller, met elkaar kun je … alles!
          <br />
          <br />
          <strong>DUURZAAM </strong>
          Alles wat wij doen is goed voor mens en aarde. En wij proberen met wat
          wij doen impact te maken, waardoor er een blijvende verandering
          optreedt in mensen, systemen, oplossingen. Ook dat is duurzaam!
        </P>
      }
      icon="Website-Achtergrond-blauw-wit.svg"
      id="idee"
      backgroundColor="#5dc0e1"
      backgroundSVG="Website-Achtergrond-blauw-wit.svg"
      fadeRight={true}
    />
  );
};

export default Toolbox;
