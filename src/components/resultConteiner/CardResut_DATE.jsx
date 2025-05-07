import React from "react";
import styled from "styled-components";

const Div_kub = styled.div`
  /* Rectangle 6 */
  width: 84px;
  height: 80px;

  box-sizing: border-box;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;

  background: rgb(42, 42, 42);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  p {
    color: rgb(255, 255, 255);
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0%;
    text-align: left;
  }
`;

export default function CardResut_DATE() {
  return (
    <Div_kub>
      <p>1111</p>
      <p>1111</p>
      <p>1111</p>
    </Div_kub>
  );
}
