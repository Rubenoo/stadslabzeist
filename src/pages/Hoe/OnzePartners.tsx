import {lazy} from "react";
import {H} from "./styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const OnzePartners = () => {
    return (
        <ContentBlock
            type="right"
            title={""}
            content={
                <H>ONZE<br/>PARTNERS</H>
            }
            secondContent={
                <></>
            }
            icon="Website-Achtergrond-blauw.svg"
            id="idee"
            backgroundSVG="Website-Achtergrond-roze-wit.svg"
            fadeRight={false}
        />
    );
};

export default OnzePartners;
