import React from 'react'
import {Partner} from "./PartnersCarousel";
import {Card, H3} from "./styles";

const PartnerCard = (props: { partner: Partner }) => {

    return (
        <Card backgroundSVG={props.partner.backgroundSVG} backgroundColor={props.partner.backgroundColor}>
            <H3 textColor={props.partner.backgroundColor}>{props.partner.title}</H3>
        </Card>
    )
}

export default PartnerCard