import {lazy} from "react";
import {H, P} from "./styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Toolbox = () => {
    return (
        <ContentBlock
            type="right"
            title={""}
            content={
                <>
                    <H>ONZE</H>
                    <H>TOOLBOX</H>
                </>
            }
            secondContent={
                <P className="scrollable">
                    Wij zijn een beweging van stadmakers. Een stadmaker is iemand die zich inzet om de stad nóg mooier
                    te maken. En een stadmaker doet dat op geheel eigen wijze. Zo ontstaat creativiteit,
                    nieuwsgierigheid en ruimte voor het experiment. Als je met ons een project doet krijg je
                    dit:<br/><br/>

                    Alles wat we doen is duurzaam<br/>
                    Alles doen we vanuit verbinding<br/>
                    Wij maken onze projecten inclusief & toegankelijk<br/>
                    We zetten altijd onze creativiteit in<br/>
                    Wij maken zichtbaar<br/>
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
