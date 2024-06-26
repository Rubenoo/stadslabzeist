import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 8em 0 100px 0;
  min-height: 100vh;
  margin: 0em 1em 0em 5em;
  @media only screen and (max-width: 1200px) {
    height: 100%;
    margin: 0em 1em 2em 1em;
    padding: 4em 0 125px 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 700px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
