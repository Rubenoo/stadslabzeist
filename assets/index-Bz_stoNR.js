import{p as r,j as i,S as t}from"./index-InUPUYmN.js";const e=r("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 50%;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${o=>o.show?"visible":"hidden"};
  opacity: ${o=>o.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    background: rgb(241, 242, 243, 0.5);
  }
`,n=o=>i.jsx(e,{onClick:()=>window.fullpage_api.moveTo(1),show:o.show,children:i.jsx(t,{src:"scroll-top.svg",width:"20px",height:"20px"})});export{n as default};
