import { lazy } from "react";
import { P, A } from "./styles";
import { SecondContentContainer } from "../../components/MiddleBlock/styles";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));

interface PersonContainerProps {
  type: string;
  img: string;
  name: string;
  email: string;
  info: string;
  backgroundSVG: string;
  textColor?: string;
}

const PersonContainer = ({
  type,
  img,
  name,
  email,
  info,
  backgroundSVG,
  textColor,
}: PersonContainerProps) => {
  return (
    <ContentBlock
      type={type}
      title={""}
      content={
        <img
          loading="eager"
          src={img}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          alt={name}
        ></img>
      }
      secondContent={
        <SecondContentContainer
          top={"0"}
          className="h-100 d-flex flex-column align-items-start"
        >
          <A
            textColor={textColor}
            className="w-100"
            target="_blank"
            href={"mailto: " + email}
          >
            {name}
          </A>
          <P textColor={textColor}>{info}</P>
        </SecondContentContainer>
      }
      icon="product-launch.svg"
      id="samen"
      backgroundColor=""
      backgroundSVG={backgroundSVG}
      fadeRight={type === "right"}
      person={true}
    />
  );
};

export default PersonContainer;
