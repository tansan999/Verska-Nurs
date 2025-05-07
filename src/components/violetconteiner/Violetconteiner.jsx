import React from "react";
import Button from "../../UI/button/Button";
import InputTitle from "../../UI/input/InputTitle";
import InputDate from "../../UI/input/InputDate";
import styled from "styled-components";
import Input from "../../UI/input/Input";

const ConteinerViolet = styled.div`
  width: 780px;
  height: 287px;
  border-radius: 12px;
  background: rgb(173, 155, 233);
  padding: 24px 40px 36px 40px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ConteinerVioletInput = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
const ConteinerVioletButton = styled.div`
  display: flex;
  gap: 14px;
`;

function Violetconteiner() {
  return (
    <ConteinerViolet>
      <div>
        <ConteinerVioletInput>
          <Input />
          <InputTitle />
        </ConteinerVioletInput>
        <InputDate />
      </div>
      <ConteinerVioletButton>
        <Button title="Отмена" />
        <Button title="Добавить расходы" />
      </ConteinerVioletButton>
    </ConteinerViolet>
  );
}

export default Violetconteiner;
