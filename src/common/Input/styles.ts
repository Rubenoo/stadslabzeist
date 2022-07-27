import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const StyledInput = styled("input")`
  font-size: 0.875rem;
  font-family: Neue Haas Medium;
  color: #fff;
  background-color: rgb(27,56,136, 0.1);
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
