import{p as t,j as i,S as e}from"./index-CStlUwG6.js";const r=t("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 5%;
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
`,s=o=>i.jsx(r,{onClick:()=>window.fullpage_api.moveTo(6),show:o.show,children:i.jsx(e,{src:"scroll-down-double.svg",width:"20px",height:"20px"})});export{s as default};
