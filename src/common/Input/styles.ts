import styled from "styled-components";

export const Container = styled("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const StyledInput = styled("input")`
  font-size: 0.875rem;
  font-family: Neue Haas Medium;
  color: #1B3888;
  background-color: rgb(27,56,136, 0.1);
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #1B3888;
    opacity: 1; /* Firefox */
  }a

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #1B3888;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #1B3888;
  }
  :focus {
    background-color: rgb(27,56,136, 0.3);
  }
`;
