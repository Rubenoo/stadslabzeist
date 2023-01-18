import {lazy} from "react";
import {H, P} from "./styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const HoeDoenWijDat = () => {
    return (
        <ContentBlock
            type="right"
            title={""}
            content={
                <>
                    <H>HOE DOEN</H>
                    <H>WIJ DAT</H>
                </>
            }
            secondContent={
                <P>
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
            backgroundSVG="Website-Achtergrond-geel-wit.svg"
            icon="Website-Achtergrond-geel-wit.svg"
            id="idee"
            fadeRight={true}
            backgroundColor="#F8D13E"
        />
    );
};

export default HoeDoenWijDat;
