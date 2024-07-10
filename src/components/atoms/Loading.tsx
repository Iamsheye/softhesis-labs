import styled from "styled-components";

const Loading = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    box-sizing: border-box;
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6.4px solid #0070f3;
    border-color: #0070f3 transparent #0070f3 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
