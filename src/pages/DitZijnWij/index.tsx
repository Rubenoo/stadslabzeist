import {lazy, useState} from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from "../../components/Footer";
import DoeJeMee from "./doejemee";
import DitZijnWijBlock from "./ditzijnwij";
import PersonContainer from "./PersonContainer";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const DitZijnWij = () => {
    const [fullpageIndex, setFullpageIndex] = useState(0);
    return (
        <Container>
            <ScrollToTop show={fullpageIndex > 0}/>
            <ReactFullpage
                licenseKey={process.env.REACT_APP_FULLPAGE_KEY}
                scrollingSpeed={1000}
                scrollOverflow={false}
                onLeave={(origin, destination) => {
                            setFullpageIndex(destination.index);
                        }}
                credits={{enabled: false}}
                render={() => {
                    return (
                        <div id="fullpage-wrapper">
                            <div className="section vh-100">
                                <DitZijnWijBlock/>
                            </div>
                            <div className="section vh-100">
                                <PersonContainer
                                    type="left"
                                    img="/img/merel_portret.jpg"
                                    name="Merel de Jong"
                                    email="merel@stadslabzeist.nl"
                                    backgroundSVG="Website-Achtergrond-merel-blauw.svg"
                                    info={"Zakelijk leider\n\nMatchmaker / strateeg / social designer \nSuper goed in plannetjes maken, kansen zien, mensen enthousiasmeren, praten en van niets iets maken."}
                                />
                            </div>
                            <div className="section vh-100">
                                <PersonContainer
                                    type="right"
                                    img="/img/marloes_portret.jpg"
                                    name="Marloes van Haaren"
                                    backgroundSVG="Website-Achtergrond-marloes-roze.svg"
                                    email="marloes@stadslabzeist.nl"
                                    info={"Projectmanager\n\nCoach / maker / structuurdokter \nSuper goed in de juiste vragen stellen, rust creëren, bergen werk verzetten, plannen en creatief zijn."}
                                />
                            </div>
                            <div className="section vh-100">
                                <PersonContainer
                                    type="left"
                                    img="/img/emma_portret.jpg"
                                    name="Emma Fijma"
                                    email="emma@stadslabzeist.nl"
                                    backgroundSVG="Website-Achtergrond-emma-blauw.svg"
                                    info={"Creatief leider\n\nKunstenaar / Grafisch ontwerper / maker \nSuper goed in creatieve denkprocessen, creatieve vertaling van projecten en opdrachten en structuur aanbrengen."}
                                    textColor="#F0CFE5"
                                />
                            </div>
                            <div className="section vh-100">
                                <PersonContainer
                                    type="right"
                                    img="/img/marjolein_portret.jpg"
                                    name="Marjolein Brandenburg"
                                    email="marjolein@stadslabzeist.nl"
                                    backgroundSVG="Website-Achtergrond-merel-blauw.svg"
                                    info={"Projectmanager\n\nDuizendpoot / sporty spice / rust brenger \nSuper goed in overzicht creëren, keihard werken, mensen verbinden en oplossingen bedenken."}
                                    textColor="#1B3888"
                                />
                            </div>
                            <div className="section vh-100">
                                <PersonContainer
                                    type="left"
                                    img="/img/ollie_portret.jpg"
                                    name="Ollie"
                                    backgroundSVG="Website-Achtergrond-marloes-roze.svg"
                                    email="emma@stadslabzeist.nl"
                                    info={"Kantoorhond\n\nKnuffelkont / grappenmaker \nSuper goed in slapen, spelen, puberen, wandelen en lief zijn."}
                                />
                            </div>
                            <div className="section vh-100">
                                <DoeJeMee/>
                                <Footer show={fullpageIndex === 6}/>
                            </div>
                        </div>
                    );
                }}
            />
        </Container>
    );
};

export default DitZijnWij;
