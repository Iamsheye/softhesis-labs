import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 8px 12px;
  font-size: 0.875rem;
  font-family: "Inter", sans-serif;
  line-height: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: rgb(255 255 255 / 0.05);

  &:focus {
    outline: 1.5px solid #fff;
    outline-offset: 1.5px;
    outline-color: #0070f3;
  }
`;

export default Input;
