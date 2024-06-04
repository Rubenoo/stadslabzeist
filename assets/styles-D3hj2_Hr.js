import{p as o}from"./index-gA1qqV8N.js";const n=o("p")`
  font-size: 18px;
  white-space: pre-wrap;
  font-family: Neue Haas Medium;
  color: #1b3888;
  max-height: 350px;
  overflow-y: scroll;
  @media screen and (min-width: 992px) {
    font-size: 20px;
    padding-right: 15px;
    max-height: 100%;
    overflow-y: hidden;
  }
`,a=o("h1")`
  font-size: 58px;
  white-space: nowrap;
  color: #1b3888;
  text-align: center;
  @media screen and (min-width: 992px) {
    font-size: 100px;
    text-align: start;
  }
`,i=o("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3em;
  margin: 1em;
  aspect-ratio: 1/1;

  ${e=>e.backgroundcolor&&"box-shadow: "+e.backgroundcolor+" 0px 5px 15px;"}

  ${e=>e.backgroundcolor&&"border: 1px "+e.backgroundcolor+";"}

  ${e=>e.backgroundsvg&&"background-image: url(/img/svg/"+e.backgroundsvg+"); background-size: cover;"}
`,r=o("h3")`
  font-size: 30px;
  text-align: center;
  ${e=>e.textcolor?"color: "+e.textcolor+";":"color: #E4E4E4;"}
  @media screen and (min-width: 992px) {
    font-size: 40px;
  }
`;export{i as C,a as H,n as P,r as a};
