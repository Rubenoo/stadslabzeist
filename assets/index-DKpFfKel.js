const __vite__fileDeps=["assets/index-BjqcXKOv.js","assets/index-B2QrwdKY.js","assets/index-DUEfxN0n.css","assets/index-Ce9xTO3E.js","assets/index-Bx61OwOl.js","assets/react-fullpage-C-kSXwag.js","assets/index-C_Z4YxPs.js","assets/index-4b0bIB66.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a as t,_ as i,j as e,S as m,p as l}from"./index-B2QrwdKY.js";import{A as g,S as p,R as h}from"./react-fullpage-C-kSXwag.js";import{F as j}from"./index-hDBNcfAC.js";import{B as x}from"./index-Bx61OwOl.js";import{b as u}from"./styles-YHGAwr2Z.js";const v=t.lazy(()=>i(()=>import("./index-BjqcXKOv.js"),__vite__mapDeps([0,1,2,3,4,5]))),f=()=>e.jsx(v,{title:"",content:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"d-none d-lg-block text-start",children:e.jsx("h1",{style:{fontSize:"110px"},children:"DOE JE MEE? "})}),e.jsxs("div",{className:"d-lg-none d-block text-start",children:[e.jsx("h1",{style:{fontSize:"55px"},children:"DOE JE"}),e.jsx("h1",{style:{fontSize:"55px"},children:"MEE"})]}),e.jsx("div",{className:"d-flex justify-content-end mt-0 mt-lg-5 pt-0 pt-lg-5",children:e.jsx(x,{linkTo:"/zienwejedan",backgroundcolor:"#E4E4E4",textcolor:"#e30613",children:"WE ZIEN JE GRAAG!"})})]}),id:"doejemee",backgroundsvg:"Website-Achtergrond-rood.svg",fullwidth:!0,fullHeight:!0,button:""}),b=()=>e.jsxs("div",{className:"text-center position-relative",children:[e.jsx("img",{loading:"lazy",src:"/img/wiezijnwij_nieuw.jpg",style:{height:"100vh",width:"100%",objectFit:"cover"},alt:"wiezijnwij"}),e.jsx("img",{loading:"lazy",src:"/img/svg/Website-Achtergrond-blauw-transparant.svg",style:{height:"160vh",width:"100%",objectFit:"cover",position:"absolute",zIndex:0,top:0,left:0},alt:"wiezijnwij"}),e.jsxs("div",{className:"d-flex flex-column text-nowrap align-items-start",style:{position:"absolute",top:"65%",left:"50%",transform:"translate(-50%, -50%)"},children:[e.jsx(u,{children:"DIT ZIJN WIJ"}),e.jsx(g,{style:{bottom:"-150%",zIndex:0},onClick:()=>window.fullpage_api.moveSectionDown(),className:"d-flex align-items-center justify-content-center",children:e.jsx(m,{src:"scroll-down-white.svg",width:"80px",height:"80px"})})]})]}),w=l("a")`
  font-size: 17px;
  font-family: Neue Haas Bold;
  color: #e4e4e4;

  @media screen and (min-width: 992px) {
    font-size: 29px;
  }
`,_=l("p")`
  font-size: 16px;
  white-space: pre-wrap;
  font-family: Neue Haas Medium;
  color: #e4e4e4;

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`,k=t.lazy(()=>i(()=>import("./index-C_Z4YxPs.js"),__vite__mapDeps([6,1,2,3,4]))),s=({type:n,img:r,name:a,email:o,info:c,backgroundsvg:d})=>e.jsx(k,{type:n,title:"",content:e.jsx("img",{loading:"eager",src:r,style:{height:"100%",width:"100%",objectFit:"cover"},alt:a}),secondContent:e.jsxs(p,{top:"0",className:"h-100 d-flex flex-column align-items-start",children:[e.jsx(w,{className:"w-100",target:"_blank",href:"mailto: "+o,children:a}),e.jsx(_,{children:c})]}),icon:"product-launch.svg",id:"samen",backgroundcolor:"",backgroundsvg:d,fadeRight:n==="right",person:!0}),z=t.lazy(()=>i(()=>import("./index-B2QrwdKY.js").then(n=>n.ay),__vite__mapDeps([1,2]))),E=t.lazy(()=>i(()=>import("./index-4b0bIB66.js"),__vite__mapDeps([7,1,2]))),D=()=>{const[n,r]=t.useState(0);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{children:[e.jsx(E,{show:n>0}),e.jsx(h,{licenseKey:"8N0K9-BXM78-CKADI-YNQJ9-VEXHK",scrollingSpeed:1e3,scrollOverflow:!1,onLeave:(a,o)=>{r(o.index)},credits:{enabled:!1},render:()=>e.jsxs("div",{id:"fullpage-wrapper",children:[e.jsx("div",{className:"section vh-100",children:e.jsx(b,{})}),e.jsx("div",{className:"section vh-100",children:e.jsx(s,{type:"left",img:"/img/merel_portret.jpg",name:"Merel de Jong",email:"merel@stadslabzeist.nl",backgroundsvg:"Website-Achtergrond-merel-blauw.svg",info:`Zakelijk leider

Matchmaker / strateeg / social designer 
Super goed in plannetjes maken, kansen zien, mensen enthousiasmeren, praten en van niets iets maken.`})}),e.jsx("div",{className:"section vh-100",children:e.jsx(s,{type:"right",img:"/img/marloes_portret.jpg",name:"Marloes van Haaren",backgroundsvg:"Website-Achtergrond-rood.svg",email:"marloes@stadslabzeist.nl",info:`Projectmanager

Coach / maker / structuurdokter 
Super goed in de juiste vragen stellen, rust creëren, bergen werk verzetten, plannen en creatief zijn.`})}),e.jsx("div",{className:"section vh-100",children:e.jsx(s,{type:"left",img:"/img/emma_portret.jpg",name:"Emma Fijma",email:"emma@stadslabzeist.nl",backgroundsvg:"Website-Achtergrond-emma-blauw.svg",info:`Creatief leider

Kunstenaar / Grafisch ontwerper / maker 
Super goed in creatieve denkprocessen, creatieve vertaling van projecten en opdrachten en structuur aanbrengen.`})}),e.jsx("div",{className:"section vh-100",children:e.jsx(s,{type:"left",img:"/img/ollie_portret.jpg",name:"Ollie",backgroundsvg:"Website-Achtergrond-blauw.svg",email:"emma@stadslabzeist.nl",info:`Kantoorhond

Knuffelkont / grappenmaker 
Super goed in slapen, spelen, puberen, wandelen en lief zijn.`})}),e.jsx("div",{className:"section vh-100",children:e.jsx(f,{})})]})})]}),e.jsx(j,{show:n===6})]})};export{D as default};