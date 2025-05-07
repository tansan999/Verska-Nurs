import React from "react";
import styled from "styled-components";

const Divdate = styled.div`
 width: 340px;
  height: 64px;

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

function InputDate() {
  return (
    <Divdate>
      <label htmlFor="">Дотировать</label>
      <input type="date" />
    </Divdate>
  );
}

export default InputDate;
