import React from "react";
import styled from "styled-components";

const DivBtn = styled.div`
  display: flex;
  gap: 14px;
  button {
    /* Frame 3 */
    position: relative;
    min-width: 97px;
    height: 51px;
    /* Автолейаут */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10;
    padding: 16px 18px 16px 18px;

    border-radius: 10px;

    /* dark purple */
    background: rgb(74, 2, 107);
    color: rgb(255, 255, 255);
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0%;
    text-align: left;
    
  }
`;

function Button({ title }) {
  return (
    <DivBtn>
      <button>{title}</button>
    </DivBtn>
  );
}

export default Button;
