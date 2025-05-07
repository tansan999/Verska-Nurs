import React from "react";
import styled from "styled-components";

const DivINputTitle =styled.div`
 /* Group 2133 */
 width: 340px;
  height: 64px;

  /* border: 3px solid red; */
  display: flex;
  flex-direction: column;

  label {
    color: rgb(0, 0, 0);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    letter-spacing: 0%;
    text-align: left;
  }

  input {
    width: 340px;
    height: 39px;
    border-radius: 8px;
    background: rgb(255, 255, 255);
    color: rgb(34, 34, 34);
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: left;
    padding-left: 18px;
  }  
`


function InputTitle() {
  return (
    <DivINputTitle>
      <label htmlFor="">Количество</label>
      <input type="text" />
    </DivINputTitle>
  );
}

export default InputTitle;
