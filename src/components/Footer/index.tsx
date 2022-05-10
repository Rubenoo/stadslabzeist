import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import {  
  Extra,
  FooterContainer,
  FooterLink,  
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ show }: any) => {

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
        className={"pe-3"}
      >
        <SvgIcon src={src} width="50px" height="50px" />
      </a>
    );
  };

  return (
    <>
      <Extra show={show}>
        <Container border={true} >
          <div className="d-flex flex-row justify-content-between align-items-center py-2">
            <div className="w-100"/>
            <div className="w-100 text-nowrap text-center d-lg-flex flex-column align-items-center justify-content-center d-none">
              <div className={"d-none d-lg-block"}>
                <div>
                  <FooterLink className="w-100" style={{fontSize: "19px"}} target="_blank" href="http://maps.google.nl/?q=EMMAPLEIN 206, 3701 DH ZEIST">EMMAPLEIN 206, 3701 DH ZEIST</FooterLink>
                </div>
                <div>
                  <FooterLink className="w-100" style={{fontSize: "19px"}} target="_blank" href="mailto: WIJZIJN@STADSLABZEIST.NL">WIJZIJN@STADSLABZEIST.NL</FooterLink>
                </div>
              </div>
              
            </div>
            <FooterContainer className="w-100" >
              <SocialLink
                href="https://www.instagram.com/stadslabzeist/"
                src="instagram.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/company/stadslab-zeist/"
                src="linkedin.svg"
              />
            </FooterContainer>            
          </div>
          <div className={"d-lg-none d-block text-center pb-2"}>
                <div>
                  <FooterLink style={{fontSize: "13px"}} className="w-100" target="_blank" href="http://maps.google.nl/?q=EMMAPLEIN 206, 3701 DH ZEIST">EMMAPLEIN 206, 3701 DH ZEIST</FooterLink>
                </div>
                <div>
                  <FooterLink style={{fontSize: "13px"}} className="w-100" target="_blank" href="mailto: WIJZIJN@STADSLABZEIST.NL">WIJZIJN@STADSLABZEIST.NL</FooterLink>
                </div>
              </div>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
