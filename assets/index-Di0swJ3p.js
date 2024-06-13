import{p as i,j as e,R as p,h as o,S as u}from"./index-CStlUwG6.js";import{F as f}from"./index-3lydrKrI.js";import{B as w}from"./index-D6wLlLtc.js";const b=i("section")`
  position: relative;
  padding: 10rem 8rem 10rem;
  display: flex;
  align-items: center;
  height: 100%;

  ${n=>n.backgroundcolor&&"background-color: "+n.backgroundcolor+";"}
  ${n=>n.backgroundsvg&&"background-image: url(/img/svg/"+n.backgroundsvg+"); background-size: cover;"}
  
  @media only screen and (max-width: 1024px) {
    padding: 8rem 2rem 6rem;
    min-height: 400px;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 2rem 3rem;
    min-height: 400px;
  }
`,k=i("p")`
  margin: 1.5rem 0 2rem 0;
  height: 100%;
`,y=i("div")`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 100%;
`,v=i("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,B=({icon:n,title:c,content:l,button:r,secondContent:a,id:m,backgroundcolor:h,backgroundsvg:g,titleSize:t,fadeRight:d,person:s})=>e.jsx(b,{backgroundsvg:g,backgroundcolor:h,children:e.jsx(f,{className:"w-100",direction:d?"right":"left",children:e.jsxs(p,{justify:s?"space-around":"space-between",align:s?"middle":"top",id:m,children:[e.jsx(o,{lg:{span:11,order:0},md:{span:11,order:0},sm:{span:12,order:0},xs:{span:24,order:1},children:a||e.jsx(u,{src:n,width:"100%",height:"100%"})}),e.jsx(o,{className:s?"d-flex align-items-center justify-content-center":"",lg:{span:11,order:1},md:{span:11,order:1},sm:{span:11,order:1},xs:{span:24,order:0},children:e.jsxs(y,{children:[e.jsx("h6",{style:t?{fontSize:t}:{},children:c}),e.jsx(k,{children:l}),e.jsx(v,{children:typeof r=="object"&&r.map((x,j)=>e.jsx(w,{backgroundcolor:x.color,fixedWidth:!0,children:x.title},j))})]})})]})})}),C=i("section")`
  position: relative;
  padding: 10rem 8rem 10rem;
  display: flex;
  align-items: center;
  height: 100%;

  ${n=>n.backgroundcolor&&"background-color: "+n.backgroundcolor+";"}
  ${n=>n.backgroundsvg&&"background-image: url(/img/svg/"+n.backgroundsvg+"); background-size: cover;"}

  @media only screen and (max-width: 1024px) {
    padding: 8rem 2rem 6rem;
    min-height: 400px;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 2rem 3rem;
    min-height: 400px;
  }
`;i("p")`
  font-size: 16px;
  font-family: Neue Haas Medium;

  @media screen and (min-width: 992px) {
    font-size: 25px;
  }
`;const $=i("p")`
  margin: 1.5rem 0 2rem 0;
  height: 100%;
`,N=i("div")`
  position: relative;
  width: 100%;
  max-width: 540px;
  height: 100%;
`,R=({title:n,content:c,icon:l,secondContent:r,id:a,backgroundcolor:m,backgroundsvg:h,fadeRight:g,titleSize:t,person:d,button:s})=>e.jsxs(C,{backgroundsvg:h,backgroundcolor:m,children:[e.jsx(f,{className:"w-100",direction:g?"right":"left",children:e.jsxs(p,{justify:d?"space-around":"space-between",align:d?"middle":"top",id:a,children:[e.jsx(o,{className:d?"d-flex align-items-center justify-content-center":"",lg:11,md:11,sm:11,xs:24,children:e.jsxs(N,{children:[e.jsx("h6",{style:t?{fontSize:t}:{},children:n}),e.jsx($,{children:c})]})}),e.jsx(o,{lg:11,md:11,sm:12,xs:24,children:r||e.jsx(u,{src:l,width:"100%",height:"100%"})})]})}),s]}),F=n=>n.type==="left"?e.jsx(B,{...n}):n.type==="right"?e.jsx(R,{...n}):null;export{F as default};
