import { lazy, useEffect } from "react";
import Contact from "../../components/ContactForm";
import Footer from "../../components/Footer";


const Container = lazy(() => import("../../common/Container"));

const ZienWeJeDan = () => {
  
  useEffect(() => {
    if(window.fullpage_api){
      window.fullpage_api.destroy();
    }
  });
  return (
    <div className="section h-100 overflow-auto" >
      <Container backgroundSVG={"Website-Achtergrond-blauw-contact.svg"}>
        <Contact 
          title={"ZIEN WE JE DAN?"} 
          content={
          "Bij het Stadslab is iedereen welkom!\nHeb je een vraag? Een idee?\nOf kom je bij ons op de koffie?"} 
          id={"zienwejedan"}
          />
        <Footer show={true}/>
      </Container>
    </div>
  );
};

export default ZienWeJeDan;
