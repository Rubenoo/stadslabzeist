import {Carousel} from 'antd'
import React from 'react'
import PartnerCard from "./PartnerCard";

export type Partner = {
    title: string;
    backgroundSVG: string;
    backgroundColor: string;
    textColor?: string;
}
const PartnersCarousel = (props: { partners: Array<Partner> }) => {

    return (
        <Carousel style={{padding: '0em 3em 0 3em', height: "100%"}}>
            {props.partners?.map((partner, index) =>
              <PartnerCard key={index} partner={partner}/>
            )}
        </Carousel>
    )
}

export default PartnersCarousel