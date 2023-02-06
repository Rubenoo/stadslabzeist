import styled from "styled-components";

export const StyledContainer = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`;

export const StyledTextArea = styled("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  font-family: Neue Haas Medium;
  color: #fff;
  background-color:rgb(27,56,136, 0.1);
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }a

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fff;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #fff;
  }
  :focus {
    background-color: rgb(27,56,136, 0.3);
  }
`;

export const Label = styled("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
  font-family: Neue Haas Medium;
  text-transform: uppercase;
  color: #fff;
`;
