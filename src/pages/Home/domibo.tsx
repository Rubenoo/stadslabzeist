import { lazy } from "react";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));

const DoMiBo = () => {
  return (
      <MiddleBlock
        title={""}
        content={<>
          <div className={"d-none d-lg-block text-start"}>
            <h1 style={{fontSize: "110px", color: "RGBA(240, 207,229,1)"}}>ZIEN WE JE </h1>
            <h1 style={{fontSize: "110px", color: "RGBA(240, 207,229,1)"}}>OP DE DOMIBO?</h1>
          </div>
          <div className={"d-lg-none d-block text-start"}>
            <h1 style={{fontSize: "55px", color: "RGBA(240, 207,229,1)"}}>ZIEN WE JE </h1>
            <h1 style={{fontSize: "55px", color: "RGBA(240, 207,229,1)"}}>OP DE</h1>
            <h1 style={{fontSize: "55px", color: "RGBA(240, 207,229,1)"}}>DOMIBO?</h1>
          </div>
        </>}
        id="domibo"
        backgroundSVG="Website-Achtergrond-rood.svg"
        fullWidth={true}
        fullHeight={true}
        button={''}
      />
  );
};

export default DoMiBo;
