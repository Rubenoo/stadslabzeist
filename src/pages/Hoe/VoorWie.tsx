import {lazy} from "react";
import {H, P} from "./styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const VoorWie = () => {
    return (
        <ContentBlock
            type="right"
            title={""}
            content={
                <H>VOOR<br/>WIE?</H>
            }
            secondContent={
                <P className="scrollable">
                    <strong>Inwoners</strong> kunnen bij ons terecht met al hun ideeën. Wij hebben het netwerk om je
                    verder te helpen, maar we weten ook hoe je jouw idee kunt financieren.<br/><br/>

                    <strong>Maatschappelijke/sociale/culturele organisaties</strong> kunnen bij ons terecht met vragen
                    over community building en hoe je nu ècht boven tafel krijgt wat er speelt.<br/><br/>

                    <strong>Bedrijven</strong> kunnen bij ons terecht als zij meer willen doen met Maatschappelijk
                    Verantwoord Ondernemen, duurzaam ondernemen en Social Return.<br/><br/>

                    <strong>Kennisinstellingen</strong> kunnen bij ons terecht voor innovatieve onderwijsconcepten, om
                    bepaalde data boven water te krijgen in ons ‘living lab gemeente Zeist’, om samen te werken aan
                    grote maatschappelijke thema’s en vraagstukken.<br/><br/>

                    <strong>Overheidsinstellingen</strong> kunnen bij ons terecht om voorbij de ‘usual suspects’ te
                    komen. De groepen die de weg naar de gemeente goed kennen. De grootste groep inwoners die je niet
                    kent en hoort, die wil je leren kennen! Dat is pas echt democratisch.
                </P>
            }
            icon="Website-Achtergrond-blauw.svg"
            id="idee"
            backgroundColor="#F0CFE5"
            backgroundSVG="Website-Achtergrond-roze-wit.svg"
            fadeRight={false}
        />
    );
};

export default VoorWie;
