import{p,j as o,L as u}from"./index-DkH261LZ.js";const a=p("button")`
  background: ${t=>t.backgroundcolor||"#1B3888"};
  color: ${t=>t.textcolor||"#E4E4E4"};
  font-weight: 700;
  border: ${t=>t.backgroundcolor||"#1B3888"};
  border-radius: 30px;
  padding: 13px 1rem;
  cursor: pointer;
  margin-top: 0.625rem;
  min-width: 120px;
  transition: all 0.3s ease-in-out;
  font-family: Neue Haas Bold;
  font-size: 16px;

  @media screen and (min-width: 992px) {
    font-size: 19px;
  }
  &:hover,
  &:active,
  &:focus {
    filter: brightness(80%);
  }
`,x=({backgroundcolor:t,textcolor:r,fixedWidth:n,children:e,onClick:s,linkTo:i})=>i?o.jsx(u,{to:i,children:o.jsx(a,{backgroundcolor:t,textcolor:r,fixedWidth:n,onClick:s,children:e})}):o.jsx(a,{backgroundcolor:t,textcolor:r,fixedWidth:n,onClick:s,children:e});export{x as B};
