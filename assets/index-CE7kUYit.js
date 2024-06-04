import{p as i,j as e,a3 as o,S as c}from"./index-gA1qqV8N.js";const s=i("a")`
  font-family: "Neue Haas Bold";
  color: #1b3888;
`,d=i("section")`
  background: #e4e4e4;
  margin-right: auto;
  margin-left: auto;
  font-family: "Neue Haas Bold" !important;
  width: 100%;
  bottom: 0;
  position: absolute;
  transition: all 0.3s ease-in-out;
  visibility: ${t=>t.show?"visible":"hidden"};
  opacity: ${t=>t.show?"1":"0"};
  @media only screen and (max-width: 1200px) {
    ${t=>t.relative?"position: relative;":""};
  }
`,x=i("div")`
  width: 100%;
  display: flex;
  justify-content: end;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`,m=({show:t,relative:l})=>{const a=({href:r,src:n})=>e.jsx("a",{href:r,target:"_blank",rel:"noopener noreferrer","aria-label":n,className:"pe-3",children:e.jsx(c,{src:n,width:"50px",height:"50px"})},n);return e.jsx(e.Fragment,{children:e.jsx(d,{show:t,relative:l,children:e.jsxs(o,{border:!0,children:[e.jsxs("div",{className:"d-flex flex-row justify-content-between align-items-center py-2",children:[e.jsx("div",{className:"w-100"}),e.jsx("div",{className:"w-100 text-nowrap text-center d-lg-flex flex-column align-items-center justify-content-center d-none",children:e.jsxs("div",{className:"d-none d-lg-block",children:[e.jsx("div",{children:e.jsx(s,{className:"w-100",style:{fontSize:"19px"},target:"_blank",href:"http://maps.google.nl/?q=Weteringlaan+1,+3732+HZ+De+Bilt",children:"WETERINGLAAN 1, 3732 HZ DE BILT"})}),e.jsx("div",{children:e.jsx(s,{className:"w-100",style:{fontSize:"19px"},target:"_blank",href:"mailto: WIJZIJN@STADSLABZEIST.NL",children:"WIJZIJN@STADSLABZEIST.NL"})})]})}),e.jsxs(x,{className:"w-100",children:[e.jsx(a,{href:"https://www.instagram.com/stadslabzeist/",src:"instagram.svg"}),e.jsx(a,{href:"https://www.linkedin.com/company/stadslab-zeist/",src:"linkedin.svg"})]})]}),e.jsxs("div",{className:"d-lg-none d-block text-center pb-2",children:[e.jsx("div",{children:e.jsx(s,{style:{fontSize:"13px"},className:"w-100",target:"_blank",href:"http://maps.google.nl/?q=Weteringlaan+1,+3732+HZ+De+Bilt",children:"WETERINGLAAN 1, 3732 HZ DE BILT"})}),e.jsx("div",{children:e.jsx(s,{style:{fontSize:"13px"},className:"w-100",target:"_blank",href:"mailto: WIJZIJN@STADSLABZEIST.NL",children:"WIJZIJN@STADSLABZEIST.NL"})})]})]})})})};export{m as F};
