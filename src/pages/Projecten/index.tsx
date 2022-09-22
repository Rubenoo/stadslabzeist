import { Row, Col } from "antd";
import { lazy } from "react";
import Footer from "../../components/Footer";
import ProjectTable from "./ProjectTable";
import { H1P, ProjectContainer } from "./styles";


const ProjectenArray = [
  {
    title: "HART VOOR ZEIST", 
    titleColor: "#1B3888",
    introText: "Het Stadslab vraagt met deze campagne aan Zeist om mee te denken welke persoon of organisatie het door Corona heel erg moeilijk heeft. Je kunt meedoen door een naam van een persoon of organisatie via onze site te nomineren.",
    mainText: "Het Stadslab vraagt met deze campagne aan Zeist om mee te denken welke persoon of organisatie het door Corona heel erg moeilijk heeft. Je kunt meedoen door een naam van een persoon of organisatie via onze site te nomineren. Het project is te volgen via deze site, ons instagram account en de social media kanalen onze partners: Gemeente Zeist, Idea Zeist, Kunstenhuis De Bilt- Zeist, Cultuur in Zeist, Leuk in Zeist, Zeist in Beeld, Fonkel, Blik & Burgers en Pandarve. Op 28 januari hebben twee genomineerden een hart gekregen uit handen van wethouder Marcel Fluitman: O’Mama’s en Slimani Gym uit Zeist! De uitreiking was te zien op RTV Utrecht en in Slotstad Actueel. Op 9 februari zijn de laatste 3 harten voor de campagne ‘Wie wil jij een hart onder de riem steken?’ uitgereikt door Daan Warnas van Slotstad RTV.",
    images: [
      {title: "hart", src: "img//projecten/hartvoorzeist/hart.png"},
      {title: "foto2", src: "img//projecten/hartvoorzeist/hart2.png"},
    ],
    color: "#F8D13E",
  },
  {
    title: "#VERGEET ME NIET", 
    titleColor: "#fff",
    introText: "Het Stadslab vraagt met deze campagne aan Zeist om mee te denken welke persoon of organisatie het door Corona heel erg moeilijk heeft. Je kunt meedoen door een naam van een persoon of organisatie via onze site te nomineren.",
    mainText: "Het Stadslab vraagt met deze campagne aan Zeist om mee te denken welke persoon of organisatie het door Corona heel erg moeilijk heeft. Je kunt meedoen door een naam van een persoon of organisatie via onze site te nomineren. Het project is te volgen via deze site, ons instagram account en de social media kanalen onze partners: Gemeente Zeist, Idea Zeist, Kunstenhuis De Bilt- Zeist, Cultuur in Zeist, Leuk in Zeist, Zeist in Beeld, Fonkel, Blik & Burgers en Pandarve. Op 28 januari hebben twee genomineerden een hart gekregen uit handen van wethouder Marcel Fluitman: O’Mama’s en Slimani Gym uit Zeist! De uitreiking was te zien op RTV Utrecht en in Slotstad Actueel. Op 9 februari zijn de laatste 3 harten voor de campagne ‘Wie wil jij een hart onder de riem steken?’ uitgereikt door Daan Warnas van Slotstad RTV.",
    images: [
      {title: "hart", src: "img//projecten/hartvoorzeist/hart.png"},
      {title: "foto2", src: "img//projecten/hartvoorzeist/hart2.png"},
      ],
    color: "#1B3888",

  },
];

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
            <ProjectTable ProjectenArray={ProjectenArray}/>
          </Col>
        </Row>     
      </ProjectContainer>
      <Footer show/>
    </Container>
  );
};

export default Projecten;
