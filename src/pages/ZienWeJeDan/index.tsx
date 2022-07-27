import { lazy } from "react";
import Contact from "../../components/ContactForm";
import Footer from "../../components/Footer";


const Container = lazy(() => import("../../common/Container"));

const ZienWeJeDan = () => {

  return (
      <Container backgroundSVG={"Website-Achtergrond-blauw-contact.svg"}>
        <Contact 
          title={"ZIEN WE JE DAN?"} 
          content={
          "Bij het Stadslab is iedereen welkom!\nHeb je een vraag? Een idee?\nOf kom je bij ons op de koffie?"} 
          id={"zienwejedan"}
          />
        <Footer absolute={true} show={true}/>
      </Container>
  );
};

export default ZienWeJeDan;
